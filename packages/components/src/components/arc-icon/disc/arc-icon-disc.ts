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
import styles from './arc-icon-disc.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-disc')
export default class ArcIconDisc extends LitElement {
  /** @internal */
  static tag = 'arc-icon-disc';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      IconWeight.THIN,
      svg`<path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm35.77,96a35.78,35.78,0,0,0-7.66-18.45l39.68-39.68A91.64,91.64,0,0,1,219.91,124ZM156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128Zm-28,92A92,92,0,1,1,190.13,60.21L150.45,99.89A36,36,0,1,0,163.77,132h56.14A92.11,92.11,0,0,1,128,220Z"/>`,
    ],
    [
      IconWeight.LIGHT,
      svg`<path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm37.52,96a37.79,37.79,0,0,0-6.76-16.27l37-36.95A89.61,89.61,0,0,1,217.8,122ZM154,128a26,26,0,1,1-26-26A26,26,0,0,1,154,128Zm-26,90A90,90,0,1,1,187.22,60.29L150.27,97.24A38,38,0,1,0,165.52,134H217.8A90.12,90.12,0,0,1,128,218Z"/>`,
    ],
    [
      IconWeight.REGULAR,
      svg`<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm39.2,96a39.77,39.77,0,0,0-5.84-14l34.23-34.24a87.54,87.54,0,0,1,20,48.28ZM152,128a24,24,0,1,1-24-24A24,24,0,0,1,152,128Zm-24,88A88,88,0,1,1,184.28,60.4L150,94.64A40,40,0,1,0,167.2,136h48.43A88.11,88.11,0,0,1,128,216Z"/>`,
    ],
    [
      IconWeight.BOLD,
      svg`<path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm42.32,96a44,44,0,0,0-3.91-9.44l28.84-28.84A83.55,83.55,0,0,1,211.13,116ZM148,128a20,20,0,1,1-20-20A20,20,0,0,1,148,128Zm-20,84A84,84,0,1,1,178.28,60.75L149.43,89.59A44,44,0,1,0,170.32,140h40.81A84.12,84.12,0,0,1,128,212Z"/>`,
    ],
    [
      IconWeight.FILL,
      svg`<path d="M188.3,43.31a8,8,0,0,0-.65-.5c-.23-.16-.47-.31-.71-.45a103.85,103.85,0,1,0,1.36,1ZM128,152a24,24,0,1,1,24-24A24,24,0,0,1,128,152Zm88-24c0,2.47-.11,4.92-.31,7.34L168,126.92a39.83,39.83,0,0,0-11-26.41l27.78-39.67A87.8,87.8,0,0,1,216,128Z"/>`,
    ],
    [
      IconWeight.DUOTONE,
      svg`<path d="M224,128a96,96,0,1,1-28.12-67.88l-45.25,45.25h0A32,32,0,1,0,160,128Z" opacity="0.2"/><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm39.2,96a39.77,39.77,0,0,0-5.84-14l34.23-34.24a87.54,87.54,0,0,1,20,48.28ZM152,128a24,24,0,1,1-24-24A24,24,0,0,1,152,128Zm-24,88A88,88,0,1,1,184.28,60.4L150,94.64A40,40,0,1,0,167.2,136h48.43A88.11,88.11,0,0,1,128,216Z"/>`,
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
        ${ArcIconDisc.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-icon-disc': ArcIconDisc;
  }
}
