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
@customElement('ph-icon-circle-half-tilt')
export default class PhIconCircleHalfTilt extends LitElement {
  /** @internal */
  static tag = 'ph-icon-circle-half-tilt';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M201.54,54.46A104,104,0,0,0,54.46,201.54,104,104,0,0,0,201.54,54.46ZM184,195.87a87.16,87.16,0,0,1-16,10.5V99.31l16-16Zm-80-32.56,16-16v68.28a88.37,88.37,0,0,1-16-3ZM88,206.37a87,87,0,0,1-16.3-10.76L88,179.31Zm48-75.06,16-16v97.32a88.37,88.37,0,0,1-16,3ZM40,128A88,88,0,0,1,184.3,60.39L60.38,184.31A87.34,87.34,0,0,1,40,128Zm160,50.59V77.41a88,88,0,0,1,0,101.18Z"/>`;

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
        ${PhIconCircleHalfTilt.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-circle-half-tilt': PhIconCircleHalfTilt;
  }
}
