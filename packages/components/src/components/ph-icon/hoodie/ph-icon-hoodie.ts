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
@customElement('ph-icon-hoodie')
export default class PhIconHoodie extends LitElement {
  /** @internal */
  static tag = 'ph-icon-hoodie';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M238.66,123.56l-56.3-84.44A16,16,0,0,0,169.05,32H87a16,16,0,0,0-13.31,7.12l-56.3,84.44a8,8,0,0,0-1.06,6.54l22.39,82.11A16.05,16.05,0,0,0,54.11,224H80a16,16,0,0,0,16-16V192h64v16a16,16,0,0,0,16,16h25.89a16.05,16.05,0,0,0,15.44-11.79l22.39-82.11A8,8,0,0,0,238.66,123.56ZM80,176V69.79L104,83.5V136a8,8,0,0,0,16,0V92.64L124,95A8,8,0,0,0,132,95l4-2.31V128a8,8,0,0,0,16,0V83.5l24-13.71V176ZM169.05,48l3.54,5.31L128,78.79,83.41,53.31,87,48ZM80,208H54.11L32.68,129.41,64,82.42V176a16,16,0,0,0,16,16Zm121.89,0H176V192a16,16,0,0,0,16-16V82.42l31.32,47Z"/>`;

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
        ${PhIconHoodie.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-hoodie': PhIconHoodie;
  }
}
