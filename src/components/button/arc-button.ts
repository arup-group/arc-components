import { css, html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

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
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--btn-color);
      background-color: var(--btn-background-color);
      border: var(--arc-border-width) solid var(--btn-border-color);
      border-radius: var(--arc-border-radius-medium);
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

    /* Contained */
    :host([type='contained']) #button {
      color: var(--arc-white-000);
      border: none;
      box-shadow: var(--arc-box-shadow);
      background-color: var(--arc-color-default);
    }
    :host([type='contained'][color='default']) #button {
      color: rgba(var(--arc-color-default), 1.5);
    }
    :host([type='contained'][color='primary']) #button {
      background-color: var(--arc-color-primary);
    }
    :host([type='contained'][color='secondary']) #button {
      background-color: var(--arc-color-secondary);
    }
    :host([type='contained'][color='error']) #button {
      background-color: var(--arc-color-error);
    }
    :host([type='contained'][color='warning']) #button {
      background-color: var(--arc-color-warning);
    }
    :host([type='contained'][color='info']) #button {
      background-color: var(--arc-color-info);
    }
    :host([type='contained'][color='success']) #button {
      background-color: var(--arc-color-success);
    }

    /* */

    /* Tab */
    :host([type='tab']) #button {
      border: none;
      border-radius: 0;
      color: var(--arc-color-secondary);
      min-width: var(--min-width);
    }
    /* Tab - Active */
    :host([type='tab'][active]:not([disabled])) #button {
      border-bottom: solid 2px currentColor;
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
      color: var(--arc-color-disabled);
      background-color: var(--arc-background-disabled);
      opacity: 0.5;
      box-shadow: none;
      cursor: not-allowed;
    }

    /* Hover */
    :host([type='contained']:not([disabled])) #button:hover {
      background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);
    }
    :host(:not([type='contained']):not([disabled])) #button:hover {
      background-color: currentColor;
      -moz-box-shadow: inset 0 0 100px 100px rgba(var(--arc-red-060), 0.7);
      -webkit-box-shadow: inset 0 0 100px 100px rgba(var(--arc-red-060), 0.7);
      box-shadow: inset 0 0 100px 100px rgba(var(--arc-red-060), 0.7);
    }
  `;

  /** @type { 'contained' | 'outlined' | 'tab' } */
  @property({ type: String, reflect: true })
  type: string = 'contained';

  /** @type { 'default' | 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' } */
  @property({ type: String, reflect: true })
  color: string = 'default';

  /** @type { 'small' | 'medium' | 'large' } */
  @property({type: String, reflect: true })
  size: string = 'medium';

  @property({type: Boolean, reflect: true})
  active: boolean = false;

  @property({type: Boolean, reflect: true})
  disabled: boolean = false;

  @property()
  href = null;

  @query('#button')
  button!: HTMLSpanElement;

  render() {
    return html`
      ${this.href && !this.disabled
        ? html`<a id='button' href='${this.href}' tabindex="-1"><span><slot></slot></span></a>`
        : html`<button id='button' tabindex="-1"><span><slot></slot></span></button>`
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-button': ArcButton
  }
}
