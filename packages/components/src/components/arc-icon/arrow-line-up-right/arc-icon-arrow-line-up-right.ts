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
import styles from './arc-icon-arrow-line-up-right.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-arrow-line-up-right')
export default class ArcIconArrowLineUpRight extends LitElement {
  /** @internal */
  static tag = 'arc-icon-arrow-line-up-right';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [IconWeight.THIN, svg`<path d="M220,216a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,216ZM80,172a4,4,0,0,0,2.83-1.17L188,65.66V152a4,4,0,0,0,8,0V56a4,4,0,0,0-4-4H96a4,4,0,0,0,0,8h86.34L77.17,165.17A4,4,0,0,0,80,172Z"/>`],
    [IconWeight.LIGHT, svg`<path d="M222,216a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,216ZM80,174a6,6,0,0,0,4.24-1.76L186,70.49V152a6,6,0,0,0,12,0V56a6,6,0,0,0-6-6H96a6,6,0,0,0,0,12h81.51L75.76,163.76A6,6,0,0,0,80,174Z"/>`],
    [IconWeight.REGULAR, svg`<path d="M224,216a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,216ZM80,176a8,8,0,0,0,5.66-2.34L184,75.31V152a8,8,0,0,0,16,0V56a8,8,0,0,0-8-8H96a8,8,0,0,0,0,16h76.69L74.34,162.34A8,8,0,0,0,80,176Z"/>`],
    [IconWeight.BOLD, svg`<path d="M228,216a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,216ZM80,180a12,12,0,0,0,8.49-3.51L180,85v67a12,12,0,0,0,24,0V56a12,12,0,0,0-12-12H96a12,12,0,0,0,0,24h67L71.51,159.51A12,12,0,0,0,80,180Z"/>`],
    [IconWeight.FILL, svg`<path d="M74.34,173.66a8,8,0,0,1,0-11.32L132.69,104,90.34,61.66A8,8,0,0,1,96,48h96a8,8,0,0,1,8,8v96a8,8,0,0,1-13.66,5.66L144,115.31,85.66,173.66a8,8,0,0,1-11.32,0ZM216,208H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"/>`],
    [IconWeight.DUOTONE, svg`<path d="M192,56v96L96,56Z" opacity="0.2"/><path d="M224,216a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,216ZM74.34,173.66a8,8,0,0,1,0-11.32L132.69,104,90.34,61.66A8,8,0,0,1,96,48h96a8,8,0,0,1,8,8v96a8,8,0,0,1-13.66,5.66L144,115.31,85.66,173.66a8,8,0,0,1-11.32,0ZM115.31,64l34.35,34.34h0L184,132.69V64Z"/>`],
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
        ${ArcIconArrowLineUpRight.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "arc-icon-arrow-line-up-right": ArcIconArrowLineUpRight;
  }
}
