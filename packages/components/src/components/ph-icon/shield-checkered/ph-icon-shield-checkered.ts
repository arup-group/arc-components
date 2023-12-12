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
@customElement('ph-icon-shield-checkered')
export default class PhIconShieldCheckered extends LitElement {
  /** @internal */
  static tag = 'ph-icon-shield-checkered';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M208,40H48A16,16,0,0,0,32,56v58.77c0,89.62,75.82,119.34,91,124.38a15.44,15.44,0,0,0,10,0c15.2-5.05,91-34.77,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,1.77,0,3.5-.11,5.21H136V56h72ZM48,56h72v64H48.11c-.07-1.71-.11-3.44-.11-5.21Zm1.74,80H120v84.92C100.32,212.56,58.73,188.92,49.74,136ZM136,220.91V136h70.26C197.27,188.89,155.72,212.54,136,220.91Z"/>`;

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
        ${PhIconShieldCheckered.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-shield-checkered': PhIconShieldCheckered;
  }
}
