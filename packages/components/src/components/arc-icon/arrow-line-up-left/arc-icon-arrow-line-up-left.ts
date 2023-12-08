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
import styles from './arc-icon-arrow-line-up-left.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-arrow-line-up-left')
export default class ArcIconArrowLineUpLeft extends LitElement {
  /** @internal */
  static tag = 'arc-icon-arrow-line-up-left';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [IconWeight.THIN, svg`<path d="M220,216a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,216ZM64,156a4,4,0,0,0,4-4V65.66L173.17,170.83a4,4,0,0,0,5.66-5.66L73.66,60H160a4,4,0,0,0,0-8H64a4,4,0,0,0-4,4v96A4,4,0,0,0,64,156Z"/>`],
    [IconWeight.LIGHT, svg`<path d="M222,216a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,216ZM64,158a6,6,0,0,0,6-6V70.49L171.76,172.24a6,6,0,0,0,8.48-8.48L78.49,62H160a6,6,0,0,0,0-12H64a6,6,0,0,0-6,6v96A6,6,0,0,0,64,158Z"/>`],
    [IconWeight.REGULAR, svg`<path d="M224,216a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,216ZM64,160a8,8,0,0,0,8-8V75.31l98.34,98.35a8,8,0,0,0,11.32-11.32L83.31,64H160a8,8,0,0,0,0-16H64a8,8,0,0,0-8,8v96A8,8,0,0,0,64,160Z"/>`],
    [IconWeight.BOLD, svg`<path d="M228,216a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,216ZM64,164a12,12,0,0,0,12-12V85l91.51,91.52a12,12,0,0,0,17-17L93,68h67a12,12,0,0,0,0-24H64A12,12,0,0,0,52,56v96A12,12,0,0,0,64,164Z"/>`],
    [IconWeight.FILL, svg`<path d="M56,152V56a8,8,0,0,1,8-8h96a8,8,0,0,1,5.66,13.66L123.31,104l58.35,58.34a8,8,0,0,1-11.32,11.32L112,115.31,69.66,157.66A8,8,0,0,1,56,152Zm160,56H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"/>`],
    [IconWeight.DUOTONE, svg`<path d="M160,56,64,152V56Z" opacity="0.2"/><path d="M224,216a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,216ZM56,152V56a8,8,0,0,1,8-8h96a8,8,0,0,1,5.66,13.66L123.31,104l58.35,58.34a8,8,0,0,1-11.32,11.32L112,115.31,69.66,157.66A8,8,0,0,1,56,152Zm16-19.31,34.34-34.35h0L140.69,64H72Z"/>`],
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
        ${ArcIconArrowLineUpLeft.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "arc-icon-arrow-line-up-left": ArcIconArrowLineUpLeft;
  }
}
