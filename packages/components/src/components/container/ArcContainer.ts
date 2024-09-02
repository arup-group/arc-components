import { html, LitElement, css } from 'lit';
import { property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { when } from 'lit/directives/when.js';
import { watch } from '../../internal/watch.js';
import {
  CONTAINER_THEME_PREFERENCES,
  ContainerThemePreference,
} from './constants/ContainerConstants.js';
import type ArcAccessibility from '../accessibility/ArcAccessibility.js';
import styles from './arc-container.styles.js';
import '../navbar/arc-navbar.js';
import '../accessibility/arc-accessibility.js';
import '../bottombar/arc-bottombar.js';

import { customElement } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles.js';

import {
  NOTIFICATION_COLORS,
  NotificationColor,
} from '../../internal/constants/styleConstants.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import { emit } from '../../internal/event.js';

import '../ph-icon/warning/ph-icon-warning.js';
import '../ph-icon/warning-octagon/ph-icon-warning-octagon.js';
import '../ph-icon/info/ph-icon-info.js';
import '../ph-icon/check-circle/ph-icon-check-circle.js';
import '../ph-icon/x/ph-icon-x.js';

export type NotificationType = NotificationColor;

/**
 * @ bata component feature (api subject to change)
 * @internal
 * @ssr - True
 */
@customElement('arc-alert')
export class ArcAlert extends LitElement {
  /** @internal */
  static tag = 'arc-alert';

  /** @internal */
  static styles = [
    componentStyles,
    css`
      :host {
        display: block;
        top: 0;
        left: 0;
        width: 100%;
        z-index: calc(var(--arc-z-index-drawer) - 1);
        font-size: var(--arc-font-size-small);
      }
      span.title {
        font-weight: bold;
      }
      div.alert {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: var(--arc-spacing-medium);
        padding: var(--arc-spacing-medium);
        background: rgb(var(--arc-container-color));
        border-radius: var(--arc-border-radius-small);
        min-width: 300px;
        max-width: 500px;
      }
      div.details {
        display: grid;
        gap: 5px;
      }
      arc-icon-button {
        position: absolute;
        top: 4px;
        right: 4px;
      }
      div.actions {
        grid-column: span 2;
        display: grid;
        grid-auto-flow: column;
        gap: var(--arc-spacing-small);
        justify-content: flex-end;
      }
    `,
  ];

  /** Notification title */
  @property({ type: String, reflect: true }) title: string;

  /** Notification message */
  @property({ type: String, reflect: true }) message: string;

  /** Notification type */
  @property({ type: String, reflect: true }) type: NotificationColor =
    NOTIFICATION_COLORS.info;

  /** If the notification is dismissable */
  @property({ type: Boolean }) dismissable = true;

  /** @internal */
  /** Returns the icon based on the notification type */
  private icon() {
    switch (this.type) {
      case NOTIFICATION_COLORS.error:
        return html`<ph-icon-warning size="x-large" />`;
      case NOTIFICATION_COLORS.warning:
        return html`<ph-icon-warning-octagon size="x-large" />`;
      case NOTIFICATION_COLORS.info:
        return html`<ph-icon-info size="x-large" />`;
      case NOTIFICATION_COLORS.success:
        return html`<ph-icon-check-circle size="x-large" />`;
      default:
        return html`<ph-icon-info size="x-large" />`;
    }
  }

  /** @internal */
  /** Handles the close button click */
  private handleCloseBtnClick() {
    emit(this, ARC_EVENTS.hide);
  }

  /** @internal */
  /** Action button configuration */
  @property({ type: Object }) action: ActionConfig;

  /** @internal */
  /** Secondary action button configuration */
  @property({ type: Object }) secondaryAction: ActionConfig;

  protected render() {
    return html`<div
      class=${classMap({
        alert: true,
        'alert--error': this.type === NOTIFICATION_COLORS.error,
        'alert--warning': this.type === NOTIFICATION_COLORS.warning,
        'alert--info': this.type === NOTIFICATION_COLORS.info,
        'alert--success': this.type === NOTIFICATION_COLORS.success,
      })}
    >
      ${this.icon()}
      <div class="details">
        <span class="title">${this.title}</span>
        <span>${this.message}</span>
      </div>

      <div class="actions">
        ${when(
          () => this.secondaryAction,
          () => html`
            <arc-button color="Secondary" @click=${this.secondaryAction.action}>
              ${this.secondaryAction.label}
            </arc-button>
          `,
        )}
        ${when(
          () => this.action,
          () => html`
            <arc-button color="primary" @click=${this.action.action}>
              ${this.action.label}
            </arc-button>
          `,
        )}
      </div>

      ${when(
        () => this.dismissable,
        () => html`
          <arc-icon-button @click=${this.handleCloseBtnClick}>
            <ph-icon-x slot="icon"></ph-icon-x>
          </arc-icon-button>
        `,
      )}
    </div>`;
  }
}

type Action = () => void;
interface ActionConfig {
  label: string;
  action: Action;
}

interface AlertConfig {
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  action?: ActionConfig;
  secondaryAction?: ActionConfig;
  dismissable?: boolean;
}

type AlertOrConfig = AlertConfig | ArcAlert;

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

  openAlert(config: AlertOrConfig): ArcAlert {
    const overylay = document.createElement('div');
    overylay.style.position = 'fixed';
    overylay.style.top = '0';
    overylay.style.left = '0';
    overylay.style.width = '100%';
    overylay.style.height = '100%';
    overylay.style.zIndex = '1000';
    overylay.style.display = 'grid';
    overylay.style.justifyContent = 'center';
    overylay.style.alignItems = 'center';
    overylay.style.backgroundColor = 'rgba(var(--arc-grey-050), 0.5)';
    if (config instanceof ArcAlert) {
      overylay.appendChild(config);
      this.appendChild(overylay);
      return config;
    } else {
      const alert = document.createElement('arc-alert') as ArcAlert;
      alert.title = config.title;
      alert.message = config.message;
      alert.type = config.type;
      alert.dismissable = config.dismissable ?? true;
      alert.action = config.action!;
      alert.secondaryAction = config.secondaryAction!;

      overylay.appendChild(alert);
      alert.addEventListener('arc-hide', () => {
        overylay.remove();
      });
      this.appendChild(overylay);
      return alert;
    }
  }

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

  /* Listen to keyboard input on the page */
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
