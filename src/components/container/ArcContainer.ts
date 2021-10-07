import { css, html, LitElement, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import { componentStyles } from '../styles/component.styles.js';

import { CONTAINER_THEMES } from './constants/ContainerConstants.js';
import { DateUtils } from '../../utils/date-utils.js';

export class ArcContainer extends LitElement {
  static tag = 'arc-container';

  static styles = [
    componentStyles,
    css`
      :host {
        --bottom-height: var(--arc-bottom-height);
      }

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

      ::slotted(arc-bottombar),
      #bottom {
        display: block;
        height: var(--bottom-height);
        background: rgb(var(--arc-container-color));
      }

      /* Medium devices (tablets, 48rem and up) */
      @media (min-width: 48rem) {
        #container {
          gap: var(--arc-spacing-normal);
          padding: var(--arc-spacing-normal) var(--arc-spacing-medium);
        }

        ::slotted(arc-sidebar) {
          display: block;
        }

        ::slotted(arc-bottombar),
        #bottom {
          display: none;
        }
      }
    `,
  ];

  /** @type { 'auto' | 'dark' | 'light' } */
  @property({
    type: String,
    reflect: true,
  })
  theme: string = 'auto';

  @property()
  slottedContent = false;

  updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('theme')) {
      if (CONTAINER_THEMES[this.theme] === CONTAINER_THEMES.auto) {
        this.theme = this.getTheme();
      }
    }
  }

  getTheme = (date?: Date) => DateUtils.isNight(date) ? CONTAINER_THEMES.dark : CONTAINER_THEMES.light

  render() {
    return html`
      <main id='main'>
        <slot id='nav' name='nav'></slot>
        <div id='container'>
          <slot name='side'></slot>
          <div id='content'><slot></slot></div>
        </div>
        <slot name='bottom'>
          <arc-bottombar id='bottom'>DEFAULT BOTTOM BAR</arc-bottombar>
        </slot>
      </main>
    `;
  }
}
