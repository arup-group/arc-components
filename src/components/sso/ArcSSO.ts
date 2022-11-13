import { html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { until } from 'lit/directives/until.js';
import * as Msal from '@azure/msal-browser';
import { AccountInfo, PublicClientApplication, EventType } from '@azure/msal-browser';
import { Configuration } from '@azure/msal-browser/dist/config/Configuration';
import { emit } from '../../internal/event.js';
import { watch } from '../../internal/watch.js';
import { stringToArray } from '../../internal/string.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import { FLOATING_PLACEMENTS } from '../../internal/constants/placementConstants.js';
// @ts-ignore
import componentStyles from '../../styles/component.styles.css.js';
// @ts-ignore
import styles from './arc-sso.styles.css.js';
import '../button/arc-button.js';
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
  /** @internal */
  static tag = 'arc-sso';

  static styles = [componentStyles, styles];

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

  /** @internal - State that keeps track of the user avatar. */
  @state() private _avatar: string;

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

    /* c8 ignore next 3 */
    if (this._isAuth) {
      this._avatar = await this.getAvatar();
    }
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
    this._isAuth = !!this.getAccount();
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

    /* c8 ignore next 3 */
    return new Msal.PublicClientApplication(msalConfig);
  }

  private _getAccessToken() {
    const account = this.getAccount();

    const accessTokenRequest = {
      account,
      scopes: this.loginRequest.scopes,
    };

    /* c8 ignore next 5 */
    return account
      ? this._msalInstance.acquireTokenSilent(accessTokenRequest).then(resp => resp.accessToken)
      : undefined;
  }

  /* c8 ignore next 19 */
  signIn() {
    this._msalInstance.addEventCallback(event => {
      if (event.eventType === EventType.LOGIN_SUCCESS && !!event.payload) {
        this._msalInstance.setActiveAccount(event.payload as AccountInfo);
        this._isAuth = true;
      }
    });

    this._msalInstance.handleRedirectPromise().then(() => {
      /* Check if user signed in */
      if (!this.getAccount()) {
        this._msalInstance.loginPopup(this.loginRequest);
      }
    });
  }

  /* c8 ignore next 4 */
  signOut() {
    this._msalInstance.logoutRedirect();
  }

  getAccount() {
    return this._msalInstance.getAllAccounts()[0] as AccountInfo;
  }

  async getAvatar() {
    const token = await this._getAccessToken();

    /* c8 ignore next 9 */
    return token
      ? fetch('https://graph.microsoft.com/v1.0/me/photos/48x48/$value', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'image/jpg',
          },
        })
          .then(resp => resp.blob())
          .then(resp => URL.createObjectURL(resp))
      : '';
  }

  protected render() {
    const { name } = this.getAccount() || {};

    return html`
      <div id="main">
        <slot name="login" ?hidden=${this._isAuth}>
          <arc-button type="tab" @click=${this.signIn}>Login</arc-button>
        </slot>
        <slot name="logout" ?hidden=${!this._isAuth}>
          <arc-dropdown id="userMenu" placement=${FLOATING_PLACEMENTS['bottom-end']} hoist>
            <arc-button id="desktopTrigger" slot="trigger" type="tab">
              ${name}
              <arc-avatar slot="suffix" name=${name} image=${until(this._avatar, '')} label="User avatar"></arc-avatar>
            </arc-button>
            <arc-avatar
              id="mobileTrigger"
              slot="trigger"
              image=${until(this._avatar, '')}
              name=${name}
              label="User avatar"
            ></arc-avatar>
            <arc-menu>
              <arc-menu-item @click=${this.signOut}>Logout</arc-menu-item>
            </arc-menu>
          </arc-dropdown>
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
