import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { componentStyles } from '../styles/component.styles.js';

import { DIVIDER_TYPES } from './constants/DividerConstants.js';

export class ArcDivider extends LitElement {
  static tag = 'arc-divider';

  static styles = [
    componentStyles,
    css`
      #main {
        background: inherit;
      }

      #main.border {
        padding: calc(var(--arc-spacing-normal) / 2) 0;
      }

      #border {
        margin: 0;
        border: 0;
      }

      #borderless {
        margin: var(--arc-spacing-normal) 0;
      }
    `
  ]

  /** @type { 'dotted' | 'dashed' | 'solid' | 'none' } */
  @property({
    type: String,
  })
  type: string = DIVIDER_TYPES.none;

  render() {
    const classes = {
      border: this.type !== DIVIDER_TYPES.none,
    }

    const styles = {
      border: `var(--arc-border-width) ${this.type} rgb(var(--arc-color-default))`
    }

    return html`
      <div id='main' class='${classMap(classes)}'>
        ${this.type !== DIVIDER_TYPES.none ? html`
          <hr id='border' style='${styleMap(styles)}'>
        ` : html`
          <div id='borderless'></div>
        `}
      </div>
    `
  }
}
