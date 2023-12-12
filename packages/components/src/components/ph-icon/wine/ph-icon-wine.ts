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
@customElement('ph-icon-wine')
export default class PhIconWine extends LitElement {
  /** @internal */
  static tag = 'ph-icon-wine';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M205.33,95.67,183.56,21.74A8,8,0,0,0,175.89,16H80.11a8,8,0,0,0-7.67,5.74L50.67,95.67a63.46,63.46,0,0,0,17.42,64.67A87.39,87.39,0,0,0,120,183.63V224H88a8,8,0,1,0,0,16h80a8,8,0,1,0,0-16H136V183.63a87.41,87.41,0,0,0,51.91-23.29A63.46,63.46,0,0,0,205.33,95.67ZM86.09,32h83.82L190,100.19c.09.3.17.6.25.9-21.42,7.68-45.54-1.6-58.63-8.23C106.43,80.11,86.43,78.49,71.68,80.93ZM177,148.65a71.69,71.69,0,0,1-98,0,47.55,47.55,0,0,1-13-48.46l.45-1.52c12-4.06,31.07-5.14,57.93,8.47,11.15,5.65,29.16,12.85,48.43,12.85a68.64,68.64,0,0,0,19.05-2.6A47.2,47.2,0,0,1,177,148.65Z"/>`;

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
        ${PhIconWine.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-wine': PhIconWine;
  }
}
