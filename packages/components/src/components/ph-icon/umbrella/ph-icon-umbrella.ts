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
@customElement('ph-icon-umbrella')
export default class PhIconUmbrella extends LitElement {
  /** @internal */
  static tag = 'ph-icon-umbrella';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M240,126.63A112.44,112.44,0,0,0,51.75,53.75a111.56,111.56,0,0,0-35.7,72.88A16,16,0,0,0,32,144h88v56a32,32,0,0,0,64,0,8,8,0,0,0-16,0,16,16,0,0,1-32,0V144h88a16,16,0,0,0,16-17.37ZM32,128l0,0a96.15,96.15,0,0,1,76.2-85.89C96.48,58,81.85,86.11,80.17,128Zm64.15,0c1.39-30.77,10.53-52.81,18.3-66.24A106.44,106.44,0,0,1,128,43.16a106.31,106.31,0,0,1,13.52,18.6C154.8,84.7,159,109.28,159.82,128Zm79.65,0c-1.68-41.89-16.31-70-28-85.94A96.07,96.07,0,0,1,224,128Z"/>`;

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
        ${PhIconUmbrella.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-umbrella': PhIconUmbrella;
  }
}
