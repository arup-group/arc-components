import { LitElement, html, css } from 'lit';

export class Container extends LitElement {
  static get tag() {
    return 'arc-container';
  }

  static get properties() {
    return {};
  }

  static get slots() {
    return ['nav', 'side', '', 'bottom'];
  }

  static get styles() {
    return css`
      :host {
        --navbar-height: 3.5rem;
        --sidebar-width: 23rem;
      }

      #main {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        background: var(--arc-grey-010);
      }

      /* TODO: Set to arc-white-000 */
      ::slotted(*),
      #bottom {
        background: var(--arc-red-010);
      }

      /* Navbar / Bottom */
      ::slotted(arc-navbar),
      ::slotted(arc-bottombar),
      #bottom {
        height: var(--navbar-height);
      }

      /* Content */
      #container {
        flex: 1 1 100%;
        display: flex;
        padding: var(--arc-spacing-medium);
      }

      ::slotted(arc-sidebar) {
        width: var(--sidebar-width);
        margin-right: var(--arc-spacing-medium);
      }

      ::slotted(arc-content) {
        flex: 1 1 100%;
      }

      ::slotted(arc-bottombar),
      #bottom {
        display: none;
      }

      /* Medium devices (tablets, 768px)  */
      @media (max-width: 48em) {
        #container {
          padding: 0;
        }

        ::slotted(arc-sidebar) {
          display: none;
        }

        ::slotted(arc-bottombar),
        #bottom {
          display: block;
        }
      }
    `;
  }

  render() {
    return html`
      <main id="main">
        <slot id="nav" name="nav"></slot>
        <div id="container">
          <slot name="side"></slot>
          <slot></slot>
        </div>
        <slot name="bottom">
          <arc-bottombar id="bottom">DEFAULT BOTTOM BAR</arc-bottombar>
        </slot>
      </main>
    `;
  }
}

customElements.define(Container.tag, Container);
