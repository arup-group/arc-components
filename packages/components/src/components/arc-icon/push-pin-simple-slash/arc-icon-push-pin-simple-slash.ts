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
import styles from './arc-icon-push-pin-simple-slash.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-push-pin-simple-slash')
export default class ArcIconPushPinSimpleSlash extends LitElement {
  /** @internal */
  static tag = 'arc-icon-push-pin-simple-slash';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [IconWeight.THIN, svg`<path d="M87.25,40a4,4,0,0,1,4-4H192a4,4,0,0,1,0,8H180.77l19.58,111a4,4,0,0,1-3.24,4.63,3.33,3.33,0,0,1-.7.07,4,4,0,0,1-3.93-3.31L172.64,44H91.25A4,4,0,0,1,87.25,40ZM210.69,219a4,4,0,0,1-5.65-.27L169.87,180H132v60a4,4,0,0,1-8,0V180H40a4,4,0,0,1,0-8H52.64L70.52,70.72,45,42.69A4,4,0,0,1,51,37.31l160,176A4,4,0,0,1,210.69,219Zm-48.1-47L77.32,78.2,60.77,172Z"/>`],
    [IconWeight.LIGHT, svg`<path d="M85.25,40a6,6,0,0,1,6-6H192a6,6,0,0,1,0,12h-8.85l19.17,108.64a6,6,0,0,1-4.86,7,5.41,5.41,0,0,1-1.05.1,6,6,0,0,1-5.9-5L171,46H91.25A6,6,0,0,1,85.25,40ZM212,220.44a6,6,0,0,1-8.48-.4L169,182H134v58a6,6,0,0,1-12,0V182H40a6,6,0,0,1,0-12H51L68.38,71.33,43.56,44A6,6,0,0,1,52.44,36l160,176A6,6,0,0,1,212,220.44Zm-54-50.44L78.58,82.56,63.15,170Z"/>`],
    [IconWeight.REGULAR, svg`<path d="M83.25,40a8,8,0,0,1,8-8H192a8,8,0,0,1,0,16h-6.46l18.75,106.3a8,8,0,0,1-6.48,9.26,7.52,7.52,0,0,1-1.4.13,8,8,0,0,1-7.87-6.61L169.29,48h-78A8,8,0,0,1,83.25,40ZM213.38,221.92a8,8,0,0,1-11.3-.54L168.1,184H136v56a8,8,0,0,1-16,0V184H40a8,8,0,0,1,0-16h9.29L66.24,72,42.08,45.38A8,8,0,1,1,53.92,34.62l160,176A8,8,0,0,1,213.38,221.92ZM153.55,168,79.84,86.92,65.54,168Z"/>`],
    [IconWeight.BOLD, svg`<path d="M216.88,207.93l-160-176A12,12,0,1,0,39.12,48.07L62,73.19,45.93,164H40a12,12,0,0,0,0,24h76v52a12,12,0,0,0,24,0V188h26.33l32.79,36.07a12,12,0,0,0,17.76-16.14ZM70.3,164,82.37,95.64,144.51,164ZM90.06,40a12,12,0,0,1,12-12H192a12,12,0,0,1,0,24h-1.7l15.33,86.84a12,12,0,0,1-9.73,13.91,12.59,12.59,0,0,1-2.1.18A12,12,0,0,1,182,143L165.93,52H102.06A12,12,0,0,1,90.06,40Z"/>`],
    [IconWeight.FILL, svg`<path d="M213.38,221.92a8,8,0,0,1-11.3-.54L168.1,184H136v56a8,8,0,0,1-16,0V184H40a8,8,0,0,1,0-16h9.29L66.24,72,42.08,45.38A8,8,0,1,1,53.92,34.62l160,176A8,8,0,0,1,213.38,221.92ZM190.5,161.07a8,8,0,0,0,13.79-6.77L185.54,48H192a8,8,0,0,0,0-16H91.25a8,8,0,0,0-5.92,13.38Z"/>`],
    [IconWeight.DUOTONE, svg`<path d="M190.46,176H56L78.83,46.61A8,8,0,0,1,86.71,40H176l22.34,126.61A8,8,0,0,1,190.46,176Z" opacity="0.2"/><path d="M83.25,40a8,8,0,0,1,8-8H192a8,8,0,0,1,0,16h-6.46l18.75,106.3a8,8,0,0,1-6.48,9.26,7.52,7.52,0,0,1-1.4.13,8,8,0,0,1-7.87-6.61L169.29,48h-78A8,8,0,0,1,83.25,40ZM213.38,221.92a8,8,0,0,1-11.3-.54L168.1,184H136v56a8,8,0,0,1-16,0V184H40a8,8,0,0,1,0-16h9.29L66.24,72,42.08,45.38A8,8,0,1,1,53.92,34.62l160,176A8,8,0,0,1,213.38,221.92ZM153.55,168,79.84,86.92,65.54,168Z"/>`],
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
        ${ArcIconPushPinSimpleSlash.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "arc-icon-push-pin-simple-slash": ArcIconPushPinSimpleSlash;
  }
}
