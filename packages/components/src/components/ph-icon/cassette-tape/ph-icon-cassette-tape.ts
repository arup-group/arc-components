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
@customElement('ph-icon-cassette-tape')
export default class PhIconCassetteTape extends LitElement {
  /** @internal */
  static tag = 'ph-icon-cassette-tape';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM80,192l12-16h72l12,16Zm144,0H196l-19.2-25.6A16.07,16.07,0,0,0,164,160H92a16.07,16.07,0,0,0-12.8,6.4L60,192H32V64H224V192ZM176,80H80a32,32,0,0,0,0,64h96a32,32,0,0,0,0-64ZM148.3,96a31.92,31.92,0,0,0,0,32H107.7a31.92,31.92,0,0,0,0-32ZM64,112a16,16,0,1,1,16,16A16,16,0,0,1,64,112Zm112,16a16,16,0,1,1,16-16A16,16,0,0,1,176,128Z"/>`;

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
        ${PhIconCassetteTape.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-cassette-tape': PhIconCassetteTape;
  }
}
