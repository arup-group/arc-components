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
@customElement('ph-icon-microsoft-powerpoint-logo')
export default class PhIconMicrosoftPowerpointLogo extends LitElement {
  /** @internal */
  static tag = 'ph-icon-microsoft-powerpoint-logo';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M96,96H80a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0v-8h8a24,24,0,0,0,0-48Zm0,32H88V112h8a8,8,0,0,1,0,16ZM136,24A104.33,104.33,0,0,0,54,64H40A16,16,0,0,0,24,80v96a16,16,0,0,0,16,16H54A104,104,0,1,0,136,24Zm87.63,96H160V80a16,16,0,0,0-16-16V40.37A88.13,88.13,0,0,1,223.63,120ZM128,40.37V64H75.63A88.36,88.36,0,0,1,128,40.37ZM40,80H144v47.9a.51.51,0,0,0,0,.2V176H40Zm88,112v23.63A88.36,88.36,0,0,1,75.63,192Zm16,23.63V192a16,16,0,0,0,16-16V136h63.63A88.13,88.13,0,0,1,144,215.63Z"/>`;

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
        ${PhIconMicrosoftPowerpointLogo.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-microsoft-powerpoint-logo': PhIconMicrosoftPowerpointLogo;
  }
}
