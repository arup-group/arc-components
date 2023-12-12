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
@customElement('ph-icon-arrow-elbow-left-up')
export default class PhIconArrowElbowLeftUp extends LitElement {
  /** @internal */
  static tag = 'ph-icon-arrow-elbow-left-up';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M232,192a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V67.31L37.66,101.66A8,8,0,0,1,26.34,90.34l48-48a8,8,0,0,1,11.32,0l48,48a8,8,0,0,1-11.32,11.32L88,67.31V184H224A8,8,0,0,1,232,192Z"/>`;

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
        ${PhIconArrowElbowLeftUp.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-arrow-elbow-left-up': PhIconArrowElbowLeftUp;
  }
}
