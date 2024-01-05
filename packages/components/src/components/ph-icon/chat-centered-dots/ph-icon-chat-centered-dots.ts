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
@customElement('ph-icon-chat-centered-dots')
export default class PhIconChatCenteredDots extends LitElement {
  /** @internal */
  static tag = 'ph-icon-chat-centered-dots';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M116,120a12,12,0,1,1,12,12A12,12,0,0,1,116,120Zm56,12a12,12,0,1,0-12-12A12,12,0,0,0,172,132Zm60-76V184a16,16,0,0,1-16,16H156.53l-14.84,24.29a16,16,0,0,1-27.41-.06L99.47,200H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Zm-16,0H40V184H99.47a16.08,16.08,0,0,1,13.7,7.73L128,216l14.82-24.32A16.07,16.07,0,0,1,156.53,184H216ZM84,132a12,12,0,1,0-12-12A12,12,0,0,0,84,132Z"/>`;

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
        ${PhIconChatCenteredDots.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-chat-centered-dots': PhIconChatCenteredDots;
  }
}
