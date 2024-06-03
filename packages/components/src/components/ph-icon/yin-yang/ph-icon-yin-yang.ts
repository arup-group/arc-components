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
@customElement('ph-icon-yin-yang')
export default class PhIconYinYang extends LitElement {
  /** @internal */
  static tag = 'ph-icon-yin-yang';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM40,128a88.1,88.1,0,0,1,88-88,40,40,0,0,1,0,80A56,56,0,0,0,77.39,200,88,88,0,0,1,40,128Zm88,88a40,40,0,0,1,0-80,56,56,0,0,0,50.61-79.95A88,88,0,0,1,128,216Zm12-40a12,12,0,1,1-12-12A12,12,0,0,1,140,176ZM116,80a12,12,0,1,1,12,12A12,12,0,0,1,116,80Z"/>`;

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
        ${PhIconYinYang.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-yin-yang': PhIconYinYang;
  }
}
