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
@customElement('ph-icon-password')
export default class PhIconPassword extends LitElement {
  /** @internal */
  static tag = 'ph-icon-password';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M48,56V200a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0Zm84,54.5L112,117V96a8,8,0,0,0-16,0v21L76,110.5a8,8,0,0,0-5,15.22l20,6.49-12.34,17a8,8,0,1,0,12.94,9.4l12.34-17,12.34,17a8,8,0,1,0,12.94-9.4l-12.34-17,20-6.49A8,8,0,0,0,132,110.5ZM238,115.64A8,8,0,0,0,228,110.5L208,117V96a8,8,0,0,0-16,0v21l-20-6.49a8,8,0,0,0-4.95,15.22l20,6.49-12.34,17a8,8,0,1,0,12.94,9.4l12.34-17,12.34,17a8,8,0,1,0,12.94-9.4l-12.34-17,20-6.49A8,8,0,0,0,238,115.64Z"/>`;

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
        ${PhIconPassword.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-password': PhIconPassword;
  }
}
