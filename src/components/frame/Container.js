import { LitElement, html, css } from 'lit';

import { themeConstants } from './Constants/ThemeConstants.js';

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
        color: var(--arc-color-default);
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
    this.theme = null;
  }

  connectedCallback() {
    super.connectedCallback();

    if (this.theme) {
      this.setTheme();
    }
  }

  setTheme() {
    // Check if the given theme exists in the themeConstants
    const themeExists = Object.prototype.hasOwnProperty.call(
      themeConstants,
      this.theme
    );

    if (themeExists) {
      const classList = Array.from(this.classList);
      const themeClasses = classList.filter(
        name => name.search('arc-theme-[a-z]*') > -1
      );
      this.classList.remove(...themeClasses);

      // Fixed theme
      if (themeConstants[this.theme] !== themeConstants.auto) {
        this.classList.add(themeConstants[this.theme]);
        return;
      }

      // Calculate theme based on time
      const currentDate = new Date();
      const currentTime = currentDate.getHours();

      // Show Dark theme between 19:00 and 07:00
      if (currentTime >= 19 || currentTime < 7) {
        this.classList.add(themeConstants.dark);
      } else {
        this.classList.add(themeConstants.light);
      }
    }
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
