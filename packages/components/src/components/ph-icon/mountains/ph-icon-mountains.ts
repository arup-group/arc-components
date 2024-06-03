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
@customElement('ph-icon-mountains')
export default class PhIconMountains extends LitElement {
  /** @internal */
  static tag = 'ph-icon-mountains';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M164,80a28,28,0,1,0-28-28A28,28,0,0,0,164,80Zm0-40a12,12,0,1,1-12,12A12,12,0,0,1,164,40Zm90.88,155.92-54.56-92.08A15.87,15.87,0,0,0,186.55,96h0a15.85,15.85,0,0,0-13.76,7.84L146.63,148l-44.84-76.1a16,16,0,0,0-27.58,0L1.11,195.94A8,8,0,0,0,8,208H248a8,8,0,0,0,6.88-12.08ZM88,80l23.57,40H64.43ZM22,192l33-56h66l18.74,31.8,0,0L154,192Zm150.57,0-16.66-28.28L186.55,112,234,192Z"/>`;

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
        ${PhIconMountains.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-mountains': PhIconMountains;
  }
}
