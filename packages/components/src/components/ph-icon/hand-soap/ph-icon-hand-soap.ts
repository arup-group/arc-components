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
@customElement('ph-icon-hand-soap')
export default class PhIconHandSoap extends LitElement {
  /** @internal */
  static tag = 'ph-icon-hand-soap';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M184,96.8V88a32,32,0,0,0-32-32H136V32h32a8,8,0,0,1,8,8,8,8,0,0,0,16,0,24,24,0,0,0-24-24H104a8,8,0,0,0,0,16h16V56H104A32,32,0,0,0,72,88v8.8A40.07,40.07,0,0,0,40,136v80a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V136A40.07,40.07,0,0,0,184,96.8ZM104,72h48a16,16,0,0,1,16,16v8H88V88A16,16,0,0,1,104,72Zm96,144H56V136a24,24,0,0,1,24-24h96a24,24,0,0,1,24,24v80Z"/>`;

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
        ${PhIconHandSoap.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-hand-soap': PhIconHandSoap;
  }
}
