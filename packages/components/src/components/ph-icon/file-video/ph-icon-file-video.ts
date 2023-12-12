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
@customElement('ph-icon-file-video')
export default class PhIconFileVideo extends LitElement {
  /** @internal */
  static tag = 'ph-icon-file-video';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M148.23,153.21a8,8,0,0,0-7.75-.39l-21.22,10.39A16,16,0,0,0,104,152H48a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h56a16,16,0,0,0,15.44-11.87l20.84,11A8,8,0,0,0,152,216V160A8,8,0,0,0,148.23,153.21ZM104,208H48V168h56v31c0,.13,0,.25,0,.38V208Zm32-5.24-16-8.42V180.66l16-7.83ZM213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v88a8,8,0,0,0,16,0V40h88V88a8,8,0,0,0,8,8h48V216H176a8,8,0,0,0,0,16h24a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160Z"/>`;

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
        ${PhIconFileVideo.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-file-video': PhIconFileVideo;
  }
}
