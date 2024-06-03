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
@customElement('ph-icon-currency-ngn')
export default class PhIconCurrencyNgn extends LitElement {
  /** @internal */
  static tag = 'ph-icon-currency-ngn';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M216,136H200V120h16a8,8,0,0,0,0-16H200V46a8,8,0,0,0-16,0v58H119.42L70.31,41.08A8,8,0,0,0,56,46v58H40a8,8,0,0,0,0,16H56v16H40a8,8,0,0,0,0,16H56v58a8,8,0,0,0,16,0V152h64.58l49.11,62.92A8,8,0,0,0,192,218a7.8,7.8,0,0,0,2.6-.44A8,8,0,0,0,200,210V152h16a8,8,0,0,0,0-16Zm-32-16v16H144.39L131.9,120ZM72,69.25,99.12,104H72ZM72,136V120h39.61l12.49,16Zm112,50.75L156.88,152H184Z"/>`;

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
        ${PhIconCurrencyNgn.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-currency-ngn': PhIconCurrencyNgn;
  }
}
