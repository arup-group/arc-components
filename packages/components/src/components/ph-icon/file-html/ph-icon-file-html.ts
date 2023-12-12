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
@customElement('ph-icon-file-html')
export default class PhIconFileHtml extends LitElement {
  /** @internal */
  static tag = 'ph-icon-file-html';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M128,152a8,8,0,0,1-8,8h-8v48a8,8,0,0,1-16,0V160H88a8,8,0,0,1,0-16h32A8,8,0,0,1,128,152Zm-64-8a8,8,0,0,0-8,8v20H40V152a8,8,0,0,0-16,0v56a8,8,0,0,0,16,0V188H56v20a8,8,0,0,0,16,0V152A8,8,0,0,0,64,144Zm176,56H228V152a8,8,0,0,0-16,0v56a8,8,0,0,0,8,8h20a8,8,0,0,0,0-16Zm-45.86-55.71a8,8,0,0,0-9,3.59L168,176.45l-17.14-28.57A8,8,0,0,0,136,152v56a8,8,0,0,0,16,0V180.88l9.14,15.24a8,8,0,0,0,13.72,0L184,180.88V208a8,8,0,0,0,16,0V152A8,8,0,0,0,194.14,144.29ZM208,120a8,8,0,0,1-8-8V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24A8,8,0,0,1,208,120ZM188.69,80,160,51.31V80Z"/>`;

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
        ${PhIconFileHtml.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-file-html': PhIconFileHtml;
  }
}
