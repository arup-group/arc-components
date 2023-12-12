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
@customElement('ph-icon-wheelchair')
export default class PhIconWheelchair extends LitElement {
  /** @internal */
  static tag = 'ph-icon-wheelchair';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M255.59,189.47a8,8,0,0,0-10.12-5.06l-17.42,5.81-28.9-57.8A8,8,0,0,0,192,128H112V104h56a8,8,0,0,0,0-16H112V79a32,32,0,1,0-16,0V89.81A72,72,0,0,0,112,232c33.52,0,63.69-22.71,71.75-54a8,8,0,1,0-15.5-4C162.09,198,137.91,216,112,216A56,56,0,0,1,96,106.34V136a8,8,0,0,0,8,8h83.05l29.79,59.58a8,8,0,0,0,9.69,4l24-8A8,8,0,0,0,255.59,189.47ZM88,48a16,16,0,1,1,16,16A16,16,0,0,1,88,48Z"/>`;

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
        ${PhIconWheelchair.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-wheelchair': PhIconWheelchair;
  }
}
