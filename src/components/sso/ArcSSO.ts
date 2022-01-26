import { css, html, LitElement, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import * as Msal from '@azure/msal-browser';
import { AccountInfo, PublicClientApplication } from '@azure/msal-browser';
import { Configuration } from '@azure/msal-browser/dist/config/Configuration';
import { isAfter } from 'date-fns';
import { emit } from '../../internal/event.js';
import { watch } from '../../internal/watch.js';
import { stringToArray } from '../../internal/string.js';
import componentStyles from '../../styles/component.styles.js';

import '../dropdown/arc-dropdown.js';
import '../button/arc-button.js';
import '../menu/arc-menu.js';
import '../menu-item/arc-menu-item.js';

export default class ArcSSO extends LitElement {
  static tag = 'arc-sso';

  static styles = [
    componentStyles,
    css`
      :host {
        display: inline-flex;
        width: auto;
      }

      #main {
        display: inline-flex;
      }
    `,
  ];

  /*
  openid - By using this permission, an app can receive a unique identifier for the user in the form of the sub claim.
  The permission also gives the app access to the UserInfo endpoint.
  The `openid` scope can be used at the Microsoft identity platform token endpoint to acquire ID tokens.
  The app can use these tokens for authentication.

  profile - The `profile` scope can be used with the openid scope and any other scope.
  It gives the app access to a large amount of information about the user.
  The information it can access includes, but isn't limited to, the user's given name, surname, preferred username, and object ID.

  User.Read - The User.Read permission gives access to the sub claim.
  It allows the client or app to correctly identify the user over time and access rudimentary user information.
  */
  private loginRequest = {
    scopes: ['openid', 'profile', 'User.Read']
  }

  @state()
  private _msalInstance: PublicClientApplication;

  @state()
  private _isAuth: boolean;

  /* The id of the application. This value can be found on the Azure AD portal. */
  @property({ attribute: 'client-id', type: String }) clientId: string;

  /* Required for single-tenant applications. This value can be found on the Azure AD portal. */
  @property({ attribute: 'tenant-id', type: String }) tenantId: string;

  /* The location where the authorization server sends the user once the app has been successfully authorized and granted an authorization code or access token. */
  @property({ attribute: 'redirect-uri', type: String }) redirectUri: string;

  /* Additional scopes (permissions) */
  @property({
    type: Array,
    converter: (attrValue: string | null) => attrValue ? stringToArray(attrValue) : []
  }) scopes: string;

  @watch('_isAuth')
  async handleAuthChange() {
    const options = {
      detail: {
        authenticated: this._isAuth,
        account: this.getAccount(),
      },
      bubbles: true,
      composed: true,
    }
    emit(this, 'arc-auth', options)
  }

  connectedCallback() {
    super.connectedCallback();

    /* Initialize the MSAL authentication context */
    this._msalInstance = this._initMsal();

    /* Add additional scopes (permissions) */
    if (this.scopes && this.scopes.length > 0) {
      this.loginRequest.scopes = this.loginRequest.scopes.concat(this.scopes);
    }

    /* Update the _isAuth state */
    this._isAuth = this._isAuthenticated();
  }

  /* Initialize the MSAL authentication context */
  private _initMsal() {
    const msalConfig: Configuration = {
      auth: {
        clientId: this.clientId,
        authority: `https://login.microsoftonline.com/${this.tenantId ? this.tenantId : 'common/'}`,
        redirectUri: this.redirectUri,
      },
      cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: false
      }
    }

    return new Msal.PublicClientApplication(msalConfig)
  }

  /* c8 ignore next 11 */
  /* Method to check whether the user is authenticated */
  private _isAuthenticated() {
    const accountInfo = this.getAccount();

    if (!accountInfo) {
      return false;
    }

    return !this.isExpired(accountInfo);
  }

  /* c8 ignore next 7 */
  async signIn() {
    await this._msalInstance.loginPopup(this.loginRequest);

    /* Set the _isAuth state to re-render the component */
    this._isAuth = this._isAuthenticated();
  }

  /* c8 ignore next 6 */
  async signOut() {
    const logoutRequest = {
      account: this.getAccount()
    };
    await this._msalInstance.logoutRedirect(logoutRequest);
  }

  /* Retrieve the signed in account */
  getAccount() {
    return this._msalInstance.getAllAccounts()[0] as AccountInfo;
  }

  /* Check whether the token of the signed in account is expired */
  isExpired = (accountInfo: AccountInfo) => {
    const expiration: number = (accountInfo.idTokenClaims as any).exp;
    const expiryDate = expiration ? new Date(expiration * 1000) : new Date(0);

    return !isAfter(expiryDate, new Date());
  }

  /* c8 ignore next 19 */
  render() {
    return html`
      <div id='main'>
        ${this._isAuth ? html`
          <slot name="logout">
            <arc-dropdown id="userMenu" hoist>
              <arc-button slot="trigger" type="tab">${this.getAccount().username}</arc-button>
              <arc-menu>
                <arc-menu-item @click=${this.signOut}>Logout</arc-menu-item>
              </arc-menu>
            </arc-dropdown>
          </slot>
        ` : nothing}
        ${!this._isAuth? html`
          <slot name="login">
            <arc-button type="tab" @click=${this.signIn}>Login</arc-button>
          </slot>
        ` : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-sso': ArcSSO;
  }
}
