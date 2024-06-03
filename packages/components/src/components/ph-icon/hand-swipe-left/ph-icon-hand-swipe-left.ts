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
@customElement('ph-icon-hand-swipe-left')
export default class PhIconHandSwipeLeft extends LitElement {
  /** @internal */
  static tag = 'ph-icon-hand-swipe-left';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M208,140v36c0,25.59-8.49,42.85-8.85,43.58A8,8,0,0,1,192,224a7.9,7.9,0,0,1-3.57-.85,8,8,0,0,1-3.58-10.73c.06-.12,7.16-14.81,7.16-36.42V140a12,12,0,0,0-24,0v4a8,8,0,0,1-16,0V124a12,12,0,0,0-24,0v12a8,8,0,0,1-16,0V68a12,12,0,0,0-24,0V176a8,8,0,0,1-14.79,4.23l-18.68-30-.14-.23A12,12,0,1,0,33.6,162L62.89,212A8,8,0,1,1,49.08,220l-29.32-50a28,28,0,0,1,48.41-28.17L72,148V68a28,28,0,0,1,56,0V98.7a28,28,0,0,1,38.65,16.69A28,28,0,0,1,208,140Zm32-92H187.31l18.34-18.34a8,8,0,0,0-11.31-11.32l-32,32a8,8,0,0,0,0,11.32l32,32a8,8,0,0,0,11.31-11.32L187.31,64H240a8,8,0,0,0,0-16Z"/>`;

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
        ${PhIconHandSwipeLeft.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-hand-swipe-left': PhIconHandSwipeLeft;
  }
}
