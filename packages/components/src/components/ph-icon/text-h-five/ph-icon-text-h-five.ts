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
@customElement('ph-icon-text-h-five')
export default class PhIconTextHFive extends LitElement {
  /** @internal */
  static tag = 'ph-icon-text-h-five';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M152,56V176a8,8,0,0,1-16,0V124H48v52a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v52h88V56a8,8,0,0,1,16,0Zm60,88a38.8,38.8,0,0,0-9.41,1.14L206.78,120H240a8,8,0,0,0,0-16H200a8,8,0,0,0-7.89,6.68l-8,48a8,8,0,0,0,13.6,6.92A19.73,19.73,0,0,1,212,160a20,20,0,0,1,0,40,19.73,19.73,0,0,1-14.29-5.6,8,8,0,1,0-11.42,11.2A35.54,35.54,0,0,0,212,216a36,36,0,0,0,0-72Z"/>`;

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
        ${PhIconTextHFive.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-text-h-five': PhIconTextHFive;
  }
}
