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
import styles from './arc-icon-arrows-merge.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-arrows-merge')
export default class ArcIconArrowsMerge extends LitElement {
  /** @internal */
  static tag = 'arc-icon-arrows-merge';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [IconWeight.THIN, svg`<path d="M188,40v64a4,4,0,0,1-1.17,2.83L132,161.66v60.68l25.17-25.17a4,4,0,0,1,5.66,5.66l-32,32a4,4,0,0,1-5.66,0l-32-32a4,4,0,0,1,5.66-5.66L124,222.34V161.66L69.17,106.83A4,4,0,0,1,68,104V40a4,4,0,0,1,8,0v62.34l52,52,52-52V40a4,4,0,0,1,8,0Z"/>`],
    [IconWeight.LIGHT, svg`<path d="M190,40v64a6,6,0,0,1-1.76,4.24L134,162.49v55l21.76-21.75a6,6,0,0,1,8.48,8.48l-32,32a6,6,0,0,1-8.48,0l-32-32a6,6,0,0,1,8.48-8.48L122,217.51v-55L67.76,108.24A6,6,0,0,1,66,104V40a6,6,0,0,1,12,0v61.51l50,50,50-50V40a6,6,0,0,1,12,0Z"/>`],
    [IconWeight.REGULAR, svg`<path d="M192,40v64a8,8,0,0,1-2.34,5.66L136,163.31v49.38l18.34-18.35a8,8,0,0,1,11.32,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L120,212.69V163.31L66.34,109.66A8,8,0,0,1,64,104V40a8,8,0,0,1,16,0v60.69l48,48,48-48V40a8,8,0,0,1,16,0Z"/>`],
    [IconWeight.BOLD, svg`<path d="M196,40v64a12,12,0,0,1-3.51,8.49L140,165V203l11.51-11.52a12,12,0,0,1,17,17l-32,32a12,12,0,0,1-17,0l-32-32a12,12,0,0,1,17-17L116,203V165L63.51,112.49A12,12,0,0,1,60,104V40a12,12,0,0,1,24,0V99l44,44,44-44V40a12,12,0,0,1,24,0Z"/>`],
    [IconWeight.FILL, svg`<path d="M192,40v64a8,8,0,0,1-2.34,5.66L136,163.31V192h24a8,8,0,0,1,5.66,13.66l-32,32a8,8,0,0,1-11.32,0l-32-32A8,8,0,0,1,96,192h24V163.31L66.34,109.66A8,8,0,0,1,64,104V40a8,8,0,0,1,16,0v60.69l48,48,48-48V40a8,8,0,0,1,16,0Z"/>`],
    [IconWeight.DUOTONE, svg`<path d="M160,200l-32,32L96,200Z" opacity="0.2"/><path d="M184,32a8,8,0,0,0-8,8v60.69l-48,48-48-48V40a8,8,0,0,0-16,0v64a8,8,0,0,0,2.34,5.66L120,163.31V192H96a8,8,0,0,0-5.66,13.66l32,32a8,8,0,0,0,11.32,0l32-32A8,8,0,0,0,160,192H136V163.31l53.66-53.65A8,8,0,0,0,192,104V40A8,8,0,0,0,184,32ZM128,220.69,115.31,208h25.38Z"/>`],
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
        ${ArcIconArrowsMerge.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "arc-icon-arrows-merge": ArcIconArrowsMerge;
  }
}
