import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { classMap } from 'lit/directives/class-map.js';
import { componentStyles } from '../../styles/component.styles.js';

import { ICON_SIZES } from './constants/IconConstants.js';

const arcIcons = new URL('../../../assets/icons.svg', import.meta.url).href;

export class ArcIcon extends LitElement {
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

  @property({ type: String, reflect: true })
  name: string = 'fire';

  /** @type { 'small' | 'medium' | 'large' } */
  @property({ type: String, reflect: true })
  size: string = ICON_SIZES.medium;

  /** @type { 0 | 90 | 180 | 270 } */
  @property({ type: Number })
  rotation: number = 0;

  @property({ type: Boolean, reflect: true })
  spinning: boolean = false;

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
        <use href="${arcIcons}#arc-${this.name}" xlink:href="${arcIcons}#arc-${this.name}" />
      </svg>
    `;
  }
}
