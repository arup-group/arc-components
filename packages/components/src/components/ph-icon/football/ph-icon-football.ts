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
@customElement('ph-icon-football')
export default class PhIconFootball extends LitElement {
  /** @internal */
  static tag = 'ph-icon-football';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M229.06,53.89a32.92,32.92,0,0,0-26.95-26.95c-32.37-5.49-93.39-8-138.27,36.9s-42.39,105.9-36.9,138.27a32.92,32.92,0,0,0,27,26.95A206.58,206.58,0,0,0,88.27,232c32.09,0,72.05-8,103.89-39.84C237.05,147.28,234.55,86.26,229.06,53.89Zm-61.61-14a192,192,0,0,1,32,2.8A16.94,16.94,0,0,1,213.3,56.56,188.59,188.59,0,0,1,216,92.78L163.21,40C164.61,39.92,166,39.9,167.45,39.9ZM56.56,213.3A16.94,16.94,0,0,1,42.7,199.44,188.59,188.59,0,0,1,40,163.22L92.78,216A187.79,187.79,0,0,1,56.56,213.3Zm124.3-32.44c-11.61,11.6-33.27,27.73-67.37,33.27L41.87,142.51c5.54-34.1,21.67-55.76,33.27-67.37S108.4,47.4,142.5,41.86l71.63,71.63C208.59,147.59,192.46,169.25,180.86,180.86Zm-15.22-90.5a8,8,0,0,1,0,11.31L151.3,116l6.34,6.34a8,8,0,1,1-11.31,11.3L140,127.31,127.31,140l6.34,6.34a8,8,0,1,1-11.3,11.31L116,151.3l-14.34,14.34a8,8,0,1,1-11.31-11.31L104.7,140l-6.34-6.34a8,8,0,0,1,11.31-11.3l6.34,6.34L128.69,116l-6.34-6.34a8,8,0,0,1,11.3-11.31L140,104.7l14.34-14.34A8,8,0,0,1,165.64,90.36Z"/>`;

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
        ${PhIconFootball.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-football': PhIconFootball;
  }
}
