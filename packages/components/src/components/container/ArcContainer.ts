import { html, isServer, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { when } from 'lit/directives/when.js';
import { watch } from '../../internal/watch.js';

import {
  CONTAINER_THEME_PREFERENCES,
  ContainerThemePreference,
  NotificationConfiguration,
  ActionCallback,
  FlyerPlacement,
  AlertConfiguration,
  FLYER_PLACEMENT,
} from './constants/ContainerConstants.js';

import ArcNavbar from '../navbar/ArcNavbar.js';
import ArcBottombar from '../bottombar/ArcBottombar.js';
import ArcAccessibility from '../accessibility/ArcAccessibility.js';
import ArcFlyer from './ArcFlyer.js';
import ArcOverlay from './ArcOverlay.js';
import styles from './arc-container.styles.js';

import '../navbar/arc-navbar.js';
import '../accessibility/arc-accessibility.js';
import '../bottombar/arc-bottombar.js';
import './ArcNotification.js';
import './ArcOverlay.js';
import './ArcAlert.js';

/**
 * @slot default - The container's content.
 * @slot nav - The container's navbar.
 * @slot accessibility - The accessibility drawer.
 * @slot side - The container's sidebar.
 * @slot bottom - The container's bottom bar.
 * @slot banner - The container's banner.
 *
 * @cssproperty --arc-banner-background - Set the background color of the banner.
 * @cssproperty --arc-banner-color - Set the font color of the banner.
 *
 * @ssr - True
 */
export default class ArcContainer extends LitElement {
  @property({ type: String }) title = '';

  /** @internal */
  static tag = 'arc-container';

  /** @internal */
  static styles = styles;

  /** @internal */
  @query('#main') container: HTMLElement;

  /** @internal */
  @query('#accessibility') accessibility: ArcAccessibility;

  /** @internal */
  @query('arc-overlay') private overlay: ArcOverlay;

  /** @internal - Reference to the preferred theme set by the app. */
  private _appPreferredTheme: ContainerThemePreference;

  /** Set the starting theme for the container. Once loaded, the built-in accessibility will be responsible for this property. */
  @property({ type: String, reflect: true }) theme: ContainerThemePreference =
    CONTAINER_THEME_PREFERENCES.auto;

  /** Set the container to fullscreen mode. This hides the padding, margin and gap values. */
  @property({ type: Boolean }) fullscreen: boolean = false;

  /** Set the banner text. This enables the sticky banner to be rendered above the container. */
  @property() banner: string | boolean = false;

  /** @bata Set the placement of the notification flyer. */
  @property() flyerPlacement: FlyerPlacement = FLYER_PLACEMENT['bottom-end'];

  @watch('theme')
  handleThemeChange() {
    /* If the provided theme is not valid, force auto theme */
    if (!(this.theme in CONTAINER_THEME_PREFERENCES)) {
      this.theme = CONTAINER_THEME_PREFERENCES.auto;
    }
  }

  connectedCallback() {
    super.connectedCallback();

    /* If the app provided theme is not valid, force auto theme */
    if (!(this.theme in CONTAINER_THEME_PREFERENCES)) {
      this.theme = CONTAINER_THEME_PREFERENCES.auto;
    }
    /* Store a reference of the app-defined theme */
    this._appPreferredTheme = this.theme;
  }

  /* Update the theme when the @arc-accessibility-change event emits */
  handleAccessibilityChange(event: CustomEvent) {
    const { preferences } = event.detail;
    const { theme }: { theme: ContainerThemePreference } = preferences;
    /* Make sure that the new theme is valid */
    if (!!theme && theme in CONTAINER_THEME_PREFERENCES) {
      this.theme = theme;
      return;
    }

    /* When the preferences are reset, restore the appPreferredTheme instead */
    this.theme = this._appPreferredTheme;
  }

  /* Trigger the show event of the arc-accessibility component */
  showAccessibility() {
    this.accessibility.open = true;
  }

  /** @bata Open a notification. */
  public dispatchNotification(
    config: NotificationConfiguration,
  ): [ActionCallback, ActionCallback] {
    if (isServer) {
      return [() => void 0, () => void 0];
    }

    /* ensure that both the title and message have a minimum length */
    const minLen = 3;
    if (config.title.length < minLen || config.message.length < minLen) {
      console.warn(
        'Notification title and message must be at least 3 characters long, the notification will not be dispatched.',
      );
      return [() => void 0, () => void 0];
    }

    /* ensure that the arc flyer is present */
    let flyer = this.querySelector(ArcFlyer.tag) as ArcFlyer;
    if (flyer === null) {
      flyer = document.createElement(ArcFlyer.tag) as ArcFlyer;
      flyer.placement = this.flyerPlacement;
      this.appendChild(flyer);
    }

    const closeNotificationCallback = flyer.dispatchNotification(config);

    /* if the navbar and bottombar exist, add the notification to both */
    const navbar = this.querySelector(ArcNavbar.tag) as ArcNavbar;
    const bottombar = this.querySelector(ArcBottombar.tag) as ArcBottombar;
    const removeNotificationCallback = () => {
      /* remove the notification from the navbar and bottombar */
      if (navbar !== null) {
        navbar.notifications = navbar.notifications.filter(
          (n) => n[0] !== config,
        );
      }
      if (bottombar !== null) {
        bottombar.notifications = bottombar.notifications.filter(
          (n) => n[0] !== config,
        );
      }
      closeNotificationCallback();
    };
    if (navbar !== null) {
      const notifications: Array<[NotificationConfiguration, ActionCallback]> =
        [...navbar.notifications, [config, removeNotificationCallback]];
      navbar.notifications = notifications;
    }
    if (bottombar !== null) {
      const notifications: Array<[NotificationConfiguration, ActionCallback]> =
        [...bottombar.notifications, [config, removeNotificationCallback]];
      bottombar.notifications = notifications;
    }

    return [closeNotificationCallback, removeNotificationCallback];
  }

  /* @bata Open an `ArcAlert` with the given configuration */
  dispatchAlert(config: AlertConfiguration): ActionCallback {
    if (isServer) return () => void 0;

    /* if the overlay does not exist, create it */
    if (!this.overlay) {
      const overlay = document.createElement('arc-overlay') as ArcOverlay;
      this.appendChild(overlay);
      return overlay.dispatchAlert(config);
    }

    return this.overlay.dispatchAlert(config);
  }

  protected render() {
    const banner = html`
      <div class="banner">
        ${when(
          typeof this.banner === 'string',
          () => html`<span>${this.banner}</span>`,
          () => html`<slot name="banner"></slot>`,
        )}
      </div>
    `;

    return html`
      ${when(this.banner, () => banner)}
      <div id="main">
        <slot name="nav" @arc-show-accessibility=${this.showAccessibility}>
          <arc-navbar @arc-show-accessibility=${this.showAccessibility} />
        </slot>

        <div
          id="container"
          class=${classMap({
            container: true,
            'container--fullscreen': this.fullscreen,
          })}
        >
          <slot name="side"></slot>
          <div id="content">
            <slot></slot>
          </div>
        </div>

        <slot
          name="accessibility"
          @arc-accessibility-change=${this.handleAccessibilityChange}
        >
          <arc-accessibility
            id="accessibility"
            @arc-accessibility-change=${this.handleAccessibilityChange}
          />
        </slot>

        <slot name="bottom" @arc-show-accessibility=${this.showAccessibility}>
          <arc-bottombar @arc-show-accessibility=${this.showAccessibility} />
        </slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-container': ArcContainer;
  }
}
