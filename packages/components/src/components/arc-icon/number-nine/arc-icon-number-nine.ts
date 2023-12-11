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
import styles from './arc-icon-number-nine.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-number-nine')
export default class ArcIconNumberNine extends LitElement {
  /** @internal */
  static tag = 'arc-icon-number-nine';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      IconWeight.THIN,
      svg`<path d="M128,44a52,52,0,1,0,24.74,97.73L116.51,206a4,4,0,0,0,7,3.92L173,122A52,52,0,0,0,128,44Zm0,96a44,44,0,1,1,44-44A44.05,44.05,0,0,1,128,140Z"/>`,
    ],
    [
      IconWeight.LIGHT,
      svg`<path d="M128,42a54,54,0,1,0,19.94,104.17l-33.17,58.88a6,6,0,1,0,10.46,5.89l49.54-88A54,54,0,0,0,128,42Zm0,96a42,42,0,1,1,42-42A42,42,0,0,1,128,138Z"/>`,
    ],
    [
      IconWeight.REGULAR,
      svg`<path d="M128,40a56,56,0,1,0,15.62,109.77L113,204.07A8,8,0,1,0,127,211.92l49.55-88A56,56,0,0,0,128,40Zm0,96a40,40,0,1,1,40-40A40,40,0,0,1,128,136Z"/>`,
    ],
    [
      IconWeight.BOLD,
      svg`<path d="M188,96a60,60,0,1,0-60,60,59.21,59.21,0,0,0,7.81-.53l-26.27,46.64a12,12,0,0,0,20.92,11.78l49.54-88A59.57,59.57,0,0,0,188,96ZM92,96a36,36,0,1,1,36,36A36,36,0,0,1,92,96Z"/>`,
    ],
    [
      IconWeight.FILL,
      svg`<path d="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM166.3,129.62,132.62,188a8,8,0,0,1-13.86-8l16.52-28.61A44.79,44.79,0,0,1,128,152a44.05,44.05,0,1,1,38.3-22.38ZM156,108a28,28,0,1,1-28-28A28,28,0,0,1,156,108Z"/>`,
    ],
    [
      IconWeight.DUOTONE,
      svg`<path d="M216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40Z" opacity="0.2"/><path d="M128,40a56,56,0,1,0,15.62,109.77L113,204.07A8,8,0,1,0,127,211.92l49.55-88A56,56,0,0,0,128,40Zm0,96a40,40,0,1,1,40-40A40,40,0,0,1,128,136Z"/>`,
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
        ${ArcIconNumberNine.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-icon-number-nine': ArcIconNumberNine;
  }
}
