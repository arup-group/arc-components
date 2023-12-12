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
@customElement('ph-icon-cube-transparent')
export default class PhIconCubeTransparent extends LitElement {
  /** @internal */
  static tag = 'ph-icon-cube-transparent';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M221.66,90.34h0l-56-56A8,8,0,0,0,160,32H40a8,8,0,0,0-8,8V160a8,8,0,0,0,2.3,5.61l56,56h0A8,8,0,0,0,96,224H216a8,8,0,0,0,8-8V96A8,8,0,0,0,221.66,90.34ZM168,59.31,196.69,88H168ZM88,196.69,59.31,168H88ZM88,152H48V59.31l40,40ZM59.31,48H152V88H99.31ZM152,104v48H104V104ZM104,208V168h52.69l40,40Zm104-11.31-40-40V104h40Z"/>`;

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
        ${PhIconCubeTransparent.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-cube-transparent': PhIconCubeTransparent;
  }
}
