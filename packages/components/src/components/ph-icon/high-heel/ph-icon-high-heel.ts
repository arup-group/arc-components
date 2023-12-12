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
@customElement('ph-icon-high-heel')
export default class PhIconHighHeel extends LitElement {
  /** @internal */
  static tag = 'ph-icon-high-heel';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M231,164.19,180,152.7,69.66,42.34a8,8,0,0,0-11.56.26C36.11,66.64,24,97,24,128v72a16,16,0,0,0,16,16H72a16,16,0,0,0,16-16V151.06c2.49,1.45,4.94,3,7.34,4.64a112.45,112.45,0,0,1,40.55,50.39A15.9,15.9,0,0,0,150.72,216H240a16,16,0,0,0,16-16v-4.73A31.72,31.72,0,0,0,231,164.19ZM72,200H40V136.29a110.88,110.88,0,0,1,32,7.12Zm168,0H150.68a128.36,128.36,0,0,0-46.27-57.46,126.9,126.9,0,0,0-64.12-22.26A110.67,110.67,0,0,1,64.46,59.78L170.34,165.66a8,8,0,0,0,3.9,2.14l53.24,12A15.81,15.81,0,0,1,240,195.31Z"/>`;

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
        ${PhIconHighHeel.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-high-heel': PhIconHighHeel;
  }
}
