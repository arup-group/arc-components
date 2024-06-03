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
@customElement('ph-icon-microsoft-outlook-logo')
export default class PhIconMicrosoftOutlookLogo extends LitElement {
  /** @internal */
  static tag = 'ph-icon-microsoft-outlook-logo';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M88,96a32,32,0,1,0,32,32A32,32,0,0,0,88,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,88,144Zm128-40h-8V48a16,16,0,0,0-16-16H112A16,16,0,0,0,96,48V64H40A16,16,0,0,0,24,80v96a16,16,0,0,0,16,16H72v16a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V120A16,16,0,0,0,216,104ZM112,48h80v77.24l-40,28.89V80a16,16,0,0,0-16-16H112ZM40,176V80h96v96H40Zm48,32V192h48a16,16,0,0,0,16-16v-2.13L199.26,208Zm128-7.65L165.66,164,216,127.65Z"/>`;

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
        ${PhIconMicrosoftOutlookLogo.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-microsoft-outlook-logo': PhIconMicrosoftOutlookLogo;
  }
}
