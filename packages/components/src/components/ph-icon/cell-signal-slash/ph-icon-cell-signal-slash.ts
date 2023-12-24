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
@customElement('ph-icon-cell-signal-slash')
export default class PhIconCellSignalSlash extends LitElement {
  /** @internal */
  static tag = 'ph-icon-cell-signal-slash';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M88,152v48a8,8,0,0,1-16,0V152a8,8,0,0,1,16,0ZM40,184a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-8A8,8,0,0,0,40,184Zm173.92,26.62-160-176A8,8,0,1,0,42.08,45.38L112,122.29V200a8,8,0,0,0,16,0V139.89l24,26.4V200a8,8,0,0,0,16,0V183.89l34.08,37.49a8,8,0,1,0,11.84-10.76Zm-53.92-87a8,8,0,0,0,8-8V72a8,8,0,0,0-16,0v43.63A8,8,0,0,0,160,123.63Zm40,44a8,8,0,0,0,8-8V32a8,8,0,0,0-16,0V159.63A8,8,0,0,0,200,167.63Z"/>`;

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
        ${PhIconCellSignalSlash.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-cell-signal-slash': PhIconCellSignalSlash;
  }
}
