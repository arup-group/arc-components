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
@customElement('ph-icon-circuitry')
export default class PhIconCircuitry extends LitElement {
  /** @internal */
  static tag = 'ph-icon-circuitry';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM88,160a8,8,0,1,1-8,8A8,8,0,0,1,88,160ZM48,48H80v97.38a24,24,0,1,0,16,0V115.31l48,48V208H48ZM208,208H160V160a8,8,0,0,0-2.34-5.66L96,92.69V48h32V72a8,8,0,0,0,2.34,5.66l16,16A23.74,23.74,0,0,0,144,104a24,24,0,1,0,24-24,23.74,23.74,0,0,0-10.34,2.35L144,68.69V48h64V208ZM168,96a8,8,0,1,1-8,8A8,8,0,0,1,168,96Z"/>`;

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
        ${PhIconCircuitry.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-circuitry': PhIconCircuitry;
  }
}
