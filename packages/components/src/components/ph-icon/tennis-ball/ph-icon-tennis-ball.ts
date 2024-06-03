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
@customElement('ph-icon-tennis-ball')
export default class PhIconTennisBall extends LitElement {
  /** @internal */
  static tag = 'ph-icon-tennis-ball';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M201.57,54.46a104,104,0,1,0,0,147.08A103.4,103.4,0,0,0,201.57,54.46ZM65.75,65.77a87.63,87.63,0,0,1,53.66-25.31A87.31,87.31,0,0,1,94,94.06a87.42,87.42,0,0,1-53.62,25.35A87.58,87.58,0,0,1,65.75,65.77ZM40.33,135.48a103.29,103.29,0,0,0,65-30.11,103.24,103.24,0,0,0,30.13-65,87.78,87.78,0,0,1,80.18,80.14,104,104,0,0,0-95.16,95.1,87.78,87.78,0,0,1-80.18-80.14Zm149.92,54.75a87.69,87.69,0,0,1-53.66,25.31,88,88,0,0,1,79-78.95A87.58,87.58,0,0,1,190.25,190.23Z"/>`;

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
        ${PhIconTennisBall.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-tennis-ball': PhIconTennisBall;
  }
}
