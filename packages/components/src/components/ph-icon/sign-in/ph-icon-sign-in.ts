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
@customElement('ph-icon-sign-in')
export default class PhIconSignIn extends LitElement {
  /** @internal */
  static tag = 'ph-icon-sign-in';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M141.66,133.66l-40,40a8,8,0,0,1-11.32-11.32L116.69,136H24a8,8,0,0,1,0-16h92.69L90.34,93.66a8,8,0,0,1,11.32-11.32l40,40A8,8,0,0,1,141.66,133.66ZM192,32H136a8,8,0,0,0,0,16h56V208H136a8,8,0,0,0,0,16h56a16,16,0,0,0,16-16V48A16,16,0,0,0,192,32Z"/>`;

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
        ${PhIconSignIn.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-sign-in': PhIconSignIn;
  }
}
