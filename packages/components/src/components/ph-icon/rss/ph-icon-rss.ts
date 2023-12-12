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
@customElement('ph-icon-rss')
export default class PhIconRss extends LitElement {
  /** @internal */
  static tag = 'ph-icon-rss';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M98.91,157.09A71.53,71.53,0,0,1,120,208a8,8,0,0,1-16,0,56,56,0,0,0-56-56,8,8,0,0,1,0-16A71.53,71.53,0,0,1,98.91,157.09ZM48,88a8,8,0,0,0,0,16A104,104,0,0,1,152,208a8,8,0,0,0,16,0A120,120,0,0,0,48,88Zm118.79,1.21A166.9,166.9,0,0,0,48,40a8,8,0,0,0,0,16,151,151,0,0,1,107.48,44.52A151,151,0,0,1,200,208a8,8,0,0,0,16,0A166.9,166.9,0,0,0,166.79,89.21ZM52,192a12,12,0,1,0,12,12A12,12,0,0,0,52,192Z"/>`;

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
        ${PhIconRss.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-rss': PhIconRss;
  }
}
