import { css, html, LitElement, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles.js';
import { isNight } from '../../utilities/date-utils.js';
import { CONTAINER_THEMES } from './constants/ContainerConstants.js';

import '../bottombar/arc-bottombar.js';
import '../icon-button/arc-icon-button.js';

export default class ArcContainer extends LitElement {
  static tag = 'arc-container';

  static styles = [
    componentStyles,
    css`
      #main {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        background: rgb(var(--arc-background-color));
        color: rgb(var(--arc-font-color));
      }

      #container {
        flex: 1 1 100%;
        display: flex;
        gap: 0;
        padding: 0;
      }

      ::slotted(arc-sidebar) {
        display: none;
      }

      #content {
        flex: 1 1 100%;
        background: rgb(var(--arc-container-color));
      }

      arc-bottombar,
      ::slotted(arc-bottombar) {
        display: block;
      }

      /* Medium devices (tablets, 48rem and up) */
      @media (min-width: 48rem) {
        #container {
          gap: var(--arc-spacing-small);
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

  /** @type { 'auto' | 'dark' | 'light' } */
  @property({ type: String, reflect: true }) theme = CONTAINER_THEMES.auto;

  updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('theme')) {
      if (CONTAINER_THEMES[this.theme] === CONTAINER_THEMES.auto) {
        this.theme = this.getTheme();
      }
    }
  }

  getTheme = (date?: Date) =>
    isNight(date) ? CONTAINER_THEMES.dark : CONTAINER_THEMES.light;

  render() {
    return html`
      <main id="main">
        <slot id="nav" name="nav"></slot>
        <div id="container">
          <slot name="side"></slot>
          <div id="content"><slot></slot></div>
        </div>
        <slot name="bottom">
          <arc-bottombar>
            <arc-icon-button name="home" href="/" label="Go home"
              >Home</arc-icon-button
            >
            <arc-icon-button name="settings" label="Edit settings"
              >Settings</arc-icon-button
            >
            <arc-icon-button name="accessibility" label="Accessibility control"
              >Accessibility</arc-icon-button
            >
          </arc-bottombar>
        </slot>
      </main>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-container': ArcContainer;
  }
}
