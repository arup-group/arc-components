import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('arc-tab')
export class ArcTab extends LitElement {
  static styles = css``;

  @property() active: boolean = false;

  @property() disabled: boolean = false;

  render() {
    return html`
      <main id="main">
        <slot></slot>
      </main>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-tab': ArcTab
  }
}
