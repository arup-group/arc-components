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
@customElement('ph-icon-stack-overflow-logo')
export default class PhIconStackOverflowLogo extends LitElement {
  /** @internal */
  static tag = 'ph-icon-stack-overflow-logo';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M216,152.09V216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152.09a8,8,0,0,1,16,0V208H200V152.09a8,8,0,0,1,16,0Zm-128,32h80a8,8,0,1,0,0-16H88a8,8,0,1,0,0,16Zm4.88-53,77.27,20.68a7.89,7.89,0,0,0,2.08.28,8,8,0,0,0,2.07-15.71L97,115.61A8,8,0,1,0,92.88,131Zm18.45-49.93,69.28,40a8,8,0,0,0,10.93-2.93,8,8,0,0,0-2.93-10.91L119.33,67.27a8,8,0,1,0-8,13.84Zm87.33,13A8,8,0,1,0,210,82.84l-56.57-56.5a8,8,0,0,0-11.32,11.3Z"/>`;

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
        ${PhIconStackOverflowLogo.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-stack-overflow-logo': PhIconStackOverflowLogo;
  }
}
