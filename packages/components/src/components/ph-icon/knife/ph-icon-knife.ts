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
@customElement('ph-icon-knife')
export default class PhIconKnife extends LitElement {
  /** @internal */
  static tag = 'ph-icon-knife';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M231.81,32.19a28,28,0,0,0-39.67.07L18.27,210.6A8,8,0,0,0,22.2,224a154.93,154.93,0,0,0,35,4c33.42,0,66.88-10.88,98.33-32.21,31.75-21.53,50.15-45.85,50.92-46.88a8,8,0,0,0-.74-10.46l-18.74-18.76,45-48A28.08,28.08,0,0,0,231.81,32.19ZM189.22,144.63a225.51,225.51,0,0,1-43.11,38.18c-34.47,23.25-70,32.7-105.84,28.16l106.3-109ZM220.5,60.5l-.18.19-44.71,47.67L157.74,90.47l45.78-47a12,12,0,0,1,17,17Z"/>`;

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
        ${PhIconKnife.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-knife': PhIconKnife;
  }
}
