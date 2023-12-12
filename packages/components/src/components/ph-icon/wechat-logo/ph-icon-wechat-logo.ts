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
@customElement('ph-icon-wechat-logo')
export default class PhIconWechatLogo extends LitElement {
  /** @internal */
  static tag = 'ph-icon-wechat-logo';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M231.79,187.33A80,80,0,0,0,169.58,72.59,80,80,0,1,0,24.21,139.33l-7.66,26.82A14,14,0,0,0,30,184a13.65,13.65,0,0,0,3.84-.54l26.82-7.66a78.86,78.86,0,0,0,25.77,7.63,80,80,0,0,0,108.89,40.37l26.82,7.66a14,14,0,0,0,17.3-17.3ZM65.36,160.21a8,8,0,0,0-6-.68l-26.41,7.55,7.55-26.41a8,8,0,0,0-.68-6A64,64,0,0,1,151.68,72.43,80.12,80.12,0,0,0,80,152a79.31,79.31,0,0,0,1.31,14.3A63.34,63.34,0,0,1,65.36,160.21Zm150.17,28.46,7.55,26.41-26.41-7.55a8,8,0,0,0-6,.68,63.95,63.95,0,1,1,25.57-25.57A8,8,0,0,0,215.53,188.67ZM144,140a12,12,0,1,1-12-12A12,12,0,0,1,144,140Zm56,0a12,12,0,1,1-12-12A12,12,0,0,1,200,140Z"/>`;

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
        ${PhIconWechatLogo.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-wechat-logo': PhIconWechatLogo;
  }
}
