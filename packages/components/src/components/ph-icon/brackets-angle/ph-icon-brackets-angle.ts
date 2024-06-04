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
@customElement('ph-icon-brackets-angle')
export default class PhIconBracketsAngle extends LitElement {
  /** @internal */
  static tag = 'ph-icon-brackets-angle';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M86.75,44.3,33.48,128l53.27,83.7a8,8,0,0,1-2.46,11.05A7.91,7.91,0,0,1,80,224a8,8,0,0,1-6.76-3.71l-56-88a8,8,0,0,1,0-8.59l56-88a8,8,0,1,1,13.5,8.59Zm152,79.41-56-88a8,8,0,1,0-13.5,8.59L222.52,128l-53.27,83.7a8,8,0,0,0,2.46,11.05A7.91,7.91,0,0,0,176,224a8,8,0,0,0,6.76-3.71l56-88A8,8,0,0,0,238.75,123.71Z"/>`;

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
        ${PhIconBracketsAngle.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-brackets-angle': PhIconBracketsAngle;
  }
}
