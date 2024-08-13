import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import componentStyles from '../../styles/component.styles.js';

import {
  NOTIFICATION_COLORS,
  NotificationColor,
} from '../../internal/constants/styleConstants.js';

import '../ph-icon/warning/ph-icon-warning.js';
import '../ph-icon/warning-octagon/ph-icon-warning-octagon.js';
import '../ph-icon/info/ph-icon-info.js';
import '../ph-icon/x/ph-icon-x.js';

export type NotificationType = NotificationColor;

/**
 * @cssproperty --ntf-background - Set the background color of the notification.
 * @cssproperty --ntf-color - Set the font color of the notification.
 *
 * @ssr - True
 */
@customElement('arc-notification')
export class ArcNotification extends LitElement {
  /** @internal */
  static tag = 'arc-notification';

  /** @internal */
  static styles = [
    componentStyles,
    css`
      :host {
        --ntf-background: rgb(var(--arc-blue-020));
        --ntf-color: rgb(var(--arc-blue-090));

        display: block;
        top: 0;
        left: 0;
        width: 100%;
        position: absolute;
        z-index: 1000;
      }

      div.ntf {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: clamp(5px, var(--arc-spacing-small), var(--arc-spacing-small));
        padding: clamp(5px, var(--arc-spacing-small), var(--arc-spacing-small));
        background: var(--ntf-background);
        color: var(--ntf-color);
      }
      div.ntf--error {
        --ntf-background: rgb(var(--arc-red-020));
        --ntf-color: rgb(var(--arc-red-090));
      }
      div.ntf--warning {
        --ntf-background: rgb(var(--arc-yellow-020));
        --ntf-color: rgb(var(--arc-yellow-090));
      }
      div.ntf--info {
        --ntf-background: rgb(var(--arc-blue-020));
        --ntf-color: rgb(var(--arc-blue-090));
      }
      div.ntf--success {
        --ntf-background: rgb(var(--arc-blue-020));
        --ntf-color: rgb(var(--arc-blue-090));
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
    `,
  ];

  /** Notification title */
  @property({ type: String, reflect: true }) title: string;

  /** Notification message */
  @property({ type: String, reflect: true }) message: string;

  /** Notification type */
  @property({ type: String, reflect: true }) type: NotificationColor =
    NOTIFICATION_COLORS.info;

  /** @internal */
  /** Returns the icon based on the notification type */
  private icon() {
    // TODO

    return html` <ph-icon-warning-octagon></ph-icon-warning-octagon> `;
  }

  protected render() {
    return html`<div
      class=${classMap({
        ntf: true,
        'ntf--error': this.type === NOTIFICATION_COLORS.error,
        'ntf--warning': this.type === NOTIFICATION_COLORS.warning,
        'ntf--info': this.type === NOTIFICATION_COLORS.info,
        'ntf--success': this.type === NOTIFICATION_COLORS.success,
      })}
    >
      ${this.icon()}
      <div class="details">
        <span>${this.title}</span>
        <span>${this.message}</span>
      </div>
      <arc-icon-button>
        <ph-icon-x slot="icon"></ph-icon-x>
      </arc-icon-button>
    </div>`;
  }
}
