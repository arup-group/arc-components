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
import styles from './arc-icon-headphones.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-headphones')
export default class ArcIconHeadphones extends LitElement {
  /** @internal */
  static tag = 'arc-icon-headphones';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      IconWeight.THIN,
      svg`<path d="M199.05,65.48A100.07,100.07,0,0,0,28,136v56a20,20,0,0,0,20,20H64a20,20,0,0,0,20-20V152a20,20,0,0,0-20-20H36.08A92,92,0,0,1,128,44h.7a91.75,91.75,0,0,1,91.22,88H192a20,20,0,0,0-20,20v40a20,20,0,0,0,20,20h16a20,20,0,0,0,20-20V136A99.43,99.43,0,0,0,199.05,65.48ZM64,140a12,12,0,0,1,12,12v40a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V140Zm156,52a12,12,0,0,1-12,12H192a12,12,0,0,1-12-12V152a12,12,0,0,1,12-12h28Z"/>`,
    ],
    [
      IconWeight.LIGHT,
      svg`<path d="M200.47,64.07A101.37,101.37,0,0,0,128.77,34H128A102,102,0,0,0,26,136v56a22,22,0,0,0,22,22H64a22,22,0,0,0,22-22V152a22,22,0,0,0-22-22H38.2A90.12,90.12,0,0,1,192,72.52,89.41,89.41,0,0,1,217.81,130H192a22,22,0,0,0-22,22v40a22,22,0,0,0,22,22h16a22,22,0,0,0,22-22V136A101.44,101.44,0,0,0,200.47,64.07ZM64,142a10,10,0,0,1,10,10v40a10,10,0,0,1-10,10H48a10,10,0,0,1-10-10V142Zm154,50a10,10,0,0,1-10,10H192a10,10,0,0,1-10-10V152a10,10,0,0,1,10-10h26Z"/>`,
    ],
    [
      IconWeight.REGULAR,
      svg`<path d="M201.89,62.66A103.43,103.43,0,0,0,128.79,32H128A104,104,0,0,0,24,136v56a24,24,0,0,0,24,24H64a24,24,0,0,0,24-24V152a24,24,0,0,0-24-24H40.36A88,88,0,0,1,128,48h.67a87.71,87.71,0,0,1,87,80H192a24,24,0,0,0-24,24v40a24,24,0,0,0,24,24h16a24,24,0,0,0,24-24V136A103.41,103.41,0,0,0,201.89,62.66ZM64,144a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V144Zm152,48a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8h24Z"/>`,
    ],
    [
      IconWeight.BOLD,
      svg`<path d="M204.73,59.85A108.07,108.07,0,0,0,20,136v56a28,28,0,0,0,28,28H64a28,28,0,0,0,28-28V152a28,28,0,0,0-28-28H44.84A84.05,84.05,0,0,1,128,52h.64a83.7,83.7,0,0,1,82.52,72H192a28,28,0,0,0-28,28v40a28,28,0,0,0,28,28h16a28,28,0,0,0,28-28V136A107.34,107.34,0,0,0,204.73,59.85ZM64,148a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V148Zm148,44a4,4,0,0,1-4,4H192a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4h20Z"/>`,
    ],
    [
      IconWeight.FILL,
      svg`<path d="M232,136v56a24,24,0,0,1-24,24H192a24,24,0,0,1-24-24V152a24,24,0,0,1,24-24h23.65a87.71,87.71,0,0,0-87-80H128a88,88,0,0,0-87.64,80H64a24,24,0,0,1,24,24v40a24,24,0,0,1-24,24H48a24,24,0,0,1-24-24V136A104.11,104.11,0,0,1,201.89,62.66,103.41,103.41,0,0,1,232,136Z"/>`,
    ],
    [
      IconWeight.DUOTONE,
      svg`<path d="M80,152v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V136H64A16,16,0,0,1,80,152Zm112-16a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V136Z" opacity="0.2"/><path d="M201.89,62.66A104.08,104.08,0,0,0,24,136v56a24,24,0,0,0,24,24H64a24,24,0,0,0,24-24V152a24,24,0,0,0-24-24H40.36A88,88,0,0,1,128,48h.67a87.71,87.71,0,0,1,87,80H192a24,24,0,0,0-24,24v40a24,24,0,0,0,24,24h16a24,24,0,0,0,24-24V136A103.41,103.41,0,0,0,201.89,62.66ZM64,144a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V144Zm152,48a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8h24Z"/>`,
    ],
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
        ${ArcIconHeadphones.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-icon-headphones': ArcIconHeadphones;
  }
}
