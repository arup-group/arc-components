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
@customElement('ph-icon-volleyball')
export default class PhIconVolleyball extends LitElement {
  /** @internal */
  static tag = 'ph-icon-volleyball';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm81.74,136.58a88,88,0,0,1-93.49,3.78L132.62,136h83A87.16,87.16,0,0,1,209.74,160.58ZM91.12,48.11a87.57,87.57,0,0,1,24.22-7.2,88,88,0,0,1,50,79.09H132.62ZM215.63,120H181.37a104.18,104.18,0,0,0-35.78-78.23A88.18,88.18,0,0,1,215.63,120ZM77.27,56.13,94.39,85.78a104.14,104.14,0,0,0-49.86,70.09A87.95,87.95,0,0,1,77.27,56.13ZM58.9,182.43a88,88,0,0,1,43.49-82.79L118.76,128,77.27,199.87A88.62,88.62,0,0,1,58.9,182.43ZM128,216a87.5,87.5,0,0,1-36.88-8.11l17.13-29.67a104.23,104.23,0,0,0,85.53,8.17A87.81,87.81,0,0,1,128,216Z"/>`;

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
        ${PhIconVolleyball.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-volleyball': PhIconVolleyball;
  }
}
