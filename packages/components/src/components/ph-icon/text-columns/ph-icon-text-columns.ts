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
@customElement('ph-icon-text-columns')
export default class PhIconTextColumns extends LitElement {
  /** @internal */
  static tag = 'ph-icon-text-columns';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M120,64a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16h72A8,8,0,0,1,120,64Zm-8,32H40a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm0,40H40a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm0,40H40a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16ZM144,72h72a8,8,0,0,0,0-16H144a8,8,0,0,0,0,16Zm72,24H144a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm0,40H144a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm0,40H144a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Z"/>`;

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
        ${PhIconTextColumns.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-text-columns': PhIconTextColumns;
  }
}
