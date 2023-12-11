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
import styles from './arc-icon-key.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-key')
export default class ArcIconKey extends LitElement {
  /** @internal */
  static tag = 'arc-icon-key';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [IconWeight.THIN, svg`<path d="M160,20A76,76,0,0,0,88.51,121.84L29.17,181.17A4,4,0,0,0,28,184v40a4,4,0,0,0,4,4H72a4,4,0,0,0,4-4V204H96a4,4,0,0,0,4-4V180h20a4,4,0,0,0,2.83-1.17l11.33-11.34A76,76,0,1,0,160,20Zm0,144a67.52,67.52,0,0,1-25.21-4.83,4,4,0,0,0-4.45.83l-12,12H96a4,4,0,0,0-4,4v20H72a4,4,0,0,0-4,4v20H36V185.66l60-60a4,4,0,0,0,.83-4.45A68,68,0,1,1,160,164Zm28-88a8,8,0,1,1-8-8A8,8,0,0,1,188,76Z"/>`],
    [IconWeight.LIGHT, svg`<path d="M160,18A78.05,78.05,0,0,0,86.2,121.31L27.76,179.76A6,6,0,0,0,26,184v40a6,6,0,0,0,6,6H72a6,6,0,0,0,6-6V206H96a6,6,0,0,0,6-6V182h18a6,6,0,0,0,4.24-1.76l10.45-10.44A78,78,0,1,0,160,18Zm0,144a65.63,65.63,0,0,1-24.43-4.67,6,6,0,0,0-6.64,1.26L117.51,170H96a6,6,0,0,0-6,6v18H72a6,6,0,0,0-6,6v18H38V186.49l59.41-59.42a6,6,0,0,0,1.26-6.64A66,66,0,1,1,160,162Zm30-86a10,10,0,1,1-10-10A10,10,0,0,1,190,76Z"/>`],
    [IconWeight.REGULAR, svg`<path d="M160,16A80.07,80.07,0,0,0,83.91,120.78L26.34,178.34A8,8,0,0,0,24,184v40a8,8,0,0,0,8,8H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A80,80,0,1,0,160,16Zm0,144a63.7,63.7,0,0,1-23.65-4.51,8,8,0,0,0-8.84,1.68L116.69,168H96a8,8,0,0,0-8,8v16H72a8,8,0,0,0-8,8v16H40V187.31l58.83-58.82a8,8,0,0,0,1.68-8.84A64,64,0,1,1,160,160Zm32-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"/>`],
    [IconWeight.BOLD, svg`<path d="M160,12A84.05,84.05,0,0,0,79.38,119.65L23.51,175.51A12,12,0,0,0,20,184v40a12,12,0,0,0,12,12H72a12,12,0,0,0,12-12V212H96a12,12,0,0,0,12-12V188h12a12,12,0,0,0,8.49-3.51l7.86-7.87A84,84,0,1,0,160,12Zm0,144a59.58,59.58,0,0,1-22.1-4.2,12,12,0,0,0-13.22,2.55L115,164H96a12,12,0,0,0-12,12v12H72a12,12,0,0,0-12,12v12H44V189l57.65-57.65a12,12,0,0,0,2.55-13.21A60,60,0,1,1,160,156Zm36-80a16,16,0,1,1-16-16A16,16,0,0,1,196,76Z"/>`],
    [IconWeight.FILL, svg`<path d="M160,16A80.07,80.07,0,0,0,83.91,120.78L26.34,178.34A8,8,0,0,0,24,184v40a8,8,0,0,0,8,8H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A80,80,0,1,0,160,16Zm20,76a16,16,0,1,1,16-16A16,16,0,0,1,180,92Z"/>`],
    [IconWeight.DUOTONE, svg`<path d="M232,96a72,72,0,0,1-98.83,66.83h0L120,176H96v24H72v24H32V184l61.17-61.17h0A72,72,0,1,1,232,96Z" opacity="0.2"/><path d="M160,16A80.07,80.07,0,0,0,83.91,120.78L26.34,178.34A8,8,0,0,0,24,184v40a8,8,0,0,0,8,8H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A80,80,0,1,0,160,16Zm0,144a63.7,63.7,0,0,1-23.65-4.51,8,8,0,0,0-8.84,1.68L116.69,168H96a8,8,0,0,0-8,8v16H72a8,8,0,0,0-8,8v16H40V187.31l58.83-58.82a8,8,0,0,0,1.68-8.84A64,64,0,1,1,160,160Zm32-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"/>`],
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
        ${ArcIconKey.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "arc-icon-key": ArcIconKey;
  }
}
