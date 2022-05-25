import { html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { emit, waitForEvent } from '../../internal/event.js';
import { watch } from '../../internal/watch.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import { ICON_TYPES } from '../icon/constants/IconConstants.js';
import styles from './arc-sidebar.styles.js';
import '../icon-button/arc-icon-button.js';

/**
 * @slot default - The sidebar's content.
 * @slot label - The sidebar's label.
 *
 * @event arc-show - Emitted when the sidebar opens.
 * @event arc-after-show - Emitted after the sidebar opens and all animations are complete.
 * @event arc-hide - Emitted when the sidebar closes.
 * @event arc-after-hide - Emitted after the sidebar closes and all animations are complete.
 *
 * @cssproperty --gap-distance - Set the distance between sidebar elements.
 * @cssproperty --sidebar-width - Set the width of the sidebar.
 */
export default class ArcSidebar extends LitElement {
  static tag = 'arc-sidebar';

  static styles = styles;

  /** @internal */
  @query('#content') content: HTMLElement;

  /** Indicates whether the sidebar is open. This can be used instead of the show/hide methods. */
  @property({ type: Boolean, reflect: true }) open: boolean = true;

  /** The sidebar label. Required for proper accessibility. Alternatively, the label slot can be used. */
  @property({ type: String }) label: string;

  @watch('open', { waitUntilFirstUpdate: true })
  async handleOpenChange() {
    if (this.open) {
      /* Show */
      emit(this, ARC_EVENTS.show);
      /* Possible animation here */
      emit(this, ARC_EVENTS.afterShow);
    } else {
      /* Hide */
      emit(this, ARC_EVENTS.hide);
      /* Possible animation here */
      emit(this, ARC_EVENTS.afterHide);
    }
  }

  /* Shows the sidebar. */
  show() {
    if (this.open) {
      return undefined;
    }

    this.open = true;
    return waitForEvent(this, ARC_EVENTS.afterShow);
  }

  /* Hides the sidebar. */
  hide() {
    if (!this.open) {
      return undefined;
    }

    this.open = false;
    return waitForEvent(this, ARC_EVENTS.afterHide);
  }

  handleSlots(e: any) {
    const childNodes = e.target.assignedElements({ flatten: true });

    if (childNodes.length > 1) {
      this.content.classList.add('gap');
    }
  }

  protected render() {
    return this.open
      ? html`
          <aside
            id="main"
            aria-label=${ifDefined(this.label || undefined)}
            aria-labelledby="${ifDefined(this.label ? undefined : 'title')}"
          >
            <div id="header">
              <slot id="title" name="label"><span>${this.label}</span></slot>
              <arc-icon-button
                id="toggleClose"
                name=${ICON_TYPES['arrow-left']}
                label="Close sidebar"
                @click=${this.hide}
              ></arc-icon-button>
            </div>
            <div id="content">
              <slot @slotchange=${this.handleSlots}></slot>
            </div>
          </aside>
        `
      : html`
          <arc-icon-button
            id="toggleOpen"
            name=${ICON_TYPES['arrow-right']}
            label="Open sidebar"
            @click=${this.show}
          ></arc-icon-button>
        `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-sidebar': ArcSidebar;
  }
}
