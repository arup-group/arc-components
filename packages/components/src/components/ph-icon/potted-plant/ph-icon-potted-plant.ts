/* GENERATED FILE */
import { html, svg, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styleMap } from 'lit/directives/style-map.js';
import {
  FONT_SIZES,
  FontSize,
} from '../../../internal/constants/styleConstants.js';
import styles from '../../icon/icon.styles.js';

/**
 * @cssproperty --icon-color - Set the color of the icon.
 *
 * @ssr - True
 */
@customElement('ph-icon-potted-plant')
export default class PhIconPottedPlant extends LitElement {
  /** @internal */
  static tag = 'ph-icon-potted-plant';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M200,144h-76.7l2.35-2.35h0l20.06-20.06a59.55,59.55,0,0,0,26.1,6.36,49.56,49.56,0,0,0,25.89-7.22c23.72-14.36,36.43-47.6,34-88.92a8,8,0,0,0-7.52-7.52c-41.32-2.42-74.56,10.28-88.92,34-9.36,15.45-9.6,34.11-.87,52L120,124.68l-12.21-12.21c6-13.25,5.57-27-1.39-38.48C95.53,56,70.61,46.41,39.73,48.22a8,8,0,0,0-7.51,7.51C30.4,86.6,40,111.52,58,122.4A38.22,38.22,0,0,0,78,128a45,45,0,0,0,18.52-4.19L108.68,136l-8,8H56a8,8,0,0,0,0,16h9.59l13.21,59.47A15.91,15.91,0,0,0,94.42,232h67.17a15.91,15.91,0,0,0,15.62-12.53L190.42,160H200a8,8,0,0,0,0-16ZM149,66.58c10.46-17.26,35.24-27,67-26.57.41,31.81-9.31,56.58-26.57,67-11.51,7-25.4,6.54-39.28-1.18C142.42,92,142,78.09,149,66.58ZM92.11,108.11c-9.2,4.93-18.31,5.16-25.83.6C54.78,101.74,48.15,85.31,48,64c21.31.15,37.75,6.78,44.71,18.28C97.27,89.8,97,98.91,92.11,108.11ZM161.59,216H94.42L82,160H174Z"/>`;

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
        ${PhIconPottedPlant.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-potted-plant': PhIconPottedPlant;
  }
}
