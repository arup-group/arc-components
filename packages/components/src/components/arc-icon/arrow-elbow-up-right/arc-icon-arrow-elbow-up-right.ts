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
import styles from './arc-icon-arrow-elbow-up-right.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-arrow-elbow-up-right')
export default class ArcIconArrowElbowUpRight extends LitElement {
  /** @internal */
  static tag = 'arc-icon-arrow-elbow-up-right';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [IconWeight.THIN, svg`<path d="M210.83,82.83l-48,48a4,4,0,0,1-5.66-5.66L198.34,84H68V224a4,4,0,0,1-8,0V80a4,4,0,0,1,4-4H198.34L157.17,34.83a4,4,0,0,1,5.66-5.66l48,48A4,4,0,0,1,210.83,82.83Z"/>`],
    [IconWeight.LIGHT, svg`<path d="M212.24,84.24l-48,48a6,6,0,0,1-8.48-8.48L193.51,86H70V224a6,6,0,0,1-12,0V80a6,6,0,0,1,6-6H193.51L155.76,36.24a6,6,0,0,1,8.48-8.48l48,48A6,6,0,0,1,212.24,84.24Z"/>`],
    [IconWeight.REGULAR, svg`<path d="M213.66,85.66l-48,48a8,8,0,0,1-11.32-11.32L188.69,88H72V224a8,8,0,0,1-16,0V80a8,8,0,0,1,8-8H188.69L154.34,37.66a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,213.66,85.66Z"/>`],
    [IconWeight.BOLD, svg`<path d="M216.49,88.49l-48,48a12,12,0,0,1-17-17L179,92H76V224a12,12,0,0,1-24,0V80A12,12,0,0,1,64,68H179L151.51,40.49a12,12,0,1,1,17-17l48,48A12,12,0,0,1,216.49,88.49Z"/>`],
    [IconWeight.FILL, svg`<path d="M213.66,85.66l-48,48A8,8,0,0,1,152,128V88H72V224a8,8,0,0,1-16,0V80a8,8,0,0,1,8-8h88V32a8,8,0,0,1,13.66-5.66l48,48A8,8,0,0,1,213.66,85.66Z"/>`],
    [IconWeight.DUOTONE, svg`<path d="M208,80l-48,48V32Z" opacity="0.2"/><path d="M213.66,74.34l-48-48A8,8,0,0,0,152,32V72H64a8,8,0,0,0-8,8V224a8,8,0,0,0,16,0V88h80v40a8,8,0,0,0,13.66,5.66l48-48A8,8,0,0,0,213.66,74.34ZM168,108.69V51.31L196.69,80Z"/>`],
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
        ${ArcIconArrowElbowUpRight.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "arc-icon-arrow-elbow-up-right": ArcIconArrowElbowUpRight;
  }
}
