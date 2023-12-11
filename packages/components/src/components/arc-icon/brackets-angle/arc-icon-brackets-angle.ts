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
import styles from './arc-icon-brackets-angle.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-brackets-angle')
export default class ArcIconBracketsAngle extends LitElement {
  /** @internal */
  static tag = 'arc-icon-brackets-angle';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      IconWeight.THIN,
      svg`<path d="M83.37,42.15,28.74,128l54.63,85.85a4,4,0,0,1-1.22,5.52A4,4,0,0,1,80,220a4,4,0,0,1-3.37-1.85l-56-88a4,4,0,0,1,0-4.3l56-88a4,4,0,1,1,6.74,4.3Zm152,83.7-56-88a4,4,0,1,0-6.74,4.3L227.26,128l-54.63,85.85a4,4,0,0,0,1.22,5.52A4,4,0,0,0,176,220a4,4,0,0,0,3.37-1.85l56-88A4,4,0,0,0,235.37,125.85Z"/>`,
    ],
    [
      IconWeight.LIGHT,
      svg`<path d="M85.06,43.22,31.11,128l54,84.78a6,6,0,0,1-1.84,8.28,6,6,0,0,1-8.28-1.84l-56-88a6,6,0,0,1,0-6.44l56-88a6,6,0,0,1,10.12,6.44Zm152,81.56-56-88a6,6,0,1,0-10.12,6.44L224.89,128l-53.95,84.78a6,6,0,0,0,1.84,8.28,6,6,0,0,0,8.28-1.84l56-88A6,6,0,0,0,237.06,124.78Z"/>`,
    ],
    [
      IconWeight.REGULAR,
      svg`<path d="M86.75,44.3,33.48,128l53.27,83.7a8,8,0,0,1-2.46,11.05A7.91,7.91,0,0,1,80,224a8,8,0,0,1-6.76-3.71l-56-88a8,8,0,0,1,0-8.59l56-88a8,8,0,1,1,13.5,8.59Zm152,79.41-56-88a8,8,0,1,0-13.5,8.59L222.52,128l-53.27,83.7a8,8,0,0,0,2.46,11.05A7.91,7.91,0,0,0,176,224a8,8,0,0,0,6.76-3.71l56-88A8,8,0,0,0,238.75,123.71Z"/>`,
    ],
    [
      IconWeight.BOLD,
      svg`<path d="M90.12,46.44,38.22,128l51.9,81.56a12,12,0,1,1-20.24,12.88l-56-88a12,12,0,0,1,0-12.88l56-88A12,12,0,0,1,90.12,46.44Zm152,75.12-56-88a12,12,0,1,0-20.24,12.88L217.78,128l-51.9,81.56a12,12,0,1,0,20.24,12.88l56-88A12,12,0,0,0,242.12,121.56Z"/>`,
    ],
    [
      IconWeight.FILL,
      svg`<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM103,180A8,8,0,0,1,89.05,188l-32-56a8,8,0,0,1,0-7.94l32-56A8,8,0,0,1,103,76L73.21,128ZM199,132l-32,56a8,8,0,0,1-13.9-7.94l29.74-52L153.05,76A8,8,0,1,1,167,68l32,56A8,8,0,0,1,199,132Z"/>`,
    ],
    [
      IconWeight.DUOTONE,
      svg`<path d="M232,128l-56,88H80L24,128,80,40h96Z" opacity="0.2"/><path d="M86.75,44.3,33.48,128l53.27,83.7a8,8,0,0,1-2.46,11.05A7.91,7.91,0,0,1,80,224a8,8,0,0,1-6.76-3.71l-56-88a8,8,0,0,1,0-8.59l56-88a8,8,0,1,1,13.5,8.59Zm152,79.41-56-88a8,8,0,1,0-13.5,8.59L222.52,128l-53.27,83.7a8,8,0,0,0,2.46,11.05A7.91,7.91,0,0,0,176,224a8,8,0,0,0,6.76-3.71l56-88A8,8,0,0,0,238.75,123.71Z"/>`,
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
        ${ArcIconBracketsAngle.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-icon-brackets-angle': ArcIconBracketsAngle;
  }
}
