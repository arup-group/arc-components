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
import styles from './arc-icon-corners-out.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-corners-out')
export default class ArcIconCornersOut extends LitElement {
  /** @internal */
  static tag = 'arc-icon-corners-out';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      IconWeight.THIN,
      svg`<path d="M212,48V88a4,4,0,0,1-8,0V52H168a4,4,0,0,1,0-8h40A4,4,0,0,1,212,48ZM88,204H52V168a4,4,0,0,0-8,0v40a4,4,0,0,0,4,4H88a4,4,0,0,0,0-8Zm120-40a4,4,0,0,0-4,4v36H168a4,4,0,0,0,0,8h40a4,4,0,0,0,4-4V168A4,4,0,0,0,208,164ZM88,44H48a4,4,0,0,0-4,4V88a4,4,0,0,0,8,0V52H88a4,4,0,0,0,0-8Z"/>`,
    ],
    [
      IconWeight.LIGHT,
      svg`<path d="M214,48V88a6,6,0,0,1-12,0V54H168a6,6,0,0,1,0-12h40A6,6,0,0,1,214,48ZM88,202H54V168a6,6,0,0,0-12,0v40a6,6,0,0,0,6,6H88a6,6,0,0,0,0-12Zm120-40a6,6,0,0,0-6,6v34H168a6,6,0,0,0,0,12h40a6,6,0,0,0,6-6V168A6,6,0,0,0,208,162ZM88,42H48a6,6,0,0,0-6,6V88a6,6,0,0,0,12,0V54H88a6,6,0,0,0,0-12Z"/>`,
    ],
    [
      IconWeight.REGULAR,
      svg`<path d="M216,48V88a8,8,0,0,1-16,0V56H168a8,8,0,0,1,0-16h40A8,8,0,0,1,216,48ZM88,200H56V168a8,8,0,0,0-16,0v40a8,8,0,0,0,8,8H88a8,8,0,0,0,0-16Zm120-40a8,8,0,0,0-8,8v32H168a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V168A8,8,0,0,0,208,160ZM88,40H48a8,8,0,0,0-8,8V88a8,8,0,0,0,16,0V56H88a8,8,0,0,0,0-16Z"/>`,
    ],
    [
      IconWeight.BOLD,
      svg`<path d="M220,48V88a12,12,0,0,1-24,0V60H168a12,12,0,0,1,0-24h40A12,12,0,0,1,220,48ZM88,196H60V168a12,12,0,0,0-24,0v40a12,12,0,0,0,12,12H88a12,12,0,0,0,0-24Zm120-40a12,12,0,0,0-12,12v28H168a12,12,0,0,0,0,24h40a12,12,0,0,0,12-12V168A12,12,0,0,0,208,156ZM88,36H48A12,12,0,0,0,36,48V88a12,12,0,0,0,24,0V60H88a12,12,0,0,0,0-24Z"/>`,
    ],
    [
      IconWeight.FILL,
      svg`<path d="M93.66,202.34A8,8,0,0,1,88,216H48a8,8,0,0,1-8-8V168a8,8,0,0,1,13.66-5.66ZM88,40H48a8,8,0,0,0-8,8V88a8,8,0,0,0,13.66,5.66l40-40A8,8,0,0,0,88,40ZM211.06,160.61a8,8,0,0,0-8.72,1.73l-40,40A8,8,0,0,0,168,216h40a8,8,0,0,0,8-8V168A8,8,0,0,0,211.06,160.61ZM208,40H168a8,8,0,0,0-5.66,13.66l40,40A8,8,0,0,0,216,88V48A8,8,0,0,0,208,40Z"/>`,
    ],
    [
      IconWeight.DUOTONE,
      svg`<path d="M208,48V88L168,48ZM48,208H88L48,168Zm160,0V168l-40,40ZM48,88,88,48H48Z" opacity="0.2"/><path d="M208,40H168a8,8,0,0,0-5.66,13.66l40,40A8,8,0,0,0,216,88V48A8,8,0,0,0,208,40Zm-8,28.69L187.31,56H200ZM53.66,162.34A8,8,0,0,0,40,168v40a8,8,0,0,0,8,8H88a8,8,0,0,0,5.66-13.66ZM56,200V187.31L68.69,200Zm155.06-39.39a8,8,0,0,0-8.72,1.73l-40,40A8,8,0,0,0,168,216h40a8,8,0,0,0,8-8V168A8,8,0,0,0,211.06,160.61ZM200,200H187.31L200,187.31ZM88,40H48a8,8,0,0,0-8,8V88a8,8,0,0,0,13.66,5.66l40-40A8,8,0,0,0,88,40ZM56,68.69V56H68.69Z"/>`,
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
        ${ArcIconCornersOut.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-icon-corners-out': ArcIconCornersOut;
  }
}
