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
@customElement('ph-icon-tag-chevron')
export default class PhIconTagChevron extends LitElement {
  /** @internal */
  static tag = 'ph-icon-tag-chevron';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M237.3,119.12l-42.66-64A16,16,0,0,0,181.33,48H24a8,8,0,0,0-6.58,12.55L64,128,17.42,195.45A8,8,0,0,0,24,208H181.33a16,16,0,0,0,13.31-7.12l42.66-64A16,16,0,0,0,237.3,119.12Zm-56,72.88H39.25l38-55,.08-.1a16,16,0,0,0,0-17.76l-.08-.1-38-55H181.33L224,128Z"/>`;

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
        ${PhIconTagChevron.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-tag-chevron': PhIconTagChevron;
  }
}
