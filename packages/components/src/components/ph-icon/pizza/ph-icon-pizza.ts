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
@customElement('ph-icon-pizza')
export default class PhIconPizza extends LitElement {
  /** @internal */
  static tag = 'ph-icon-pizza';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M239.54,63a15.91,15.91,0,0,0-7.25-9.9,201.49,201.49,0,0,0-208.58,0,16,16,0,0,0-5.37,22l96,157.27a16,16,0,0,0,27.36,0l96-157.27A15.82,15.82,0,0,0,239.54,63ZM63.59,118.5a24,24,0,1,1,24.47,40.09Zm87.92,66.95A24,24,0,0,1,176,145.37Zm32.93-53.93a40,40,0,0,0-41.38,67.77L128,224,96.5,172.43a40,40,0,1,0-41.35-67.76L48.8,94.26a152,152,0,0,1,158.39,0Zm31.1-50.93a168.12,168.12,0,0,0-175.08,0L32,66.77a185.6,185.6,0,0,1,192,0Z"/>`;

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
        ${PhIconPizza.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-pizza': PhIconPizza;
  }
}
