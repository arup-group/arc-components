import { LitElement, html, css } from 'lit';

export class Container extends LitElement {
  static get tag() {
    return 'arc-container';
  }

  static get properties() {
    return {};
  }

  static get styles() {
    return css`
      .main {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      }
    `;
  }

  render() {
    return html`
      <main class="main">
        <slot id="nav" name="nav"></slot>
        <slot id="side" name="side"></slot>
        <slot id="content" name="content"></slot>
      </main>
    `;
  }
}

customElements.define(Container.tag, Container);
