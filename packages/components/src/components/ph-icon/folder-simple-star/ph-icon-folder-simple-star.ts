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
@customElement('ph-icon-folder-simple-star')
export default class PhIconFolderSimpleStar extends LitElement {
  /** @internal */
  static tag = 'ph-icon-folder-simple-star';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M128,208a8,8,0,0,1-8,8H40a16,16,0,0,1-16-16V64A16,16,0,0,1,40,48H93.33a16.12,16.12,0,0,1,9.6,3.2L130.67,72H216a16,16,0,0,1,16,16v32a8,8,0,0,1-16,0V88H130.67a16.12,16.12,0,0,1-9.6-3.2L93.33,64H40V200h80A8,8,0,0,1,128,208Zm109.09-40.22-22.51,18.59,6.85,27.71a8,8,0,0,1-11.82,8.81L184,207.82l-25.61,15.07a8,8,0,0,1-11.82-8.81l6.85-27.71-22.51-18.59a8,8,0,0,1,4.47-14.14l29.84-2.31,11.43-26.5a8,8,0,0,1,14.7,0l11.43,26.5,29.84,2.31a8,8,0,0,1,4.47,14.14Zm-25.47.28-14.89-1.15a8,8,0,0,1-6.73-4.8l-6-13.92-6,13.92a8,8,0,0,1-6.73,4.8l-14.89,1.15,11.11,9.18a8,8,0,0,1,2.68,8.09l-3.5,14.12,13.27-7.81a8,8,0,0,1,8.12,0l13.27,7.81-3.5-14.12a8,8,0,0,1,2.68-8.09Z"/>`;

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
        ${PhIconFolderSimpleStar.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-folder-simple-star': PhIconFolderSimpleStar;
  }
}
