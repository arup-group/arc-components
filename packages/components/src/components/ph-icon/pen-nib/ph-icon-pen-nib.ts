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
@customElement('ph-icon-pen-nib')
export default class PhIconPenNib extends LitElement {
  /** @internal */
  static tag = 'ph-icon-pen-nib';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M240,100.68a15.86,15.86,0,0,0-4.69-11.31L166.63,20.68a16,16,0,0,0-22.63,0L115.57,49.11l-58,21.77A16.06,16.06,0,0,0,47.35,83.23L24.11,222.68A8,8,0,0,0,32,232a8.4,8.4,0,0,0,1.32-.11l139.44-23.24a16,16,0,0,0,12.35-10.17l21.77-58L235.31,112A15.87,15.87,0,0,0,240,100.68Zm-69.87,92.19L55.32,212l47.37-47.37a28,28,0,1,0-11.32-11.32L44,200.7,63.13,85.86,118,65.29,190.7,138ZM104,140a12,12,0,1,1,12,12A12,12,0,0,1,104,140Zm96-15.32L131.31,56l24-24L224,100.68Z"/>`;

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
        ${PhIconPenNib.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-pen-nib': PhIconPenNib;
  }
}
