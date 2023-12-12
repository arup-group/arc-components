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
 */
@customElement('ph-icon-hand-pointing')
export default class PhIconHandPointing extends LitElement {
  /** @internal */
  static tag = 'ph-icon-hand-pointing';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M188,88a27.86,27.86,0,0,0-13.35,3.39A28,28,0,0,0,136,74.7V44a28,28,0,0,0-56,0v80l-3.82-6.13A28,28,0,0,0,27.73,146l4.67,8.23C66.81,214.89,81.05,240,128,240a88.1,88.1,0,0,0,88-88V116A28,28,0,0,0,188,88Zm12,64a72.08,72.08,0,0,1-72,72c-37.63,0-47.84-18-81.68-77.68l-4.69-8.27,0-.05A12,12,0,0,1,46,121.61a11.88,11.88,0,0,1,6-1.6,12,12,0,0,1,10.41,6,1.76,1.76,0,0,0,.14.23l18.67,30A8,8,0,0,0,96,152V44a12,12,0,0,1,24,0v68a8,8,0,0,0,16,0V100a12,12,0,0,1,24,0v20a8,8,0,0,0,16,0v-4a12,12,0,0,1,24,0Z"/>`;

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
        ${PhIconHandPointing.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-hand-pointing': PhIconHandPointing;
  }
}
