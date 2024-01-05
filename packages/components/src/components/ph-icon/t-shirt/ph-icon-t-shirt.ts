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
@customElement('ph-icon-t-shirt')
export default class PhIconTShirt extends LitElement {
  /** @internal */
  static tag = 'ph-icon-t-shirt';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M247.59,61.22,195.83,33A8,8,0,0,0,192,32H160a8,8,0,0,0-8,8,24,24,0,0,1-48,0,8,8,0,0,0-8-8H64a8,8,0,0,0-3.84,1L8.41,61.22A15.76,15.76,0,0,0,1.82,82.48l19.27,36.81A16.37,16.37,0,0,0,35.67,128H56v80a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V128h20.34a16.37,16.37,0,0,0,14.58-8.71l19.27-36.81A15.76,15.76,0,0,0,247.59,61.22ZM35.67,112a.62.62,0,0,1-.41-.13L16.09,75.26,56,53.48V112ZM184,208H72V48h16.8a40,40,0,0,0,78.38,0H184Zm36.75-96.14a.55.55,0,0,1-.41.14H200V53.48l39.92,21.78Z"/>`;

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
        ${PhIconTShirt.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-t-shirt': PhIconTShirt;
  }
}
