import { css, unsafeCSS, html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styleMap } from 'lit/directives/style-map.js';
import { componentStyles } from '../../styles/component.styles.js';

import '../icon/arc-icon.js';

import { BUTTON_TYPES, BUTTON_COLORS, BUTTON_SIZES } from './constants/ButtonConstants.js';

export class ArcButton extends LitElement {
  static tag = 'arc-button';

  static styles = [
    componentStyles,
    css`
      :host {
        display: inline-block;
        cursor: pointer;
        width: auto;
        --min-width: 0;
      }

      :host *,
      :host ::before,
      :host ::after {
        box-sizing: inherit;
      }

      #button {
        min-height: 100%;
        min-width: var(--min-width);
        width: 100%;
        display: flex;
        gap: var(--arc-spacing-small);
        align-items: center;
        justify-content: center;
        color: var(--btn-color);
        background-color: var(--btn-background);
        border: none;
        border-radius: var(--arc-border-radius-medium);
        box-shadow: var(--arc-input-box-shadow);
        font-family: var(--arc-font-button);
        font-size: var(--arc-font-size-small);
        font-weight: var(--arc-font-weight-semibold);
        cursor: inherit;
        text-decoration: none;
        user-select: none;
        line-height: normal;
        outline: none;
        padding: 0;
        -webkit-appearance: none;
        white-space: nowrap;
      }

      /* Loading */
      :host([loading]) #button {
        cursor: wait;
      }

      :host([loading]) slot {
        visibility: hidden;
      }

      #loader {
        position: absolute;
      }

      /* Disabled */
      :host([disabled]) #button {
        opacity: 0.5;
        box-shadow: none;
        cursor: not-allowed;
      }

      /* Hover */
      :host(:not([type='${unsafeCSS(BUTTON_TYPES.tab)}']):not([type='${unsafeCSS(
              BUTTON_TYPES.outlined
            )}']):not([disabled]))
        #button:hover {
        background-image: linear-gradient(var(--arc-hover-dark) 0 0);
      }

      /* Tab - Hover */
      :host([type='${unsafeCSS(BUTTON_TYPES.tab)}']:not([disabled])) #button:hover {
        background-color: currentColor;
        background-image: linear-gradient(var(--arc-hover-light) 0 0);
      }

      /* Outlined - Hover */
      :host([type='${unsafeCSS(BUTTON_TYPES.outlined)}']:not([disabled])) #button:hover {
        background-color: currentColor;
        background-image: linear-gradient(var(--arc-hover-light) 0 0);
      }

      /* Radius */
      :host([type='${unsafeCSS(BUTTON_TYPES.tile)}']) #button {
        border-radius: 0;
      }

      :host([type='${unsafeCSS(BUTTON_TYPES.pill)}'][size='${unsafeCSS(BUTTON_SIZES.small)}']) #button {
        border-radius: var(--arc-input-height-small);
      }

      :host([type='${unsafeCSS(BUTTON_TYPES.pill)}'][size='${unsafeCSS(BUTTON_SIZES.medium)}']) #button {
        border-radius: var(--arc-input-height-medium);
      }

      :host([type='${unsafeCSS(BUTTON_TYPES.pill)}'][size='${unsafeCSS(BUTTON_SIZES.large)}']) #button {
        border-radius: var(--arc-input-height-large);
      }

      /* Tab */
      :host([type='${unsafeCSS(BUTTON_TYPES.tab)}']) {
        height: 100%;
      }

      :host([type='${unsafeCSS(BUTTON_TYPES.tab)}']) #button {
        background: none;
        border-radius: 0;
        box-shadow: none;
      }

      /* Tab - Active */
      :host([type='${unsafeCSS(BUTTON_TYPES.tab)}']:not([disabled])[active]) #button {
        border-bottom: var(--arc-border-width) var(--arc-border-style) currentColor;
      }

      /* Outlined */
      :host([type='${unsafeCSS(BUTTON_TYPES.outlined)}']) #button {
        border: var(--arc-border-width) var(--arc-border-style) currentColor;
        background-color: transparent;
        box-shadow: none;
      }
    `,
  ];

  /** @type { 'contained' | 'tile' | 'outlined' | 'pill' | 'tab' } */
  @property({ type: String, reflect: true })
  type: string = BUTTON_TYPES.contained;

  /** @type { 'default' | 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' } */
  @property({ type: String, reflect: true })
  color: string = BUTTON_COLORS.default;

  /** @type { 'small' | 'medium' | 'large' } */
  @property({ type: String, reflect: true })
  size: string = BUTTON_SIZES.medium;

  @property()
  href: string | null = null;

  /** @type { '_blank' | '_parent' | '_self' | '_top' } */
  @property()
  target: string | null = null;

  @property()
  download: string | null = null;

  @property({ type: Boolean, reflect: true })
  active: boolean = false;

  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  @property({ type: Boolean, reflect: true })
  loading: boolean = false;

  @property({ type: Boolean, reflect: true })
  submit: boolean = false;

  @query('#button')
  button!: HTMLSpanElement;

  click() {
    this.button.click();
  }

  handleClick(event: Event) {
    if (this.disabled || this.loading) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  render() {
    const compStyles = window.getComputedStyle(this);
    const userDefinedColor = () => compStyles.getPropertyValue('--btn-color');
    const userDefinedBackground = () => compStyles.getPropertyValue('--btn-background');

    const getColor = () => {
      switch (this.type) {
        case BUTTON_TYPES.outlined: {
          return this.color === BUTTON_COLORS.default ? 'rgb(var(--arc-font-color))' : 'var(--btn-background)';
        }
        case BUTTON_TYPES.tab: {
          return this.color === BUTTON_COLORS.default ? 'rgb(var(--arc-color-primary))' : 'var(--btn-background)';
        }
        default: {
          return this.color === BUTTON_COLORS.primary || this.color === BUTTON_COLORS.secondary
            ? 'rgb(var(--arc-container-color))'
            : 'rgb(var(--arc-input-color))';
        }
      }
    };

    const btnStyles = {
      height: `var(--arc-input-height-${this.size})`,
      padding: `0 var(--arc-spacing-${this.size})`,
      '--btn-color': userDefinedColor().length > 0 ? null : getColor(),
      '--btn-background': userDefinedBackground().length > 0 ? null : `rgb(var(--arc-color-${this.color}))`,
    };

    const interior = html`
      <slot name="prefix"></slot>
      <slot id="label"></slot>
      <slot name="suffix"></slot>
      ${this.loading ? html`<arc-icon id="loader" name="refresh" spinning></arc-icon>` : null}
    `;

    return html`
      ${this.href
        ? html`
            <a
              id="button"
              style=${styleMap(btnStyles)}
              href=${this.href}
              .target="${ifDefined(this.target)}"
              .download="${ifDefined(this.download)}"
              .rel="${ifDefined(this.target && 'noreferrer noopener')}"
              role="button"
              aria-disabled="${this.disabled ? 'true' : 'false'}"
              tabindex="${this.disabled ? '-1' : '0'}"
              @click=${this.handleClick}
              >${interior}</a
            >
          `
        : html`
            <button
              id="button"
              style=${styleMap(btnStyles)}
              ?disabled=${this.disabled}
              type=${this.submit ? 'submit' : 'button'}
              @click=${this.handleClick}
            >
              ${interior}
            </button>
          `}
    `;
  }
}
