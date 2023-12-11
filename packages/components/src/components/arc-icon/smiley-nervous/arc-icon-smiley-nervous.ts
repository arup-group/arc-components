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
import styles from './arc-icon-smiley-nervous.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-smiley-nervous')
export default class ArcIconSmileyNervous extends LitElement {
  /** @internal */
  static tag = 'arc-icon-smiley-nervous';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      IconWeight.THIN,
      svg`<path d="M178.83,165.17a4,4,0,0,1-5.66,5.66L160,157.66l-13.17,13.17a4,4,0,0,1-5.66,0L128,157.66l-13.17,13.17a4,4,0,0,1-5.66,0L96,157.66,82.83,170.83a4,4,0,0,1-5.66-5.66l16-16a4,4,0,0,1,5.66,0L112,162.34l13.17-13.17a4,4,0,0,1,5.66,0L144,162.34l13.17-13.17a4,4,0,0,1,5.66,0ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128ZM92,116a8,8,0,1,0-8-8A8,8,0,0,0,92,116Zm72,0a8,8,0,1,0-8-8A8,8,0,0,0,164,116Z"/>`,
    ],
    [
      IconWeight.LIGHT,
      svg`<path d="M180.24,163.76a6,6,0,1,1-8.48,8.48L160,160.49l-11.76,11.75a6,6,0,0,1-8.48,0L128,160.49l-11.76,11.75a6,6,0,0,1-8.48,0L96,160.49,84.24,172.24a6,6,0,0,1-8.48-8.48l16-16a6,6,0,0,1,8.48,0L112,159.51l11.76-11.75a6,6,0,0,1,8.48,0L144,159.51l11.76-11.75a6,6,0,0,1,8.48,0ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128ZM92,118a10,10,0,1,0-10-10A10,10,0,0,0,92,118Zm72,0a10,10,0,1,0-10-10A10,10,0,0,0,164,118Z"/>`,
    ],
    [
      IconWeight.REGULAR,
      svg`<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm53.66-53.66a8,8,0,0,1-11.32,11.32L160,163.31l-10.34,10.35a8,8,0,0,1-11.32,0L128,163.31l-10.34,10.35a8,8,0,0,1-11.32,0L96,163.31,85.66,173.66a8,8,0,0,1-11.32-11.32l16-16a8,8,0,0,1,11.32,0L112,156.69l10.34-10.35a8,8,0,0,1,11.32,0L144,156.69l10.34-10.35a8,8,0,0,1,11.32,0ZM80,108a12,12,0,1,1,12,12A12,12,0,0,1,80,108Zm72,0a12,12,0,1,1,12,12A12,12,0,0,1,152,108Z"/>`,
    ],
    [
      IconWeight.BOLD,
      svg`<path d="M184.49,176.49a12,12,0,0,1-17,0L160,169l-7.51,7.52a12,12,0,0,1-17,0L128,169l-7.51,7.52a12,12,0,0,1-17,0L96,169l-7.51,7.52a12,12,0,0,1-17-17l16-16a12,12,0,0,1,17,0L112,151l7.51-7.52a12,12,0,0,1,17,0L144,151l7.51-7.52a12,12,0,0,1,17,0l16,16A12,12,0,0,1,184.49,176.49ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128ZM92,124a16,16,0,1,0-16-16A16,16,0,0,0,92,124Zm72,0a16,16,0,1,0-16-16A16,16,0,0,0,164,124Z"/>`,
    ],
    [
      IconWeight.FILL,
      svg`<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm36,72a12,12,0,1,1-12,12A12,12,0,0,1,164,96ZM92,96a12,12,0,1,1-12,12A12,12,0,0,1,92,96Zm89.66,77.66a8,8,0,0,1-11.32,0L160,163.31l-10.34,10.35a8,8,0,0,1-11.32,0L128,163.31l-10.34,10.35a8,8,0,0,1-11.32,0L96,163.31,85.66,173.66a8,8,0,0,1-11.32-11.32l16-16a8,8,0,0,1,11.32,0L112,156.69l10.34-10.35a8,8,0,0,1,11.32,0L144,156.69l10.34-10.35a8,8,0,0,1,11.32,0l16,16A8,8,0,0,1,181.66,173.66Z"/>`,
    ],
    [
      IconWeight.DUOTONE,
      svg`<path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"/><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm53.66-53.66a8,8,0,0,1-11.32,11.32L160,163.31l-10.34,10.35a8,8,0,0,1-11.32,0L128,163.31l-10.34,10.35a8,8,0,0,1-11.32,0L96,163.31,85.66,173.66a8,8,0,0,1-11.32-11.32l16-16a8,8,0,0,1,11.32,0L112,156.69l10.34-10.35a8,8,0,0,1,11.32,0L144,156.69l10.34-10.35a8,8,0,0,1,11.32,0ZM80,108a12,12,0,1,1,12,12A12,12,0,0,1,80,108Zm72,0a12,12,0,1,1,12,12A12,12,0,0,1,152,108Z"/>`,
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
        ${ArcIconSmileyNervous.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-icon-smiley-nervous': ArcIconSmileyNervous;
  }
}
