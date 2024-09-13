import { html, css, LitElement, isServer } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type {
  ActionCallback,
  NotificationConfiguration,
  FlyerPlacement,
} from './constants/ContainerConstants.js';
import { FLYER_PLACEMENT } from './constants/ContainerConstants.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import componentStyles from '../../styles/component.styles.js';
import ArcNotification from './ArcNotification.js';
import { parseObject } from '../../internal/string.js';
import ArcAccessibility from '../accessibility/ArcAccessibility.js';
import { NotificationHistory } from './ArcContainer.js';

import '../icon-button/arc-icon-button.js';
import '../ph-icon/dots-three/ph-icon-dots-three.js';
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
        --flyer-position-spacing-horizontal: calc(var(--arc-spacing-medium) * 1.5);
        --flyer-position-spacing-vertical: calc(var(--arc-spacing-normal) * 1.5);
        display: grid;
        gap: var(--arc-spacing-small);
        position: fixed;
        z-index: calc(var(--arc-z-index-drawer) - 1);
        width: calc(clamp(0px, 480px, 100%) - var(--arc-spacing-medium));
        max-height: calc(100vh - calc(var(--flyer-position-spacing) * 2));
      }
      :host([placement='top-start']) {
        top: var(--flyer-position-spacing-vertical);
        right: unset;
        left: var(--flyer-position-spacing-horizontal);
      }
      :host([placement='top-end']) {
        top: var(--flyer-position-spacing-vertical);
        right: var(--flyer-position-spacing-horizontal);
        left: unset;
      }
      :host([placement='bottom-start']) {
        bottom: var(--flyer-position-spacing-vertical);
        right: unset;
        left: var(--flyer-position-spacing-horizontal);
      }
      :host([placement='bottom-end']) {
        bottom: var(--flyer-position-spacing-vertical);
        right: var(--flyer-position-spacing-horizontal);
        left: unset;
      }
      :host([placement='top']) {
        bottom: unset;
        right: unset;
        left: 50%;
        transform: translateX(-50%);
      }
      :host([placement='bottom']) {
        top: unset;
        right: unset;
        left: 50%;
        transform: translateX(-50%);
      }
      div.notifications {
        display: grid;
        gap: var(--arc-spacing-small);
        width: 100%;
        max-height: calc(100vh - var(--flyer-position-spacing-vertical));
        overflow-y: scroll;
      }
      div.controls {
        display: inline-flex;
        gap: var(--arc-spacing-x-small);
        align-items: center;
        justify-content: center;
      }
      arc-tooltip {
        --arrow-size: 0px;
      }
    `,
  ];

  /** Set the placement of the flyer */
  @property({ reflect: true }) public placement: FlyerPlacement =
    FLYER_PLACEMENT['bottom-end'];

  /** Set the max number of notifications to display */
  @property({ type: Number, reflect: true }) public maxNotifications = 5;

  /** @internal */
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
    if (isServer) return () => {};
    const { duration, saveInHistory, timeStamp } = config;
    const isTopPlacement = this.placement.includes('top');

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
        if (isTopPlacement) {
          this.prepend(nextNotification);
        } else {
          this.append(nextNotification);
        }
      }

      /* update the hidden notifications count */
      if (this.currentNotifications.length - this.maxNotifications > 0) {
        const newValue =
          this.currentNotifications.length - this.maxNotifications;
        this.hiddenNotifications = newValue;
      } else {
        this.hiddenNotifications = 0;
      }

      /* if no notifications are left, remove the flyer */
      if (!this.notificationElements?.length) {
        this.remove();
      }
    };

    /* call the close callback when the notification is closed by the user the the close button */
    notificationElement.addEventListener(ARC_EVENTS.hide, closeCallback);

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

    /* add the nottification to the elements list */
    this.currentNotifications.push(notificationElement);

    /* if adding the notification will not cause the max notifications to be exceeded, add the notification to the DOM */
    if (
      this.currentNotifications.length <= this.maxNotifications ||
      duration !== undefined
    ) {
      if (isTopPlacement) {
        this.prepend(notificationElement);
      } else {
        this.append(notificationElement);
      }
    }

    /* remove the oldest notification if the max notifications is reached */
    if (this.currentNotifications.length > this.maxNotifications && !duration) {
      const oldestNotification =
        this.currentNotifications[this.currentNotifications.length - 1];
      oldestNotification.remove();
      this.hiddenNotifications =
        this.currentNotifications.length - this.maxNotifications;
    }

    return closeCallback;
  }

  /** @internal */
  @state() private hiddenNotifications = 0;

  /** @internal */
  private showMore() {
    return this.hiddenNotifications > 0
      ? html`<div class="controls">
          <arc-icon-button @click=${this.handleShowAllBtnClick}>
            <ph-icon-dots-three slot="icon" />
          </arc-icon-button>
        </div>`
      : html``;
  }

  /** @internal */
  private handleShowAllBtnClick() {
    const isTopPlacement = this.placement.includes('top');
    this.currentNotifications.forEach((notification) => {
      if (isTopPlacement) {
        this.prepend(notification);
      } else {
        this.append(notification);
      }
    });
    this.hiddenNotifications = 0;
  }

  protected render() {
    const isTopPlacement = this.placement.includes('top');
    return html`
      ${!isTopPlacement ? this.showMore() : ''}
      <div class="notifications">
        <slot></slot>
      </div>
      ${isTopPlacement ? this.showMore() : ''}
    `;
  }
}
