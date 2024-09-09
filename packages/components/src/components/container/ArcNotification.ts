import { css, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import componentStyles from '../../styles/component.styles.js';
import {
  NotificationConfiguration,
  OPERATIONS,
} from './constants/ContainerConstants.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import { emit } from '../../internal/event.js';

import '../ph-icon/notification/ph-icon-notification.js';
import '../ph-icon/warning/ph-icon-warning.js';
import '../ph-icon/warning-octagon/ph-icon-warning-octagon.js';
import '../ph-icon/info/ph-icon-info.js';
import '../ph-icon/check-circle/ph-icon-check-circle.js';
import '../ph-icon/x/ph-icon-x.js';

/**
 * @ bata component feature (api subject to change)
 * @internal
 * @ssr - True
 */
@customElement(ArcNotification.tag)
export default class ArcNotification extends LitElement {
  /** @internal */
  static tag = 'arc-notification';

  /** @internal */
  static styles = [
    componentStyles,
    css`
      :host {
        --notification-background: rgb(var(--arc-background-color));
        --notification-color: rgb(var(--arc-font-color));
        width: 100%;
      }
      span.title {
        font-weight: bold;
      }
      span.time-stamp {
        padding-top: var(--arc-spacing-small);
        font-size: var(--arc-font-size-x-small);
        justify-self: end;
        align-self: end;
      }
      div.notification {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: var(--arc-spacing-small);
        width: 100%;
        padding: var(--arc-spacing-small);
        border-radius: var(--arc-border-radius-small);
        box-shadow: var(--arc-box-shadow);
        background: var(--notification-background);
        color: var(--notification-color);
        font-size: var(--arc-font-size-small);
      }
      div.notification--error {
        --notification-background: rgb(var(--arc-background-color-error));
        --notification-color: rgb(var(--arc-color-error));
      }
      div.notification--warning {
        --notification-background: rgb(var(--arc-background-color-warning));
        --notification-color: rgb(var(--arc-color-warning));
      }
      div.notification--info {
        --notification-background: rgb(var(--arc-background-color-info));
        --notification-color: rgb(var(--arc-color-info));
      }
      div.notification--success {
        --notification-background: rgb(var(--arc-background-color-success));
        --notification-color: rgb(var(--arc-color-success));
      }
      div.details {
        display: grid;
      }
      arc-icon-button {
        position: absolute;
        top: calc(var(--arc-spacing-small) / 2);
        right: calc(var(--arc-spacing-small) / 2);
        --icon-color: var(--notification-color);
      }
    `,
  ];

  /** @internal */
  @state() public config: NotificationConfiguration;

  /** @internal */
  /** Returns the icon based on the notification type */
  private icon() {
    const { type } = this.config;
    switch (type) {
      case OPERATIONS.error:
        return html`<ph-icon-warning size="large" />`;
      case OPERATIONS.warning:
        return html`<ph-icon-warning-octagon size="large" />`;
      case OPERATIONS.info:
        return html`<ph-icon-info size="large" />`;
      case OPERATIONS.success:
        return html`<ph-icon-check-circle size="large" />`;
      default:
        return html`<ph-icon-notification size="large" />`;
    }
  }

  /** @internal */
  /** Handles the close button click */
  private handleCloseBtnClick() {
    emit(this, ARC_EVENTS.hide);
  }

  protected render() {
    const { title, message, type, timeStamp } = this.config;
    const timeStampString = timeStamp?.toLocaleDateString(undefined, {
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });

    return html`<div
      class=${classMap({
        notification: true,
        'notification--error': type === OPERATIONS.error,
        'notification--warning': type === OPERATIONS.warning,
        'notification--info': type === OPERATIONS.info,
        'notification--success': type === OPERATIONS.success,
      })}
    >
      ${this.icon()}
      <div class="details">
        <span class="title">${title}</span>
        <span>${message}</span>
        <span class="time-stamp">${timeStampString}</span>
      </div>
      <arc-icon-button @click=${this.handleCloseBtnClick}>
        <ph-icon-x slot="icon" size="small"></ph-icon-x>
      </arc-icon-button>
    </div>`;
  }
}
