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
      :host {
        --navbar-height: 3.5rem;
        --navbar-width: 23rem;
      }
      
      #main {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        background: var(--arc-grey-010);
      }
      
      ::slotted(*) {
        /* TODO: Use arc-white-000 once testing is done */
        background: var(--arc-red-010);
      }
      
      /* Navbar */
      ::slotted(arc-navbar) {
        height: var(--navbar-height);
      }
      
      /* Content */
      #container {
        flex: 1 1 100%;
        display: flex;
        padding: var(--arc-spacing-medium);
      }
      ::slotted(arc-sidebar) {
        width: 0;
        transition: all var(--arc-transition-slow);
      }
      ::slotted(arc-content) {
        flex: 1 1 100%;
      }
      
      /* Media Queries */
      /* Small devices (landscape phones, 576px and up)  */
      @media (min-width: 36em) { 
        ::slotted(arc-sidebar) {
          width: var(--navbar-width);
          margin-right: var(--arc-spacing-medium);
        }
      }
      /* Medium devices (tablets, 768px and up)  */
      @media (min-width: 48em) { ... }
      /* Large devices (desktops, 992px and up)  */
      @media (min-width: 62em) { ... }
      /* X-Large devices (large desktops, 1200px and up)  */
      @media (min-width: 75em) { ... }
      /* XX-Large devices (larger desktops, 1400px and up)  */
      @media (min-width: 87.5em) { ... }
    `;
  }

  render() {
    return html`
      <main id="main">
        <slot id="nav" name="nav"></slot>
        <div id="container">
          <slot name="side"></slot>
          <slot name="content"></slot>
        </div>
      </main>
    `;
  }
}

customElements.define(Container.tag, Container);
