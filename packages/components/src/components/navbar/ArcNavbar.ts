import { html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { emit } from '../../internal/event.js';
import { ActionCallback, NotificationConfiguration } from '../container/constants/ContainerConstants.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import { arupLogo } from './arup-logo.js';
import styles from './arc-navbar.styles.js';
import '../icon-button/arc-icon-button.js';
import '../ph-icon/list/ph-icon-list.js';
import '../ph-icon/notification/ph-icon-notification.js';
import '../icon/accessibility/arc-icon-accessibility.js';

/**
 * @slot default - This slot is used to add tabs to the navbar.
 * @slot name - This slot is used to add a tool name or sub branding.
 * @slot user - This slot should be used to display the signed-in user.
 * @slot company-logo - This slot should be used to display the company logo.
 *
 * @event arc-show-accessibility - Emitted when the built-in accessibility button is pressed.
 *
 * @cssproperty --logo-height - Set the height of the tool logo.
 * @cssproperty --company-logo-color - Set the color of the company logo.
 *
 * @ssr - True
 */
export default class ArcNavbar extends LitElement {
  /** @internal */
  static tag = 'arc-navbar';

  /** @internal */
  static styles = styles;

  /** When set, the underlying logoWrapper will be rendered as an anchor with this property. */
  @property({ type: String }) home: string;

  /** The url for the logo of the application. */
  @property({ type: String }) logo: string;

  /* Emit an event to show the accessibility panel */
  emitAccessibility() {
    emit(this, ARC_EVENTS.showAccessibility);
  }

  @state() notifications: [NotificationConfiguration, ActionCallback][] = [];
  @property({ type: Boolean }) notificationHistory = false;

  protected render() {
    const logoInterior = html`
      ${when(
        this.logo,
        () => html`<img id="tool-logo" src="${this.logo}" alt="tool-logo" />`,
      )}
      <slot id="tool-name" name="name"></slot>
    `;

    return html`
      <header id="main">
        <div id="left">
          ${when(
            this.home,
            () =>
              html`<a
                id="logoWrapper"
                href=${this.home}
                rel="noreferrer noopener"
                role="button"
                aria-label="tool logo"
              >
                ${logoInterior}
              </a>`,
            () => html`<div id="logoWrapper">${logoInterior}</div>`,
          )}
        </div>

        <div id="right">
          <nav id="tabs" aria-label="primary navigation">
            <slot id="tabSlot"></slot>

            ${this.notificationHistory ? html`
              <arc-dropdown>
                <arc-icon-button slot="trigger">
                  <ph-icon-notification slot="icon" />
                </arc-icon-button>

                <arc-menu>
                  ${this.notifications.map(
                    ([notification, close]) => html`
                      <arc-menu-item>
                        <div>
                          <span>${notification.title}</span>
                          <span>${notification.message}</span>
                        </div>
                        <arc-icon-button @click=${close}>
                          <ph-icon-x slot="icon" />
                        </arc-icon-button>
                      </arc-menu-item>
                    `,
                  )}
                </arc-menu>
              </arc-dropdown>
            ` : ``}

            <arc-icon-button
              id="accessibility"
              label="Accessibility panel"
              @click=${this.emitAccessibility}
            >
              <arc-icon-accessibility slot="icon" />
            </arc-icon-button>

            <slot name="user"></slot>
          </nav>

          <slot name="company-logo" id="company-logo">${arupLogo}</slot>
        </div>
      </header>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-navbar': ArcNavbar;
  }
}
