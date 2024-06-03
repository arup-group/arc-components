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
@customElement('ph-icon-pencil-simple-slash')
export default class PhIconPencilSimpleSlash extends LitElement {
  /** @internal */
  static tag = 'ph-icon-pencil-simple-slash';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M53.92,34.62A8,8,0,1,0,42.08,45.38l48.2,53L36.68,152A15.89,15.89,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31l50.4-50.39,47.69,52.46a8,8,0,1,0,11.84-10.76ZM92.69,208H48V163.31l53.06-53,42.56,46.81ZM227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L118.33,70.36a8,8,0,0,0,11.32,11.31L136,75.31,180.69,120l-9,9A8,8,0,0,0,183,140.34L227.32,96A16,16,0,0,0,227.32,73.37ZM192,108.69,147.32,64l24-24L216,84.69Z"/>`;

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
        ${PhIconPencilSimpleSlash.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-pencil-simple-slash': PhIconPencilSimpleSlash;
  }
}
