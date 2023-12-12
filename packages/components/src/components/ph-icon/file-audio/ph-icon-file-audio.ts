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
@customElement('ph-icon-file-audio')
export default class PhIconFileAudio extends LitElement {
  /** @internal */
  static tag = 'ph-icon-file-audio';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M99.06,128.61a8,8,0,0,0-8.72,1.73L68.69,152H48a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8H68.69l21.65,21.66A8,8,0,0,0,104,224V136A8,8,0,0,0,99.06,128.61ZM88,204.69,77.66,194.34A8,8,0,0,0,72,192H56V168H72a8,8,0,0,0,5.66-2.34L88,155.31ZM152,180a40.55,40.55,0,0,1-20,34.91A8,8,0,0,1,124,201.09a24.49,24.49,0,0,0,0-42.18A8,8,0,0,1,132,145.09,40.55,40.55,0,0,1,152,180Zm61.66-97.66-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v80a8,8,0,0,0,16,0V40h88V88a8,8,0,0,0,8,8h48V216H168a8,8,0,0,0,0,16h32a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160Z"/>`;

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
        ${PhIconFileAudio.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-file-audio': PhIconFileAudio;
  }
}
