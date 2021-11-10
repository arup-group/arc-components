import { css, html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles.js';

import '../icon-button/arc-icon-button.js';

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
        top: var(--arc-spacing-x-small);
        right: var(--arc-spacing-x-small);
      }
      
      #toggleOpen::part(icon) {
        padding: var(--arc-spacing-normal) 0.25rem var(--arc-spacing-normal) 0.25rem;
        border-radius: 0;
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
    return this.open ? html`
      <div id="sidebar">
        <arc-icon-button id="toggleClose" name="arrow-left" label='Close sidebar' @click=${this._toggleOpenState}></arc-icon-button>
        <slot @slotchange=${this._handleSlots}></slot>
      </div>
    ` : html`
      <arc-icon-button id="toggleOpen" name="arrow-right" label='Open sidebar' @click=${this._toggleOpenState}></arc-icon-button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-sidebar': ArcSidebar;
  }
}
