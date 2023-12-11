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
import styles from './arc-icon-tag-simple.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-tag-simple')
export default class ArcIconTagSimple extends LitElement {
  /** @internal */
  static tag = 'arc-icon-tag-simple';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [IconWeight.THIN, svg`<path d="M243.33,125.78,197.7,57.34a12,12,0,0,0-10-5.34H40A12,12,0,0,0,28,64V192a12,12,0,0,0,12,12H187.72a12,12,0,0,0,10-5.34l45.63-68.44A4,4,0,0,0,243.33,125.78Zm-52.28,68.44a4,4,0,0,1-3.33,1.78H40a4,4,0,0,1-4-4V64a4,4,0,0,1,4-4H187.72a4,4,0,0,1,3.33,1.78L235.19,128Z"/>`],
    [IconWeight.LIGHT, svg`<path d="M245,124.67,199.37,56.23A14,14,0,0,0,187.72,50H40A14,14,0,0,0,26,64V192a14,14,0,0,0,14,14H187.72a14,14,0,0,0,11.65-6.23L245,131.33A6,6,0,0,0,245,124.67Zm-55.61,68.44a2,2,0,0,1-1.66.89H40a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H187.72a2,2,0,0,1,1.66.89L232.79,128Z"/>`],
    [IconWeight.REGULAR, svg`<path d="M246.66,123.56,201,55.13A15.94,15.94,0,0,0,187.72,48H40A16,16,0,0,0,24,64V192a16,16,0,0,0,16,16H187.72A16,16,0,0,0,201,200.88l45.63-68.44A8,8,0,0,0,246.66,123.56ZM187.72,192H40V64H187.72l42.66,64Z"/>`],
    [IconWeight.BOLD, svg`<path d="M250,121.34,204.36,52.91A20,20,0,0,0,187.72,44H40A20,20,0,0,0,20,64V192a20,20,0,0,0,20,20H187.72a20,20,0,0,0,16.64-8.91L250,134.66A12,12,0,0,0,250,121.34ZM185.58,188H44V68H185.58l40,60Z"/>`],
    [IconWeight.FILL, svg`<path d="M246.66,123.56,201,55.13A15.94,15.94,0,0,0,187.72,48H40A16,16,0,0,0,24,64V192a16,16,0,0,0,16,16H187.72A16,16,0,0,0,201,200.88h0l45.63-68.44A8,8,0,0,0,246.66,123.56Z"/>`],
    [IconWeight.DUOTONE, svg`<path d="M240,128l-45.62,68.44a8,8,0,0,1-6.66,3.56H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H187.72a8,8,0,0,1,6.66,3.56Z" opacity="0.2"/><path d="M246.66,123.56,201,55.13A15.94,15.94,0,0,0,187.72,48H40A16,16,0,0,0,24,64V192a16,16,0,0,0,16,16H187.72A16,16,0,0,0,201,200.88l45.63-68.44A8,8,0,0,0,246.66,123.56ZM187.72,192H40V64H187.72l42.66,64Z"/>`],
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
        ${ArcIconTagSimple.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "arc-icon-tag-simple": ArcIconTagSimple;
  }
}
