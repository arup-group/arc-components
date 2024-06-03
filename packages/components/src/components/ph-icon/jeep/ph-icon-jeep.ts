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
@customElement('ph-icon-jeep')
export default class PhIconJeep extends LitElement {
  /** @internal */
  static tag = 'ph-icon-jeep';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M240,96h-9.53l-9.29-43.35A16.08,16.08,0,0,0,205.53,40H50.47A16.08,16.08,0,0,0,34.82,52.65L25.53,96H16a8,8,0,0,0,0,16h8v96a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V184h96v24a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V112h8a8,8,0,0,0,0-16ZM50.47,56H205.53l8.57,40H41.9ZM64,208H40V184H64Zm128,0V184h24v24Zm24-40H152V136a8,8,0,0,0-16,0v32H120V136a8,8,0,0,0-16,0v32H40V112H216ZM56,140a12,12,0,1,1,12,12A12,12,0,0,1,56,140Zm120,0a12,12,0,1,1,12,12A12,12,0,0,1,176,140Z"/>`;

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
        ${PhIconJeep.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-jeep': PhIconJeep;
  }
}
