import { html, css, LitElement, isServer } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import type {
  ActionCallback,
  NotificationConfiguration,
} from './constants/ContainerConstants.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import componentStyles from '../../styles/component.styles.js';
import ArcNotification from './ArcNotification.js';
import { parseObject } from '../../internal/string.js';
import ArcAccessibility from '../accessibility/ArcAccessibility.js';
import { NotificationHistory } from './ArcContainer.js';

import '../icon-button/arc-icon-button.js';
import '../ph-icon/arrow-up/ph-icon-arrow-up.js';
import '../ph-icon/arrow-down/ph-icon-arrow-down.js';
import './ArcNotification.js';

/**
 * @ bata component feature (api subject to change)
 * @internal
 * @ssr - True
 */
@customElement(ArcFlyer.tag)
export default class ArcFlyer extends LitElement {
  /** @internal */
  static tag = 'arc-flyer';

  /** @internal */
  static styles = [
    componentStyles,
    css`
      :host {
        display: grid;
        gap: var(--arc-spacing-small);
        position: fixed;
        bottom: var(--arc-spacing-small);
        right: var(--arc-spacing-small);
        z-index: calc(var(--arc-z-index-drawer) - 1);
        width: calc(
          clamp(0px, 480px, 100%) - calc(var(--arc-spacing-small) * 2)
        );
      }

      div.notifications {
        display: grid;
        gap: var(--arc-spacing-small);
        width: 100;
      }

      div.controls {
        display: flex;
        gap: var(--arc-spacing-x-small);
        background: rgb(var(--arc-background-color));
        padding: var(--arc-spacing-x-small);
        border-radius: var(--arc-border-radius-small);
        box-shadow: var(--arc-box-shadow);
        align-items: center;
        justify-content: end;
      }
    `,
  ];

  private maxNotifications = 3;
  private currentNotifications: ArcNotification[] = [];

  /** @internal */
  private get notificationElements(): NodeListOf<ArcNotification> | undefined {
    if (isServer) return undefined;
    return this.querySelectorAll(ArcNotification.tag) as
      | NodeListOf<ArcNotification>
      | undefined;
  }

  /** Open an alert with the given configuration */
  public openNotification(config: NotificationConfiguration): ActionCallback {
    const { duration, saveInHistory, timeStamp } = config;

    /* ensure that the time stamp is set */
    if (!timeStamp) {
      config.timeStamp = new Date();
    }

    /* create the notification element */
    const notificationElement = document.createElement(
      ArcNotification.tag,
    ) as ArcNotification;
    notificationElement.config = config;

    /* close callback */
    const closeCallback = () => {
      /* remove the notification from the DOM */
      notificationElement.removeEventListener(ARC_EVENTS.hide, closeCallback);

      /* remove the notification from the current notifications list */
      const newNotifications = this.currentNotifications.filter(
        (n) => n !== notificationElement,
      );
      this.currentNotifications = newNotifications;

      /* remove the notification from the DOM */
      notificationElement.remove();

      /* if there is a next notification, add it to the DOM */
      const nextNotification =
        this.currentNotifications[this.maxNotifications - 1];
      if (nextNotification) {
        this.append(nextNotification);
      }

      this.hiddenNotifications =
        this.currentNotifications.length - this.maxNotifications > 0
          ? this.currentNotifications.length - this.maxNotifications
          : 0;

      /* if no notifications are left, remove the flyer */
      if (!this.notificationElements?.length) {
        this.remove();
      }
    };

    /* call the close callback when the notification is closed by the user the the close button */
    notificationElement.addEventListener(ARC_EVENTS.hide, closeCallback);

    /* add the nottification to the elements list */
    this.currentNotifications.push(notificationElement);

    /* if adding the notification will not cause the max notifications to be exceeded, add the notification to the DOM */
    if (this.currentNotifications.length <= this.maxNotifications) {
      this.append(notificationElement);
    }

    /* remove the oldest notification if the max notifications is reached */
    if (this.currentNotifications.length > this.maxNotifications) {
      const oldestNotification =
        this.currentNotifications[this.currentNotifications.length - 1];
      oldestNotification.remove();
    }

    this.hiddenNotifications =
      this.currentNotifications.length - this.maxNotifications;

    /* save the notification in history */
    if (saveInHistory) {
      const history = localStorage.getItem('arc-notification-history');
      let historyArray: NotificationHistory = [];
      if (history) historyArray = parseObject(history);
      historyArray.push(config);
      localStorage.setItem(
        'arc-notification-history',
        JSON.stringify(historyArray),
      );
    }

    /* check for cached preferences */
    const cachedPreferences = localStorage.getItem(ArcAccessibility.tag) || '';
    const { stickyNotifications } = parseObject(cachedPreferences);

    /* warn developer if the duration is less than 3 seconds */
    if (duration && duration < 3000) {
      console.warn(
        'Notification duration is less than 3 seconds. The notification will not close automatically.',
      );
    }

    /* if the duration is greater than 5 seconds and stickyNotifications is not enabled, close the notification after the duration */
    if (duration && duration >= 3000 && !stickyNotifications) {
      setTimeout(closeCallback, duration);
    }

    return closeCallback;
  }

  /** @internal */
  private handleCloseAll() {
    this.currentNotifications.forEach((notification) => notification.remove());
    this.remove();
  }

  /** @internal */
  @state() private hiddenNotifications = 0;

  protected render() {
    return html`
      <div class="notifications">
        <slot></slot>
      </div>
      ${this.currentNotifications.length > 0
        ? html`<div class="controls">
            ${this.hiddenNotifications > 0
              ? html`<span>${this.hiddenNotifications} more</span>`
              : ''}
            <arc-icon-button @click=${this.handleCloseAll}>
              <ph-icon-x slot="icon" size="small" />
            </arc-icon-button>
          </div>`
        : ''}
    `;
  }
}
