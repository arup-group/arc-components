import { html, isServer, LitElement } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { when } from 'lit/directives/when.js';
import { watch } from '../../internal/watch.js';

import { parseObject } from '../../internal/string.js';
import {
  CONTAINER_THEME_PREFERENCES,
  ContainerThemePreference,
} from './constants/ContainerConstants.js';

import ArcAccessibility from '../accessibility/ArcAccessibility.js';
import { NotificationType } from './ArcNotification.js';
import styles from './arc-container.styles.js';

import '../navbar/arc-navbar.js';
import '../accessibility/arc-accessibility.js';
import '../bottombar/arc-bottombar.js';
import './ArcNotification.js';

/** @bata-feature */
export interface Notification {
  /** The type of notification. */
  type: NotificationType;
  /** Title of the notification. */
  title: string;
  /** The message to display in the notification */
  message: string;
  /** The duration in milliseconds to show the notification. If not provided,
   * the notification will be shown until the user closes it. The user can
   * always close the notification manually and may choose to ignore all
   * notfication durations in there accessibility settings. */
  duration?: number;
  /** If the notification should be saved in the notification history. */
  saveInHistory?: true;
}

export type NotificationHistory = Notification[];

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
  /** @internal */
  static tag = 'arc-container';

  /** @internal */
  static styles = styles;

  /** @internal */
  @query('#main') container: HTMLElement;

  /** @internal */
  @query('#accessibility') accessibility: ArcAccessibility;

  /** @internal - Reference to the preferred theme set by the app. */
  private _appPreferredTheme: ContainerThemePreference;

  /** Set the starting theme for the container. Once loaded, the built-in accessibility will be responsible for this property. */
  @property({ type: String, reflect: true }) theme: ContainerThemePreference =
    CONTAINER_THEME_PREFERENCES.auto;

  /** Set the container to fullscreen mode. This hides the padding, margin and gap values. */
  @property({ type: Boolean }) fullscreen: boolean = false;

  /** Set the banner text. This enables the sticky banner to be rendered above the container. */
  @property() banner: string | boolean = false;

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

  /** @bata-feature */
  @state()
  private notifcations: Array<[Symbol, Notification]> = [];

  /** @bata-feature Open a notification. */
  public openNotification(config: Notification): Symbol {
    const notification = Symbol(config.title + config.message);
    if (isServer) return notification;
    this.notifcations = [...this.notifcations, [notification, config]];
    const { duration, saveInHistory } = config;

    if (saveInHistory) {
      const history = localStorage.getItem('arc-notification-history');
      let historyArray: NotificationHistory = [];
      if (history) historyArray = JSON.parse(history);
      historyArray.push(config);
      localStorage.setItem(
        'arc-notification-history',
        JSON.stringify(historyArray),
      );
    }

    if (duration && duration !== 0) {
      /* Check for cached preferences in the localStore and update the state. */
      const cachedPreferences = localStorage.getItem(ArcAccessibility.tag);
      if (cachedPreferences) {
        /* Update the state of the user preferences */
        const sn = parseObject(cachedPreferences).stickyNotifications;
        if (sn) return notification;
      }
      const hideNotificationCallback = () =>
        this.hideNotification(notification);
      setTimeout(hideNotificationCallback, duration);
    }
    return notification;
  }

  /** @bata-feature Hide a notification. */
  public hideNotification(notfication: Symbol): void {
    if (isServer) return;
    this.notifcations = this.notifcations.filter(([key]) => key !== notfication);
  }

  /** @bata-feature Get all notifcations in history. */
  public getNotificationHistory(): NotificationHistory {
    if (isServer) return [];
    const history = localStorage.getItem('arc-notification-history');
    return history ? JSON.parse(history) : [];
  }

  /** @bata-feature Clear notifcation history */
  public clearNotificationHistory(): void {
    if (isServer) return;
    localStorage.removeItem('arc-notification-history');
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
        <slot
          id="nav"
          name="nav"
          @arc-show-accessibility=${this.showAccessibility}
        >
          <arc-navbar
            @arc-show-accessibility=${this.showAccessibility}
          ></arc-navbar>
        </slot>

        <div
          id="container"
          class=${classMap({
            container: true,
            'container--fullscreen': this.fullscreen,
          })}
        >
          ${when(
            this.notifcations.length > 0,
            () =>
              html`<div class="notification-container">
                ${this.notifcations.map(
                  ([notification, { type, title, message }]) =>
                    html` <arc-notification
                      type="${type}"
                      title="${title}"
                      message="${message}"
                      @arc-hide=${() => this.hideNotification(notification)}
                    />`,
                )}
              </div>`,
          )}
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
          ></arc-accessibility>
        </slot>
        <slot name="bottom">
          <arc-bottombar
            @arc-show-accessibility=${this.showAccessibility}
          ></arc-bottombar>
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
