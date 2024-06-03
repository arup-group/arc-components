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
@customElement('ph-icon-file-dashed')
export default class PhIconFileDashed extends LitElement {
  /** @internal */
  static tag = 'ph-icon-file-dashed';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M80,224a8,8,0,0,1-8,8H56a16,16,0,0,1-16-16V184a8,8,0,0,1,16,0v32H72A8,8,0,0,1,80,224ZM216,88v48a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H120a8,8,0,0,1,0-16h32a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-56-8h28.69L160,51.31ZM80,24H56A16,16,0,0,0,40,40V64a8,8,0,0,0,16,0V40H80a8,8,0,0,0,0-16ZM208,168a8,8,0,0,0-8,8v40h-8a8,8,0,0,0,0,16h8a16,16,0,0,0,16-16V176A8,8,0,0,0,208,168ZM48,152a8,8,0,0,0,8-8V104a8,8,0,0,0-16,0v40A8,8,0,0,0,48,152Zm104,64H112a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Z"/>`;

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
        ${PhIconFileDashed.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-file-dashed': PhIconFileDashed;
  }
}
