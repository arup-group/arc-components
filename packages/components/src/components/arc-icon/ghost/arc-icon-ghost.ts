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
import styles from './arc-icon-ghost.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-ghost')
export default class ArcIconGhost extends LitElement {
  /** @internal */
  static tag = 'arc-icon-ghost';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      IconWeight.THIN,
      svg`<path d="M108,116a8,8,0,1,1-8-8A8,8,0,0,1,108,116Zm48-8a8,8,0,1,0,8,8A8,8,0,0,0,156,108Zm64,12v96a4,4,0,0,1-6.53,3.1l-26.8-21.93-26.8,21.93a4,4,0,0,1-5.07,0L128,197.17,101.2,219.1a4,4,0,0,1-5.07,0l-26.8-21.93L42.53,219.1A4,4,0,0,1,36,216V120a92,92,0,0,1,184,0Zm-8,0a84,84,0,0,0-168,0v87.56L66.8,188.9a4,4,0,0,1,5.07,0l26.8,21.93,26.8-21.93a4,4,0,0,1,5.06,0l26.8,21.93,26.8-21.93a4,4,0,0,1,5.07,0L212,207.56Z"/>`,
    ],
    [
      IconWeight.LIGHT,
      svg`<path d="M110,116a10,10,0,1,1-10-10A10,10,0,0,1,110,116Zm46-10a10,10,0,1,0,10,10A10,10,0,0,0,156,106Zm66,14v96a6,6,0,0,1-9.8,4.64l-25.53-20.89-25.54,20.89a6,6,0,0,1-7.6,0L128,199.75l-25.53,20.89a6,6,0,0,1-7.6,0L69.33,199.75,43.8,220.64A6,6,0,0,1,34,216V120a94,94,0,0,1,188,0Zm-12,0a82,82,0,0,0-164,0v83.34l19.53-16a6,6,0,0,1,7.6,0l25.54,20.89,25.53-20.89a6,6,0,0,1,7.6,0l25.53,20.89,25.54-20.89a6,6,0,0,1,7.6,0l19.53,16Z"/>`,
    ],
    [
      IconWeight.REGULAR,
      svg`<path d="M112,116a12,12,0,1,1-12-12A12,12,0,0,1,112,116Zm44-12a12,12,0,1,0,12,12A12,12,0,0,0,156,104Zm68,16v96a8,8,0,0,1-13.07,6.19l-24.26-19.85L162.4,222.19a8,8,0,0,1-10.13,0L128,202.34l-24.27,19.85a8,8,0,0,1-10.13,0L69.33,202.34,45.07,222.19A8,8,0,0,1,32,216V120a96,96,0,0,1,192,0Zm-16,0a80,80,0,0,0-160,0v79.12l16.27-13.31a8,8,0,0,1,10.13,0l24.27,19.85,24.26-19.85a8,8,0,0,1,10.14,0l24.26,19.85,24.27-19.85a8,8,0,0,1,10.13,0L208,199.12Z"/>`,
    ],
    [
      IconWeight.BOLD,
      svg`<path d="M116,116a16,16,0,1,1-16-16A16,16,0,0,1,116,116Zm40-16a16,16,0,1,0,16,16A16,16,0,0,0,156,100Zm72,20v96a12,12,0,0,1-19.6,9.29L186.67,207.5l-21.74,17.79a12,12,0,0,1-15.2,0L128,207.5l-21.73,17.79a12,12,0,0,1-15.2,0L69.33,207.5,47.6,225.29A12,12,0,0,1,28,216V120a100,100,0,0,1,200,0Zm-24,0a76,76,0,0,0-152,0v70.68l9.73-8a12,12,0,0,1,15.2,0L98.67,200.5l21.73-17.79a12,12,0,0,1,15.2,0l21.73,17.79,21.74-17.79a12,12,0,0,1,15.2,0l9.73,8Z"/>`,
    ],
    [
      IconWeight.FILL,
      svg`<path d="M128,24a96.11,96.11,0,0,0-96,96v96a8,8,0,0,0,13.07,6.19l24.26-19.85L93.6,222.19a8,8,0,0,0,10.13,0L128,202.34l24.27,19.85a8,8,0,0,0,10.13,0l24.27-19.85,24.26,19.85A8,8,0,0,0,224,216V120A96.11,96.11,0,0,0,128,24ZM100,128a12,12,0,1,1,12-12A12,12,0,0,1,100,128Zm56,0a12,12,0,1,1,12-12A12,12,0,0,1,156,128Z"/>`,
    ],
    [
      IconWeight.DUOTONE,
      svg`<path d="M216,120v96l-29.33-24-29.34,24L128,192,98.67,216,69.33,192,40,216V120a88,88,0,0,1,176,0Z" opacity="0.2"/><path d="M112,116a12,12,0,1,1-12-12A12,12,0,0,1,112,116Zm44-12a12,12,0,1,0,12,12A12,12,0,0,0,156,104Zm68,16v96a8,8,0,0,1-13.07,6.19l-24.26-19.85L162.4,222.19a8,8,0,0,1-10.13,0L128,202.34l-24.27,19.85a8,8,0,0,1-10.13,0L69.33,202.34,45.07,222.19A8,8,0,0,1,32,216V120a96,96,0,0,1,192,0Zm-16,0a80,80,0,0,0-160,0v79.12l16.27-13.31a8,8,0,0,1,10.13,0l24.27,19.85,24.26-19.85a8,8,0,0,1,10.14,0l24.26,19.85,24.27-19.85a8,8,0,0,1,10.13,0L208,199.12Z"/>`,
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
        ${ArcIconGhost.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-icon-ghost': ArcIconGhost;
  }
}
