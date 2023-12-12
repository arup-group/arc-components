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
@customElement('ph-icon-feather')
export default class PhIconFeather extends LitElement {
  /** @internal */
  static tag = 'ph-icon-feather';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M221.28,34.75a64,64,0,0,0-90.49,0L60.69,104A15.9,15.9,0,0,0,56,115.31v73.38L26.34,218.34a8,8,0,0,0,11.32,11.32L67.32,200H140.7A15.92,15.92,0,0,0,152,195.32l0,0,69.23-70A64,64,0,0,0,221.28,34.75ZM142.07,46.06A48,48,0,0,1,211.79,112H155.33l34.35-34.34a8,8,0,0,0-11.32-11.32L120,124.69V67.87ZM72,115.35l32-31.67v57l-32,32ZM140.7,184H83.32l56-56h56.74Z"/>`;

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
        ${PhIconFeather.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-feather': PhIconFeather;
  }
}
