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
import styles from './arc-icon-cell-signal-slash.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-cell-signal-slash')
export default class ArcIconCellSignalSlash extends LitElement {
  /** @internal */
  static tag = 'arc-icon-cell-signal-slash';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [IconWeight.THIN, svg`<path d="M84,152v48a4,4,0,0,1-8,0V152a4,4,0,0,1,8,0ZM40,188a4,4,0,0,0-4,4v8a4,4,0,0,0,8,0v-8A4,4,0,0,0,40,188Zm171,25.31L51,37.31A4,4,0,0,0,45,42.69l71,78.06V200a4,4,0,0,0,8,0V129.55l32,35.2V200a4,4,0,0,0,8,0V173.55l41,45.14a4,4,0,1,0,5.92-5.38Zm-51-93.68a4,4,0,0,0,4-4V72a4,4,0,0,0-8,0v43.63A4,4,0,0,0,160,119.63Zm40,44a4,4,0,0,0,4-4V32a4,4,0,0,0-8,0V159.63A4,4,0,0,0,200,163.63Z"/>`],
    [IconWeight.LIGHT, svg`<path d="M86,152v48a6,6,0,0,1-12,0V152a6,6,0,0,1,12,0ZM40,186a6,6,0,0,0-6,6v8a6,6,0,0,0,12,0v-8A6,6,0,0,0,40,186Zm172.44,26L52.44,36A6,6,0,0,0,43.56,44L114,121.52V200a6,6,0,0,0,12,0V134.72l28,30.8V200a6,6,0,0,0,12,0V178.72L203.56,220a6,6,0,0,0,8.88-8.08ZM160,121.63a6,6,0,0,0,6-6V72a6,6,0,0,0-12,0v43.63A6,6,0,0,0,160,121.63Zm40,44a6,6,0,0,0,6-6V32a6,6,0,0,0-12,0V159.63A6,6,0,0,0,200,165.63Z"/>`],
    [IconWeight.REGULAR, svg`<path d="M88,152v48a8,8,0,0,1-16,0V152a8,8,0,0,1,16,0ZM40,184a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-8A8,8,0,0,0,40,184Zm173.92,26.62-160-176A8,8,0,1,0,42.08,45.38L112,122.29V200a8,8,0,0,0,16,0V139.89l24,26.4V200a8,8,0,0,0,16,0V183.89l34.08,37.49a8,8,0,1,0,11.84-10.76Zm-53.92-87a8,8,0,0,0,8-8V72a8,8,0,0,0-16,0v43.63A8,8,0,0,0,160,123.63Zm40,44a8,8,0,0,0,8-8V32a8,8,0,0,0-16,0V159.63A8,8,0,0,0,200,167.63Z"/>`],
    [IconWeight.BOLD, svg`<path d="M92,152v48a12,12,0,0,1-24,0V152a12,12,0,0,1,24,0ZM40,180a12,12,0,0,0-12,12v8a12,12,0,0,0,24,0v-8A12,12,0,0,0,40,180Zm176.88,27.93-160-176A12,12,0,1,0,39.12,48.07L108,123.84V200a12,12,0,0,0,24,0V150.24l16,17.6V200a12,12,0,0,0,24,0v-5.76l27.12,29.83a12,12,0,0,0,17.76-16.14ZM160,115.74a12,12,0,0,0,12-12V72a12,12,0,0,0-24,0v31.74A12,12,0,0,0,160,115.74Zm40,44a12,12,0,0,0,12-12V32a12,12,0,0,0-24,0V147.74A12,12,0,0,0,200,159.74Z"/>`],
    [IconWeight.FILL, svg`<path d="M213.38,221.92a8,8,0,0,1-11.3-.54L197.19,216H32a16,16,0,0,1-11.32-27.32l79.45-79.44L42.07,45.38A8,8,0,1,1,53.91,34.61l160,176A8,8,0,0,1,213.38,221.92ZM194.08,165A8,8,0,0,0,208,159.63V40A16,16,0,0,0,180.69,28.7L128.18,81.2a8,8,0,0,0-.26,11Z"/>`],
    [IconWeight.DUOTONE, svg`<path d="M200,40V200a8,8,0,0,1-8,8H32a8,8,0,0,1-5.66-13.66l160-160A8,8,0,0,1,200,40Z" opacity="0.2"/><path d="M213.92,210.62l-160-176A8,8,0,1,0,42.07,45.38l58.07,63.86L20.69,188.68A16,16,0,0,0,32,216H192a16.13,16.13,0,0,0,4.56-.68l5.52,6.06a8,8,0,1,0,11.84-10.76ZM32,200l78.9-78.89L182.64,200ZM128.18,92.51a8,8,0,0,1,0-11.31l52.51-52.5A16,16,0,0,1,208,40V159.63a8,8,0,0,1-16,0V40L139.5,92.51A8,8,0,0,1,128.18,92.51Z"/>`],
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
        ${ArcIconCellSignalSlash.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "arc-icon-cell-signal-slash": ArcIconCellSignalSlash;
  }
}
