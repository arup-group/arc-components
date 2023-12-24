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
@customElement('ph-icon-flag-checkered')
export default class PhIconFlagCheckered extends LitElement {
  /** @internal */
  static tag = 'ph-icon-flag-checkered';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M219.32,40.75A8,8,0,0,0,210.76,42c-28,24.22-51.72,12.48-79.21-1.13C103.07,26.76,70.78,10.79,34.76,42A8,8,0,0,0,32,48V216a8,8,0,0,0,16,0V171.77c26.79-21.16,49.87-9.75,76.45,3.41,28.49,14.09,60.77,30.06,96.79-1.13a8,8,0,0,0,2.76-6V48A8,8,0,0,0,219.32,40.75ZM208,63.6v44.65c-14,11.06-27,13.22-40,10.88V71.34A60.05,60.05,0,0,0,208,63.6Zm-56,3.76v47c-6.66-2.67-13.43-6-20.45-9.49-8.82-4.36-18-8.9-27.55-12.17v-47c6.66,2.66,13.43,6,20.45,9.48C133.27,59.55,142.46,64.09,152,67.36ZM88,40.91V88.69a60.06,60.06,0,0,0-40,7.75V51.78C62,40.72,75,38.57,88,40.91ZM78.58,144A60.06,60.06,0,0,0,48,152.43V115.78c14-11.06,27-13.22,40-10.88v39.8A65.61,65.61,0,0,0,78.58,144ZM104,148.67v-39c6.66,2.66,13.43,6,20.45,9.48,8.82,4.37,18,8.9,27.55,12.17v39c-6.66-2.67-13.43-6-20.45-9.48C122.73,156.47,113.54,151.94,104,148.67Zm64,26.45v-39.8a65.61,65.61,0,0,0,9.42.72A60.11,60.11,0,0,0,208,127.57v36.68C194,175.31,181,177.46,168,175.12Z"/>`;

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
        ${PhIconFlagCheckered.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-flag-checkered': PhIconFlagCheckered;
  }
}
