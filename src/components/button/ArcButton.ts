import { css, html, LitElement, unsafeCSS } from 'lit';
import { property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styleMap } from 'lit/directives/style-map.js';
import { BUTTON_TYPES, BUTTON_COLORS, BUTTON_SIZES, } from './constants/ButtonConstants.js';
import componentStyles from '../../styles/component.styles.js';

import '../spinner/arc-spinner.js';

export default class ArcButton extends LitElement {
  static tag = 'arc-button';

  static styles = [
    componentStyles,
    css`
      :host {
        display: inline-block;
        width: auto;
        cursor: pointer;
        --min-width: 0;
      }

      #button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-width: var(--min-width);
        min-height: 100%;
        border: none;
        border-radius: var(--arc-border-radius-medium);
        font-family: var(--arc-font-button);
        font-size: var(--arc-font-size-small);
        font-weight: var(--arc-font-weight-semibold);
        line-height: normal;
        text-decoration: none;
        user-select: none;
        white-space: nowrap;
        vertical-align: middle;
        padding: 0;
        cursor: inherit;
        color: var(--btn-color);
        background-color: var(--btn-background);
        gap: var(--arc-spacing-small);
        box-shadow: var(--arc-input-box-shadow);
        outline: none;
        -webkit-appearance: none;
      }

      /* Pill */
      :host([type='${unsafeCSS(BUTTON_TYPES.pill)}'][size='${unsafeCSS(BUTTON_SIZES.small)}']) #button {
        border-radius: var(--arc-input-height-small);
      }

      :host([type='${unsafeCSS(BUTTON_TYPES.pill)}'][size='${unsafeCSS(BUTTON_SIZES.medium)}']) #button {
        border-radius: var(--arc-input-height-medium);
      }

      :host([type='${unsafeCSS(BUTTON_TYPES.pill)}'][size='${unsafeCSS(BUTTON_SIZES.large)}']) #button {
        border-radius: var(--arc-input-height-large);
      }

      /* Tile */
      :host([type='${unsafeCSS(BUTTON_TYPES.tile)}']) #button {
        border-radius: 0;
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
        border-bottom: calc(var(--arc-border-width) * 2) var(--arc-border-style) currentColor;
      }

      /* Outlined */
      :host([type='${unsafeCSS(BUTTON_TYPES.outlined)}']) #button {
        border: var(--arc-border-width) var(--arc-border-style) currentColor;
        background-color: transparent;
        box-shadow: none;
      }

      /* Default - Hover & Focus */
      :host(:not([type='${unsafeCSS(BUTTON_TYPES.tab)}']):not([type='${unsafeCSS(BUTTON_TYPES.outlined)}']):not([disabled]):not([loading])) #button:hover,
      :host(:not([type='${unsafeCSS(BUTTON_TYPES.tab)}']):not([type='${unsafeCSS(BUTTON_TYPES.outlined)}']):not([disabled]):not([loading])) #button:focus-visible {
        background-image: linear-gradient(var(--arc-hover-dark) 0 0);
      }

      /* Tab & Outlined - Hover & Focus */
      :host([type='${unsafeCSS(BUTTON_TYPES.tab)}']:not([disabled]):not([loading])) #button:hover,
      :host([type='${unsafeCSS(BUTTON_TYPES.tab)}']:not([disabled]):not([loading])) #button:focus-visible,
      :host([type='${unsafeCSS(BUTTON_TYPES.outlined)}']:not([disabled]):not([loading])) #button:hover,
      :host([type='${unsafeCSS(BUTTON_TYPES.outlined)}']:not([disabled]):not([loading])) #button:focus-visible {
        background-color: currentColor;
        background-image: linear-gradient(var(--arc-hover-lighter) 0 0);
      }

      /* Default - Mouse down */
      :host(:not([type='${unsafeCSS(BUTTON_TYPES.tab)}']):not([type='${unsafeCSS(BUTTON_TYPES.outlined)}']):not([disabled]):not([loading])) #button:active {
        background-image: linear-gradient(var(--arc-hover-darker) 0 0);
      }

      /* Tab & Outlined - Mouse down */
      :host([type='${unsafeCSS(BUTTON_TYPES.tab)}']:not([disabled]):not([loading])) #button:active,
      :host([type='${unsafeCSS(BUTTON_TYPES.outlined)}']:not([disabled]):not([loading])) #button:active {
        background-image: linear-gradient(var(--arc-hover-light) 0 0);
      }

      /* Disabled */
      :host([disabled]) #button {
        opacity: 0.5;
        box-shadow: none;
        cursor: not-allowed;
      }

      /* Loading */
      :host([loading]) #prefix,
      :host([loading]) #label,
      :host([loading]) #suffix {
        visibility: hidden;
      }

      #loader {
        position: absolute;
      }
      
      /* Prevent click events from firing when a user clicks on a slot */
      slot {
        pointer-events:none
      }
    `,
  ];

  @query('#button') button: HTMLButtonElement | HTMLLinkElement;

  /** @type { 'contained' | 'tile' | 'outlined' | 'pill' | 'tab' } */
  @property({ type: String, reflect: true }) type = BUTTON_TYPES.contained;

  /** @type { 'default' | 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' } */
  @property({ type: String, reflect: true }) color = BUTTON_COLORS.default;

  /** @type { 'small' | 'medium' | 'large' } */
  @property({ type: String, reflect: true }) size = BUTTON_SIZES.medium;

  /** @type { '_blank' | '_parent' | '_self' | '_top' } */
  @property() target: '_blank' | '_parent' | '_self' | '_top';

  @property() href: string;

  @property() download: string;

  @property({ type: Boolean, reflect: true }) active = false;

  @property({ type: Boolean, reflect: true }) disabled = false;

  @property({ type: Boolean, reflect: true }) loading = false;

  @property({ type: Boolean, reflect: true }) submit = false;

  /** Simulates a click on the button. */
  click() {
    this.button.click();
  }

  handleClick(event: MouseEvent) {
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
          return this.color === BUTTON_COLORS.default
            ? 'rgb(var(--arc-font-color))'
            : 'var(--btn-background)';
        }
        case BUTTON_TYPES.tab: {
          return this.color === BUTTON_COLORS.default
            ? 'rgb(var(--arc-color-primary))'
            : 'var(--btn-background)';
        }
        default: {
          return this.color === BUTTON_COLORS.primary ||
            this.color === BUTTON_COLORS.secondary
            ? 'rgb(var(--arc-container-color))'
            : 'rgb(var(--arc-input-color))';
        }
      }
    };

    const btnStyles = {
      height: `var(--arc-input-height-${this.size})`,
      padding: `0 var(--arc-spacing-${this.size})`,
      '--btn-color': userDefinedColor().length > 0 ? null : getColor(),
      '--btn-background':
        userDefinedBackground().length > 0
          ? null
          : `rgb(var(--arc-color-${this.color}))`,
    };

    const interior = html`
      <slot id='prefix' name="prefix"></slot>
      <slot id="label"></slot>
      <slot id='suffix' name="suffix"></slot>
      ${this.loading ? html`<arc-spinner id="loader" style="--stroke-color: ${getColor()}"></arc-spinner>` : null}
    `;

    return html`
      ${this.href
        ? html`
          <a
            id="button"
            style=${styleMap(btnStyles)}
            href=${ifDefined(this.href)}
            target=${ifDefined(this.target)}
            download=${ifDefined(this.download)}
            rel=${ifDefined(this.target ? 'noreferrer noopener' : undefined)}
            role="button"
            aria-disabled=${this.disabled ? 'true' : 'false'}
            tabindex=${this.disabled ? '-1' : '0'}
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
        `
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-button': ArcButton;
  }
}
