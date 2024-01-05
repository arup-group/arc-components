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
@customElement('ph-icon-article-ny-times')
export default class PhIconArticleNyTimes extends LitElement {
  /** @internal */
  static tag = 'ph-icon-article-ny-times';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M152,104a8,8,0,0,1,8-8h80a8,8,0,0,1,0,16H160A8,8,0,0,1,152,104Zm88,24H160a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16Zm0,32H160a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16Zm0,32H72a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM80,176a56.06,56.06,0,0,1-56-56,55.49,55.49,0,0,1,4.11-21A28,28,0,0,1,44,48a8,8,0,0,1,3.89,1l69.93,38.85A12,12,0,0,0,116,64a8,8,0,0,1,0-16,28,28,0,0,1,0,56,8,8,0,0,1-3.89-1l-40-22.21A40,40,0,0,0,72,159.2V120a8,8,0,0,1,16,0v39.19a40.09,40.09,0,0,0,29.73-25.86,8,8,0,0,1,15.08,5.34A56.09,56.09,0,0,1,80,176ZM36.23,85.14a56.33,56.33,0,0,1,17.5-14.58L42.18,64.14a12,12,0,0,0-6,21Z"/>`;

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
        ${PhIconArticleNyTimes.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-article-ny-times': PhIconArticleNyTimes;
  }
}
