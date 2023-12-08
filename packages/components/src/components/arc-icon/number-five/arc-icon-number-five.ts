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
import styles from './arc-icon-number-five.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-number-five')
export default class ArcIconNumberFive extends LitElement {
  /** @internal */
  static tag = 'arc-icon-number-five';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [IconWeight.THIN, svg`<path d="M172,160a52,52,0,0,1-86.67,38.76,4,4,0,1,1,5.34-6,44,44,0,1,0,.84-66.33A4,4,0,0,1,85,122.64l15.09-75.42A4,4,0,0,1,104,44h64a4,4,0,0,1,0,8H107.28L94.77,114.53A52,52,0,0,1,172,160Z"/>`],
    [IconWeight.LIGHT, svg`<path d="M174,160a54,54,0,0,1-90,40.25,6,6,0,1,1,8-8.94A42,42,0,1,0,92.8,128,6,6,0,0,1,83,122.25L98.12,46.82A6,6,0,0,1,104,42h64a6,6,0,0,1,0,12H108.92L97.54,110.89A54,54,0,0,1,174,160Z"/>`],
    [IconWeight.REGULAR, svg`<path d="M176,160a56,56,0,0,1-93.33,41.74,8,8,0,1,1,10.66-11.92,40,40,0,1,0,.77-60.3,8,8,0,0,1-13-7.66L96.16,46.43A8,8,0,0,1,104,40h64a8,8,0,0,1,0,16H110.56l-10.32,51.6A56,56,0,0,1,176,160Z"/>`],
    [IconWeight.BOLD, svg`<path d="M180,160A60,60,0,0,1,80,204.72a12,12,0,1,1,16-17.88,36,36,0,1,0,.69-54.28,12,12,0,0,1-19.54-11.49L92.23,45.65A12,12,0,0,1,104,36h64a12,12,0,0,1,0,24H113.84l-8.36,41.79A60,60,0,0,1,180,160Z"/>`],
    [IconWeight.FILL, svg`<path d="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24Zm-76,80a44,44,0,1,1-34.22,71.66,8,8,0,0,1,12.44-10.06,28,28,0,1,0,.35-35.62,8,8,0,0,1-14-6.29l7.55-52.82A8,8,0,0,1,104,64h56a8,8,0,0,1,0,16H110.94L107,107.4A44,44,0,0,1,124,104Z"/>`],
    [IconWeight.DUOTONE, svg`<path d="M216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40Z" opacity="0.2"/><path d="M176,160a56,56,0,0,1-93.33,41.74,8,8,0,1,1,10.66-11.92,40,40,0,1,0,.77-60.3,8,8,0,0,1-13-7.66L96.16,46.43A8,8,0,0,1,104,40h64a8,8,0,0,1,0,16H110.56l-10.32,51.6A56,56,0,0,1,176,160Z"/>`],
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
        ${ArcIconNumberFive.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "arc-icon-number-five": ArcIconNumberFive;
  }
}
