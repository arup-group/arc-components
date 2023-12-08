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
import styles from './arc-icon-number-square-five.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-number-square-five')
export default class ArcIconNumberSquareFive extends LitElement {
  /** @internal */
  static tag = 'arc-icon-number-square-five';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [IconWeight.THIN, svg`<path d="M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Zm4,172a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4ZM115.39,84l-5.87,35.21A33.26,33.26,0,0,1,124,116a32,32,0,0,1,0,64,31.62,31.62,0,0,1-22.86-9.2,4,4,0,1,1,5.72-5.6A23.67,23.67,0,0,0,124,172a24,24,0,0,0,0-48,23.67,23.67,0,0,0-17.14,6.8,4,4,0,0,1-6.81-3.46l8-48A4,4,0,0,1,112,76h40a4,4,0,0,1,0,8Z"/>`],
    [IconWeight.LIGHT, svg`<path d="M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34Zm2,174a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2ZM117.08,86l-5,30A36,36,0,0,1,124,114a34,34,0,0,1,0,68,33.6,33.6,0,0,1-24.29-9.8,6,6,0,1,1,8.58-8.4A21.65,21.65,0,0,0,124,170a22,22,0,0,0,0-44,21.65,21.65,0,0,0-15.71,6.2A6,6,0,0,1,98.08,127l8-48A6,6,0,0,1,112,74h40a6,6,0,0,1,0,12Z"/>`],
    [IconWeight.REGULAR, svg`<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208V208ZM118.78,88l-4.19,25.14A38.8,38.8,0,0,1,124,112a36,36,0,0,1,0,72,35.54,35.54,0,0,1-25.71-10.4,8,8,0,1,1,11.42-11.2A19.73,19.73,0,0,0,124,168a20,20,0,0,0,0-40,19.73,19.73,0,0,0-14.29,5.6,8,8,0,0,1-13.6-6.92l8-48A8,8,0,0,1,112,72h40a8,8,0,0,1,0,16Z"/>`],
    [IconWeight.BOLD, svg`<path d="M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,176H52V52H204ZM92.16,126l8-48A12,12,0,0,1,112,68h40a12,12,0,0,1,0,24H122.17l-2.71,16.23A45.39,45.39,0,0,1,124,108a40,40,0,0,1,0,80,39.53,39.53,0,0,1-28.57-11.6,12,12,0,1,1,17.14-16.8A15.54,15.54,0,0,0,124,164a16,16,0,0,0,0-32,15.54,15.54,0,0,0-11.43,4.4A12,12,0,0,1,92.16,126Z"/>`],
    [IconWeight.FILL, svg`<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm-84,80a36,36,0,0,1,0,72,35.54,35.54,0,0,1-25.71-10.4,8,8,0,1,1,11.42-11.2A19.73,19.73,0,0,0,124,168a20,20,0,0,0,0-40,19.73,19.73,0,0,0-14.29,5.6,8,8,0,0,1-13.6-6.92l8-48A8,8,0,0,1,112,72h40a8,8,0,0,1,0,16H118.78l-4.19,25.14A38.8,38.8,0,0,1,124,112Z"/>`],
    [IconWeight.DUOTONE, svg`<path d="M216,48V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z" opacity="0.2"/><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208V208ZM118.78,88l-4.19,25.14A38.8,38.8,0,0,1,124,112a36,36,0,0,1,0,72,35.54,35.54,0,0,1-25.71-10.4,8,8,0,1,1,11.42-11.2A19.73,19.73,0,0,0,124,168a20,20,0,0,0,0-40,19.73,19.73,0,0,0-14.29,5.6,8,8,0,0,1-13.6-6.92l8-48A8,8,0,0,1,112,72h40a8,8,0,0,1,0,16Z"/>`],
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
        ${ArcIconNumberSquareFive.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "arc-icon-number-square-five": ArcIconNumberSquareFive;
  }
}
