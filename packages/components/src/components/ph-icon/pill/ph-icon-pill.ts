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
@customElement('ph-icon-pill')
export default class PhIconPill extends LitElement {
  /** @internal */
  static tag = 'ph-icon-pill';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M216.42,39.6a53.26,53.26,0,0,0-75.32,0L39.6,141.09a53.26,53.26,0,0,0,75.32,75.31h0L216.43,114.91A53.31,53.31,0,0,0,216.42,39.6ZM103.61,205.09h0a37.26,37.26,0,0,1-52.7-52.69L96,107.31,148.7,160ZM205.11,103.6,160,148.69,107.32,96l45.1-45.09a37.26,37.26,0,0,1,52.69,52.69ZM189.68,82.34a8,8,0,0,1,0,11.32l-24,24a8,8,0,1,1-11.31-11.32l24-24A8,8,0,0,1,189.68,82.34Z"/>`;

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
        ${PhIconPill.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-pill': PhIconPill;
  }
}
