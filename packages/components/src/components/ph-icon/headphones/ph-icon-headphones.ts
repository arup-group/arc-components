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
@customElement('ph-icon-headphones')
export default class PhIconHeadphones extends LitElement {
  /** @internal */
  static tag = 'ph-icon-headphones';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M201.89,62.66A103.43,103.43,0,0,0,128.79,32H128A104,104,0,0,0,24,136v56a24,24,0,0,0,24,24H64a24,24,0,0,0,24-24V152a24,24,0,0,0-24-24H40.36A88,88,0,0,1,128,48h.67a87.71,87.71,0,0,1,87,80H192a24,24,0,0,0-24,24v40a24,24,0,0,0,24,24h16a24,24,0,0,0,24-24V136A103.41,103.41,0,0,0,201.89,62.66ZM64,144a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V144Zm152,48a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8h24Z"/>`;

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
        ${PhIconHeadphones.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-headphones': PhIconHeadphones;
  }
}
