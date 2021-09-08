import { css, html, LitElement, PropertyValues } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

@customElement('arc-button')
export class ArcButton extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      width: auto;
      --min-width: 7.5rem;
    }

    :host *, :host ::before, :host ::after {
      box-sizing: inherit;
    }

    #button {
      min-height: 100%;
      min-width: var(--min-width);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--arc-button-font-family);
      font-size: var(--arc-button-font-size);
      font-weight: var(--arc-button-font-weight);
      cursor: pointer;
      line-height: normal;
      outline: none;
      padding: var(--arc-spacing-normal);
      -webkit-appearance: none;
      white-space: nowrap;
      transition: var(--arc-transition-fast) background-color, var(--arc-transition-fast) color, var(--arc-transition-fast) border, var(--arc-transition-fast) box-shadow;
    }

    #button.normal {
      border: none;
      color: var(--arc-button-color);
    }

    #button.primary {

    }

    #button.text {

    }

    #button.tile {

    }

    #button.tab {
      color: var(--arc-tab-color);
      text-decoration: none;
      user-select: none;
      background: none;
      border: none;
    }

    span {
      padding: 0 var(--arc-spacing-medium);
    }

    /* Disabled */
    :host([disabled]:not([disabled='false'])) #button {
      color: var(--arc-button-color-disabled);
      opacity: 0.5;
      cursor: not-allowed;
    }

    /* Active */
    :host([active]:not([active='false'])[disabled='false']) #button.tab {
      border-bottom: solid 2px currentColor;
    }

    /* Hover */
    :host(:not([disabled='true'])) #button:hover {
      background-color: var(--arc-button-color-hover);
    }
  `;

  /** @type { 'normal' | 'primary' | 'text' | 'tile' | 'tab' } */
  @property({type: String, reflect: true })
  type: string = 'normal';

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
