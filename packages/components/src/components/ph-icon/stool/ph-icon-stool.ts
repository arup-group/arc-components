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
@customElement('ph-icon-stool')
export default class PhIconStool extends LitElement {
  /** @internal */
  static tag = 'ph-icon-stool';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M200,64V40a16,16,0,0,0-16-16H72A16,16,0,0,0,56,40V64A16,16,0,0,0,72,80h6.64L56.1,222.75a8,8,0,0,0,6.65,9.15A7.82,7.82,0,0,0,64,232a8,8,0,0,0,7.89-6.75L79.68,176h96.64l7.78,49.25A8,8,0,0,0,192,232a7.82,7.82,0,0,0,1.26-.1,8,8,0,0,0,6.65-9.15L177.36,80H184A16,16,0,0,0,200,64ZM72,40H184V64H72ZM173.79,160H82.21L94.84,80h66.32Z"/>`;

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
        ${PhIconStool.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-stool': PhIconStool;
  }
}
