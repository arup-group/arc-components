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
@customElement('ph-icon-poker-chip')
export default class PhIconPokerChip extends LitElement {
  /** @internal */
  static tag = 'ph-icon-poker-chip';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,152a48,48,0,1,1,48-48A48.05,48.05,0,0,1,128,176Zm39.21-98.53a63.66,63.66,0,0,0-31.21-13V40.37a87.6,87.6,0,0,1,48.28,20ZM120,64.52a63.66,63.66,0,0,0-31.21,13L71.72,60.4a87.6,87.6,0,0,1,48.28-20ZM77.47,88.79a63.66,63.66,0,0,0-13,31.21H40.37a87.6,87.6,0,0,1,20-48.28ZM64.52,136a63.66,63.66,0,0,0,13,31.21L60.4,184.28a87.6,87.6,0,0,1-20-48.28Zm24.27,42.53A63.66,63.66,0,0,0,120,191.48v24.15a87.6,87.6,0,0,1-48.28-20ZM136,191.48a63.66,63.66,0,0,0,31.21-12.95l17.07,17.07a87.6,87.6,0,0,1-48.28,20Zm42.53-24.27A63.66,63.66,0,0,0,191.48,136h24.15a87.6,87.6,0,0,1-20,48.28ZM191.48,120a63.66,63.66,0,0,0-12.95-31.21L195.6,71.72a87.6,87.6,0,0,1,20,48.28Z"/>`;

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
        ${PhIconPokerChip.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-poker-chip': PhIconPokerChip;
  }
}
