import { css, unsafeCSS, html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

import { BUTTON_TYPES, BUTTON_COLORS, BUTTON_SIZES } from './constants/ButtonConstants.js';

export class ArcButton extends LitElement {
  static tag = 'arc-button';

  static styles = css`
    :host {
      display: inline-block;
      cursor: pointer;
      width: auto;
      --min-width: 0;
    }

    :host *, :host ::before, :host ::after {
      box-sizing: inherit;
    }

    #button {
      min-height: 100%;
      min-width: var(--min-width);
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--btn-color);
      background-color: var(--btn-background);
      border: none;
      border-radius: var(--arc-border-radius-medium);
      box-shadow: var(--arc-box-shadow);
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

    /* Disabled */
    :host([disabled]) #button {
      opacity: 0.5;
      box-shadow: none;
      cursor: default;
    }

    /* Hover */
    :host(:not([type='${unsafeCSS(BUTTON_TYPES.tab)}']):not([type='${unsafeCSS(BUTTON_TYPES.outlined)}']):not([disabled])) #button:hover {
      background-image: linear-gradient(var(--arc-hover-dark) 0 0);
    }

    /* Sizes */
    :host([size='${unsafeCSS(BUTTON_SIZES.small)}']) #button {height: var(--arc-input-height-small);}

    :host([size='${unsafeCSS(BUTTON_SIZES.small)}']) span {padding: 0 var(--arc-spacing-small);}

    :host([size='${unsafeCSS(BUTTON_SIZES.medium)}']) #button {height: var(--arc-input-height-medium);}

    :host([size='${unsafeCSS(BUTTON_SIZES.medium)}']) span {padding: 0 var(--arc-spacing-medium);}

    :host([size='${unsafeCSS(BUTTON_SIZES.large)}']) #button {height: var(--arc-input-height-large);}

    :host([size='${unsafeCSS(BUTTON_SIZES.large)}']) span {padding: 0 var(--arc-spacing-large);}

    /* Radius */
    :host([type='${unsafeCSS(BUTTON_TYPES.tile)}']) #button {border-radius: 0;}

    :host([type='${unsafeCSS(BUTTON_TYPES.pill)}'][size='${unsafeCSS(BUTTON_SIZES.small)}']) #button {border-radius: var(--arc-input-height-small);}

    :host([type='${unsafeCSS(BUTTON_TYPES.pill)}'][size='${unsafeCSS(BUTTON_SIZES.medium)}']) #button {border-radius: var(--arc-input-height-medium);}

    :host([type='${unsafeCSS(BUTTON_TYPES.pill)}'][size='${unsafeCSS(BUTTON_SIZES.large)}']) #button {border-radius: var(--arc-input-height-large);}

    /* Outlined */
    :host([type='${unsafeCSS(BUTTON_TYPES.outlined)}']) #button {
      border: var(--arc-border-width) var(--arc-border-style) currentColor;
      background-color: transparent;
      box-shadow: none;
    }

    /* Outlined - Hover */
    :host([type='${unsafeCSS(BUTTON_TYPES.outlined)}']:not([disabled])) #button:hover {
      background-color: currentColor;
      background-image: linear-gradient(var(--arc-hover-light) 0 0);
    }

    /* Tab */
    :host([type='${unsafeCSS(BUTTON_TYPES.tab)}']) #button {
      background: none;
      border-radius: 0;
      box-shadow: none;
    }
    /* Tab - Active */
    :host([type='${unsafeCSS(BUTTON_TYPES.tab)}']:not([disabled])[active]) #button {
      border-bottom: var(--arc-border-width) var(--arc-border-style) currentColor;
    }
    /* Tab - Hover */
    :host([type='${unsafeCSS(BUTTON_TYPES.tab)}']:not([disabled])) #button:hover {
      background-color: currentColor;
      background-image: linear-gradient(var(--arc-hover-light) 0 0);
    }
  `;

  /** @type { 'contained' | 'tile' | 'outlined' | 'pill' | 'tab' } */
  @property({ type: String, reflect: true })
  type: string = BUTTON_TYPES.contained;

  /** @type { 'default' | 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' } */
  @property({ type: String, reflect: true })
  color: string = BUTTON_COLORS.default;

  /** @type { 'small' | 'medium' | 'large' } */
  @property({type: String, reflect: true })
  size: string = BUTTON_SIZES.medium;

  @property({type: Boolean, reflect: true})
  active: boolean = false;

  @property({type: Boolean, reflect: true})
  disabled: boolean = false;

  @property()
  href: string = '';

  @query('#button')
  button!: HTMLSpanElement;

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
          return this.color === BUTTON_COLORS.primary || this.color === BUTTON_COLORS.secondary
            ? 'rgb(var(--arc-container-color))'
            : 'rgb(var(--arc-input-color))'
        }
      }
    }

    const styles = {
      '--btn-color': userDefinedColor().length > 0 ? null : getColor(),
      '--btn-background': userDefinedBackground().length > 0 ? null : `rgb(var(--arc-color-${this.color}))`
    };

    return html`
      ${this.href && !this.disabled
      ? html`<a id='button' style=${styleMap(styles)} href='${this.href}' rel='noreferrer noopener' tabindex='-1'><span><slot></slot></span></a>`
      : html`<button id='button' style=${styleMap(styles)} tabindex='-1'><span><slot></slot></span></button>`
    }
    `;
  }
}
