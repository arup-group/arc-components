import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

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
      background: none;
      display: inline-flex;
      align-items: stretch;
      justify-content: center;
      border: none;
      outline: none;
      text-align: center;
      padding: var(--arc-spacing-normal);
      text-decoration: none;
      user-select: none;
      white-space: nowrap;
      vertical-align: middle;
      cursor: pointer;
      -webkit-appearance: none;
      z-index: 1;
      color: var(--arc-button-color);
      font-family: var(--arc-button-font-family);
      font-size: var(--arc-button-font-size);
      font-weight: var(--arc-button-font-weight);
    }

    #button > span {
      padding: 0 var(--arc-spacing-medium);
    }

    /* Disabled */
    :host([disabled]:not([disabled='false'])) #button {
      color: var(--arc-button-color-disabled);
      opacity: 0.5;
      cursor: not-allowed;
    }

    /* Active */
    :host([active]:not([active='false'])[disabled='false']) #button {
      border-bottom: solid 2px currentColor;
    }

    /* Hover */
    :host([disabled='false']) #button:hover {
      background-color: var(--arc-button-color-hover);
    }
  `;

  @property({
    converter: (attrValue: string | null) => attrValue === '',
    reflect: true
  }) active: boolean = false;

  @property({
    converter: (attrValue: string | null) => attrValue === '',
    reflect: true
  }) disabled: boolean = false;

  @property({reflect: true}) href: string = '';

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
