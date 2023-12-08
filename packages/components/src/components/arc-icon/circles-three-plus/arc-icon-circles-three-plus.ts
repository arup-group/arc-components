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
import styles from './arc-icon-circles-three-plus.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-circles-three-plus')
export default class ArcIconCirclesThreePlus extends LitElement {
  /** @internal */
  static tag = 'arc-icon-circles-three-plus';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [IconWeight.THIN, svg`<path d="M80,44a36,36,0,1,0,36,36A36,36,0,0,0,80,44Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,80,108Zm96,8a36,36,0,1,0-36-36A36,36,0,0,0,176,116Zm0-64a28,28,0,1,1-28,28A28,28,0,0,1,176,52ZM80,140a36,36,0,1,0,36,36A36,36,0,0,0,80,140Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,80,204Zm132-28a4,4,0,0,1-4,4H180v28a4,4,0,0,1-8,0V180H144a4,4,0,0,1,0-8h28V144a4,4,0,0,1,8,0v28h28A4,4,0,0,1,212,176Z"/>`],
    [IconWeight.LIGHT, svg`<path d="M80,42a38,38,0,1,0,38,38A38,38,0,0,0,80,42Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,80,106Zm96,12a38,38,0,1,0-38-38A38,38,0,0,0,176,118Zm0-64a26,26,0,1,1-26,26A26,26,0,0,1,176,54ZM80,138a38,38,0,1,0,38,38A38,38,0,0,0,80,138Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,80,202Zm134-26a6,6,0,0,1-6,6H182v26a6,6,0,0,1-12,0V182H144a6,6,0,0,1,0-12h26V144a6,6,0,0,1,12,0v26h26A6,6,0,0,1,214,176Z"/>`],
    [IconWeight.REGULAR, svg`<path d="M80,40a40,40,0,1,0,40,40A40,40,0,0,0,80,40Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,80,104Zm96,16a40,40,0,1,0-40-40A40,40,0,0,0,176,120Zm0-64a24,24,0,1,1-24,24A24,24,0,0,1,176,56ZM80,136a40,40,0,1,0,40,40A40,40,0,0,0,80,136Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,80,200Zm136-24a8,8,0,0,1-8,8H184v24a8,8,0,0,1-16,0V184H144a8,8,0,0,1,0-16h24V144a8,8,0,0,1,16,0v24h24A8,8,0,0,1,216,176Z"/>`],
    [IconWeight.BOLD, svg`<path d="M78,36a42,42,0,1,0,42,42A42,42,0,0,0,78,36Zm0,60A18,18,0,1,1,96,78,18,18,0,0,1,78,96Zm100,24a42,42,0,1,0-42-42A42,42,0,0,0,178,120Zm0-60a18,18,0,1,1-18,18A18,18,0,0,1,178,60ZM78,136a42,42,0,1,0,42,42A42,42,0,0,0,78,136Zm0,60a18,18,0,1,1,18-18A18,18,0,0,1,78,196Zm142-18a12,12,0,0,1-12,12H190v18a12,12,0,0,1-24,0V190H148a12,12,0,0,1,0-24h18V148a12,12,0,0,1,24,0v18h18A12,12,0,0,1,220,178Z"/>`],
    [IconWeight.FILL, svg`<path d="M120,80A40,40,0,1,1,80,40,40,40,0,0,1,120,80Zm56,40a40,40,0,1,0-40-40A40,40,0,0,0,176,120ZM80,136a40,40,0,1,0,40,40A40,40,0,0,0,80,136Zm128,32H184V144a8,8,0,0,0-16,0v24H144a8,8,0,0,0,0,16h24v24a8,8,0,0,0,16,0V184h24a8,8,0,0,0,0-16Z"/>`],
    [IconWeight.DUOTONE, svg`<path d="M112,80A32,32,0,1,1,80,48,32,32,0,0,1,112,80Zm64-32a32,32,0,1,0,32,32A32,32,0,0,0,176,48ZM80,144a32,32,0,1,0,32,32A32,32,0,0,0,80,144Z" opacity="0.2"/><path d="M80,40a40,40,0,1,0,40,40A40,40,0,0,0,80,40Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,80,104Zm96,16a40,40,0,1,0-40-40A40,40,0,0,0,176,120Zm0-64a24,24,0,1,1-24,24A24,24,0,0,1,176,56ZM80,136a40,40,0,1,0,40,40A40,40,0,0,0,80,136Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,80,200Zm136-24a8,8,0,0,1-8,8H184v24a8,8,0,0,1-16,0V184H144a8,8,0,0,1,0-16h24V144a8,8,0,0,1,16,0v24h24A8,8,0,0,1,216,176Z"/>`],
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
        ${ArcIconCirclesThreePlus.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "arc-icon-circles-three-plus": ArcIconCirclesThreePlus;
  }
}
