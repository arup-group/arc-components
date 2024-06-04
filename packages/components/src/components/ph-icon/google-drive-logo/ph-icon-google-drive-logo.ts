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
@customElement('ph-icon-google-drive-logo')
export default class PhIconGoogleDriveLogo extends LitElement {
  /** @internal */
  static tag = 'ph-icon-google-drive-logo';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M237.6,151.78,169.13,39.52A15.91,15.91,0,0,0,155.56,32H100.43a15.89,15.89,0,0,0-13.56,7.52l-.05.07L18.44,151.7a16,16,0,0,0-.33,16.42l27.32,47.82A16,16,0,0,0,59.32,224H196.67a16,16,0,0,0,13.89-8.06l27.32-47.82A15.91,15.91,0,0,0,237.6,151.78ZM219,152H172.52L137.33,93.33l22.75-37.92Zm-116.87,0L128,108.88,153.87,152Zm61.34,16,24,40H68.53l24-40ZM128,77.78,110.12,48l35.78-.05ZM95.91,55.41l22.76,37.92L83.47,152H37ZM36.54,168H73.87L54.72,199.92Zm164.74,31.93L182.12,168h37.41Z"/>`;

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
        ${PhIconGoogleDriveLogo.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-google-drive-logo': PhIconGoogleDriveLogo;
  }
}
