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
import styles from './arc-icon-gas-pump.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-gas-pump')
export default class ArcIconGasPump extends LitElement {
  /** @internal */
  static tag = 'arc-icon-gas-pump';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      IconWeight.THIN,
      svg`<path d="M238.14,72.49,218.83,53.17a4,4,0,0,0-5.66,5.66l19.32,19.31A12,12,0,0,1,236,86.63V168a12,12,0,0,1-24,0V128a20,20,0,0,0-20-20H172V56a20,20,0,0,0-20-20H72A20,20,0,0,0,52,56V212H32a4,4,0,0,0,0,8H192a4,4,0,0,0,0-8H172V116h20a12,12,0,0,1,12,12v40a20,20,0,0,0,40,0V86.63A19.85,19.85,0,0,0,238.14,72.49ZM60,212V56A12,12,0,0,1,72,44h80a12,12,0,0,1,12,12V212Zm80-100a4,4,0,0,1-4,4H88a4,4,0,0,1,0-8h48A4,4,0,0,1,140,112Z"/>`,
    ],
    [
      IconWeight.LIGHT,
      svg`<path d="M239.56,71.07,220.24,51.76a6,6,0,0,0-8.48,8.48l19.31,19.32A9.93,9.93,0,0,1,234,86.63V168a10,10,0,0,1-20,0V128a22,22,0,0,0-22-22H174V56a22,22,0,0,0-22-22H72A22,22,0,0,0,50,56V210H32a6,6,0,0,0,0,12H192a6,6,0,0,0,0-12H174V118h18a10,10,0,0,1,10,10v40a22,22,0,0,0,44,0V86.63A21.88,21.88,0,0,0,239.56,71.07ZM62,210V56A10,10,0,0,1,72,46h80a10,10,0,0,1,10,10V210Zm80-98a6,6,0,0,1-6,6H88a6,6,0,0,1,0-12h48A6,6,0,0,1,142,112Z"/>`,
    ],
    [
      IconWeight.REGULAR,
      svg`<path d="M241,69.66,221.66,50.34a8,8,0,0,0-11.32,11.32L229.66,81A8,8,0,0,1,232,86.63V168a8,8,0,0,1-16,0V128a24,24,0,0,0-24-24H176V56a24,24,0,0,0-24-24H72A24,24,0,0,0,48,56V208H32a8,8,0,0,0,0,16H192a8,8,0,0,0,0-16H176V120h16a8,8,0,0,1,8,8v40a24,24,0,0,0,48,0V86.63A23.85,23.85,0,0,0,241,69.66ZM64,208V56a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8V208Zm80-96a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h48A8,8,0,0,1,144,112Z"/>`,
    ],
    [
      IconWeight.BOLD,
      svg`<path d="M247.8,66.83,228.49,47.51a12,12,0,0,0-17,17L230.83,83.8A4,4,0,0,1,232,86.63V166a6,6,0,0,1-12,0V128a28,28,0,0,0-28-28H180V56a28,28,0,0,0-28-28H72A28,28,0,0,0,44,56V204H32a12,12,0,0,0,0,24H192a12,12,0,0,0,0-24H180V124h12a4,4,0,0,1,4,4v38a30,30,0,0,0,60,0V86.63A27.81,27.81,0,0,0,247.8,66.83ZM68,204V56a4,4,0,0,1,4-4h80a4,4,0,0,1,4,4V204Zm72-92a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h32A12,12,0,0,1,140,112Z"/>`,
    ],
    [
      IconWeight.FILL,
      svg`<path d="M241,69.66,221.66,50.34a8,8,0,0,0-11.32,11.32L229.66,81A8,8,0,0,1,232,86.63V168a8,8,0,0,1-16,0V128a24,24,0,0,0-24-24H176V56a24,24,0,0,0-24-24H72A24,24,0,0,0,48,56V208H32a8,8,0,0,0,0,16H192a8,8,0,0,0,0-16H176V120h16a8,8,0,0,1,8,8v40a24,24,0,0,0,48,0V86.63A23.85,23.85,0,0,0,241,69.66ZM144,120H80a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z"/>`,
    ],
    [
      IconWeight.DUOTONE,
      svg`<path d="M168,56V216H56V56A16,16,0,0,1,72,40h80A16,16,0,0,1,168,56Z" opacity="0.2"/><path d="M241,69.66,221.66,50.34a8,8,0,0,0-11.32,11.32L229.66,81A8,8,0,0,1,232,86.63V168a8,8,0,0,1-16,0V128a24,24,0,0,0-24-24H176V56a24,24,0,0,0-24-24H72A24,24,0,0,0,48,56V208H32a8,8,0,0,0,0,16H192a8,8,0,0,0,0-16H176V120h16a8,8,0,0,1,8,8v40a24,24,0,0,0,48,0V86.63A23.85,23.85,0,0,0,241,69.66ZM64,208V56a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8V208Zm80-96a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h48A8,8,0,0,1,144,112Z"/>`,
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
        ${ArcIconGasPump.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-icon-gas-pump': ArcIconGasPump;
  }
}
