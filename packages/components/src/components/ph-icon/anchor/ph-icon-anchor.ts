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
@customElement('ph-icon-anchor')
export default class PhIconAnchor extends LitElement {
  /** @internal */
  static tag = 'ph-icon-anchor';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M216,136a8,8,0,0,0-8,8,40,40,0,0,1-40,40,47.79,47.79,0,0,0-32,12.27V128h32a8,8,0,0,0,0-16H136V87a32,32,0,1,0-16,0v25H88a8,8,0,0,0,0,16h32v68.27A47.79,47.79,0,0,0,88,184a40,40,0,0,1-40-40,8,8,0,0,0-16,0,56.06,56.06,0,0,0,56,56,32,32,0,0,1,32,32,8,8,0,0,0,16,0,32,32,0,0,1,32-32,56.06,56.06,0,0,0,56-56A8,8,0,0,0,216,136ZM112,56a16,16,0,1,1,16,16A16,16,0,0,1,112,56Z"/>`;

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
        ${PhIconAnchor.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-anchor': PhIconAnchor;
  }
}
