import { css, html, LitElement, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { CONTAINER_THEMES } from './constants/ContainerConstants.js';
import { DateUtils } from '../../utils/date-utils.js';

@customElement('arc-container')
export class ArcContainer extends LitElement {
  static styles = css`
    :host {
      --navbar-height: 3.5rem;
      --sidebar-width: 23rem;
    }

    #main {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      background: var(--arc-background-color);
      color: var(--arc-color-default) !important;
    }

    ::slotted(*),
    #bottom {
      background: var(--arc-container-color);
    }

    ::slotted(arc-navbar),
    ::slotted(arc-bottombar),
    #bottom {
      min-height: var(--navbar-height);
    }

    #container {
      flex: 1 1 100%;
      display: flex;
      padding: min(5vh, var(--arc-spacing-medium));
    }

    ::slotted(arc-sidebar) {
      width: var(--sidebar-width);
      margin-right: min(5vh, var(--arc-spacing-medium));
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
    @media (max-width: 40em) {
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

  /** @type { 'auto' | 'dark' | 'light' } */
  @property({
    type: String,
    reflect: true,
  })
  theme: string = this.getTheme();

  updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('theme')) {
      if (CONTAINER_THEMES[this.theme] === CONTAINER_THEMES.auto) {
        this.theme = this.getTheme();
      }
    }
  }

  // eslint-disable-next-line class-methods-use-this
  getTheme(date?: Date) {
    return DateUtils.isNight(date)
      ? CONTAINER_THEMES.dark
      : CONTAINER_THEMES.light;
  }

  render() {
    return html`
      <main id="main">
        <slot id="nav" name="nav"></slot>
        <div id="container">
          <slot name="side"></slot>
          <slot name="content"></slot>
        </div>
        <slot name="bottom">
          <arc-bottombar id="bottom">DEFAULT BOTTOM BAR</arc-bottombar>
        </slot>
      </main>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-container': ArcContainer
  }
}
