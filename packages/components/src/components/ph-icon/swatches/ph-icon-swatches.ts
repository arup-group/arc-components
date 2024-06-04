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
@customElement('ph-icon-swatches')
export default class PhIconSwatches extends LitElement {
  /** @internal */
  static tag = 'ph-icon-swatches';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M80,180a12,12,0,1,1-12-12A12,12,0,0,1,80,180Zm152-23.81V208a16,16,0,0,1-16,16H68a46.36,46.36,0,0,1-7.94-.68,44,44,0,0,1-35.43-50.95l25-143.13a15.94,15.94,0,0,1,18.47-13L122.84,26a16,16,0,0,1,12.92,18.52l-12.08,69L191.49,89a16,16,0,0,1,20.45,9.52L231,150.69A18.35,18.35,0,0,1,232,156.19ZM95,184.87,120,41.74,65.46,32l-25,143.1A28,28,0,0,0,62.9,207.57,27.29,27.29,0,0,0,83.46,203,27.84,27.84,0,0,0,95,184.87ZM108.78,195,216,156.11,196.92,104,120.5,131.7l-9.78,55.92A44.63,44.63,0,0,1,108.78,195ZM216,173.12,119.74,208H216Z"/>`;

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
        ${PhIconSwatches.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-swatches': PhIconSwatches;
  }
}
