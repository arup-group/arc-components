import { css, html, LitElement, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';

import { CONTAINER_THEMES } from './constants/ContainerConstants.js';
import { DateUtils } from '../../utils/date-utils.js';

export class ArcContainer extends LitElement {
  static tag = 'arc-container';

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
      color: var(--arc-color-default);
    }

    ::slotted(*),
    #bottom {
      background: var(--arc-container-color);
    }

    ::slotted(arc-navbar),
    ::slotted(arc-bottombar),
    #bottom {
      height: var(--navbar-height);
    }

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
