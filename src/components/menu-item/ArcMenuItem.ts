import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { watch } from '../../utilities/watch.js';
import componentStyles from '../../styles/component.styles.js';

export default class ArcMenuItem extends LitElement {
  static tag = 'arc-menu-item';

  static styles = [
    componentStyles,
    css`
      :host {
        display: block;
      }

      #main {
        position: relative;
        display: flex;
        align-items: stretch;
        text-align: left;
        padding: var(--arc-spacing-small) var(--arc-spacing-medium);
        transition: var(--arc-transition-fast) fill;
        user-select: none;
        white-space: nowrap;
        cursor: pointer;
      }

      #prefix,
      #label,
      #suffix {
        display: flex;
        flex: 0 0 auto;
        align-items: center;
      }

      #prefix ::slotted(*) {
        margin-right: var(--arc-spacing-x-small);
      }

      #label {
        flex: 1 1 auto;
      }

      #suffix ::slotted(*) {
        margin-left: var(--arc-spacing-x-small);
      }

      /* Hover & Focus */
      :host(:not([disabled]):hover) #main,
      :host(:not([disabled]):focus) #main,
      :host(:not([disabled]):focus-visible) #main {
        outline: none;
        background-color: currentColor;
        background-image: linear-gradient(var(--arc-hover-lighter) 0 0);
      }

      /* Mouse down */
      :host(:not([disabled]):active) #main {
        background: rgba(var(--arc-font-color), 10%);
      }

      /* Disabled */
      :host([disabled]) #main {
        opacity: 0.5;
        outline: none;
        cursor: not-allowed;
      }
    `,
  ];

  /** A unique value to store in the menu item. This can be used as a way to identify menu items when selected. */
  @property() value = '';

  /** Draws the menu item in a disabled state. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  firstUpdated() {
    this.setAttribute('role', 'menuitem');
  }

  @watch('disabled')
  handleDisabledChange() {
    this.setAttribute('aria-disabled', String(this.disabled));
  }

  render() {
    return html`
      <div id="main">
        <span id="prefix">
          <slot name="prefix"></slot>
        </span>
        <span id="label">
          <slot></slot>
        </span>
        <span id="suffix">
          <slot name="suffix"></slot>
        </span>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-menu-item': ArcMenuItem;
  }
}
