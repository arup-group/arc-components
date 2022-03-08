import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { watch } from '../../internal/watch.js';
import componentStyles from '../../styles/component.styles.js';

/**
 * @slot default - The menu item's label.
 * @slot prefix - Used to prepend an icon or similar element to the menu-item.
 * @slot suffix - Used to append an icon or similar element to the menu-item.
 */
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
        max-width: 30ch;
        overflow: hidden;
      }

      #label * {
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis ' ...';
      }

      #suffix ::slotted(*) {
        margin-left: var(--arc-spacing-x-small);
      }

      /* Hover & Focus */
      :host(:focus) {
        outline: none;
      }
      :host(:not([disabled]):hover) #main,
      :host(:not([disabled]):focus-visible) #main {
        background-color: currentColor;
        background-image: linear-gradient(var(--arc-hover-lighter) 0 0);
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
  @property({ type: Boolean, reflect: true }) disabled: boolean = false;

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
