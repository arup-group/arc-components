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
import styles from './arc-icon-arrow-fat-lines-down.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-arrow-fat-lines-down')
export default class ArcIconArrowFatLinesDown extends LitElement {
  /** @internal */
  static tag = 'arc-icon-arrow-fat-lines-down';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      IconWeight.THIN,
      svg`<path d="M227.7,134.47A4,4,0,0,0,224,132H180V104a4,4,0,0,0-4-4H80a4,4,0,0,0-4,4v28H32a4,4,0,0,0-2.83,6.83l96,96a4,4,0,0,0,5.66,0l96-96A4,4,0,0,0,227.7,134.47ZM128,226.34,41.66,140H80a4,4,0,0,0,4-4V108h88v28a4,4,0,0,0,4,4h38.34ZM76,40a4,4,0,0,1,4-4h96a4,4,0,0,1,0,8H80A4,4,0,0,1,76,40Zm0,32a4,4,0,0,1,4-4h96a4,4,0,0,1,0,8H80A4,4,0,0,1,76,72Z"/>`,
    ],
    [
      IconWeight.LIGHT,
      svg`<path d="M229.54,133.7A6,6,0,0,0,224,130H182V104a6,6,0,0,0-6-6H80a6,6,0,0,0-6,6v26H32a6,6,0,0,0-4.24,10.24l96,96a6,6,0,0,0,8.48,0l96-96A6,6,0,0,0,229.54,133.7ZM128,223.51,46.49,142H80a6,6,0,0,0,6-6V110h84v26a6,6,0,0,0,6,6h33.51ZM74,40a6,6,0,0,1,6-6h96a6,6,0,0,1,0,12H80A6,6,0,0,1,74,40Zm0,32a6,6,0,0,1,6-6h96a6,6,0,0,1,0,12H80A6,6,0,0,1,74,72Z"/>`,
    ],
    [
      IconWeight.REGULAR,
      svg`<path d="M231.39,132.94A8,8,0,0,0,224,128H184V104a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8v24H32a8,8,0,0,0-5.66,13.66l96,96a8,8,0,0,0,11.32,0l96-96A8,8,0,0,0,231.39,132.94ZM128,220.69,51.31,144H80a8,8,0,0,0,8-8V112h80v24a8,8,0,0,0,8,8h28.69ZM72,40a8,8,0,0,1,8-8h96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,40Zm0,32a8,8,0,0,1,8-8h96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,72Z"/>`,
    ],
    [
      IconWeight.BOLD,
      svg`<path d="M235.09,131.41A12,12,0,0,0,224,124H188v-4a12,12,0,0,0-12-12H80a12,12,0,0,0-12,12v4H32a12,12,0,0,0-8.49,20.49l96,96a12,12,0,0,0,17,0l96-96A12,12,0,0,0,235.09,131.41ZM128,215,61,148H80a12,12,0,0,0,12-12v-4h72v4a12,12,0,0,0,12,12h19ZM68,40A12,12,0,0,1,80,28h96a12,12,0,0,1,0,24H80A12,12,0,0,1,68,40Zm0,40A12,12,0,0,1,80,68h96a12,12,0,0,1,0,24H80A12,12,0,0,1,68,80Z"/>`,
    ],
    [
      IconWeight.FILL,
      svg`<path d="M72,40a8,8,0,0,1,8-8h96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,40Zm159.39,92.94A8,8,0,0,0,224,128H184V104a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8v24H32a8,8,0,0,0-5.66,13.66l96,96a8,8,0,0,0,11.32,0l96-96A8,8,0,0,0,231.39,132.94ZM80,80h96a8,8,0,0,0,0-16H80a8,8,0,0,0,0,16Z"/>`,
    ],
    [
      IconWeight.DUOTONE,
      svg`<path d="M224,136l-96,96L32,136H80V104h96v32Z" opacity="0.2"/><path d="M231.39,132.94A8,8,0,0,0,224,128H184V104a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8v24H32a8,8,0,0,0-5.66,13.66l96,96a8,8,0,0,0,11.32,0l96-96A8,8,0,0,0,231.39,132.94ZM128,220.69,51.31,144H80a8,8,0,0,0,8-8V112h80v24a8,8,0,0,0,8,8h28.69ZM72,40a8,8,0,0,1,8-8h96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,40Zm0,32a8,8,0,0,1,8-8h96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,72Z"/>`,
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
        ${ArcIconArrowFatLinesDown.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-icon-arrow-fat-lines-down': ArcIconArrowFatLinesDown;
  }
}
