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
@customElement('ph-icon-crown')
export default class PhIconCrown extends LitElement {
  /** @internal */
  static tag = 'ph-icon-crown';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M243.84,76.19a12.08,12.08,0,0,0-13.34-1.7l-50.21,25L138.37,29.86a12.11,12.11,0,0,0-20.74,0L75.71,99.52l-50.19-25A12.11,12.11,0,0,0,8.62,89.12l37,113.36a8,8,0,0,0,11.68,4.4C57.55,206.73,83.12,192,128,192s70.45,14.73,70.68,14.87a8,8,0,0,0,11.71-4.39l37-113.33A12.06,12.06,0,0,0,243.84,76.19ZM198,188.83C186,183.74,162.08,176,128,176s-58,7.74-70,12.83L26.71,93l45.07,22.47a12.17,12.17,0,0,0,15.78-4.59L128,43.66l40.44,67.2a12.18,12.18,0,0,0,15.77,4.59L229.29,93Zm-22.13-32a8,8,0,0,1-7.87,6.61,8.36,8.36,0,0,1-1.4-.12,228.2,228.2,0,0,0-77.22,0,8,8,0,0,1-2.78-15.76,244.42,244.42,0,0,1,82.78,0A8,8,0,0,1,175.88,156.8Z"/>`;

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
        ${PhIconCrown.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-crown': PhIconCrown;
  }
}
