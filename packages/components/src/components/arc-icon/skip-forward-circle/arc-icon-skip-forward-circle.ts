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
import styles from './arc-icon-skip-forward-circle.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-skip-forward-circle')
export default class ArcIconSkipForwardCircle extends LitElement {
  /** @internal */
  static tag = 'arc-icon-skip-forward-circle';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      IconWeight.THIN,
      svg`<path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220ZM160,84a4,4,0,0,0-4,4v32.78L98.12,84.61A4,4,0,0,0,92,88v80a4,4,0,0,0,2.06,3.5A4.06,4.06,0,0,0,96,172a4,4,0,0,0,2.12-.61L156,135.22V168a4,4,0,0,0,8,0V88A4,4,0,0,0,160,84Zm-60,76.78V95.22L152.45,128Z"/>`,
    ],
    [
      IconWeight.LIGHT,
      svg`<path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218ZM160,82a6,6,0,0,0-6,6v29.17L99.18,82.91A6,6,0,0,0,90,88v80a6,6,0,0,0,9.18,5.09L154,138.83V168a6,6,0,0,0,12,0V88A6,6,0,0,0,160,82Zm-58,75.17V98.83L148.68,128Z"/>`,
    ],
    [
      IconWeight.REGULAR,
      svg`<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM160,80a8,8,0,0,0-8,8v25.57L100.24,81.22A8,8,0,0,0,88,88v80a8,8,0,0,0,12.24,6.78L152,142.43V168a8,8,0,0,0,16,0V88A8,8,0,0,0,160,80Zm-56,73.57V102.43L144.91,128Z"/>`,
    ],
    [
      IconWeight.BOLD,
      svg`<path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212ZM160,76a12,12,0,0,0-12,12v18.35L102.36,77.82A12,12,0,0,0,84,88v80a12,12,0,0,0,18.36,10.18L148,149.65V168a12,12,0,0,0,24,0V88A12,12,0,0,0,160,76Zm-52,70.35v-36.7L137.36,128Z"/>`,
    ],
    [
      IconWeight.FILL,
      svg`<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm40,144a8,8,0,0,1-16,0V137.83l-51.35,36.68A8,8,0,0,1,88,168V88a8,8,0,0,1,12.65-6.51L152,118.17V88a8,8,0,0,1,16,0Z"/>`,
    ],
    [
      IconWeight.DUOTONE,
      svg`<path d="M128,32a96,96,0,1,0,96,96A96,96,0,0,0,128,32ZM96,168V88l64,40Z" opacity="0.2"/><path d="M160,80a8,8,0,0,0-8,8v25.57L100.24,81.22A8,8,0,0,0,88,88v80a8,8,0,0,0,12.24,6.78L152,142.43V168a8,8,0,0,0,16,0V88A8,8,0,0,0,160,80Zm-56,73.57V102.43L144.91,128ZM128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z"/>`,
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
        ${ArcIconSkipForwardCircle.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-icon-skip-forward-circle': ArcIconSkipForwardCircle;
  }
}
