/* GENERATED FILE */
import { html, svg, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styleMap } from 'lit/directives/style-map.js';
import { IconStyle as IconWeight } from '@phosphor-icons/core';
import {
  FONT_SIZES,
  FontSize,
} from '../../../internal/constants/styleConstants.js';
import styles from './arc-icon-arrow-line-down-right.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-arrow-line-down-right')
export default class ArcIconArrowLineDownRight extends LitElement {
  /** @internal */
  static tag = 'arc-icon-arrow-line-down-right';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [IconWeight.THIN, svg`<path d="M220,40a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,40Zm-28,60a4,4,0,0,0-4,4v86.34L82.83,85.17a4,4,0,0,0-5.66,5.66L182.34,196H96a4,4,0,0,0,0,8h96a4,4,0,0,0,4-4V104A4,4,0,0,0,192,100Z"/>`],
    [IconWeight.LIGHT, svg`<path d="M222,40a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,40ZM192,98a6,6,0,0,0-6,6v81.52L84.24,83.76a6,6,0,0,0-8.48,8.48L177.52,194H96a6,6,0,0,0,0,12h96a6,6,0,0,0,6-6V104A6,6,0,0,0,192,98Z"/>`],
    [IconWeight.REGULAR, svg`<path d="M224,40a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40ZM192,96a8,8,0,0,0-8,8v76.69L85.66,82.34A8,8,0,0,0,74.34,93.66L172.69,192H96a8,8,0,0,0,0,16h96a8,8,0,0,0,8-8V104A8,8,0,0,0,192,96Z"/>`],
    [IconWeight.BOLD, svg`<path d="M228,40a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,40ZM192,92a12,12,0,0,0-12,12v67L88.49,79.51a12,12,0,0,0-17,17L163,188H96a12,12,0,0,0,0,24h96a12,12,0,0,0,12-12V104A12,12,0,0,0,192,92Z"/>`],
    [IconWeight.FILL, svg`<path d="M224,40a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40ZM195.06,96.61a8,8,0,0,0-8.72,1.73L144,140.69,85.66,82.34A8,8,0,0,0,74.34,93.66L132.69,152,90.34,194.34A8,8,0,0,0,96,208h96a8,8,0,0,0,8-8V104A8,8,0,0,0,195.06,96.61Z"/>`],
    [IconWeight.DUOTONE, svg`<g opacity="0.2"><polygon points="192 104 192 200 96 200 192 104"/></g><path d="M224,40a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40Zm-24,64v96a8,8,0,0,1-8,8H96a8,8,0,0,1-5.66-13.66L132.69,152,74.34,93.66A8,8,0,0,1,85.66,82.34L144,140.69l42.34-42.35A8,8,0,0,1,200,104Zm-16,19.31-34.34,34.35h0L115.31,192H184Z"/>`],
  ]);

  /** The weight of the icon. */
  @property({ type: String })
  weight: IconWeight = IconWeight.REGULAR;

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
        ${ArcIconArrowLineDownRight.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "arc-icon-arrow-line-down-right": ArcIconArrowLineDownRight;
  }
}
