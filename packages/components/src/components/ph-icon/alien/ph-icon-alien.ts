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
@customElement('ph-icon-alien')
export default class PhIconAlien extends LitElement {
  /** @internal */
  static tag = 'ph-icon-alien';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M128,16a96.11,96.11,0,0,0-96,96c0,24,12.56,55.06,33.61,83,21.18,28.15,44.5,45,62.39,45s41.21-16.81,62.39-45c21.05-28,33.61-59,33.61-83A96.11,96.11,0,0,0,128,16Zm49.61,169.42C160.24,208.49,140.31,224,128,224s-32.24-15.51-49.61-38.58C59.65,160.5,48,132.37,48,112a80,80,0,0,1,160,0C208,132.37,196.35,160.5,177.61,185.42ZM120,136A40,40,0,0,0,80,96a16,16,0,0,0-16,16,40,40,0,0,0,40,40A16,16,0,0,0,120,136ZM80,112a24,24,0,0,1,24,24h0A24,24,0,0,1,80,112Zm96-16a40,40,0,0,0-40,40,16,16,0,0,0,16,16,40,40,0,0,0,40-40A16,16,0,0,0,176,96Zm-24,40a24,24,0,0,1,24-24A24,24,0,0,1,152,136Zm0,48a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,184Z"/>`;

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
        ${PhIconAlien.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-alien': PhIconAlien;
  }
}
