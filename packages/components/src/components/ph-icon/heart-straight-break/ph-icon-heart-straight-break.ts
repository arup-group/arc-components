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
@customElement('ph-icon-heart-straight-break')
export default class PhIconHeartStraightBreak extends LitElement {
  /** @internal */
  static tag = 'ph-icon-heart-straight-break';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M223,57a58.1,58.1,0,0,0-82-.06L128,69.47,115,56.91a58,58,0,0,0-82,82.05l89.37,90.66a8,8,0,0,0,11.4,0L223,139A58.09,58.09,0,0,0,223,57Zm-11.36,70.76L128,212.6,44.29,127.68a42,42,0,1,1,59.41-59.4l.1.1,12.67,12.19-10,9.65a8,8,0,0,0-.11,11.42L132.69,128l-10.35,10.35a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0,0-11.31L123.42,96.09,152.2,68.38l.11-.1a42,42,0,1,1,59.37,59.44Z"/>`;

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
        ${PhIconHeartStraightBreak.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-heart-straight-break': PhIconHeartStraightBreak;
  }
}
