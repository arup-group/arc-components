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
@customElement('ph-icon-bluetooth-connected')
export default class PhIconBluetoothConnected extends LitElement {
  /** @internal */
  static tag = 'ph-icon-bluetooth-connected';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M188.8,169.6,133.33,128,188.8,86.4a8,8,0,0,0,0-12.8l-64-48A8,8,0,0,0,112,32v80L60.8,73.6a8,8,0,0,0-9.6,12.8L106.67,128,51.2,169.6a8,8,0,1,0,9.6,12.8L112,144v80a8,8,0,0,0,12.8,6.4l64-48a8,8,0,0,0,0-12.8ZM128,48l42.67,32L128,112Zm0,160V144l42.67,32ZM52,140a12,12,0,1,1,12-12A12,12,0,0,1,52,140Zm156-12a12,12,0,1,1-12-12A12,12,0,0,1,208,128Z"/>`;

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
        ${PhIconBluetoothConnected.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-bluetooth-connected': PhIconBluetoothConnected;
  }
}
