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
import styles from './arc-icon-gender-transgender.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-gender-transgender')
export default class ArcIconGenderTransgender extends LitElement {
  /** @internal */
  static tag = 'arc-icon-gender-transgender';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      IconWeight.THIN,
      svg`<path d="M216,36H168a4,4,0,0,0,0,8h38.34L168,82.35,146.83,61.18a4,4,0,1,0-5.66,5.65L162.34,88l-21.17,21.18a68.16,68.16,0,1,0,5.65,5.66L168,93.67l21.17,21.17a4,4,0,1,0,5.66-5.66L173.66,88,212,49.66V88a4,4,0,0,0,8,0V40A4,4,0,0,0,216,36ZM138.43,202.45A60,60,0,1,1,156,160,60.07,60.07,0,0,1,138.43,202.45Z"/>`,
    ],
    [
      IconWeight.LIGHT,
      svg`<path d="M216,34H168a6,6,0,0,0,0,12h33.52L168,79.52,148.24,59.76a6,6,0,1,0-8.48,8.49L159.52,88l-18.46,18.46a69.94,69.94,0,1,0,8.49,8.48L168,96.5l19.76,19.76a6,6,0,0,0,8.48-8.49L176.48,88,210,54.49V88a6,6,0,0,0,12,0V40A6,6,0,0,0,216,34ZM137,201a58,58,0,1,1,17-41A58,58,0,0,1,137,201Z"/>`,
    ],
    [
      IconWeight.REGULAR,
      svg`<path d="M216,32H168a8,8,0,0,0,0,16h28.69L168,76.69,149.66,58.35a8,8,0,1,0-11.32,11.31L156.69,88l-15.76,15.76a71.94,71.94,0,1,0,11.32,11.31L168,99.33l18.34,18.34a8,8,0,0,0,11.32-11.31L179.31,88,208,59.32V88a8,8,0,0,0,16,0V40A8,8,0,0,0,216,32ZM135.6,199.63A56,56,0,1,1,152,160,56.08,56.08,0,0,1,135.6,199.63Z"/>`,
    ],
    [
      IconWeight.BOLD,
      svg`<path d="M216,28H172a12,12,0,0,0,0,24h15L168,71,152.49,55.52a12,12,0,0,0-17,17L151,88,140.58,98.46a76,76,0,1,0,17,17L168,105l15.51,15.52a12,12,0,0,0,17-17L185,88l19-19V84a12,12,0,0,0,24,0V40A12,12,0,0,0,216,28ZM132.77,196.8A52,52,0,1,1,148,160,52.05,52.05,0,0,1,132.77,196.8Z"/>`,
    ],
    [
      IconWeight.FILL,
      svg`<path d="M127.92,150a24,24,0,1,1-22-22A24,24,0,0,1,127.92,150ZM216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40ZM192,72a8,8,0,0,0-8-8H156.27A8.17,8.17,0,0,0,148,71.47,8,8,0,0,0,156,80h8.69L148,96.69,137.66,86.34a8,8,0,0,0-11.49.18,8.22,8.22,0,0,0,.41,11.37L136.69,108,126,118.64A40,40,0,1,0,137.36,130L148,119.31l10.34,10.35a8,8,0,0,0,11.71-.43,8.2,8.2,0,0,0-.6-11.1L159.31,108,176,91.31v8.42a8.18,8.18,0,0,0,7.47,8.25,8,8,0,0,0,8.53-8Z"/>`,
    ],
    [
      IconWeight.DUOTONE,
      svg`<path d="M141.25,205.25a64,64,0,1,1,0-90.5A64,64,0,0,1,141.25,205.25Z" opacity="0.2"/><path d="M216,32H168a8,8,0,0,0,0,16h28.69L168,76.69,149.66,58.35a8,8,0,1,0-11.32,11.31L156.69,88l-15.76,15.76a71.94,71.94,0,1,0,11.32,11.31L168,99.33l18.34,18.34a8,8,0,0,0,11.32-11.31L179.31,88,208,59.32V88a8,8,0,0,0,16,0V40A8,8,0,0,0,216,32ZM135.6,199.63A56,56,0,1,1,152,160,56.08,56.08,0,0,1,135.6,199.63Z"/>`,
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
        ${ArcIconGenderTransgender.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-icon-gender-transgender': ArcIconGenderTransgender;
  }
}
