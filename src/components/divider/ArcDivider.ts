import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import componentStyles from '../../styles/component.styles.js';

import { DIVIDER_TYPES } from './constants/DividerConstants.js';

export default class ArcDivider extends LitElement {
  static tag = 'arc-divider';

  static styles = [
    componentStyles,
    css`
      #main {
        background: inherit;
        padding: calc(var(--arc-spacing-normal) / 2) 0;
      }

      hr {
        margin: 0;
        border: 0;
      }
    `,
  ];

  /** @type { 'dotted' | 'dashed' | 'solid' } */
  @property({
    type: String,
    reflect: true,
  })
  type: string = DIVIDER_TYPES.solid;

  render() {
    const styles = {
      borderTop: `var(--arc-border-width) ${this.type} rgb(var(--arc-color-default))`,
    };

    return html`
      <div id="main">
        <hr id="border" style="${styleMap(styles)}" />
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-divider': ArcDivider;
  }
}
