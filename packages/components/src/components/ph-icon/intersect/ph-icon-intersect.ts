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
@customElement('ph-icon-intersect')
export default class PhIconIntersect extends LitElement {
  /** @internal */
  static tag = 'ph-icon-intersect';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M174.63,81.37a80,80,0,1,0-93.26,93.26,80,80,0,1,0,93.26-93.26ZM100.69,136,120,155.31A63.48,63.48,0,0,1,96,160,63.48,63.48,0,0,1,100.69,136Zm33.75,11.13-25.57-25.57a64.65,64.65,0,0,1,12.69-12.69l25.57,25.57A64.65,64.65,0,0,1,134.44,147.13ZM155.31,120,136,100.69A63.48,63.48,0,0,1,160,96,63.48,63.48,0,0,1,155.31,120ZM32,96a64,64,0,0,1,126-16A80.08,80.08,0,0,0,80.05,158,64.11,64.11,0,0,1,32,96ZM160,224A64.11,64.11,0,0,1,98,176,80.08,80.08,0,0,0,176,98,64,64,0,0,1,160,224Z"/>`;

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
        ${PhIconIntersect.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-intersect': PhIconIntersect;
  }
}
