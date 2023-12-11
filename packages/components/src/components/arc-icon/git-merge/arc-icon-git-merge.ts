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
import styles from './arc-icon-git-merge.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-git-merge')
export default class ArcIconGitMerge extends LitElement {
  /** @internal */
  static tag = 'arc-icon-git-merge';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      IconWeight.THIN,
      svg`<path d="M208,116a28,28,0,0,0-27.71,24H152a44.2,44.2,0,0,1-35.2-17.6L87.28,83A28,28,0,1,0,76,83.71v88.58a28,28,0,1,0,8,0V92l26.4,35.2A52.26,52.26,0,0,0,152,148h28.29A28,28,0,1,0,208,116ZM60,56A20,20,0,1,1,80,76,20,20,0,0,1,60,56Zm40,144a20,20,0,1,1-20-20A20,20,0,0,1,100,200Zm108-36a20,20,0,1,1,20-20A20,20,0,0,1,208,164Z"/>`,
    ],
    [
      IconWeight.LIGHT,
      svg`<path d="M208,114a30.05,30.05,0,0,0-29.4,24H152a42.2,42.2,0,0,1-33.6-16.8L90.56,84.08A30,30,0,1,0,74,85.4v85.2a30,30,0,1,0,12,0V98l22.8,30.4A54.26,54.26,0,0,0,152,150h26.6A30,30,0,1,0,208,114ZM62,56A18,18,0,1,1,80,74,18,18,0,0,1,62,56ZM98,200a18,18,0,1,1-18-18A18,18,0,0,1,98,200Zm110-38a18,18,0,1,1,18-18A18,18,0,0,1,208,162Z"/>`,
    ],
    [
      IconWeight.REGULAR,
      svg`<path d="M208,112a32.06,32.06,0,0,0-31,24H152a40.19,40.19,0,0,1-32-16L93.69,84.92A32,32,0,1,0,72,87v82a32,32,0,1,0,16,0V104l19.2,25.6A56.26,56.26,0,0,0,152,152h25a32,32,0,1,0,31-40ZM64,56A16,16,0,1,1,80,72,16,16,0,0,1,64,56ZM96,200a16,16,0,1,1-16-16A16,16,0,0,1,96,200Zm112-40a16,16,0,1,1,16-16A16,16,0,0,1,208,160Z"/>`,
    ],
    [
      IconWeight.BOLD,
      svg`<path d="M208,108a36.07,36.07,0,0,0-33.94,24H152a36.16,36.16,0,0,1-28.8-14.4L99.62,86.16A36,36,0,1,0,68,89.94v76.12a36,36,0,1,0,24,0V116l12,16a60.27,60.27,0,0,0,48,24h22.06A36,36,0,1,0,208,108ZM80,44A12,12,0,1,1,68,56,12,12,0,0,1,80,44Zm0,168a12,12,0,1,1,12-12A12,12,0,0,1,80,212Zm128-56a12,12,0,1,1,12-12A12,12,0,0,1,208,156Z"/>`,
    ],
    [
      IconWeight.FILL,
      svg`<path d="M208,112a32.06,32.06,0,0,0-31,24H152a40.19,40.19,0,0,1-32-16L93.69,84.92A32,32,0,1,0,72,87v82a32,32,0,1,0,16,0V104l19.2,25.6A56.26,56.26,0,0,0,152,152h25a32,32,0,1,0,31-40ZM96,200a16,16,0,1,1-16-16A16,16,0,0,1,96,200Zm112-40a16,16,0,0,1-16-16V144a16,16,0,1,1,16,16Z"/>`,
    ],
    [
      IconWeight.DUOTONE,
      svg`<path d="M104,56A24,24,0,1,1,80,32,24,24,0,0,1,104,56Z" opacity="0.2"/><path d="M208,112a32.06,32.06,0,0,0-31,24H152a40.19,40.19,0,0,1-32-16L93.69,84.92A32,32,0,1,0,72,87v82a32,32,0,1,0,16,0V104l19.2,25.6A56.26,56.26,0,0,0,152,152h25a32,32,0,1,0,31-40ZM64,56A16,16,0,1,1,80,72,16,16,0,0,1,64,56ZM96,200a16,16,0,1,1-16-16A16,16,0,0,1,96,200Zm112-40a16,16,0,1,1,16-16A16,16,0,0,1,208,160Z"/>`,
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
        ${ArcIconGitMerge.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-icon-git-merge': ArcIconGitMerge;
  }
}
