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
@customElement('ph-icon-google-play-logo')
export default class PhIconGooglePlayLogo extends LitElement {
  /** @internal */
  static tag = 'ph-icon-google-play-logo';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M223.82,114.19,56,18.16a16,16,0,0,0-16.12,0A15.68,15.68,0,0,0,32,31.87V224.13a15.68,15.68,0,0,0,7.92,13.67,16,16,0,0,0,16.12,0l167.78-96a15.75,15.75,0,0,0,0-27.62ZM48,212.67V43.33L132.69,128Zm96-73.36,18.92,18.92-88.5,50.66ZM74.4,47.1l88.53,50.67L144,116.69ZM177.31,150l-22-22,22-22,38.43,22Z"/>`;

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
        ${PhIconGooglePlayLogo.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-google-play-logo': PhIconGooglePlayLogo;
  }
}
