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
import styles from './arc-icon-call-bell.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-call-bell')
export default class ArcIconCallBell extends LitElement {
  /** @internal */
  static tag = 'arc-icon-call-bell';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [IconWeight.THIN, svg`<path d="M24,180H232a4,4,0,0,0,0-8H220V152a92.11,92.11,0,0,0-88-91.91V36h20a4,4,0,0,0,0-8H104a4,4,0,0,0,0,8h20V60.09A92.11,92.11,0,0,0,36,152v20H24a4,4,0,0,0,0,8Zm20-28a84,84,0,0,1,168,0v20H44Zm192,56a4,4,0,0,1-4,4H24a4,4,0,0,1,0-8H232A4,4,0,0,1,236,208Z"/>`],
    [IconWeight.LIGHT, svg`<path d="M24,182H232a6,6,0,0,0,0-12H222V152a94.1,94.1,0,0,0-88-93.8V38h18a6,6,0,0,0,0-12H104a6,6,0,0,0,0,12h18V58.2A94.1,94.1,0,0,0,34,152v18H24a6,6,0,0,0,0,12Zm22-30a82,82,0,0,1,164,0v18H46Zm192,56a6,6,0,0,1-6,6H24a6,6,0,0,1,0-12H232A6,6,0,0,1,238,208Z"/>`],
    [IconWeight.REGULAR, svg`<path d="M24,184H232a8,8,0,0,0,0-16h-8V152a96.12,96.12,0,0,0-88-95.66V40h16a8,8,0,0,0,0-16H104a8,8,0,0,0,0,16h16V56.34A96.12,96.12,0,0,0,32,152v16H24a8,8,0,0,0,0,16Zm24-32a80,80,0,0,1,160,0v16H48Zm192,56a8,8,0,0,1-8,8H24a8,8,0,0,1,0-16H232A8,8,0,0,1,240,208Z"/>`],
    [IconWeight.BOLD, svg`<path d="M24,180H232a12,12,0,0,0,0-24h-4.09A100.16,100.16,0,0,0,140,60.72V44h12a12,12,0,0,0,0-24H104a12,12,0,0,0,0,24h12V60.72A100.16,100.16,0,0,0,28.09,156H24a12,12,0,0,0,0,24ZM128,84a76.09,76.09,0,0,1,75.89,72H52.11A76.09,76.09,0,0,1,128,84ZM244,208a12,12,0,0,1-12,12H24a12,12,0,0,1,0-24H232A12,12,0,0,1,244,208Z"/>`],
    [IconWeight.FILL, svg`<path d="M16,176a8,8,0,0,1,8-8h8V152a96.12,96.12,0,0,1,88-95.66V40H104a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16H136V56.34A96.12,96.12,0,0,1,224,152v16h8a8,8,0,0,1,0,16H24A8,8,0,0,1,16,176Zm216,24H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Z"/>`],
    [IconWeight.DUOTONE, svg`<path d="M216,152v24H40V152a88,88,0,0,1,176,0Z" opacity="0.2"/><path d="M24,184H232a8,8,0,0,0,0-16h-8V152a96.12,96.12,0,0,0-88-95.66V40h16a8,8,0,0,0,0-16H104a8,8,0,0,0,0,16h16V56.34A96.12,96.12,0,0,0,32,152v16H24a8,8,0,0,0,0,16Zm24-32a80,80,0,0,1,160,0v16H48Zm192,56a8,8,0,0,1-8,8H24a8,8,0,0,1,0-16H232A8,8,0,0,1,240,208Z"/>`],
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
        ${ArcIconCallBell.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "arc-icon-call-bell": ArcIconCallBell;
  }
}
