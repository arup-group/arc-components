import { css, html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import * as Msal from '@azure/msal-browser';
import { AccountInfo, PublicClientApplication } from '@azure/msal-browser';
import { Configuration } from '@azure/msal-browser/dist/config/Configuration';
import { emit } from '../../internal/event.js';
import { watch } from '../../internal/watch.js';
import { stringToArray } from '../../internal/string.js';
import { isExpired } from '../../internal/auth.js';
import { mobileBreakpoint } from '../../internal/preferences.js';
import componentStyles from '../../styles/component.styles.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import { DROPDOWN_PLACEMENTS } from '../dropdown/constants/DropdownConstants.js';
import '../button/arc-button.js';
import '../icon-button/arc-icon-button.js';
import '../avatar/arc-avatar.js';
import '../dropdown/arc-dropdown.js';
import '../menu/arc-menu.js';
import '../menu-item/arc-menu-item.js';

/**
 * @slot login - Used to overwrite the default login slot.
 * @slot logout - Used to overwrite the default logout slot.
 *
 * @event arc-auth - Emitted when the internal authentication state of the component changes.
 */
export default class ArcSSO extends LitElement {
  static tag = 'arc-sso';

  static styles = [
    componentStyles,
    css`
      :host,
      #main {
        display: inline-flex;
      }

      #desktopTrigger {
        display: none;
      }

      arc-avatar {
        --size: 1.5rem;
        cursor: pointer;
      }

      /* Medium devices and up. */
      @media (min-width: ${mobileBreakpoint}rem) {
        #main {
          border-left: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
          border-right: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
        }

        #mobileTrigger {
          display: none;
        }

        #desktopTrigger {
          display: initial;
        }
      }
    `,
  ];

  /** @internal
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
    scopes: ['openid', 'profile', 'User.Read'],
  };

  /** @internal - Reference to the MSAL instance. */
  private _msalInstance: PublicClientApplication;

  /** @internal - State that keeps track of the auth status of the user. */
  @state() private _isAuth: boolean = false;

  /** The id of the application. This value can be found on the Azure AD portal. */
  @property({ type: String, attribute: 'client-id' }) clientId: string;

  /** Identifies which Azure AD instance the application sits under. The default `common` value is used for multi-tenant applications and applications allowing personal accounts (not B2C). If your application audience is single-tenant, you must provide this property. This value can be found on the Azure AD portal. */
  @property({ type: String, attribute: 'tenant-id' }) tenantId: string;

  /** The location where the authorization server sends the user once the app has been successfully authorized and granted an authorization code or access token. This url needs to be specified in the component and within the Authentication tab on the Azure AD portal. */
  @property({ type: String, attribute: 'redirect-uri' }) redirectUri: string;

  /** A comma separated string that allows for additional permissions on how your app must interact with the Microsoft identity platform. More about this can be found on https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent. */
  @property({
    type: Array,
    converter: (attrValue: string | null) => (attrValue ? stringToArray(attrValue) : []),
  })
  scopes: string;

  @watch('_isAuth')
  async handleAuthChange() {
    emit(this, ARC_EVENTS.auth, {
      detail: {
        authenticated: this._isAuth,
        account: this.getAccount(),
      },
    });
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
        storeAuthStateInCookie: false,
      },
    };

    return new Msal.PublicClientApplication(msalConfig);
  }

  /* Check whether the user is authenticated */
  /* c8 ignore next 8 */
  private _isAuthenticated() {
    if (!this.getAccount()) {
      return false;
    }

    return !isExpired(this.getAccount());
  }

  /* c8 ignore next 7 */
  async signIn() {
    await this._msalInstance.loginPopup(this.loginRequest);

    /* Set the _isAuth state to re-render the component */
    this._isAuth = this._isAuthenticated();
  }

  /* c8 ignore next 4 */
  signOut() {
    this._msalInstance.logoutRedirect();
  }

  /* Retrieve the signed in account */
  getAccount() {
    return this._msalInstance.getAllAccounts()[0] as AccountInfo;
  }

  /* c8 ignore next 43 */
  render() {
    const account = this.getAccount();

    return html`
      <div id="main">
        ${this._isAuth
          ? html`
              <slot name="logout">
                <arc-dropdown id="userMenu" placement=${DROPDOWN_PLACEMENTS['bottom-end']} hoist>
                  ${account && account.name
                    ? html`
                        <arc-button id="desktopTrigger" slot="trigger" type="tab">
                          ${account.name}
                          <arc-avatar slot="suffix"></arc-avatar>
                        </arc-button>
                        <arc-avatar
                          id="mobileTrigger"
                          slot="trigger"
                          name=${account.name}
                          label="Avatar of ${account.name}"
                        ></arc-avatar>
                      `
                    : html` <arc-avatar id="mobileTrigger" slot="trigger" label="User avatar"></arc-avatar> `}
                  <arc-menu>
                    <arc-menu-item @click=${this.signOut}>Logout</arc-menu-item>
                  </arc-menu>
                </arc-dropdown>
              </slot>
            `
          : html`
              <slot name="login">
                <arc-button type="tab" @click=${this.signIn}>Login</arc-button>
              </slot>
            `}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-sso': ArcSSO;
  }
}
