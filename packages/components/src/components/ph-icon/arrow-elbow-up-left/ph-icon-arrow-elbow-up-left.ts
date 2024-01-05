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
@customElement('ph-icon-arrow-elbow-up-left')
export default class PhIconArrowElbowUpLeft extends LitElement {
  /** @internal */
  static tag = 'ph-icon-arrow-elbow-up-left';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M200,80V224a8,8,0,0,1-16,0V88H67.31l34.35,34.34a8,8,0,0,1-11.32,11.32l-48-48-.06-.07c-.16-.16-.32-.34-.47-.52l-.23-.31a3.71,3.71,0,0,1-.23-.32l-.23-.37a2.91,2.91,0,0,1-.17-.3c-.07-.12-.13-.25-.19-.38s-.1-.21-.15-.33-.09-.25-.14-.37l-.13-.36-.09-.39c0-.13-.07-.25-.1-.37s0-.31-.06-.46,0-.21-.05-.32a8.34,8.34,0,0,1,0-1.58c0-.11,0-.21.05-.32s0-.31.06-.46.06-.24.1-.37l.09-.39.13-.36c.05-.12.09-.25.14-.37s.1-.22.15-.33.12-.26.19-.38a2.91,2.91,0,0,1,.17-.3l.23-.37a3.71,3.71,0,0,1,.23-.32l.23-.31c.15-.18.31-.36.47-.52l.06-.07,48-48a8,8,0,0,1,11.32,11.32L67.31,72H192A8,8,0,0,1,200,80Z"/>`;

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
        ${PhIconArrowElbowUpLeft.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-arrow-elbow-up-left': PhIconArrowElbowUpLeft;
  }
}
