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
@customElement('ph-icon-paint-brush-household')
export default class PhIconPaintBrushHousehold extends LitElement {
  /** @internal */
  static tag = 'ph-icon-paint-brush-household';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M230.64,25.36a32,32,0,0,0-45.26,0c-.1.1-.2.2-.29.31L130.18,86.85,121,77.64a24,24,0,0,0-33.95,0l-76.69,76.7a8,8,0,0,0,0,11.31l80,80a8,8,0,0,0,11.31,0L178.36,169a24,24,0,0,0,0-33.95l-9.21-9.2,61.18-54.91a2.91,2.91,0,0,0,.31-.3A32,32,0,0,0,230.64,25.36ZM96,228.69,79.32,212l22.34-22.35a8,8,0,0,0-11.31-11.31L68,200.68,55.32,188l22.34-22.35a8,8,0,0,0-11.31-11.31L44,176.68,27.31,160,72,115.31,140.69,184ZM219.46,59.16l-61,54.75a16,16,0,0,0-.62,23.22l9.2,9.21a8,8,0,0,1,0,11.31l-15,15L83.32,104l15-15a8,8,0,0,1,11.31,0l9.21,9.2a16,16,0,0,0,23.22-.62h0l54.75-61a16,16,0,0,1,22.62,22.62Z"/>`;

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
        ${PhIconPaintBrushHousehold.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-paint-brush-household': PhIconPaintBrushHousehold;
  }
}
