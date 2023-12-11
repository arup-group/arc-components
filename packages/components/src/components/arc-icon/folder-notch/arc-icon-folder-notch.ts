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
import styles from './arc-icon-folder-notch.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-folder-notch')
export default class ArcIconFolderNotch extends LitElement {
  /** @internal */
  static tag = 'arc-icon-folder-notch';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      IconWeight.THIN,
      svg`<path d="M216,76H129.33l-28.8-21.6a12.05,12.05,0,0,0-7.2-2.4H40A12,12,0,0,0,28,64V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V88A12,12,0,0,0,216,76ZM36,64a4,4,0,0,1,4-4H93.33a4,4,0,0,1,2.4.8L121.33,80,95.73,99.2a4,4,0,0,1-2.4.8H36ZM220,200a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V108H93.33a12.05,12.05,0,0,0,7.2-2.4L129.33,84H216a4,4,0,0,1,4,4Z"/>`,
    ],
    [
      IconWeight.LIGHT,
      svg`<path d="M216,74H130L101.73,52.8a14,14,0,0,0-8.4-2.8H40A14,14,0,0,0,26,64V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V88A14,14,0,0,0,216,74ZM38,64a2,2,0,0,1,2-2H93.33a2,2,0,0,1,1.2.4L118,80,94.53,97.6a2,2,0,0,1-1.2.4H38ZM218,200a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V110H93.33a14,14,0,0,0,8.4-2.8L130,86h86a2,2,0,0,1,2,2Z"/>`,
    ],
    [
      IconWeight.REGULAR,
      svg`<path d="M216,72H130.67L102.93,51.2a16.12,16.12,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72ZM40,64H93.33l21.34,16L93.33,96H40ZM216,200H40V112H93.33a16.12,16.12,0,0,0,9.6-3.2L130.67,88H216Z"/>`,
    ],
    [
      IconWeight.BOLD,
      svg`<path d="M216,68H132L105.33,48a20.12,20.12,0,0,0-12-4H40A20,20,0,0,0,20,64V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V88A20,20,0,0,0,216,68ZM44,68H92l16,12L92,92H44ZM212,196H44V116H93.33a20.12,20.12,0,0,0,12-4L132,92h80Z"/>`,
    ],
    [
      IconWeight.FILL,
      svg`<path d="M216,72H130.66L102.92,51.2A16,16,0,0,0,93.34,48H40A16,16,0,0,0,24,64V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72ZM40,64H93.34l21.33,16L93.33,96H40Z"/>`,
    ],
    [
      IconWeight.DUOTONE,
      svg`<path d="M128,80,98.13,102.4a8,8,0,0,1-4.8,1.6H32V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6Z" opacity="0.2"/><path d="M216,72H130.67L102.93,51.2a16.12,16.12,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72ZM40,64H93.33l21.34,16L93.33,96H40ZM216,200H40V112H93.33a16.12,16.12,0,0,0,9.6-3.2L130.67,88H216Z"/>`,
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
        ${ArcIconFolderNotch.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-icon-folder-notch': ArcIconFolderNotch;
  }
}
