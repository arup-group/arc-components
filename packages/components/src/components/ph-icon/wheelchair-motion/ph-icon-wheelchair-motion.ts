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
@customElement('ph-icon-wheelchair-motion')
export default class PhIconWheelchairMotion extends LitElement {
  /** @internal */
  static tag = 'ph-icon-wheelchair-motion';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M176,80a32,32,0,1,0-32-32A32,32,0,0,0,176,80Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,176,32Zm-8,136a64,64,0,1,1-64-64,8,8,0,0,1,0,16,48,48,0,1,0,48,48,8,8,0,0,1,16,0Zm38.19-37.07a8,8,0,0,1,1.65,6.64l-16,80A8,8,0,0,1,184,224a7.77,7.77,0,0,1-1.58-.16,8,8,0,0,1-6.27-9.41L190.24,144H128a8,8,0,0,1-6.94-12l20.06-34.9a80.09,80.09,0,0,0-88,9.17A8,8,0,1,1,42.91,94a96,96,0,0,1,113.46-6.42,8,8,0,0,1,2.57,10.69L141.82,128H200A8,8,0,0,1,206.19,130.93Z"/>`;

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
        ${PhIconWheelchairMotion.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-wheelchair-motion': PhIconWheelchairMotion;
  }
}
