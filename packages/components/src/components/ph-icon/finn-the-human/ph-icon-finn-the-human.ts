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
@customElement('ph-icon-finn-the-human')
export default class PhIconFinnTheHuman extends LitElement {
  /** @internal */
  static tag = 'ph-icon-finn-the-human';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M168,96H88a40,40,0,0,0-40,40v8a40,40,0,0,0,40,40h80a40,40,0,0,0,40-40v-8A40,40,0,0,0,168,96Zm24,48a24,24,0,0,1-24,24H88a24,24,0,0,1-24-24v-8a24,24,0,0,1,24-24h80a24,24,0,0,1,24,24ZM208,32a32.06,32.06,0,0,0-31,24H79a32,32,0,0,0-63,8v80a72.08,72.08,0,0,0,72,72h80a72.08,72.08,0,0,0,72-72V64A32,32,0,0,0,208,32Zm16,112a56.06,56.06,0,0,1-56,56H88a56.06,56.06,0,0,1-56-56V64a16,16,0,0,1,32,0,8,8,0,0,0,8,8H184a8,8,0,0,0,8-8,16,16,0,0,1,32,0Zm-120-4a12,12,0,1,1-12-12A12,12,0,0,1,104,140Zm72,0a12,12,0,1,1-12-12A12,12,0,0,1,176,140Z"/>`;

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
        ${PhIconFinnTheHuman.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-finn-the-human': PhIconFinnTheHuman;
  }
}
