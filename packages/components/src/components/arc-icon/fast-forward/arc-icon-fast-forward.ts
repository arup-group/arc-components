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
import styles from './arc-icon-fast-forward.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-fast-forward')
export default class ArcIconFastForward extends LitElement {
  /** @internal */
  static tag = 'arc-icon-fast-forward';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      IconWeight.THIN,
      svg`<path d="M238.52,118,150.33,61.87a12,12,0,0,0-12.18-.39A11.66,11.66,0,0,0,132,71.84v44.59L46.33,61.87a12,12,0,0,0-12.18-.39A11.66,11.66,0,0,0,28,71.84V184.16a11.66,11.66,0,0,0,6.15,10.36,12,12,0,0,0,12.18-.39L132,139.57v44.59a11.66,11.66,0,0,0,6.15,10.36,12,12,0,0,0,12.18-.39L238.52,138a11.81,11.81,0,0,0,0-19.94Zm-108.3,13.19L42,187.38a3.91,3.91,0,0,1-4,.13,3.76,3.76,0,0,1-2-3.35V71.84a3.76,3.76,0,0,1,2-3.35,4,4,0,0,1,1.91-.5,3.94,3.94,0,0,1,2.13.63l88.18,56.16a3.8,3.8,0,0,1,0,6.44Zm104,0L146,187.38a3.91,3.91,0,0,1-4,.13,3.76,3.76,0,0,1-2-3.35V71.84a3.76,3.76,0,0,1,2-3.35,4,4,0,0,1,1.91-.5,3.94,3.94,0,0,1,2.13.63l88.18,56.16a3.8,3.8,0,0,1,0,6.44Z"/>`,
    ],
    [
      IconWeight.LIGHT,
      svg`<path d="M239.59,116.35,151.41,60.18a14,14,0,0,0-14.22-.46A13.83,13.83,0,0,0,130,71.84v41L47.41,60.18a14,14,0,0,0-14.22-.46A13.83,13.83,0,0,0,26,71.84V184.16a13.83,13.83,0,0,0,7.19,12.12,14,14,0,0,0,14.22-.46L130,143.21v40.95a13.83,13.83,0,0,0,7.19,12.12,14,14,0,0,0,14.22-.46l88.18-56.17a13.79,13.79,0,0,0,0-23.3ZM129.15,129.53,41,185.69a1.9,1.9,0,0,1-2,.06,1.73,1.73,0,0,1-1-1.59V71.84a1.73,1.73,0,0,1,1-1.59,2,2,0,0,1,1-.26,1.87,1.87,0,0,1,1,.32l88.19,56.16a1.8,1.8,0,0,1,0,3.06Zm104,0L145,185.69a1.9,1.9,0,0,1-2,.06,1.73,1.73,0,0,1-1-1.59V71.84a1.73,1.73,0,0,1,1-1.59,2,2,0,0,1,1-.26,1.87,1.87,0,0,1,1,.32l88.19,56.16a1.8,1.8,0,0,1,0,3.06Z"/>`,
    ],
    [
      IconWeight.REGULAR,
      svg`<path d="M240.67,114.66,152.48,58.5A15.91,15.91,0,0,0,128,71.84v37.3L48.48,58.5A15.91,15.91,0,0,0,24,71.84V184.16A15.92,15.92,0,0,0,48.48,197.5L128,146.86v37.3a15.92,15.92,0,0,0,24.48,13.34l88.19-56.16a15.8,15.8,0,0,0,0-26.68ZM40,183.94V72.07L127.82,128Zm104,0V72.07L231.82,128Z"/>`,
    ],
    [
      IconWeight.BOLD,
      svg`<path d="M242.81,111.29,154.63,55.12A19.91,19.91,0,0,0,124,71.84v30L50.63,55.12A19.91,19.91,0,0,0,20,71.84V184.16a19.93,19.93,0,0,0,30.63,16.72L124,154.15v30a19.93,19.93,0,0,0,30.63,16.72l88.18-56.17a19.79,19.79,0,0,0,0-33.42ZM44,176.64V79.36L120.38,128Zm104,0V79.36L224.38,128Z"/>`,
    ],
    [
      IconWeight.FILL,
      svg`<path d="M248,128a15.76,15.76,0,0,1-7.33,13.34L152.48,197.5A15.91,15.91,0,0,1,128,184.16v-37.3L48.48,197.5A15.91,15.91,0,0,1,24,184.16V71.84A15.91,15.91,0,0,1,48.48,58.5L128,109.14V71.84A15.91,15.91,0,0,1,152.48,58.5l88.19,56.16A15.76,15.76,0,0,1,248,128Z"/>`,
    ],
    [
      IconWeight.DUOTONE,
      svg`<path d="M136,128a7.76,7.76,0,0,1-3.63,6.59L44.18,190.74A7.91,7.91,0,0,1,32,184.15V71.85a7.91,7.91,0,0,1,12.18-6.59l88.19,56.15A7.76,7.76,0,0,1,136,128Zm100.37-6.59L148.18,65.26A7.91,7.91,0,0,0,136,71.85v112.3a7.91,7.91,0,0,0,12.18,6.59l88.19-56.15A7.8,7.8,0,0,0,236.37,121.41Z" opacity="0.2"/><path d="M240.67,114.66,152.48,58.5A15.91,15.91,0,0,0,128,71.84v37.3L48.48,58.5A15.91,15.91,0,0,0,24,71.84V184.16A15.92,15.92,0,0,0,48.48,197.5L128,146.86v37.3a15.92,15.92,0,0,0,24.48,13.34l88.19-56.16a15.8,15.8,0,0,0,0-26.68ZM40,183.94V72.07L127.82,128Zm104,0V72.07L231.82,128Z"/>`,
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
        ${ArcIconFastForward.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-icon-fast-forward': ArcIconFastForward;
  }
}
