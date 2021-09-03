import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('arc-tab')
export class ArcTab extends LitElement {
  static styles = css`
    :host {
      --min-height: 3rem;
      --width: 7.5rem;
    }

    .tab {
      min-height: var(--min-height);
      height: 100%;
      width: var(--width);
      background: none;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      outline: none;
      text-align: center;
      white-space: nowrap;
      cursor: pointer;
      -webkit-appearance: none;
      z-index: 1;
      color: var(--arc-button-color);
      font-family: var(--arc-button-font-family);
      font-size: var(--arc-button-font-size);
      font-weight: var(--arc-button-font-weight);
    }

    /* Disabled */
    :host([disabled]:not([disabled='false'])) .tab {
      opacity: 0.5;
      cursor: not-allowed;
    }

    /* Active */
    :host([active]:not([active='false'])[disabled='false']) .tab {
      color: var(--arc-button-color-active);
      border-bottom: solid 2px var(--arc-button-color-active);
    }

    /* Hover */
    .tab:hover {
      background-color: var(--arc-button-color-hover);
    }
  `;

  @property({reflect: true}) active: boolean = false;

  @property({reflect: true}) disabled: boolean = false;

  render() {
    return html`
      <button class='tab' tabindex="-1">
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-tab': ArcTab
  }
}
