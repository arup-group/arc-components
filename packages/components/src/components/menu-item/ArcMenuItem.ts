import { LitElement } from 'lit';
import { html, literal } from 'lit/static-html.js';
import { property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { watch } from '../../internal/watch.js';
import { ButtonTarget } from '../button/constants/ButtonConstants.js';
import styles from './arc-menu-item.styles.js';

/**
 * @slot default - The menu item's label.
 * @slot prefix - Used to prepend an icon or similar element to the menu-item.
 * @slot suffix - Used to append an icon or similar element to the menu-item.
 */
export default class ArcMenuItem extends LitElement {
  /** @internal */
  static tag = 'arc-menu-item';

  static styles = styles;

  /** @internal */
  @query('#main') menuitem: HTMLButtonElement | HTMLLinkElement;

  /** A unique value to store in the menu item. This can be used as a way to identify menu items when selected. Ignored when `href` is set. */
  @property({ type: String }) value: string;

  /** When set, the underlying div will be rendered as an `<a>` with this `href` instead of a `<div>`. */
  @property({ type: String }) href: string;

  /** Tells the browser where to open the link. Only used when `href` is set. */
  @property({ type: String }) target: ButtonTarget;

  /** Tells the browser to download the linked file as this filename. Only used when `href` is set. */
  @property({ type: String }) download: string;

  /** Draws the menu item in a disabled state. */
  @property({ type: Boolean, reflect: true }) disabled: boolean = false;

  /* Simulates a click on the button. */
  click() {
    this.menuitem.click();
  }

  firstUpdated() {
    this.setAttribute('role', 'menuitem');
  }

  /* Handle the click of the menu item */
  private _handleClick(event: MouseEvent) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  @watch('disabled')
  handleDisabledChange() {
    this.setAttribute('aria-disabled', String(this.disabled));
  }

  protected render() {
    const isLink = !!this.href;
    const tag = isLink ? literal`a` : literal`div`;

    /* eslint-disable lit/binding-positions, lit/no-invalid-html */
    return html`
      <${tag}
        id="main"
        class=${classMap({
          'menu-item': true,
          'menu-item--disabled': this.disabled,
        })}
        value=${ifDefined(isLink ? undefined : this.value)}
        href=${ifDefined(this.href || undefined)}
        target=${ifDefined(this.target || undefined)}
        download=${ifDefined(this.download || undefined)}
        rel=${ifDefined(this.target ? 'noreferrer noopener' : undefined)}
        tabindex=${this.disabled ? '-1' : '0'}
        @click=${this._handleClick}
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
      </${tag}>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-menu-item': ArcMenuItem;
  }
}
