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
@customElement('ph-icon-moped-front')
export default class PhIconMopedFront extends LitElement {
  /** @internal */
  static tag = 'ph-icon-moped-front';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M208,40H167.2a40,40,0,0,0-78.4,0H48a8,8,0,0,0,0,16H88.8a40,40,0,0,0,12.58,21.82A64.08,64.08,0,0,0,64,136v64a16,16,0,0,0,16,16H96a32,32,0,0,0,64,0h16a16,16,0,0,0,16-16V136a64.08,64.08,0,0,0-37.38-58.18A40,40,0,0,0,167.2,56H208a8,8,0,0,0,0-16ZM144,216a16,16,0,0,1-32,0V168a16,16,0,0,1,32,0Zm32-80v64H160V168a32,32,0,0,0-64,0v32H80V136a48,48,0,0,1,96,0ZM104,48a24,24,0,1,1,24,24A24,24,0,0,1,104,48Z"/>`;

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
        ${PhIconMopedFront.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-moped-front': PhIconMopedFront;
  }
}
