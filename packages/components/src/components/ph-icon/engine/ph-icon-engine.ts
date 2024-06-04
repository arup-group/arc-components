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
@customElement('ph-icon-engine')
export default class PhIconEngine extends LitElement {
  /** @internal */
  static tag = 'ph-icon-engine';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M248,104a8,8,0,0,0-8,8v24H224V120a16,16,0,0,0-16-16H195.31L160,68.69A15.86,15.86,0,0,0,148.69,64H128V48h24a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16h24V64H48A16,16,0,0,0,32,80v56H16V112a8,8,0,0,0-16,0v64a8,8,0,0,0,16,0V152H32v20.69A15.86,15.86,0,0,0,36.69,184L72,219.31A15.86,15.86,0,0,0,83.31,224h65.38A15.86,15.86,0,0,0,160,219.31L195.31,184H208a16,16,0,0,0,16-16V152h16v24a8,8,0,0,0,16,0V112A8,8,0,0,0,248,104Zm-40,64H195.31A15.86,15.86,0,0,0,184,172.69L148.69,208H83.31L48,172.69V80H148.69L184,115.31A15.86,15.86,0,0,0,195.31,120H208Z"/>`;

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
        ${PhIconEngine.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-engine': PhIconEngine;
  }
}
