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
import styles from './arc-icon-music-notes-simple.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-music-notes-simple')
export default class ArcIconMusicNotesSimple extends LitElement {
  /** @internal */
  static tag = 'arc-icon-music-notes-simple';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      IconWeight.THIN,
      svg`<path d="M210.46,28.85a4,4,0,0,0-3.43-.73l-128,32A4,4,0,0,0,76,64V182.87A32,32,0,1,0,84,204V67.12l120-30V150.87A32,32,0,1,0,212,172V32A4,4,0,0,0,210.46,28.85ZM52,228a24,24,0,1,1,24-24A24,24,0,0,1,52,228Zm128-32a24,24,0,1,1,24-24A24,24,0,0,1,180,196Z"/>`,
    ],
    [
      IconWeight.LIGHT,
      svg`<path d="M211.69,27.27a6,6,0,0,0-5.15-1.09l-128,32A6,6,0,0,0,74,64V178.11A34,34,0,1,0,86,204V68.68l116-29V146.11A34,34,0,1,0,214,172V32A6,6,0,0,0,211.69,27.27ZM52,226a22,22,0,1,1,22-22A22,22,0,0,1,52,226Zm128-32a22,22,0,1,1,22-22A22,22,0,0,1,180,194Z"/>`,
    ],
    [
      IconWeight.REGULAR,
      svg`<path d="M212.92,25.69a8,8,0,0,0-6.86-1.45l-128,32A8,8,0,0,0,72,64V174.08A36,36,0,1,0,88,204V70.25l112-28v99.83A36,36,0,1,0,216,172V32A8,8,0,0,0,212.92,25.69ZM52,224a20,20,0,1,1,20-20A20,20,0,0,1,52,224Zm128-32a20,20,0,1,1,20-20A20,20,0,0,1,180,192Z"/>`,
    ],
    [
      IconWeight.BOLD,
      svg`<path d="M215.38,22.54a12,12,0,0,0-10.29-2.18l-128,32A12,12,0,0,0,68,64V167.35A40,40,0,1,0,92,204V73.37l104-26v88A40,40,0,1,0,220,172V32A12,12,0,0,0,215.38,22.54ZM52,220a16,16,0,1,1,16-16A16,16,0,0,1,52,220Zm128-32a16,16,0,1,1,16-16A16,16,0,0,1,180,188Z"/>`,
    ],
    [
      IconWeight.FILL,
      svg`<path d="M212.92,25.69a8,8,0,0,0-6.86-1.45l-128,32A8,8,0,0,0,72,64V174.08A36,36,0,1,0,88,204V70.25l112-28v99.83A36,36,0,1,0,216,172V32A8,8,0,0,0,212.92,25.69Z"/>`,
    ],
    [
      IconWeight.DUOTONE,
      svg`<path d="M208,172a28,28,0,1,1-28-28A28,28,0,0,1,208,172ZM52,176a28,28,0,1,0,28,28A28,28,0,0,0,52,176Z" opacity="0.2"/><path d="M212.92,25.69a8,8,0,0,0-6.86-1.45l-128,32A8,8,0,0,0,72,64V174.08A36,36,0,1,0,88,204V70.25l112-28v99.83A36,36,0,1,0,216,172V32A8,8,0,0,0,212.92,25.69ZM52,224a20,20,0,1,1,20-20A20,20,0,0,1,52,224Zm128-32a20,20,0,1,1,20-20A20,20,0,0,1,180,192Z"/>`,
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
        ${ArcIconMusicNotesSimple.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-icon-music-notes-simple': ArcIconMusicNotesSimple;
  }
}
