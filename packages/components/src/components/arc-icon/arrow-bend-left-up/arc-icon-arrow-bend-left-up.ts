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
import styles from './arc-icon-arrow-bend-left-up.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-arrow-bend-left-up')
export default class ArcIconArrowBendLeftUp extends LitElement {
  /** @internal */
  static tag = 'arc-icon-arrow-bend-left-up';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [IconWeight.THIN, svg`<path d="M204,224a4,4,0,0,1-4,4A100.11,100.11,0,0,1,100,128V41.66L58.83,82.83a4,4,0,0,1-5.66-5.66l48-48a4,4,0,0,1,5.66,0l48,48a4,4,0,0,1-5.66,5.66L108,41.66V128a92.1,92.1,0,0,0,92,92A4,4,0,0,1,204,224Z"/>`],
    [IconWeight.LIGHT, svg`<path d="M206,224a6,6,0,0,1-6,6A102.12,102.12,0,0,1,98,128V46.49L60.24,84.24a6,6,0,0,1-8.48-8.48l48-48a6,6,0,0,1,8.48,0l48,48a6,6,0,1,1-8.48,8.48L110,46.49V128a90.1,90.1,0,0,0,90,90A6,6,0,0,1,206,224Z"/>`],
    [IconWeight.REGULAR, svg`<path d="M208,224a8,8,0,0,1-8,8A104.11,104.11,0,0,1,96,128V51.31L61.66,85.66A8,8,0,0,1,50.34,74.34l48-48a8,8,0,0,1,11.32,0l48,48a8,8,0,0,1-11.32,11.32L112,51.31V128a88.1,88.1,0,0,0,88,88A8,8,0,0,1,208,224Z"/>`],
    [IconWeight.BOLD, svg`<path d="M212,224a12,12,0,0,1-12,12A108.12,108.12,0,0,1,92,128V61L64.49,88.49a12,12,0,0,1-17-17l48-48a12,12,0,0,1,17,0l48,48a12,12,0,0,1-17,17L116,61v67a84.09,84.09,0,0,0,84,84A12,12,0,0,1,212,224Z"/>`],
    [IconWeight.FILL, svg`<path d="M208,224a8,8,0,0,1-8,8A104.11,104.11,0,0,1,96,128V88H56a8,8,0,0,1-5.66-13.66l48-48a8,8,0,0,1,11.32,0l48,48A8,8,0,0,1,152,88H112v40a88.1,88.1,0,0,0,88,88A8,8,0,0,1,208,224Z"/>`],
    [IconWeight.DUOTONE, svg`<path d="M152,80H56l48-48Z" opacity="0.2"/><path d="M200,216a88.1,88.1,0,0,1-88-88V88h40a8,8,0,0,0,5.66-13.66l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,56,88H96v40A104.11,104.11,0,0,0,200,232a8,8,0,0,0,0-16ZM104,43.31,132.69,72H75.31Z"/>`],
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
        ${ArcIconArrowBendLeftUp.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "arc-icon-arrow-bend-left-up": ArcIconArrowBendLeftUp;
  }
}
