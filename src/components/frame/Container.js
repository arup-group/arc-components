import { LitElement, html, css } from 'lit';

export class Container extends LitElement {
  static get tag() {
    return 'arc-container';
  }

  static get properties() {
    return {
      theme: { type: String },
    };
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
        background: var(--arc-background-color);
        color: var(--arc-text-color);
      }

      ::slotted(*),
      #bottom {
        background: var(--arc-container-color);
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
        transition: var(--arc-transition-slow);
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
          width: 0;
          margin-right: 0;
          transform: translateX(-16em);
        }

        ::slotted(arc-bottombar),
        #bottom {
          display: block;
        }
      }
    `;
  }

  constructor() {
    super();
    this.theme = 'auto';
  }

  connectedCallback() {
    super.connectedCallback();
    this.setTheme();
  }

  setTheme() {
    if (this.theme !== 'auto') {
      return;
    }
    const currentDate = new Date();
    const time = currentDate.getHours();

    // eslint-disable-next-line no-console
    console.log(time);
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
