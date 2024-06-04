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
@customElement('ph-icon-pen-nib-straight')
export default class PhIconPenNibStraight extends LitElement {
  /** @internal */
  static tag = 'ph-icon-pen-nib-straight';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M222.33,123.89c-.06-.13-.12-.26-.19-.38L192,69.9V32a16,16,0,0,0-16-16H80A16,16,0,0,0,64,32V69.92L33.86,123.51c-.07.12-.13.25-.2.38a15.94,15.94,0,0,0,1.46,16.57l.11.14,86.44,112.28a8,8,0,0,0,12.67,0L220.77,140.6l.11-.14A15.92,15.92,0,0,0,222.33,123.89ZM176,32V64H80V32ZM128,144a12,12,0,1,1,12-12A12,12,0,0,1,128,144Zm8,80.5V158.83a28,28,0,1,0-16,0v65.66L48,131,76.69,80H179.32L208,131Z"/>`;

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
        ${PhIconPenNibStraight.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-pen-nib-straight': PhIconPenNibStraight;
  }
}
