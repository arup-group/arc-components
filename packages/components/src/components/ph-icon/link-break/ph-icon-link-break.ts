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
@customElement('ph-icon-link-break')
export default class PhIconLinkBreak extends LitElement {
  /** @internal */
  static tag = 'ph-icon-link-break';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M190.63,65.37a32,32,0,0,0-45.19-.06L133.79,77.52a8,8,0,0,1-11.58-11l11.72-12.29a1.59,1.59,0,0,1,.13-.13,48,48,0,0,1,67.88,67.88,1.59,1.59,0,0,1-.13.13l-12.29,11.72a8,8,0,0,1-11-11.58l12.21-11.65A32,32,0,0,0,190.63,65.37ZM122.21,178.48l-11.65,12.21a32,32,0,0,1-45.25-45.25l12.21-11.65a8,8,0,0,0-11-11.58L54.19,133.93a1.59,1.59,0,0,0-.13.13,48,48,0,0,0,67.88,67.88,1.59,1.59,0,0,0,.13-.13l11.72-12.29a8,8,0,1,0-11.58-11ZM208,152H184a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16ZM48,104H72a8,8,0,0,0,0-16H48a8,8,0,0,0,0,16Zm112,72a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V184A8,8,0,0,0,160,176ZM96,80a8,8,0,0,0,8-8V48a8,8,0,0,0-16,0V72A8,8,0,0,0,96,80Z"/>`;

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
        ${PhIconLinkBreak.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-link-break': PhIconLinkBreak;
  }
}
