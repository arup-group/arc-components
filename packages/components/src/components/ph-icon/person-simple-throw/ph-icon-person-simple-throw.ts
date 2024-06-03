/* GENERATED FILE */
import { html, svg, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styleMap } from 'lit/directives/style-map.js';
import {
  FONT_SIZES,
  FontSize,
} from '../../../internal/constants/styleConstants.js';
import styles from '../../icon/icon.styles.js';

/**
 * @cssproperty --icon-color - Set the color of the icon.
 *
 * @ssr - True
 */
@customElement('ph-icon-person-simple-throw')
export default class PhIconPersonSimpleThrow extends LitElement {
  /** @internal */
  static tag = 'ph-icon-person-simple-throw';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M128,88A32,32,0,1,0,96,56,32,32,0,0,0,128,88Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,128,40ZM48,96a16,16,0,1,1,16,16A16,16,0,0,1,48,96Zm174.24,14.61A8,8,0,0,1,211,111.87c-1.15-.89-23.71-17.7-59.32.61a214.93,214.93,0,0,1-3,30.35l32.43,27a8,8,0,0,1,2.47,8.68l-16,48a8,8,0,0,1-15.18-5.06l14.27-42.82-22.08-18.4a141.86,141.86,0,0,1-5.1,14.33c-13.75,32.74-38.38,54.63-73.2,65.08a8,8,0,0,1-4.6-15.32c60.68-18.21,71.14-72.22,73.42-101.65C108,139.88,86.57,144,72.36,144a59.59,59.59,0,0,1-19.67-3.27A8,8,0,0,1,56,125.4a7.82,7.82,0,0,1,3.31.73s26.76,10.68,72.19-20.2c52.29-35.54,88-7.77,89.51-6.57A8,8,0,0,1,222.24,110.61Z"/>`;

  /** An alternate description to use for accessibility. If omitted, the icon will be ignored by assistive devices. */
  @property({ type: String }) label: string;

  /** Set the size of the icon. */
  @property({ type: String, reflect: true }) size: FontSize = FONT_SIZES.medium;

  /** Set the rotation of the icon. */
  @property({ type: Number }) rotation: 0 | 90 | 180 | 270 = 0;

  protected render() {
    return html`
      <svg
        id="main"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        role=${ifDefined(this.label ? 'img' : undefined)}
        aria-label=${ifDefined(this.label || undefined)}
        aria-hidden=${ifDefined(this.label ? undefined : 'true')}
        style=${styleMap({
          transform: this.rotation ? `rotate(${this.rotation}deg)` : null,
          height: `var(--arc-font-size-${this.size})`,
          width: `var(--arc-font-size-${this.size})`,
        })}
      >
        ${PhIconPersonSimpleThrow.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-person-simple-throw': PhIconPersonSimpleThrow;
  }
}
