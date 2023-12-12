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
@customElement('ph-icon-shirt-folded')
export default class PhIconShirtFolded extends LitElement {
  /** @internal */
  static tag = 'ph-icon-shirt-folded';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M200,48H179.31L165.66,34.34A8.07,8.07,0,0,0,160.05,32H96a8,8,0,0,0-5.66,2.34L76.69,48H56A16,16,0,0,0,40,64V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V64A16,16,0,0,0,200,48Zm-38.76,4.56L168,59.31V112L138.57,86.56ZM88,59.31l6.76-6.75,22.67,34L88,112ZM120,216H56V64H72v48a15.85,15.85,0,0,0,9.21,14.49A16.1,16.1,0,0,0,88,128a15.89,15.89,0,0,0,10.2-3.73.52.52,0,0,0,.11-.1L120,105.48ZM111,48h34.1L128,73.58ZM200,216H136V105.48l21.65,18.7a.52.52,0,0,0,.11.1A15.89,15.89,0,0,0,168,128a16.1,16.1,0,0,0,6.83-1.54A15.85,15.85,0,0,0,184,112V64h16Z"/>`;

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
        ${PhIconShirtFolded.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-shirt-folded': PhIconShirtFolded;
  }
}
