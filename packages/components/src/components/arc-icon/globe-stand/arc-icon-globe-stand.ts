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
import styles from './arc-icon-globe-stand.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-globe-stand')
export default class ArcIconGlobeStand extends LitElement {
  /** @internal */
  static tag = 'arc-icon-globe-stand';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      IconWeight.THIN,
      svg`<path d="M128,172A76,76,0,1,0,52,96,76.08,76.08,0,0,0,128,172Zm0-144A68,68,0,1,1,60,96,68.07,68.07,0,0,1,128,28Zm74.89,140.28a4,4,0,0,1-.12,5.65,107.31,107.31,0,0,1-70.77,30V228h28a4,4,0,0,1,0,8H96a4,4,0,0,1,0-8h28V203.92A108,108,0,0,1,50.06,21.23a4,4,0,1,1,5.77,5.54,100,100,0,0,0,141.4,141.39A4,4,0,0,1,202.89,168.28Z"/>`,
    ],
    [
      IconWeight.LIGHT,
      svg`<path d="M128,174A78,78,0,1,0,50,96,78.09,78.09,0,0,0,128,174Zm0-144A66,66,0,1,1,62,96,66.08,66.08,0,0,1,128,30Zm76.33,136.89a6,6,0,0,1-.17,8.48A109.21,109.21,0,0,1,134,205.83V226h26a6,6,0,0,1,0,12H96a6,6,0,0,1,0-12h26V205.83A110,110,0,0,1,18,97.06,109.36,109.36,0,0,1,48.62,19.84a6,6,0,0,1,8.66,8.32A98,98,0,0,0,195.84,166.72,6,6,0,0,1,204.33,166.89Z"/>`,
    ],
    [
      IconWeight.REGULAR,
      svg`<path d="M128,176A80,80,0,1,0,48,96,80.09,80.09,0,0,0,128,176Zm0-144A64,64,0,1,1,64,96,64.07,64.07,0,0,1,128,32Zm77.77,133.5a8,8,0,0,1-.23,11.32A111.24,111.24,0,0,1,136,207.72V224h24a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16h24V207.71A112,112,0,0,1,47.18,18.46,8,8,0,1,1,58.72,29.54,96,96,0,0,0,194.46,165.28,8,8,0,0,1,205.77,165.5Z"/>`,
    ],
    [
      IconWeight.BOLD,
      svg`<path d="M128,172A76,76,0,1,0,52,96,76.08,76.08,0,0,0,128,172Zm0-128A52,52,0,1,1,76,96,52.06,52.06,0,0,1,128,44Zm12,167.38V220h20a12,12,0,0,1,0,24H96a12,12,0,0,1,0-24h20v-8.62A116,116,0,0,1,12,97.12,115.3,115.3,0,0,1,44.29,15.69,12,12,0,1,1,61.6,32.31,92,92,0,0,0,191.69,162.39a12,12,0,1,1,16.62,17.31A115.12,115.12,0,0,1,140,211.38Z"/>`,
    ],
    [
      IconWeight.FILL,
      svg`<path d="M48,96a80,80,0,1,1,80,80A80.09,80.09,0,0,1,48,96Zm146.46,69.28A96,96,0,0,1,58.72,29.54,8,8,0,1,0,47.18,18.46,112,112,0,0,0,120,207.71V224H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V207.72a111.21,111.21,0,0,0,69.54-30.9,8,8,0,1,0-11.08-11.54Z"/>`,
    ],
    [
      IconWeight.DUOTONE,
      svg`<path d="M200,96a72,72,0,1,1-72-72A72,72,0,0,1,200,96Z" opacity="0.2"/><path d="M128,176A80,80,0,1,0,48,96,80.09,80.09,0,0,0,128,176Zm0-144A64,64,0,1,1,64,96,64.07,64.07,0,0,1,128,32Zm77.77,133.5a8,8,0,0,1-.23,11.32A111.21,111.21,0,0,1,136,207.72V224h24a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16h24V207.71A112,112,0,0,1,47.18,18.46,8,8,0,1,1,58.72,29.54,96,96,0,0,0,194.46,165.28,8,8,0,0,1,205.77,165.5Z"/>`,
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
        ${ArcIconGlobeStand.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-icon-globe-stand': ArcIconGlobeStand;
  }
}
