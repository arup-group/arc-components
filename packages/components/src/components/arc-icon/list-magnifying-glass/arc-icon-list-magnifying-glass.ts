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
import styles from './arc-icon-list-magnifying-glass.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-list-magnifying-glass')
export default class ArcIconListMagnifyingGlass extends LitElement {
  /** @internal */
  static tag = 'arc-icon-list-magnifying-glass';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      IconWeight.THIN,
      svg`<path d="M36,64a4,4,0,0,1,4-4H216a4,4,0,0,1,0,8H40A4,4,0,0,1,36,64Zm4,68h72a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8Zm88,56H40a4,4,0,0,0,0,8h88a4,4,0,0,0,0-8Zm106.83,6.83a4,4,0,0,1-5.66,0l-22.72-22.72a36.06,36.06,0,1,1,5.66-5.66l22.72,22.72A4,4,0,0,1,234.83,194.83ZM184,172a28,28,0,1,0-28-28A28,28,0,0,0,184,172Z"/>`,
    ],
    [
      IconWeight.LIGHT,
      svg`<path d="M34,64a6,6,0,0,1,6-6H216a6,6,0,0,1,0,12H40A6,6,0,0,1,34,64Zm6,70h72a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12Zm88,52H40a6,6,0,0,0,0,12h88a6,6,0,0,0,0-12Zm108.24,10.24a6,6,0,0,1-8.48,0l-21.49-21.48a38.06,38.06,0,1,1,8.49-8.49l21.48,21.49A6,6,0,0,1,236.24,196.24ZM184,170a26,26,0,1,0-26-26A26,26,0,0,0,184,170Z"/>`,
    ],
    [
      IconWeight.REGULAR,
      svg`<path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,72h72a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm88,48H40a8,8,0,0,0,0,16h88a8,8,0,0,0,0-16Zm109.66,13.66a8,8,0,0,1-11.32,0L206,177.36A40,40,0,1,1,217.36,166l20.3,20.3A8,8,0,0,1,237.66,197.66ZM184,168a24,24,0,1,0-24-24A24,24,0,0,0,184,168Z"/>`,
    ],
    [
      IconWeight.BOLD,
      svg`<path d="M28,64A12,12,0,0,1,40,52H216a12,12,0,0,1,0,24H40A12,12,0,0,1,28,64Zm12,76h64a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24Zm80,40H40a12,12,0,0,0,0,24h80a12,12,0,0,0,0-24Zm120.49,20.49a12,12,0,0,1-17,0l-18.08-18.08a44,44,0,1,1,17-17l18.08,18.07A12,12,0,0,1,240.49,200.49ZM184,164a20,20,0,1,0-20-20A20,20,0,0,0,184,164Z"/>`,
    ],
    [
      IconWeight.FILL,
      svg`<path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,72h72a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm88,48H40a8,8,0,0,0,0,16h88a8,8,0,0,0,0-16Zm109.66,2.34L217.36,166A40,40,0,1,0,206,177.36l20.3,20.3a8,8,0,0,0,11.32-11.32Z"/>`,
    ],
    [
      IconWeight.DUOTONE,
      svg`<path d="M216,144a32,32,0,1,1-32-32A32,32,0,0,1,216,144Z" opacity="0.2"/><path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,72h72a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm88,48H40a8,8,0,0,0,0,16h88a8,8,0,0,0,0-16Zm109.66,13.66a8,8,0,0,1-11.32,0L206,177.36A40,40,0,1,1,217.36,166l20.3,20.3A8,8,0,0,1,237.66,197.66ZM184,168a24,24,0,1,0-24-24A24,24,0,0,0,184,168Z"/>`,
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
        ${ArcIconListMagnifyingGlass.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-icon-list-magnifying-glass': ArcIconListMagnifyingGlass;
  }
}
