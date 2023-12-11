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
import styles from './arc-icon-lightning-slash.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-lightning-slash')
export default class ArcIconLightningSlash extends LitElement {
  /** @internal */
  static tag = 'arc-icon-lightning-slash';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      IconWeight.THIN,
      svg`<path d="M51,37.31A4,4,0,0,0,45,42.69L86.77,88.6,45.08,133.27a4,4,0,0,0,1.52,6.47l60.81,22.81L92.08,239.22a4,4,0,0,0,6.84,3.51l64.83-69.46L205,218.69a4,4,0,1,0,5.92-5.38ZM102.68,227l13.24-66.2a4,4,0,0,0-2.52-4.53L55,134.36,92.17,94.54l66.18,72.79Zm8.71-158.9a4,4,0,0,1-.2-5.65l45.89-49.16a4,4,0,0,1,6.84,3.51L148.59,93.45l60.81,22.8a4,4,0,0,1,2.49,2.84,4,4,0,0,1-1,3.64l-22.3,23.89a4,4,0,0,1-5.85-5.45L201,121.64,142.6,99.74a4,4,0,0,1-2.52-4.52L153.32,29,117,67.89A4,4,0,0,1,111.39,68.08Z"/>`,
    ],
    [
      IconWeight.LIGHT,
      svg`<path d="M52.44,36A6,6,0,0,0,43.56,44L84.05,88.58,43.61,131.91a6,6,0,0,0,2.28,9.71l59.23,22.21-15,75a6,6,0,0,0,3.14,6.52A6.07,6.07,0,0,0,96,246a6,6,0,0,0,4.39-1.91l63.34-67.87L203.56,220a6,6,0,0,0,8.88-8.08ZM106,220.46l11.85-59.28a6,6,0,0,0-3.77-6.8l-55.6-20.85,33.64-36,63.48,69.83Zm4-150.91a6,6,0,0,1-.29-8.48l45.88-49.16a6,6,0,0,1,10.27,5.27l-15,75,59.23,22.21a6,6,0,0,1,2.28,9.71L190.08,148a6,6,0,1,1-8.77-8.19l16.18-17.33-55.6-20.85a6,6,0,0,1-3.77-6.8L150,35.54,118.5,69.25A6,6,0,0,1,110,69.55Z"/>`,
    ],
    [
      IconWeight.REGULAR,
      svg`<path d="M53.92,34.62A8,8,0,1,0,42.08,45.38L81.33,88.56l-39.18,42a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l61.86-66.28,38.37,42.2a8,8,0,1,0,11.84-10.76ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l30.12-32.27,60.78,66.86ZM108.66,71a8,8,0,0,1-.39-11.31l45.88-49.16a8,8,0,0,1,13.69,7L153.18,90.9l57.63,21.61a8,8,0,0,1,3,12.95l-22.3,23.89a8,8,0,0,1-11.7-10.91L194,123.29l-52.8-19.8a8,8,0,0,1-5-9.06l10.47-52.38L120,70.62A8,8,0,0,1,108.66,71Z"/>`,
    ],
    [
      IconWeight.BOLD,
      svg`<path d="M56.88,31.93A12,12,0,1,0,39.12,48.07L75.9,88.52,39.23,127.81a12,12,0,0,0,4.56,19.43l54.44,20.41-14,70a12,12,0,0,0,20.54,10.54l58.9-63.11,35.45,39a12,12,0,0,0,17.76-16.14Zm59.17,169,7.72-38.58a12,12,0,0,0-7.56-13.59L69,131.07l23.07-24.73,55.38,60.92ZM111.41,68.06a12,12,0,0,1-.59-17L151.23,7.81a12,12,0,0,1,20.54,10.54l-14,70,54.44,20.41a12,12,0,0,1,4.56,19.43l-16.82,18a12,12,0,0,1-17.55-16.37l4.58-4.91-47.19-17.69a12,12,0,0,1-7.56-13.59L140,55.07,128.37,67.48A12,12,0,0,1,111.41,68.06Z"/>`,
    ],
    [
      IconWeight.FILL,
      svg`<path d="M213.92,210.62a8,8,0,1,1-11.84,10.76l-38.37-42.2-61.86,66.28a8,8,0,0,1-13.69-7l14.66-73.33L45.19,143.49a8,8,0,0,1-3-13l39.18-42L42.08,45.38A8,8,0,1,1,53.92,34.62Zm-34.14-61.34a8,8,0,0,0,5.86,2.62h.06a8,8,0,0,0,5.85-2.55l22.3-23.89a8,8,0,0,0-3-12.95L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7L108.27,59.7a8,8,0,0,0-.07,10.84Z"/>`,
    ],
    [
      IconWeight.DUOTONE,
      svg`<path d="M96,240l16-80L48,136,160,16,144,96l64,24Z" opacity="0.2"/><path d="M53.92,34.62A8,8,0,1,0,42.08,45.38L81.33,88.56l-39.18,42a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l61.86-66.28,38.37,42.2a8,8,0,1,0,11.84-10.76ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l30.12-32.27,60.78,66.86ZM108.66,71a8,8,0,0,1-.39-11.31l45.88-49.16a8,8,0,0,1,13.69,7L153.18,90.9l57.63,21.61a8,8,0,0,1,3,12.95l-22.3,23.89a8,8,0,0,1-11.7-10.91L194,123.29l-52.8-19.8a8,8,0,0,1-5-9.06l10.47-52.38L120,70.62A8,8,0,0,1,108.66,71Z"/>`,
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
        ${ArcIconLightningSlash.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-icon-lightning-slash': ArcIconLightningSlash;
  }
}
