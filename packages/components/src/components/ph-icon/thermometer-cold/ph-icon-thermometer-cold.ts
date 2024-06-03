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
@customElement('ph-icon-thermometer-cold')
export default class PhIconThermometerCold extends LitElement {
  /** @internal */
  static tag = 'ph-icon-thermometer-cold';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M248.91,77.72l-20,6.49,12.34,17a8,8,0,1,1-12.94,9.4L216,93.61l-12.34,17a8,8,0,0,1-12.94-9.4l12.34-17-20-6.49A8,8,0,0,1,188,62.5L208,69V48a8,8,0,0,1,16,0V69l20-6.49a8,8,0,0,1,4.95,15.22ZM152,184a32,32,0,1,1-40-31V120a8,8,0,0,1,16,0v33A32.06,32.06,0,0,1,152,184Zm-16,0a16,16,0,1,0-16,16A16,16,0,0,0,136,184Zm48,0A64,64,0,1,1,80,134V48a40,40,0,0,1,80,0v86A64.08,64.08,0,0,1,184,184Zm-16,0a48.08,48.08,0,0,0-20.58-39.4A8,8,0,0,1,144,138V48a24,24,0,0,0-48,0v90a8,8,0,0,1-3.42,6.56A48,48,0,1,0,168,184Z"/>`;

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
        ${PhIconThermometerCold.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-thermometer-cold': PhIconThermometerCold;
  }
}
