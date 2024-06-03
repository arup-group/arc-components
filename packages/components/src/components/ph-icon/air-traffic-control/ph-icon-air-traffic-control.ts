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
@customElement('ph-icon-air-traffic-control')
export default class PhIconAirTrafficControl extends LitElement {
  /** @internal */
  static tag = 'ph-icon-air-traffic-control';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M229.11,62.82A16,16,0,0,0,216,56H136V24h16a8,8,0,0,0,0-16H104a8,8,0,0,0,0,16h16V56H40A16,16,0,0,0,25,77.47l26.19,72a16,16,0,0,0,15,10.53H96v64a8,8,0,0,0,16,0V160h32v64a8,8,0,0,0,16,0V160h29.82a16,16,0,0,0,15-10.53l26.19-72A16,16,0,0,0,229.11,62.82ZM110.68,144,97.58,72h60.84l-13.1,72ZM40,72H81.32l13.09,72H66.18Zm149.82,72H161.59l13.09-72H216Z"/>`;

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
        ${PhIconAirTrafficControl.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-air-traffic-control': PhIconAirTrafficControl;
  }
}
