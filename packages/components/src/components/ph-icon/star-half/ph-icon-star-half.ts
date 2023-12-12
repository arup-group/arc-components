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
@customElement('ph-icon-star-half')
export default class PhIconStarHalf extends LitElement {
  /** @internal */
  static tag = 'ph-icon-star-half';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M234.5,114.38,229.27,119a8,8,0,1,1-10.52-12l5.23-4.57s0,0,0-.07l-8.67-.75a8,8,0,1,1,1.37-16l8.7.75a16,16,0,0,1,9.11,28.07Zm-60.7,43,2.86,12.41a8,8,0,1,0,15.59-3.6l-2.85-12.47,7.86-6.86a8,8,0,0,0-10.52-12.06l-7.86,6.87A16,16,0,0,0,173.8,157.4ZM136,51.15V184.81l.27.15,11.88,7.22a8,8,0,0,1-8.3,13.68L128,198.64l-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.07l59.46-5.14,23.21-55.36a15.95,15.95,0,0,1,29.44,0L166,81.17l10.74.93a8,8,0,0,1-1.38,16l-10.76-.93a16,16,0,0,1-13.35-9.75ZM119.73,185l.27-.15V51.15L104.8,87.37a16,16,0,0,1-13.35,9.75L32,102.25a.58.58,0,0,0,0,.1l45.13,39.34A16,16,0,0,1,82.2,157.4L68.68,215.94v0Zm79.91,13.25a8,8,0,0,0-15.59,3.61l3.3,14.14v0l-11.19-6.8a8,8,0,1,0-8.31,13.68l11.23,6.82a16,16,0,0,0,23.84-17.34Z"/>`;

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
        ${PhIconStarHalf.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-star-half': PhIconStarHalf;
  }
}
