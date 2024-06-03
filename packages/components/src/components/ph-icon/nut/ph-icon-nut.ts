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
@customElement('ph-icon-nut')
export default class PhIconNut extends LitElement {
  /** @internal */
  static tag = 'ph-icon-nut';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M128,80a48,48,0,1,0,48,48A48.06,48.06,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm95.68-93.85L135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17h0a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,224,40,175.82V80.18L128,32l88,48.17v95.64Z"/>`;

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
        ${PhIconNut.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-nut': PhIconNut;
  }
}
