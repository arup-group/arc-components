import { css, html, LitElement, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import * as Msal from '@azure/msal-browser';
import { AccountInfo, PublicClientApplication } from '@azure/msal-browser';
import { isAfter } from 'date-fns';
import { Configuration } from '@azure/msal-browser/dist/config/Configuration';
import { SilentRequest } from '@azure/msal-browser/dist/request/SilentRequest';
import { emit } from '../../internal/event.js';
import { watch } from '../../internal/watch.js';
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
        align-items: center;
      }

      #main, #userMenu {
        height: 100%;
      }
    `,
  ];

  @state()
  private _isAuth: boolean;

  @state()
  private _msalInstance: PublicClientApplication;

  /* The id of the application. This value can be found on the Azure AD portal. */
  @property({ attribute: 'client-id', type: String }) clientId: string;

  /* Required for single-tenant applications. This value can be found on the Azure AD portal. */
  @property({ attribute: 'tenant-id', type: String }) tenantId: string;

  /* The location where the authorization server sends the user once the app has been successfully authorized and granted an authorization code or access token. */
  @property({ attribute: 'redirect-uri', type: String }) redirectUri: string;

  @property({
    type: Array,
    converter: (attrValue: string | null) => {
      if (attrValue) {
        const stringArray = attrValue.split((/[ ,]+/));
        if (Array.isArray(stringArray)) {
          return stringArray
        } return [];
      } return [];
    }
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

  connectedCallback() {
    super.connectedCallback();

    this._msalInstance = this._initMsal();

    /* Add additional scopes (permissions) */
    if (this.scopes && this.scopes.length > 0) {
      this.loginRequest.scopes = this.loginRequest.scopes.concat(this.scopes);
    }

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

  /* Method to check whether the user is authenticated */
  private _isAuthenticated() {
    const accountInfo = this.getAccount();
    const accessToken = localStorage.getItem('accessToken');
    const idToken = localStorage.getItem('idToken');

    if (!accountInfo) {
      return false;
    }

    const expiration: number = (accountInfo.idTokenClaims as any).exp;
    const expiryDate = expiration ? new Date(expiration * 1000) : new Date(0);
    const isExpired = !isAfter(expiryDate, new Date());

    return !!(accessToken && idToken && !isExpired);
  }

  /* Acquire the Azure tokens and store them in the localStorage */
  private async _acquireTokenSilentAndSetLocal(accountInfo: AccountInfo) {
    const tokenRequest: SilentRequest = {
      account: accountInfo,
      scopes: this.loginRequest.scopes,
    }
    const { accessToken, idToken } = await this._msalInstance.acquireTokenSilent(tokenRequest);
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('idToken', idToken);
  }

  async signIn() {
    await this._msalInstance.loginPopup(this.loginRequest);

    const accountInfo = this.getAccount();

    if (accountInfo) {
      await this._acquireTokenSilentAndSetLocal(accountInfo);
      this._isAuth = this._isAuthenticated();
    }
  }

  async signOut() {
    const logoutRequest = {
      account: this.getAccount()
    };

    /* Clear the localStorage */
    localStorage.removeItem('accessToken');
    localStorage.removeItem('idToken');
    localStorage.removeItem('expiration');

    await this._msalInstance.logoutRedirect(logoutRequest);
  }

  getAccount() {
    return this._msalInstance.getAllAccounts()[0] as AccountInfo;
  }

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
