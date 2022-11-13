import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { watch } from '../../internal/watch.js';
// @ts-ignore
import componentStyles from '../../styles/component.styles.css.js';
// @ts-ignore
import styles from './arc-menu-item.styles.css.js';

/**
 * @slot default - The menu item's label.
 * @slot prefix - Used to prepend an icon or similar element to the menu-item.
 * @slot suffix - Used to append an icon or similar element to the menu-item.
 */
export default class ArcMenuItem extends LitElement {
  /** @internal */
  static tag = 'arc-menu-item';

  static styles = [componentStyles, styles];

  /** A unique value to store in the menu item. This can be used as a way to identify menu items when selected. */
  @property({ type: String }) value: string;

  /** Draws the menu item in a disabled state. */
  @property({ type: Boolean, reflect: true }) disabled: boolean = false;

  firstUpdated() {
    this.setAttribute('role', 'menuitem');
  }

  @watch('disabled')
  handleDisabledChange() {
    this.setAttribute('aria-disabled', String(this.disabled));
  }

  protected render() {
    return html`
      <div
        id="main"
        class=${classMap({
          'menu-item': true,
          'menu-item--disabled': this.disabled,
        })}
      >
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
