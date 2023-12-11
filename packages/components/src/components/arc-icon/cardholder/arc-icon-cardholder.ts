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
import styles from './arc-icon-cardholder.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-cardholder')
export default class ArcIconCardholder extends LitElement {
  /** @internal */
  static tag = 'arc-icon-cardholder';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [IconWeight.THIN, svg`<path d="M208,52H48A20,20,0,0,0,28,72V184a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V72A20,20,0,0,0,208,52ZM36,92H220v24H167.19a12,12,0,0,0-11.75,9.6,28,28,0,0,1-54.88,0A12,12,0,0,0,88.81,116H36ZM48,60H208a12,12,0,0,1,12,12V84H36V72A12,12,0,0,1,48,60ZM208,196H48a12,12,0,0,1-12-12V124H88.81a4,4,0,0,1,3.91,3.2,36,36,0,0,0,70.56,0,4,4,0,0,1,3.91-3.2H220v60A12,12,0,0,1,208,196Z"/>`],
    [IconWeight.LIGHT, svg`<path d="M208,50H48A22,22,0,0,0,26,72V184a22,22,0,0,0,22,22H208a22,22,0,0,0,22-22V72A22,22,0,0,0,208,50ZM38,94H218v20H167.19a14,14,0,0,0-13.71,11.21,26,26,0,0,1-51,0A14,14,0,0,0,88.81,114H38ZM48,62H208a10,10,0,0,1,10,10V82H38V72A10,10,0,0,1,48,62ZM208,194H48a10,10,0,0,1-10-10V126H88.81a2,2,0,0,1,2,1.59,38,38,0,0,0,74.48,0,2,2,0,0,1,1.95-1.59H218v58A10,10,0,0,1,208,194Z"/>`],
    [IconWeight.REGULAR, svg`<path d="M208,48H48A24,24,0,0,0,24,72V184a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V72A24,24,0,0,0,208,48ZM40,96H216v16H167.19a16,16,0,0,0-15.67,12.81,24,24,0,0,1-47,0A16,16,0,0,0,88.81,112H40Zm8-32H208a8,8,0,0,1,8,8v8H40V72A8,8,0,0,1,48,64ZM208,192H48a8,8,0,0,1-8-8V128H88.8a40,40,0,0,0,78.39,0H216v56A8,8,0,0,1,208,192Z"/>`],
    [IconWeight.BOLD, svg`<path d="M208,44H48A28,28,0,0,0,20,72V184a28,28,0,0,0,28,28H208a28,28,0,0,0,28-28V72A28,28,0,0,0,208,44ZM48,68H208a4,4,0,0,1,4,4V88H167.19a20,20,0,0,0-19.59,16,20,20,0,0,1-39.2,0A20,20,0,0,0,88.81,88H44V72A4,4,0,0,1,48,68ZM208,188H48a4,4,0,0,1-4-4V112H85.66a44,44,0,0,0,84.68,0H212v72A4,4,0,0,1,208,188Z"/>`],
    [IconWeight.FILL, svg`<path d="M208,48H48A24,24,0,0,0,24,72V184a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V72A24,24,0,0,0,208,48Zm-56.48,76.81a24,24,0,0,1-47,0A16,16,0,0,0,88.81,112H40V96H216v16H167.19A16,16,0,0,0,151.52,124.81ZM48,64H208a8,8,0,0,1,8,8v8H40V72A8,8,0,0,1,48,64Z"/>`],
    [IconWeight.DUOTONE, svg`<path d="M224,72v48H167.19a8,8,0,0,0-7.83,6.4,32,32,0,0,1-62.72,0,8,8,0,0,0-7.83-6.4H32V72A16,16,0,0,1,48,56H208A16,16,0,0,1,224,72Z" opacity="0.2"/><path d="M208,48H48A24,24,0,0,0,24,72V184a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V72A24,24,0,0,0,208,48ZM40,96H216v16H167.19a16,16,0,0,0-15.67,12.81,24,24,0,0,1-47,0A16,16,0,0,0,88.81,112H40Zm8-32H208a8,8,0,0,1,8,8v8H40V72A8,8,0,0,1,48,64ZM208,192H48a8,8,0,0,1-8-8V128H88.8a40,40,0,0,0,78.39,0H216v56A8,8,0,0,1,208,192Z"/>`],
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
        ${ArcIconCardholder.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "arc-icon-cardholder": ArcIconCardholder;
  }
}
