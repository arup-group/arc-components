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
@customElement('ph-icon-pentagram')
export default class PhIconPentagram extends LitElement {
  /** @internal */
  static tag = 'ph-icon-pentagram';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M239.18,91.05A15.75,15.75,0,0,0,224,80h-61L143.23,19.26a15.93,15.93,0,0,0-30.45-.05L93.06,80H32a16,16,0,0,0-9.37,29l49.46,35.58L53.15,203A15.75,15.75,0,0,0,59,220.88a15.74,15.74,0,0,0,18.77,0L128,184.75l50.23,36.13A16,16,0,0,0,202.85,203l-19-58.46,49.49-35.61A15.74,15.74,0,0,0,239.18,91.05ZM128,24.15,146.12,80H109.88ZM32,96H87.87L77.3,128.56Zm36.34,112h0l17.39-53.59,28.54,20.54Zm22.57-69.57L104.69,96h46.62l13.75,42.38L128,165Zm96.69,69.57,0,0-45.9-33,28.54-20.54Zm-8.93-79.38L168.13,96H224Z"/>`;

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
        ${PhIconPentagram.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-pentagram': PhIconPentagram;
  }
}
