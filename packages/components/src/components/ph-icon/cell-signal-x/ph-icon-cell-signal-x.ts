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
@customElement('ph-icon-cell-signal-x')
export default class PhIconCellSignalX extends LitElement {
  /** @internal */
  static tag = 'ph-icon-cell-signal-x';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M213.66,194.34a8,8,0,0,1-11.32,11.32L184,187.31l-18.34,18.35a8,8,0,0,1-11.32-11.32L172.69,176l-18.35-18.34a8,8,0,0,1,11.32-11.32L184,164.69l18.34-18.35a8,8,0,0,1,11.32,11.32L195.31,176ZM160,128a8,8,0,0,0,8-8V72a8,8,0,0,0-16,0v48A8,8,0,0,0,160,128Zm40,0a8,8,0,0,0,8-8V32a8,8,0,0,0-16,0v88A8,8,0,0,0,200,128Zm-80-24a8,8,0,0,0-8,8v88a8,8,0,0,0,16,0V112A8,8,0,0,0,120,104ZM80,144a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V152A8,8,0,0,0,80,144ZM40,184a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-8A8,8,0,0,0,40,184Z"/>`;

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
        ${PhIconCellSignalX.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-cell-signal-x': PhIconCellSignalX;
  }
}
