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
@customElement('ph-icon-signature')
export default class PhIconSignature extends LitElement {
  /** @internal */
  static tag = 'ph-icon-signature';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M232,168H63.86c2.66-5.24,5.33-10.63,8-16.11,14.93,1.65,32.62-8.8,52.74-31.22.6,1.66,1.27,3.37,2,5.1,6.51,15.25,14.91,23.94,25,25.85,10.34,2,20.58-3.23,31.08-15.82C189.5,143.87,203.5,152,232,152a8,8,0,0,0,0-16c-30.63,0-39.55-10.59-40-16.22a8,8,0,0,0-15.51-2.54c-12.17,18.25-19.38,19.14-22,18.66-8.33-1.57-16.08-20.93-18.69-33.51A8,8,0,0,0,121,100.16c-19.8,24.62-33.08,33-41.41,35.14,8.49-18.88,14.83-35.45,18.89-49.4,6.82-23.44,7.32-39.83,1.51-50.1-3-5.36-9.29-11.75-21.91-11.8h-.25c-16,.11-28.6,15.3-34.62,41.7-3.59,15.71-4.18,33.19-1.63,48s7.86,25.51,15.55,31.89c-3.72,7.73-7.53,15.28-11.23,22.43H24a8,8,0,0,0,0,16H37.41c-11.32,21-20.12,35.64-20.26,35.88a8,8,0,1,0,13.71,8.24c.15-.26,11.27-18.79,24.7-44.12H232a8,8,0,0,0,0-16Zm-40-48v-.21A1.11,1.11,0,0,1,192,120ZM58.79,69.26C62.78,51.78,70.48,40,78,40,83.25,40,85,41.86,86,43.67c3,5.33,6.52,24.19-21.65,86.37C56.16,118.75,53.37,93,58.79,69.26Z"/>`;

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
        ${PhIconSignature.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-signature': PhIconSignature;
  }
}
