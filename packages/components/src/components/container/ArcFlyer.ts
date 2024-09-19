import { html, css, LitElement, isServer } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {
  ActionCallback,
  NotificationConfiguration,
  FlyerPlacement,
  OPERATIONS,
} from './constants/ContainerConstants.js';
import { FLYER_PLACEMENT } from './constants/ContainerConstants.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import componentStyles from '../../styles/component.styles.js';
import ArcNotification from './ArcNotification.js';
import { parseObject } from '../../internal/string.js';
import ArcAccessibility from '../accessibility/ArcAccessibility.js';

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
        --flyer-position-spacing-horizontal: calc(
          var(--arc-spacing-medium) * 1.5
        );
        --flyer-position-spacing-vertical: calc(
          var(--arc-spacing-normal) * 1.5
        );
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

  /** @internal */
  private notifications: ArcNotification[] = [];

  /** @internal */
  private get notificationElements(): NodeListOf<ArcNotification> | undefined {
    if (isServer) return undefined;
    return this.querySelectorAll(ArcNotification.tag) as
      | NodeListOf<ArcNotification>
      | undefined;
  }

  /** Open an alert with the given configuration */
  public dispatchNotification(
    config: NotificationConfiguration,
  ): ActionCallback {
    if (isServer) return () => {};

    /* ensure that the time stamp is set */
    if (config.timeStamp === undefined) {
      const now = new Date(Date.now());
      config.timeStamp = now;
    }

    /* if the notificaiton operation type is an error ensure that it is assertive */
    if (config.type === OPERATIONS.error) {
      config.assertive = true;
    }

    const { duration, assertive } = config;
    const isTopPlacement = this.placement.includes('top');

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
      const newNotifications = this.notifications.filter(
        (n) => n !== notificationElement,
      );
      this.notifications = newNotifications;

      /* remove the notification from the DOM */
      notificationElement.remove();

      /* if no notifications are left, remove the flyer */
      if (!this.notificationElements?.length) {
        this.remove();
      }
    };

    /* call the close callback when the notification is closed by the user the the close button */
    notificationElement.addEventListener(ARC_EVENTS.hide, closeCallback);

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
    this.notifications.push(notificationElement);

    /* add the notification to the DOM */
    if (isTopPlacement) {
      assertive
        ? this.prepend(notificationElement)
        : this.append(notificationElement);
    } else {
      assertive
        ? this.append(notificationElement)
        : this.prepend(notificationElement);
    }


    return closeCallback;
  }
  protected render() {
    return html`
      <div class="notifications">
        <slot></slot>
      </div>
    `;
  }
}
