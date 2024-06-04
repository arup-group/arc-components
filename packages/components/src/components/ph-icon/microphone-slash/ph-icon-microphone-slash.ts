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
@customElement('ph-icon-microphone-slash')
export default class PhIconMicrophoneSlash extends LitElement {
  /** @internal */
  static tag = 'ph-icon-microphone-slash';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M213.92,210.62l-160-176A8,8,0,1,0,42.08,45.38L80,87.09V128a48,48,0,0,0,73.91,40.4l10.88,12A64,64,0,0,1,64,128a8,8,0,0,0-16,0,80.11,80.11,0,0,0,72,79.6V232a8,8,0,0,0,16,0V207.59a79.74,79.74,0,0,0,39.62-15.31l26.46,29.1a8,8,0,1,0,11.84-10.76ZM128,160a32,32,0,0,1-32-32V104.69l46.92,51.62A32,32,0,0,1,128,160ZM87.16,38.78A48,48,0,0,1,176,64v60.43a8,8,0,0,1-16,0V64a32,32,0,0,0-59.24-16.81,8,8,0,1,1-13.6-8.41ZM187.64,151.27A63.71,63.71,0,0,0,192,128a8,8,0,0,1,16,0,79.62,79.62,0,0,1-5.46,29.09,8,8,0,1,1-14.9-5.82Z"/>`;

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
        ${PhIconMicrophoneSlash.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-microphone-slash': PhIconMicrophoneSlash;
  }
}
