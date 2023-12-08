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
import styles from './arc-icon-arrow-elbow-down-right.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-arrow-elbow-down-right')
export default class ArcIconArrowElbowDownRight extends LitElement {
  /** @internal */
  static tag = 'arc-icon-arrow-elbow-down-right';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [IconWeight.THIN, svg`<path d="M210.83,178.83l-48,48a4,4,0,0,1-5.66-5.66L198.34,180H64a4,4,0,0,1-4-4V32a4,4,0,0,1,8,0V172H198.34l-41.17-41.17a4,4,0,1,1,5.66-5.66l48,48A4,4,0,0,1,210.83,178.83Z"/>`],
    [IconWeight.LIGHT, svg`<path d="M212.24,180.24l-48,48a6,6,0,0,1-8.48-8.48L193.51,182H64a6,6,0,0,1-6-6V32a6,6,0,0,1,12,0V170H193.51l-37.75-37.76a6,6,0,1,1,8.48-8.48l48,48A6,6,0,0,1,212.24,180.24Z"/>`],
    [IconWeight.REGULAR, svg`<path d="M213.66,181.66l-48,48a8,8,0,0,1-11.32-11.32L188.69,184H64a8,8,0,0,1-8-8V32a8,8,0,0,1,16,0V168H188.69l-34.35-34.34a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,213.66,181.66Z"/>`],
    [IconWeight.BOLD, svg`<path d="M216.49,184.49l-48,48a12,12,0,0,1-17-17L179,188H64a12,12,0,0,1-12-12V32a12,12,0,0,1,24,0V164H179l-27.52-27.51a12,12,0,1,1,17-17l48,48A12,12,0,0,1,216.49,184.49Z"/>`],
    [IconWeight.FILL, svg`<path d="M213.66,181.66l-48,48A8,8,0,0,1,152,224V184H64a8,8,0,0,1-8-8V32a8,8,0,0,1,16,0V168h80V128a8,8,0,0,1,13.66-5.66l48,48A8,8,0,0,1,213.66,181.66Z"/>`],
    [IconWeight.DUOTONE, svg`<path d="M208,176l-48,48V128Z" opacity="0.2"/><path d="M213.66,170.34l-48-48A8,8,0,0,0,152,128v40H72V32a8,8,0,0,0-16,0V176a8,8,0,0,0,8,8h88v40a8,8,0,0,0,13.66,5.66l48-48A8,8,0,0,0,213.66,170.34ZM168,204.69V147.31L196.69,176Z"/>`],
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
        ${ArcIconArrowElbowDownRight.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "arc-icon-arrow-elbow-down-right": ArcIconArrowElbowDownRight;
  }
}
