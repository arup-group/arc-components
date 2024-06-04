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
@customElement('ph-icon-fish-simple')
export default class PhIconFishSimple extends LitElement {
  /** @internal */
  static tag = 'ph-icon-fish-simple';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M168,76a12,12,0,1,1-12-12A12,12,0,0,1,168,76Zm31.54,90.77c-27.06,27-69.42,38.35-126.32,33.95q2.39,17.84,6.7,37.57a8,8,0,0,1-6.11,9.52,7.81,7.81,0,0,1-1.72.19,8,8,0,0,1-7.8-6.29q-4.91-22.43-7.39-42.64-20.2-2.49-42.61-7.39a8,8,0,0,1,3.42-15.63q19.71,4.3,37.54,6.7c-4.39-56.89,7-99.24,34-126.29C133,12.58,202.43,24.9,215.9,27.82A16.07,16.07,0,0,1,228.18,40.1C231.1,53.57,243.43,123,199.54,166.77Zm-15-7.89A104.12,104.12,0,0,1,97.13,71.41C75.56,95.76,67,133.67,71.42,184.55,122.31,189,160.22,180.44,184.57,158.88Zm28-115.39a167.84,167.84,0,0,0-49.25-2.78c-20.24,2-37.4,7.83-51.25,17.46A88,88,0,0,0,197.83,144c9.62-13.85,15.49-31,17.46-51.25A169,169,0,0,0,212.54,43.49Z"/>`;

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
        ${PhIconFishSimple.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-fish-simple': PhIconFishSimple;
  }
}
