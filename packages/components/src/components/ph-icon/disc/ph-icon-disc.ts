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
@customElement('ph-icon-disc')
export default class PhIconDisc extends LitElement {
  /** @internal */
  static tag = 'ph-icon-disc';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm39.2,96a39.77,39.77,0,0,0-5.84-14l34.23-34.24a87.54,87.54,0,0,1,20,48.28ZM152,128a24,24,0,1,1-24-24A24,24,0,0,1,152,128Zm-24,88A88,88,0,1,1,184.28,60.4L150,94.64A40,40,0,1,0,167.2,136h48.43A88.11,88.11,0,0,1,128,216Z"/>`;

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
        ${PhIconDisc.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-disc': PhIconDisc;
  }
}
