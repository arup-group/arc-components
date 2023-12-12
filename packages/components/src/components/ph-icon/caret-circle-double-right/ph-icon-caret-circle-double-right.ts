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
@customElement('ph-icon-caret-circle-double-right')
export default class PhIconCaretCircleDoubleRight extends LitElement {
  /** @internal */
  static tag = 'ph-icon-caret-circle-double-right';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M201.54,54.46A104,104,0,0,0,54.46,201.54,104,104,0,0,0,201.54,54.46ZM190.23,190.23a88,88,0,1,1,0-124.46A88.11,88.11,0,0,1,190.23,190.23Zm-64.57-67.89a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L108.69,128,82.34,101.66A8,8,0,0,1,93.66,90.34Zm56,0a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L164.69,128l-26.35-26.34a8,8,0,0,1,11.32-11.32Z"/>`;

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
        ${PhIconCaretCircleDoubleRight.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-caret-circle-double-right': PhIconCaretCircleDoubleRight;
  }
}
