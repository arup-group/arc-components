import { css, html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { isNight } from '../../internal/theme.js';
import { watch } from '../../internal/watch.js';
import { mobileBreakpoint } from "../../utilities/ui-utils.js";
import componentStyles from '../../styles/component.styles.js';
import { CONTAINER_THEMES, ContainerTheme } from './constants/ContainerConstants.js';
import { ICON_TYPES } from '../icon/constants/IconConstants.js';

import type ArcAccessibility from '../accessibility/ArcAccessibility.js';
import '../accessibility/arc-accessibility.js';
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

  @query('#main') container: ArcAccessibility;

  @query('#accessibility') accessibility: ArcAccessibility;

  @property({ type: String, reflect: true }) theme: ContainerTheme = CONTAINER_THEMES.auto;

  /* Hides the padding, margin and gap values */
  @property({ type: Boolean }) fullscreen: boolean = false;

  @watch('theme')
  handleThemeChange() {
    if (CONTAINER_THEMES[this.theme] === CONTAINER_THEMES.auto) {
      this.theme = this.getTheme();
    }
  }

  connectedCallback() {
    super.connectedCallback();

    /* Listen to keyboard input on the page */
    document.addEventListener('keypress', this.handleKeyDown.bind(this))
  }

  getTheme = (date?: Date) => (isNight(date) ? CONTAINER_THEMES.dark : CONTAINER_THEMES.light);

  /* Trigger the show event of the arc-accessibility component */
  showAccessibility() {
    this.accessibility.open = true;
  }

  handleKeyDown(event: KeyboardEvent) {
    /* Make sure that no input elements are focused */
    if (event.target !== document.body && event.target !== this) return;

    /* Toggle the accessibility panel */
    if (event.key === 'a') {
      this.accessibility.open = !this.accessibility.open;
    }
  }

  render() {
    return html`
      <div id="main">
        <slot id="nav" name="nav" @arc-show-accessibility="${this.showAccessibility}"></slot>
        <div id="container" class=${classMap({ 'fullscreen': this.fullscreen })}>
          <slot name="side"></slot>
          <div id="content"><slot></slot></div>
        </div>
        <arc-accessibility id="accessibility"></arc-accessibility>
        <slot name="bottom">
          <arc-bottombar>
            <arc-icon-button name=${ICON_TYPES.home} href="/" label="Go home">Home</arc-icon-button>
            <arc-icon-button name=${ICON_TYPES.accessibility} label="Open accessibility" @click="${this.showAccessibility}">Accessibility</arc-icon-button>
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
