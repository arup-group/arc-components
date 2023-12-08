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
import styles from './arc-icon-cactus.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-cactus')
export default class ArcIconCactus extends LitElement {
  /** @internal */
  static tag = 'arc-icon-cactus';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [IconWeight.THIN, svg`<path d="M216,212H164V180h8a64.07,64.07,0,0,0,64-64,24,24,0,0,0-48,0,16,16,0,0,1-16,16h-8V56a36,36,0,0,0-72,0V92H84A16,16,0,0,1,68,76a24,24,0,0,0-48,0,64.07,64.07,0,0,0,64,64h8v72H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8ZM96,132H84A56.06,56.06,0,0,1,28,76a16,16,0,0,1,32,0,24,24,0,0,0,24,24H96a4,4,0,0,0,4-4V56a28,28,0,0,1,56,0v80a4,4,0,0,0,4,4h12a24,24,0,0,0,24-24,16,16,0,0,1,32,0,56.06,56.06,0,0,1-56,56H160a4,4,0,0,0-4,4v36H100V136A4,4,0,0,0,96,132Z"/>`],
    [IconWeight.LIGHT, svg`<path d="M216,210H166V182h6a66.08,66.08,0,0,0,66-66,26,26,0,0,0-52,0,14,14,0,0,1-14,14h-6V56a38,38,0,0,0-76,0V90H84A14,14,0,0,1,70,76a26,26,0,0,0-52,0,66.08,66.08,0,0,0,66,66h6v68H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12ZM96,130H84A54.06,54.06,0,0,1,30,76a14,14,0,0,1,28,0,26,26,0,0,0,26,26H96a6,6,0,0,0,6-6V56a26,26,0,0,1,52,0v80a6,6,0,0,0,6,6h12a26,26,0,0,0,26-26,14,14,0,0,1,28,0,54.06,54.06,0,0,1-54,54H160a6,6,0,0,0-6,6v34H102V136A6,6,0,0,0,96,130Z"/>`],
    [IconWeight.REGULAR, svg`<path d="M216,208H168V184h4a68.07,68.07,0,0,0,68-68,28,28,0,0,0-56,0,12,12,0,0,1-12,12h-4V56a40,40,0,0,0-80,0V88H84A12,12,0,0,1,72,76a28,28,0,0,0-56,0,68.07,68.07,0,0,0,68,68h4v64H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM96,128H84A52.06,52.06,0,0,1,32,76a12,12,0,0,1,24,0,28,28,0,0,0,28,28H96a8,8,0,0,0,8-8V56a24,24,0,0,1,48,0v80a8,8,0,0,0,8,8h12a28,28,0,0,0,28-28,12,12,0,0,1,24,0,52.06,52.06,0,0,1-52,52H160a8,8,0,0,0-8,8v32H104V136A8,8,0,0,0,96,128Z"/>`],
    [IconWeight.BOLD, svg`<path d="M216,204H172V188a72.08,72.08,0,0,0,72-72,32,32,0,0,0-64,0,8,8,0,0,1-8,8V56a44,44,0,0,0-88,0V84a8,8,0,0,1-8-8,32,32,0,0,0-64,0,72.08,72.08,0,0,0,72,72v56H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24ZM96,124H84A48.05,48.05,0,0,1,36,76a8,8,0,0,1,16,0,32,32,0,0,0,32,32H96a12,12,0,0,0,12-12V56a20,20,0,0,1,40,0v80a12,12,0,0,0,12,12h12a32,32,0,0,0,32-32,8,8,0,0,1,16,0,48.05,48.05,0,0,1-48,48H160a12,12,0,0,0-12,12v28H108V136A12,12,0,0,0,96,124Z"/>`],
    [IconWeight.FILL, svg`<path d="M224,216a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H88V144H84A68.07,68.07,0,0,1,16,76a28,28,0,0,1,56,0A12,12,0,0,0,84,88h4V56a40,40,0,0,1,80,0v72h4a12,12,0,0,0,12-12,28,28,0,0,1,56,0,68.07,68.07,0,0,1-68,68h-4v24h48A8,8,0,0,1,224,216Z"/>`],
    [IconWeight.DUOTONE, svg`<path d="M232,116h0a60,60,0,0,1-60,60H160v40H96V136H84A60,60,0,0,1,24,76h0A20,20,0,0,1,44,56h0A20,20,0,0,1,64,76,20,20,0,0,0,84,96H96V56a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32v80h12a20,20,0,0,0,20-20,20,20,0,0,1,20-20h0A20,20,0,0,1,232,116Z" opacity="0.2"/><path d="M216,208H168V184h4a68.07,68.07,0,0,0,68-68,28,28,0,0,0-56,0,12,12,0,0,1-12,12h-4V56a40,40,0,0,0-80,0V88H84A12,12,0,0,1,72,76a28,28,0,0,0-56,0,68.07,68.07,0,0,0,68,68h4v64H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM96,128H84A52.06,52.06,0,0,1,32,76a12,12,0,0,1,24,0,28,28,0,0,0,28,28H96a8,8,0,0,0,8-8V56a24,24,0,0,1,48,0v80a8,8,0,0,0,8,8h12a28,28,0,0,0,28-28,12,12,0,0,1,24,0,52.06,52.06,0,0,1-52,52H160a8,8,0,0,0-8,8v32H104V136A8,8,0,0,0,96,128Z"/>`],
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
        ${ArcIconCactus.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "arc-icon-cactus": ArcIconCactus;
  }
}
