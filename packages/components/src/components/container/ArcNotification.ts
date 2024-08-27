import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

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
        z-index: calc(var(--arc-z-index-drawer) - 1);
        font-size: var(--arc-font-size-small);
      }
      span.title {
        font-weight: bold;
      }
      div.ntf {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: var(--arc-spacing-medium);
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
        --ntf-background: rgb(var(--arc-green-020));
        --ntf-color: rgb(var(--arc-green-090));
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
        <span class="title">${this.title}</span>
        <span>${this.message}</span>
      </div>
      <arc-icon-button @click=${this.handleCloseBtnClick}>
        <ph-icon-x slot="icon"></ph-icon-x>
      </arc-icon-button>
    </div>`;
  }
}
