import { css, html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { emit, waitForEvent } from '../../internal/event.js';
import { watch } from '../../internal/watch.js';
import componentStyles from '../../styles/component.styles.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import { ICON_TYPES } from '../icon/constants/IconConstants.js';

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

  static styles = [
    componentStyles,
    css`
      :host {
        --gap-distance: var(--arc-spacing-normal);
        --sidebar-width: clamp(15rem, 30%, var(--arc-sidebar-width));
        transform: translateX(-1.5rem);
        transition: width 0.5s ease 0s;
        width: 0;
      }

      :host([open]) {
        transform: translateX(0);
        width: var(--sidebar-width);
        overflow: auto;
      }

      /* Open sidebar */
      #main,
      #content {
        height: 100%;
        display: flex;
        flex-direction: column;
      }

      #header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--arc-spacing-small);
        padding-left: var(--arc-spacing-medium);
        user-select: none;
      }

      #header span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      #content ::slotted(*) {
        flex: 1 1 100%;
      }

      #content.gap {
        gap: var(--gap-distance);
      }

      #toggleOpen::part(icon) {
        padding: var(--arc-spacing-normal) 0.25rem var(--arc-spacing-normal) 0.25rem;
        border-radius: 0;
      }

      /* Background */
      ::slotted(*),
      #header,
      #toggleOpen {
        background: rgb(var(--arc-container-color));
      }
    `,
  ];

  /** @internal */
  @query('#content') content: HTMLElement;

  /** Indicates whether the sidebar is open. This can be used instead of the show/hide methods. */
  @property({ type: Boolean, reflect: true }) open: boolean = true;

  /** The sidebar label. Alternatively, the label slot can be used. */
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
  async show() {
    if (this.open) {
      return;
    }

    this.open = true;
    await waitForEvent(this, ARC_EVENTS.afterShow);
  }

  /* Hides the sidebar. */
  async hide() {
    if (!this.open) {
      return;
    }

    this.open = false;
    await waitForEvent(this, ARC_EVENTS.afterHide);
  }

  private _toggleOpenState() {
    if (this.open) {
      this.hide();
    } else {
      this.show();
    }
  }

  handleSlots(e: any) {
    const childNodes = e.target.assignedElements({ flatten: true });

    if (childNodes.length > 1) {
      this.content.classList.add('gap');
    }
  }

  render() {
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
                @click=${this._toggleOpenState}
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
            @click=${this._toggleOpenState}
          ></arc-icon-button>
        `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-sidebar': ArcSidebar;
  }
}
