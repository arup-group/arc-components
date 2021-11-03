import { css, html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles.js';

import '../icon/arc-icon.js';

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
      }

      /* Open sidebar */
      #sidebar {
        height: 100%;
        display: grid;
      }

      #sidebar.gap {
        gap: var(--gap-distance);
      }

      #toggleClose {
        position: absolute;
        top: var(--arc-spacing-medium);
        right: var(--arc-spacing-medium);
      }

      /* Closed sidebar */
      #toggleOpen {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        width: var(--arc-spacing-medium);
        height: calc(var(--arc-spacing-medium) * 2);
        color: rgb(var(--arc-font-color));
      }

      #toggleOpen:hover,
      #toggleClose:hover {
        cursor: pointer;
      }

      /* Background */
      ::slotted(*),
      #toggleOpen {
        background: rgb(var(--arc-container-color));
      }
    `,
  ];

  @property({ type: Boolean, reflect: true })
  open: boolean = true;

  @query('#sidebar')
  sidebar!: HTMLElement;

  _handleSlots = (e: any) => {
    const childNodes = e.target.assignedElements({ flatten: true });

    if (childNodes.length > 1) {
      this.sidebar.classList.add('gap');
    }
  };

  _toggleOpenState = () => {
    this.open = !this.open;
    this._dispatchOpenState();
  };

  private _dispatchOpenState = () => {
    const options = {
      detail: { open: this.open },
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(
      new CustomEvent(`${this.open ? 'arc-show' : 'arc-hide'}`, options)
    );
  };

  render() {
    return html`
      ${this.open
        ? html`
            <div id="sidebar">
              <arc-icon
                id="toggleClose"
                name="arrow-left"
                @click=${this._toggleOpenState}
              ></arc-icon>
              <slot @slotchange=${this._handleSlots}></slot>
            </div>
          `
        : html`
            <button id="toggleOpen" @click=${this._toggleOpenState}>
              <arc-icon name="arrow-right"></arc-icon>
            </button>
          `}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-sidebar': ArcSidebar;
  }
}
