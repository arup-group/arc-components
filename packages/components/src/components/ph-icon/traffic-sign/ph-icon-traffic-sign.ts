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
@customElement('ph-icon-traffic-sign')
export default class PhIconTrafficSign extends LitElement {
  /** @internal */
  static tag = 'ph-icon-traffic-sign';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M243.15,116.29,139.71,12.85a16.56,16.56,0,0,0-23.42,0L12.85,116.29a16.56,16.56,0,0,0,0,23.42L116.29,243.15h0a16.56,16.56,0,0,0,23.42,0L243.15,139.71a16.56,16.56,0,0,0,0-23.42Zm-11.31,12.1L128.4,231.84a.58.58,0,0,1-.8,0h0L24.16,128.39a.56.56,0,0,1,0-.78L127.6,24.16a.58.58,0,0,1,.8,0L231.84,127.61a.56.56,0,0,1,0,.78Zm-58.18-14a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L148.69,128H112a16,16,0,0,0-16,16v8a8,8,0,0,1-16,0v-8a32,32,0,0,1,32-32h36.69l-10.35-10.34a8,8,0,0,1,11.32-11.32Z"/>`;

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
        ${PhIconTrafficSign.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-traffic-sign': PhIconTrafficSign;
  }
}
