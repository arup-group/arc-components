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
import styles from './arc-icon-fire.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-fire')
export default class ArcIconFire extends LitElement {
  /** @internal */
  static tag = 'arc-icon-fire';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      IconWeight.THIN,
      svg`<path d="M179.94,152.67a53.51,53.51,0,0,1-43.28,43.27,3.68,3.68,0,0,1-.66.06,4,4,0,0,1-.66-7.94c18.18-3.06,33.63-18.51,36.72-36.73a4,4,0,0,1,7.88,1.34ZM212,144a84,84,0,0,1-168,0c0-27,10.71-54.75,31.84-82.43a4,4,0,0,1,6-.44l28.55,27.7,24.15-66.2a4,4,0,0,1,6.31-1.71C162.22,38.69,212,86.24,212,144Zm-8,0c0-50.82-41.73-93.91-63.94-113.23l-24.3,66.6a4,4,0,0,1-6.55,1.5L79.5,70C61.25,95.07,52,119.93,52,144a76,76,0,0,0,152,0Z"/>`,
    ],
    [
      IconWeight.LIGHT,
      svg`<path d="M181.92,153A55.58,55.58,0,0,1,137,197.92a7,7,0,0,1-1,.08,6,6,0,0,1-1-11.92c17.38-2.92,32.13-17.68,35.08-35.08a6,6,0,1,1,11.84,2ZM214,144a86,86,0,0,1-172,0c0-27.47,10.85-55.61,32.25-83.64a6,6,0,0,1,9-.67l26.34,25.56,23.09-63.31a6,6,0,0,1,9.47-2.56C163.72,37.33,214,85.4,214,144Zm-12,0c0-48.4-38.65-89.84-61.07-109.8L117.64,98.06a6,6,0,0,1-9.82,2.25l-28-27.22C62.67,97.13,54,121,54,144a74,74,0,0,0,148,0Z"/>`,
    ],
    [
      IconWeight.REGULAR,
      svg`<path d="M183.89,153.34a57.6,57.6,0,0,1-46.56,46.55A8.75,8.75,0,0,1,136,200a8,8,0,0,1-1.32-15.89c16.57-2.79,30.63-16.85,33.44-33.45a8,8,0,0,1,15.78,2.68ZM216,144a88,88,0,0,1-176,0c0-27.92,11-56.47,32.66-84.85a8,8,0,0,1,11.93-.89l24.12,23.41,22-60.41a8,8,0,0,1,12.63-3.41C165.21,36,216,84.55,216,144Zm-16,0c0-46.09-35.79-85.92-58.21-106.33L119.52,98.74a8,8,0,0,1-13.09,3L80.06,76.16C64.09,99.21,56,122,56,144a72,72,0,0,0,144,0Z"/>`,
    ],
    [
      IconWeight.BOLD,
      svg`<path d="M177.62,159.6a52,52,0,0,1-34,34,12.2,12.2,0,0,1-3.6.55,12,12,0,0,1-3.6-23.45,28,28,0,0,0,18.32-18.32,12,12,0,0,1,22.9,7.2ZM220,144a92,92,0,0,1-184,0c0-28.81,11.27-58.18,33.48-87.28a12,12,0,0,1,17.9-1.33L107.07,74.5,127,19.89a12,12,0,0,1,18.94-5.12C168.2,33.25,220,82.85,220,144Zm-24,0c0-41.71-30.61-78.39-52.52-99.29l-20.21,55.4a12,12,0,0,1-19.63,4.5L80.71,82.36C67,103.38,60,124.06,60,144a68,68,0,0,0,136,0Z"/>`,
    ],
    [
      IconWeight.FILL,
      svg`<path d="M143.38,17.85a8,8,0,0,0-12.63,3.41l-22,60.41L84.59,58.26a8,8,0,0,0-11.93.89C51,87.53,40,116.08,40,144a88,88,0,0,0,176,0C216,84.55,165.21,36,143.38,17.85Zm40.51,135.49a57.6,57.6,0,0,1-46.56,46.55A7.65,7.65,0,0,1,136,200a8,8,0,0,1-1.32-15.89c16.57-2.79,30.63-16.85,33.44-33.45a8,8,0,0,1,15.78,2.68Z"/>`,
    ],
    [
      IconWeight.DUOTONE,
      svg`<path d="M208,144a80,80,0,0,1-160,0c0-30.57,14.42-58.26,31-80l33,32,26.27-72C159.86,41.92,208,88.15,208,144Z" opacity="0.2"/><path d="M183.89,153.34a57.6,57.6,0,0,1-46.56,46.55A8.75,8.75,0,0,1,136,200a8,8,0,0,1-1.32-15.89c16.57-2.79,30.63-16.85,33.44-33.45a8,8,0,0,1,15.78,2.68ZM216,144a88,88,0,0,1-176,0c0-27.92,11-56.47,32.66-84.85a8,8,0,0,1,11.93-.89l24.12,23.41,22-60.41a8,8,0,0,1,12.63-3.41C165.21,36,216,84.55,216,144Zm-16,0c0-46.09-35.79-85.92-58.21-106.33L119.52,98.74a8,8,0,0,1-13.09,3L80.06,76.16C64.09,99.21,56,122,56,144a72,72,0,0,0,144,0Z"/>`,
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
        ${ArcIconFire.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-icon-fire': ArcIconFire;
  }
}
