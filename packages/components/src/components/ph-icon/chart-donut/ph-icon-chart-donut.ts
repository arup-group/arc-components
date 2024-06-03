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
@customElement('ph-icon-chart-donut')
export default class PhIconChartDonut extends LitElement {
  /** @internal */
  static tag = 'ph-icon-chart-donut';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M137.39,24.06A16,16,0,0,0,120,40V80.67a15.86,15.86,0,0,0,13.25,15.76A32,32,0,1,1,96,129.68c-.41-8.22,1.27-15,5-20.26h0a15.86,15.86,0,0,0-1.69-20.47L71.69,60.68a16,16,0,0,0-23.63,1.1A103.6,103.6,0,0,0,55,202.05,103.24,103.24,0,0,0,128,232h1.49A104.3,104.3,0,0,0,232,129.48C232.75,75.18,191.19,28.88,137.39,24.06ZM60.32,71.94l27.61,28.19,0,.06A43.29,43.29,0,0,0,80.44,120H40.36A87.13,87.13,0,0,1,60.32,71.94ZM40.37,136h40.3A48,48,0,0,0,120,175.34v40.3A88,88,0,0,1,40.37,136Zm149.77,54.14A87.45,87.45,0,0,1,136,215.61V175.34a47.55,47.55,0,0,0,24.73-12.23A48,48,0,0,0,136,80.66L136,40c45.52,4.08,80.67,43.28,80,89.25A87.45,87.45,0,0,1,190.14,190.14Z"/>`;

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
        ${PhIconChartDonut.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-chart-donut': PhIconChartDonut;
  }
}
