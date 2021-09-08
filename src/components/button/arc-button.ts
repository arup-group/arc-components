import { css, html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import {styleMap} from 'lit/directives/style-map.js';

@customElement('arc-button')
export class ArcButton extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      cursor: pointer;
      width: auto;
      --min-width: 6rem;
    }

    :host *, :host ::before, :host ::after {
      box-sizing: inherit;
    }

    #button {
      min-height: 100%;
      width: 100%;
      border: none;
      border-radius: var(--arc-border-radius-medium);
      display: flex;
      align-items: center;
      justify-content: center;
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
      transition: var(--arc-transition-fast) background-color, var(--arc-transition-fast) color, var(--arc-transition-fast) border, var(--arc-transition-fast) box-shadow;
    }

    :host([type='tab']) #button {
      color: var(--arc-color-secondary);
      min-width: var(--min-width);
    }

    /* Sizes */
    :host([size='small']) #button {
      height: var(--arc-input-height-small);
    }

    :host([size='small']) span {
      padding: 0 var(--arc-spacing-small);
    }

    :host([size='medium']) #button {
      height: var(--arc-input-height-medium);
    }

    :host([size='medium']) span {
      padding: 0 var(--arc-spacing-medium);
    }

    :host([size='large']) #button {
      height: var(--arc-input-height-large);
    }

    :host([size='large']) span {
      padding: 0 var(--arc-spacing-large);
    }

    /* Disabled */
    :host([disabled]) #button {
      color: var(--arc-color-disabled) !important;
      background-color: var(--arc-background-disabled) !important;
      opacity: 0.5;
      box-shadow: none;
      cursor: not-allowed;
    }

    /* Active */
    :host([active]:not([disabled])) #button.tab {
      border-bottom: solid 2px currentColor;
    }

    /* Hover */
    :host(:not([disabled])) #button:hover {
      background-color: var(--arc-button-color-hover);
    }
  `;

  /** @type { 'default' | 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' } */
  @property({ type: String, reflect: true })
  type: string = 'default';

  /** @type { 'small' | 'medium' | 'large' } */
  @property({type: String, reflect: true })
  size: string = 'medium';

  @property({type: Boolean, reflect: true})
  rounded: boolean = false;

  @property({type: Boolean, reflect: true})
  outlined: boolean = false;

  @property({type: Boolean, reflect: true})
  active: boolean = false;

  @property({type: Boolean, reflect: true})
  disabled: boolean = false;

  @property()
  href = null;

  @query('#button')
  button!: HTMLSpanElement;

  render() {
    const styles = {
      backgroundColor: `var(--arc-color-${this.type})`,
      color: this.type !== 'default' && this.type !== 'tab' ? 'white' : null
    };

    return html`
      ${this.href && !this.disabled
        ? html`<a id='button' style=${styleMap(styles)} href='${this.href}' tabindex="-1"><span><slot></slot></span></a>`
        : html`<button id='button' style=${styleMap(styles)} tabindex="-1"><span><slot></slot></span></button>`
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-button': ArcButton
  }
}
