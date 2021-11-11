import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { classMap } from 'lit/directives/class-map.js';
import componentStyles from '../../styles/component.styles.js';

import { DEFAULT_PATH, ICON_SIZES } from './constants/IconConstants.js';

export default class ArcIcon extends LitElement {
  static tag = 'arc-icon';

  static styles = [
    componentStyles,
    css`
      :host {
        display: flex;
        --icon-color-primary: inherit;
        --icon-color-secondary: currentColor;
      }

      .icon {
        display: inline-block;
        color: var(--icon-color-primary);
        line-height: 1;
        flex-shrink: 0;
        max-width: initial;
      }

      .icon use {
        fill: var(--icon-color-secondary);
        stroke: var(--icon-color-secondary);
      }

      /* Caps/Corners */
      .icon use {
        --icon-stroke-linecap-butt: butt;
        stroke-miterlimit: 10;
        stroke-linecap: square;
        stroke-linejoin: miter;
      }

      .stroke-round use {
        --icon-stroke-linecap-butt: round;
        stroke-linecap: round;
        stroke-linejoin: round;
      }

      /* Animations */
      .spinning {
        animation: icon-spin var(--arc-transition-x-slow) infinite linear;
      }

      @keyframes icon-spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `,
  ];

  @property({ type: String, reflect: true }) name = 'fire';

  /** @type { 'small' | 'medium' | 'large' } */
  @property({ type: String, reflect: true }) size = ICON_SIZES.medium;

  /** @type { 0 | 90 | 180 | 270 } */
  @property({ type: Number }) rotation = 0;

  @property({ type: Boolean, reflect: true }) spinning = false;

  render() {
    const classes = {
      spinning: this.spinning,
    };

    const styles = {
      transform: this.rotation ? `rotate(${this.rotation}deg)` : null,
      height: `var(--arc-font-size-${this.size})`,
      width: `var(--arc-font-size-${this.size})`,
    };

    return html`
      <svg class="icon ${classMap(classes)}" style=${styleMap(styles)}>
        <use
          href="${DEFAULT_PATH}#arc-${this.name}"
          xlink:href="${DEFAULT_PATH}#arc-${this.name}"
        />
      </svg>
    `;
  }
}
