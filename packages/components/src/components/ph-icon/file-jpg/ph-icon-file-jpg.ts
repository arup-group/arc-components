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
@customElement('ph-icon-file-jpg')
export default class PhIconFileJpg extends LitElement {
  /** @internal */
  static tag = 'ph-icon-file-jpg';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M120,144H104a8,8,0,0,0-8,8v56a8,8,0,0,0,16,0v-8h8a28,28,0,0,0,0-56Zm0,40h-8V160h8a12,12,0,0,1,0,24Zm96,0v16.87a8,8,0,0,1-2.22,5.53A30.06,30.06,0,0,1,192,216c-17.65,0-32-16.15-32-36s14.35-36,32-36a29.38,29.38,0,0,1,16.48,5.12,8,8,0,0,1-9,13.26A13.21,13.21,0,0,0,192,160c-8.82,0-16,9-16,20s7.18,20,16,20a13.63,13.63,0,0,0,8-2.71V192a8,8,0,0,1,0-16h8A8,8,0,0,1,216,184ZM80,152v38a26,26,0,0,1-52,0,8,8,0,0,1,16,0,10,10,0,0,0,20,0V152a8,8,0,0,1,16,0ZM213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v72a8,8,0,0,0,16,0V40h88V88a8,8,0,0,0,8,8h48v16a8,8,0,0,0,16,0V88A8,8,0,0,0,213.66,82.34ZM160,80V51.31L188.69,80Z"/>`;

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
        ${PhIconFileJpg.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-file-jpg': PhIconFileJpg;
  }
}
