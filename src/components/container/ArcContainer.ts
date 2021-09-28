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
        --bottom-height: 3.5rem;
      }

      #main {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        background: rgb(var(--arc-background-color));
        color: rgb(var(--arc-font-color));
      }

      ::slotted(*),
      #bottom {
        background: rgb(var(--arc-container-color));
      }

      #container {
        flex: 1 1 100%;
        display: flex;
        padding: var(--arc-spacing-medium);
      }

      ::slotted(arc-sidebar) {
        margin-right: var(--arc-spacing-medium);
        transition: all var(--arc-transition-slow), background 1ms;
      }

      ::slotted(arc-content) {
        flex: 1 1 100%;
      }

      #bottom {
        height: var(--bottom-height);
      }

      ::slotted(arc-bottombar),
      #bottom {
        display: none;
      }

      /* Phone */
      @media (max-width: 40rem) {
        #container {
          padding: 0;
        }

        ::slotted(arc-sidebar) {
          width: 0 !important;
          margin-right: 0;
          transform: translateX(-16rem);
        }

        ::slotted(arc-bottombar),
        #bottom {
          display: block;
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
          <slot name='content'></slot>
        </div>
        <slot name='bottom'>
          <arc-bottombar id='bottom'>DEFAULT BOTTOM BAR</arc-bottombar>
        </slot>
      </main>
    `;
  }
}
