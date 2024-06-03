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
@customElement('ph-icon-sneaker-move')
export default class PhIconSneakerMove extends LitElement {
  /** @internal */
  static tag = 'ph-icon-sneaker-move';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M104,208a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16H96A8,8,0,0,1,104,208ZM72,176a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,176Zm184,16v8a16,16,0,0,1-16,16H147.31a15.93,15.93,0,0,1-11.26-4.63L28.78,107.42l-.09-.09a16,16,0,0,1,0-22.62l64-64.12.15-.14a15.91,15.91,0,0,1,22.35.27L123.4,29a16,16,0,0,1,4.66,10.54c1.13,22.88,17,38.31,41.31,40.27A16,16,0,0,1,184,95.7V120a32,32,0,0,0,32,32A40,40,0,0,1,256,192Zm-16,0a24,24,0,0,0-24-24,47.67,47.67,0,0,1-26.49-8H160a8,8,0,0,1,0-16h14.46a47.64,47.64,0,0,1-5.78-16H152a8,8,0,1,1,0-16h16V95.7c-15.43-1.26-28.88-7-38.88-16.6-10.39-10-16.28-23.41-17-38.83v0L103.87,32,40,96l107.22,103.9.09.08H240Z"/>`;

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
        ${PhIconSneakerMove.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-sneaker-move': PhIconSneakerMove;
  }
}
