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
@customElement('ph-icon-phosphor-logo')
export default class PhIconPhosphorLogo extends LitElement {
  /** @internal */
  static tag = 'ph-icon-phosphor-logo';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M144,24H64a8,8,0,0,0-8,8V160a80.09,80.09,0,0,0,80,80,8,8,0,0,0,8-8V168a72,72,0,0,0,0-144ZM72,62.54,122.32,152H72Zm56,66.92L77.68,40H128ZM72.51,168H128v55.5A64.14,64.14,0,0,1,72.51,168ZM144,152V40a56,56,0,0,1,0,112Z"/>`;

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
        ${PhIconPhosphorLogo.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-phosphor-logo': PhIconPhosphorLogo;
  }
}
