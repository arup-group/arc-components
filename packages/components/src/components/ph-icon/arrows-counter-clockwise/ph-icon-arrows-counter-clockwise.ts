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
@customElement('ph-icon-arrows-counter-clockwise')
export default class PhIconArrowsCounterClockwise extends LitElement {
  /** @internal */
  static tag = 'ph-icon-arrows-counter-clockwise';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M88,104H40a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V71.85C63.47,54.4,90.61,32,128,32c42.82,0,68.58,25.27,69.66,26.34a8,8,0,0,1-11.3,11.34C186.09,69.41,163.92,48,128,48,93,48,67.77,72.65,55.44,88H88a8,8,0,0,1,0,16Zm128,48H168a8,8,0,0,0,0,16h32.56C188.23,183.35,163,208,128,208c-35.92,0-58.09-21.41-58.36-21.68a8,8,0,0,0-11.3,11.34C59.42,198.73,85.18,224,128,224c37.39,0,64.53-22.4,80-39.85V208a8,8,0,0,0,16,0V160A8,8,0,0,0,216,152Z"/>`;

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
        ${PhIconArrowsCounterClockwise.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-arrows-counter-clockwise': PhIconArrowsCounterClockwise;
  }
}
