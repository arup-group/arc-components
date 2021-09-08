import { css, html, LitElement, PropertyValues } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

@customElement('arc-button')
export class ArcButton extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      cursor: pointer;
      width: auto;
    }

    :host *, :host ::before, :host ::after {
      box-sizing: inherit;
    }

    #button {
      min-height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--arc-font-button);
      font-size: var(--arc-font-size-small);
      font-weight: var(--arc-font-weight-semibold);
      cursor: inherit;
      line-height: normal;
      outline: none;
      padding: 0;
      -webkit-appearance: none;
      white-space: nowrap;
      transition: var(--arc-transition-fast) background-color, var(--arc-transition-fast) color, var(--arc-transition-fast) border, var(--arc-transition-fast) box-shadow;
    }

    /* Types */
    #button.normal {
      color: var(--arc-button-color);
      background: var(--arc-button-background-color);
      border: none;
    }

    #button.tab {
      color: var(--arc-tab-color);
      background: none;
      border: none;
      text-decoration: none;
      user-select: none;
    }

    /* Sizes */
    #button.small {
      height: var(--arc-input-height-small);
    }

    #button.medium {
      height: var(--arc-input-height-medium);
    }

    #button.large {
      height: var(--arc-input-height-large);
    }

    #button.small > span {
      padding: 0 var(--arc-spacing-small);
    }

    #button.medium > span {
      padding: 0 var(--arc-spacing-medium);
    }

    #button.large > span {
      padding: 0 var(--arc-spacing-large);
    }

    /* Disabled */
    :host([disabled]) #button {
      color: var(--arc-button-color-disabled);
      opacity: 0.5;
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

  /** @type { 'normal' | 'tab' } */
  @property({type: String, reflect: true })
  type: string = 'normal';

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

  updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('type')) {
      this.button.classList.add(this.type);
    }
    if (changedProperties.has('size')) {
      this.button.classList.add(this.size);
    }
  }

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
