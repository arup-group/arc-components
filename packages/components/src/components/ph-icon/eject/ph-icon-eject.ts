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
@customElement('ph-icon-eject')
export default class PhIconEject extends LitElement {
  /** @internal */
  static tag = 'ph-icon-eject';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M208,160H48a16,16,0,0,0-16,16v24a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V176A16,16,0,0,0,208,160Zm0,40H48V176H208ZM48.24,144H207.76a16.18,16.18,0,0,0,14.93-9.76,15.59,15.59,0,0,0-3.1-17.12L145.86,39.61a24.76,24.76,0,0,0-35.72,0L36.41,117.12h0a15.59,15.59,0,0,0-3.1,17.12A16.18,16.18,0,0,0,48.24,144Zm73.49-93.36a8.77,8.77,0,0,1,12.54,0L207.85,128H48.14Z"/>`;

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
        ${PhIconEject.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-eject': PhIconEject;
  }
}
