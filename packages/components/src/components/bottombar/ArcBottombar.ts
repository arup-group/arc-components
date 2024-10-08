import { html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { emit } from '../../internal/event.js';
import { NotificationConfiguration } from '../container/constants/ContainerConstants.js';
import { ActionCallback } from '../container/constants/ContainerConstants.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import styles from './arc-bottombar.styles.js';
import '../icon-button/arc-icon-button.js';
import '../icon/accessibility/arc-icon-accessibility.js';

/**
 * @slot - This slot is used to add icon-buttons to the bottom bar.
 *
 * @event arc-show-accessibility - Emitted when the built-in accessibility button is pressed.
 *
 * @ssr - True
 */
export default class ArcBottombar extends LitElement {
  /** @internal */
  static tag = 'arc-bottombar';

  static styles = styles;

  /** @internal - State that stores the max tab count */
  @state() private tabs: number = 5;

  /** @internal - State that keeps track of the current tab count */
  @state() private tabCount: number;

  /* Whenever a tab changes, update the tabCount */
  private _handleTabChange(e: any) {
    const isTab = (element: any) => element.tagName === 'ARC-ICON-BUTTON';

    const nodes = e.target.assignedElements({ flatten: true });
    const navTabs = nodes.filter(isTab);

    this.tabCount = navTabs.length;

    if (this.tabCount > this.tabs) {
      // TODO: ARC-12 Put the slotted tabs inside an arc-dropdown component once they exceed the given tab count
      this.log(`Please limit your tab count to a maximum of ${this.tabs} tabs`);
    }
  }

  log(msg: string) {
    // eslint-disable-next-line no-console
    console.log(msg);
  }

  /* Emit an event to show the accessibility panel */
  emitAccessibility() {
    this.log('Emitting arc-show-accessibility event');
    emit(this, ARC_EVENTS.showAccessibility);
  }

  @state() public notifications: Array<
    [NotificationConfiguration, ActionCallback]
  > = [];
  @property({ type: Boolean }) public notificationHistory = false;

  protected render() {
    return html`
      <nav id="main" aria-label="mobile navigation">
        <slot @slotchange=${this._handleTabChange}></slot>
        ${this.notificationHistory
          ? html`
              <arc-dropdown>
                <arc-icon-button
                  slot="trigger"
                  ?disabled=${this.notifications.length === 0}
                >
                  <ph-icon-notification slot="icon"></ph-icon-notification>
                  Notifications
                </arc-icon-button>

                <arc-menu style="width:400px;">
                  ${this.notifications.map(
                    ([config, removeNotficationCallback]) => {
                      return html`
                        <arc-notification
                          .config=${config}
                          @arc-hide=${removeNotficationCallback}
                        ></arc-notification>
                        <div
                          style="border-bottom: 1px solid rgb(var(--arc-border-color));"
                        ></div>
                      `;
                    },
                  )}
                </arc-menu>
              </arc-dropdown>
            `
          : ``}

        <arc-icon-button @click=${this.emitAccessibility}>
          <arc-icon-accessibility slot="icon"></arc-icon-accessibility>
          Accessibility Panel
        </arc-icon-button>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-bottombar': ArcBottombar;
  }
}
