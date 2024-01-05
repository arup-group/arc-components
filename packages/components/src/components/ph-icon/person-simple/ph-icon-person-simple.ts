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
@customElement('ph-icon-person-simple')
export default class PhIconPersonSimple extends LitElement {
  /** @internal */
  static tag = 'ph-icon-person-simple';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M128,80A32,32,0,1,0,96,48,32,32,0,0,0,128,80Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,128,32ZM230.86,132.12a8,8,0,0,1-11,2.74c-.35-.21-35.11-20.59-83.88-22.67V149l62,69.73a8,8,0,1,1-12,10.62L128,164,70,229.31a8,8,0,1,1-12-10.62L120,149V112.18c-49,2.08-83.52,22.46-83.88,22.68a8,8,0,1,1-8.23-13.72C29.6,120.11,70.45,96,128,96s98.4,24.11,100.12,25.14A8,8,0,0,1,230.86,132.12Z"/>`;

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
        ${PhIconPersonSimple.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-person-simple': PhIconPersonSimple;
  }
}
