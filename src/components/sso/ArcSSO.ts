import { css, html, LitElement, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import * as Msal from '@azure/msal-browser';
import { isAfter } from 'date-fns';
import { InteractionType, PublicClientApplication, AccountInfo } from "@azure/msal-browser";
import { Configuration } from "@azure/msal-browser/dist/config/Configuration";
import { SilentRequest } from "@azure/msal-browser/dist/request/SilentRequest";
import componentStyles from '../../styles/component.styles.js';

export default class ArcSSO extends LitElement {
  static tag = 'arc-sso';

  static styles = [
    componentStyles,
    css``,
  ];

  @state()
  private _isAuthenticated: boolean;

  @state()
  private msalConfig: Configuration;

  @state()
  private msalInstance: PublicClientApplication;

  @property({ attribute: 'client-id', type: String }) clientId: string;

  @property({ attribute: 'tenant-id', type: String }) tenantId: string;

  @property({ type: InteractionType }) interaction: InteractionType.Popup;

  @property() scopes: [];

  /*
  openid - By using this permission, an app can receive a unique identifier for the user in the form of the sub claim.
  The permission also gives the app access to the UserInfo endpoint.
  The `openid` scope can be used at the Microsoft identity platform token endpoint to acquire ID tokens.
  The app can use these tokens for authentication.

  profile - The `profile` scope can be used with the openid scope and any other scope.
  It gives the app access to a large amount of information about the user.
  The information it can access includes, but isn't limited to, the user's given name, surname, preferred username, and object ID.
  */
  private loginRequest  = {
    scopes: ['openid', 'profile']
  }

  connectedCallback() {
    super.connectedCallback();

    /* The default Azure MSAL configuration */
    this.msalConfig = {
      auth: {
        clientId: this.clientId || '',
        authority: `https://login.microsoftonline.com/${this.tenantId ? this.tenantId : 'common/'}`
      },
      cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: false
      }
    }

    /* The MSAL instance */
    this.msalInstance = new Msal.PublicClientApplication(this.msalConfig)

    /* Additional scopes (permissions) */
    if (this.scopes && this.scopes.length > 0) {
      [...this.scopes].forEach(scope => this.loginRequest.scopes.push(scope));
    }
  }

  firstUpdated() {
    this._isAuthenticated = this.isAuthenticated();
  }

  /* Request the Login dialog response */
  private async getLoginPopupResponse() {
    await this.msalInstance.loginPopup();
  }

  /* Acquire the Azure token and store them in the localStorage */
  private async acquireTokenSilentAndSetLocal(accountInfo: AccountInfo) {
    const tokenRequest: SilentRequest = {
      account: accountInfo,
      scopes: this.loginRequest.scopes,
    }
    const { accessToken, idToken } = await this.msalInstance.acquireTokenSilent(tokenRequest);
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('idToken', idToken);
  };

  async login() {
    await this.getLoginPopupResponse();

    const accountInfo = this.getAccount();

    if (accountInfo) {
      await this.acquireTokenSilentAndSetLocal(accountInfo);
      this._isAuthenticated = this.isAuthenticated();
    }
  }

  async logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('idToken');
    localStorage.removeItem('expiration');
    await this.msalInstance.logoutRedirect();
  }

  /* Retrieve the account */
  getAccount() {
    return this.msalInstance.getAllAccounts()[0];
  }

  /* Method to check whether the user is authenticated */
  isAuthenticated() {
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

  render() {
    const account = this.getAccount();

    return html`
      <div id='main'>
        ${account ? html`
          <p>${account.homeAccountId}</p>
          <p>${account.environment}</p>
          <p>${account.tenantId}</p>
          <p>${account.username}</p>
          <p>${account.localAccountId}</p>
          <p>${account.name}</p>
          <p>${account.idTokenClaims}</p>
        ` : nothing}
        <slot name="trigger">
          <arc-button slot="trigger" @click=${this._isAuthenticated ? this.logout : this.login}>${this._isAuthenticated ? 'Logout' : 'Login'}</arc-button>
        </slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-sso': ArcSSO;
  }
}
