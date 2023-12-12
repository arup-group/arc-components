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
@customElement('ph-icon-cylinder')
export default class PhIconCylinder extends LitElement {
  /** @internal */
  static tag = 'ph-icon-cylinder';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M128,16C87.63,16,56,35.33,56,60V196c0,24.67,31.63,44,72,44s72-19.33,72-44V60C200,35.33,168.37,16,128,16Zm0,16c26.49,0,56,11.5,56,28s-29.51,28-56,28S72,76.5,72,60,101.51,32,128,32Zm0,192c-29.83,0-56-13.08-56-28V88c13.1,9.85,33.14,16,56,16s42.9-6.2,56-16V196C184,210.92,157.83,224,128,224Z"/>`;

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
        ${PhIconCylinder.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-cylinder': PhIconCylinder;
  }
}
