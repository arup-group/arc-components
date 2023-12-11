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
import styles from './arc-icon-currency-cny.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-currency-cny')
export default class ArcIconCurrencyCny extends LitElement {
  /** @internal */
  static tag = 'arc-icon-currency-cny';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [IconWeight.THIN, svg`<path d="M60,64a4,4,0,0,1,4-4H192a4,4,0,0,1,0,8H64A4,4,0,0,1,60,64ZM216,172a4,4,0,0,0-4,4v20H176a20,20,0,0,1-20-20V124h52a4,4,0,0,0,0-8H48a4,4,0,0,0,0,8h52v12a60.07,60.07,0,0,1-60,60,4,4,0,0,0,0,8,68.07,68.07,0,0,0,68-68V124h40v52a28,28,0,0,0,28,28h40a4,4,0,0,0,4-4V176A4,4,0,0,0,216,172Z"/>`],
    [IconWeight.LIGHT, svg`<path d="M58,64a6,6,0,0,1,6-6H192a6,6,0,0,1,0,12H64A6,6,0,0,1,58,64ZM216,170a6,6,0,0,0-6,6v18H176a18,18,0,0,1-18-18V126h50a6,6,0,0,0,0-12H48a6,6,0,0,0,0,12H98v10a58.07,58.07,0,0,1-58,58,6,6,0,0,0,0,12,70.08,70.08,0,0,0,70-70V126h36v50a30,30,0,0,0,30,30h40a6,6,0,0,0,6-6V176A6,6,0,0,0,216,170Z"/>`],
    [IconWeight.REGULAR, svg`<path d="M56,64a8,8,0,0,1,8-8H192a8,8,0,0,1,0,16H64A8,8,0,0,1,56,64ZM216,168a8,8,0,0,0-8,8v16H176a16,16,0,0,1-16-16V128h48a8,8,0,0,0,0-16H48a8,8,0,0,0,0,16H96v8a56.06,56.06,0,0,1-56,56,8,8,0,0,0,0,16,72.08,72.08,0,0,0,72-72v-8h32v48a32,32,0,0,0,32,32h40a8,8,0,0,0,8-8V176A8,8,0,0,0,216,168Z"/>`],
    [IconWeight.BOLD, svg`<path d="M52,64A12,12,0,0,1,64,52H192a12,12,0,0,1,0,24H64A12,12,0,0,1,52,64ZM216,164a12,12,0,0,0-12,12v12H176a12,12,0,0,1-12-12V132h44a12,12,0,0,0,0-24H48a12,12,0,0,0,0,24H92v4a52.06,52.06,0,0,1-52,52,12,12,0,0,0,0,24,76.08,76.08,0,0,0,76-76v-4h24v44a36,36,0,0,0,36,36h40a12,12,0,0,0,12-12V176A12,12,0,0,0,216,164Z"/>`],
    [IconWeight.FILL, svg`<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM80,72h96a8,8,0,0,1,0,16H80a8,8,0,0,1,0-16ZM200,176a8,8,0,0,1-8,8H168a32,32,0,0,1-32-32V128H119.48a64.31,64.31,0,0,1-54.35,55.35,7.28,7.28,0,0,1-1.14.08,8,8,0,0,1-1.12-15.92A48.23,48.23,0,0,0,103.31,128H72a8,8,0,0,1,0-16H184a8,8,0,0,1,0,16H152v24a16,16,0,0,0,16,16h16v-8a8,8,0,0,1,16,0Z"/>`],
    [IconWeight.DUOTONE, svg`<path d="M192,64v56H64V64Z" opacity="0.2"/><path d="M56,64a8,8,0,0,1,8-8H192a8,8,0,0,1,0,16H64A8,8,0,0,1,56,64ZM216,168a8,8,0,0,0-8,8v16H176a16,16,0,0,1-16-16V128h48a8,8,0,0,0,0-16H48a8,8,0,0,0,0,16H96v8a56.06,56.06,0,0,1-56,56,8,8,0,0,0,0,16,72.08,72.08,0,0,0,72-72v-8h32v48a32,32,0,0,0,32,32h40a8,8,0,0,0,8-8V176A8,8,0,0,0,216,168Z"/>`],
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
        ${ArcIconCurrencyCny.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "arc-icon-currency-cny": ArcIconCurrencyCny;
  }
}
