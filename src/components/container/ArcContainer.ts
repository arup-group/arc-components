import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { isNight } from '../../internal/theme.js';
import { watch } from '../../internal/watch.js';
import componentStyles from '../../styles/component.styles.js';
import { mobileBreakpoint } from '../../utilities/ui-utils.js';
import { CONTAINER_THEMES, ContainerTheme } from './constants/ContainerConstants.js';

import '../bottombar/arc-bottombar.js';
import '../icon-button/arc-icon-button.js';

export default class ArcContainer extends LitElement {
  static tag = 'arc-container';

  static styles = [
    componentStyles,
    css`
      #main {
        height: 100%;
        display: flex;
        flex-direction: column;
        background: rgb(var(--arc-background-color));
        color: rgb(var(--arc-font-color));
      }

      #container {
        flex: 1 1 100%;
        display: flex;
        overflow: hidden;
        gap: 0;
        padding: 0;
      }

      ::slotted(arc-sidebar) {
        display: none;
      }

      #content {
        flex: 1 1 100%;
        overflow: auto;
        background: rgb(var(--arc-container-color));
      }

      arc-bottombar,
      ::slotted(arc-bottombar) {
        display: block;
      }

      /* Medium devices and up */
      @media (min-width: ${mobileBreakpoint}rem) {
        #container:not(.fullscreen) {
          gap: var(--arc-spacing-normal);
          padding: var(--arc-spacing-normal) var(--arc-spacing-medium);
        }

        ::slotted(arc-sidebar) {
          display: block;
        }

        arc-bottombar,
        ::slotted(arc-bottombar) {
          display: none;
        }
      }
    `,
  ];

  @property({ type: String, reflect: true }) theme: ContainerTheme = CONTAINER_THEMES.auto;

  @property({ type: Boolean }) fullscreen: boolean = false;

  @watch('theme')
  handleThemeChange() {
    if (CONTAINER_THEMES[this.theme] === CONTAINER_THEMES.auto) {
      this.theme = this.getTheme();
    }
  }

  getTheme = (date?: Date) => (isNight(date) ? CONTAINER_THEMES.dark : CONTAINER_THEMES.light);

  render() {
    return html`
      <div id="main">
        <slot id="nav" name="nav"></slot>
        <div id="container" class=${classMap({ fullscreen: this.fullscreen })}>
          <slot name="side"></slot>
          <div id="content"><slot></slot></div>
        </div>
        <slot name="bottom">
          <arc-bottombar>
            <arc-icon-button name="home" href="/" label="Go home">Home</arc-icon-button>
          </arc-bottombar>
        </slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-container': ArcContainer;
  }
}
