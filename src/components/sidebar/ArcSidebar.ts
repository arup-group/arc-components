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
      #sidebar,
      #content {
        height: 100%;
        display: flex;
        flex-direction: column;
      }

      #title {
        height: 3.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--arc-spacing-medium);
      }

      #content ::slotted(*) {
        flex: 1 1 100%;
      }

      #content.gap {
        gap: var(--gap-distance);
      }

      #toggleOpen::part(icon) {
        padding: var(--arc-spacing-normal) 0.25rem var(--arc-spacing-normal)
          0.25rem;
        border-radius: 0;
      }

      /* Background */
      ::slotted(*),
      #title,
      #toggleOpen {
        background: rgb(var(--arc-container-color));
      }
    `,
  ];

  @query('#content')
  content!: HTMLElement;

  @property({ type: Boolean, reflect: true })
  open: boolean = true;

  @property() title: string;

  _handleSlots = (e: any) => {
    const childNodes = e.target.assignedElements({ flatten: true });

    if (childNodes.length > 1) {
      this.content.classList.add('gap');
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
    return this.open
      ? html`
          <div id="sidebar">
            <div id="title">
              <span>${this.title}</span>
              <arc-icon-button
                id="toggleClose"
                name="arrow-left"
                label="Close sidebar"
                @click=${this._toggleOpenState}
              ></arc-icon-button>
            </div>
            <div id="content">
              <slot @slotchange=${this._handleSlots}></slot>
            </div>
          </div>
        `
      : html`
          <arc-icon-button
            id="toggleOpen"
            name="arrow-right"
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
