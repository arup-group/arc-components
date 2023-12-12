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
@customElement('ph-icon-cube-focus')
export default class PhIconCubeFocus extends LitElement {
  /** @internal */
  static tag = 'ph-icon-cube-focus';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M192,157.43V98.57a13,13,0,0,0-6.42-11.24L134.24,57.68a12.48,12.48,0,0,0-12.48,0L70.43,87.33A13,13,0,0,0,64,98.57v58.86a13,13,0,0,0,6.42,11.24l51.34,29.65a12.49,12.49,0,0,0,12.48,0l51.33-29.65A13,13,0,0,0,192,157.43ZM128,72.55,168.59,96,128,119.43,87.41,96ZM80,110.19l40,23.1v45.54l-40-23.1Zm56,68.64V133.29l40-23.1v45.54ZM232,48V88a8,8,0,0,1-16,0V56H184a8,8,0,0,1,0-16h40A8,8,0,0,1,232,48ZM80,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V168a8,8,0,0,1,16,0v32H72A8,8,0,0,1,80,208Zm152-40v40a8,8,0,0,1-8,8H184a8,8,0,0,1,0-16h32V168a8,8,0,0,1,16,0ZM24,88V48a8,8,0,0,1,8-8H72a8,8,0,0,1,0,16H40V88a8,8,0,0,1-16,0Z"/>`;

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
        ${PhIconCubeFocus.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-cube-focus': PhIconCubeFocus;
  }
}
