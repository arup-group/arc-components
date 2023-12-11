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
import styles from './arc-icon-amazon-logo.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-amazon-logo')
export default class ArcIconAmazonLogo extends LitElement {
  /** @internal */
  static tag = 'arc-icon-amazon-logo';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      IconWeight.THIN,
      svg`<path d="M244,168v32a4,4,0,0,1-8,0V177.66l-9.1,9.1C224.52,189.37,188.3,228,128,228c-61.08,0-97.45-39.64-99-41.32A4,4,0,0,1,35,181.32c.35.39,35.63,38.68,93,38.68s92.68-38.29,93-38.68l.14-.15,9.17-9.17H208a4,4,0,0,1,0-8h32A4,4,0,0,1,244,168Zm-80-62.49V84A40,40,0,0,0,88.36,65.82a4,4,0,1,1-7.12-3.64A48,48,0,0,1,172,84v92a4,4,0,0,1-8,0V158.49a48,48,0,1,1,0-53ZM164,132a40,40,0,1,0-40,40A40,40,0,0,0,164,132Z"/>`,
    ],
    [
      IconWeight.LIGHT,
      svg`<path d="M246,168v32a6,6,0,0,1-12,0V182.48l-5.66,5.66C225.6,191.15,188.86,230,128,230c-62,0-98.92-40.27-100.46-42a6,6,0,1,1,8.92-8c.34.37,35.09,38,91.54,38s91.2-37.64,91.55-38l.21-.22,5.76-5.76H208a6,6,0,0,1,0-12h32A6,6,0,0,1,246,168ZM162,99.56V84A38,38,0,0,0,90.14,66.73a6,6,0,1,1-10.68-5.46A50,50,0,0,1,174,84v92a6,6,0,0,1-12,0V164.44a50,50,0,1,1,0-64.88ZM162,132a38,38,0,1,0-38,38A38,38,0,0,0,162,132Z"/>`,
    ],
    [
      IconWeight.REGULAR,
      svg`<path d="M248,168v32a8,8,0,0,1-16,0V187.31l-2.21,2.22C226.69,192.9,189.44,232,128,232c-62.84,0-100.38-40.91-101.95-42.65A8,8,0,0,1,38,178.65C38.27,179,72.5,216,128,216s89.73-37,90.07-37.36a3.85,3.85,0,0,1,.27-.3l2.35-2.34H208a8,8,0,0,1,0-16h32A8,8,0,0,1,248,168ZM160,94.53V84A36,36,0,0,0,91.92,67.64a8,8,0,0,1-14.25-7.28A52,52,0,0,1,176,84v92a8,8,0,0,1-16,0v-6.53a52,52,0,1,1,0-74.94ZM160,132a36,36,0,1,0-36,36A36,36,0,0,0,160,132Z"/>`,
    ],
    [
      IconWeight.BOLD,
      svg`<path d="M252,168v32a12,12,0,0,1-24,0v-3.09C215.56,208.41,180.25,236,128,236c-64.6,0-103.3-42.18-104.92-44A12,12,0,1,1,40.92,176c.3.33,33.48,36,87.08,36,42.65,0,72.34-22.58,82.87-32H208a12,12,0,0,1,0-24h32A12,12,0,0,1,252,168ZM156,86.08V84A32,32,0,0,0,97.17,66.55a12,12,0,0,1-20.11-13.1A56,56,0,0,1,180,84v92a12,12,0,0,1-23.85,1.81A56,56,0,1,1,156,86.08ZM156,132a32,32,0,1,0-32,32A32,32,0,0,0,156,132Z"/>`,
    ],
    [
      IconWeight.FILL,
      svg`<path d="M152,136a24,24,0,1,1-24-24A24,24,0,0,1,152,136Zm80-8A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-80-24v0a40,40,0,1,0,0,64v0a8,8,0,0,0,16,0V104A40,40,0,0,0,94.13,82.71a8,8,0,0,0,13.54,8.52A24,24,0,0,1,152,104Zm44.81,65.61a8,8,0,0,0-11.2,1.58,72,72,0,0,1-115.22,0,8,8,0,1,0-12.78,9.62,88,88,0,0,0,140.78,0A8,8,0,0,0,196.81,169.61Z"/>`,
    ],
    [
      IconWeight.DUOTONE,
      svg`<path d="M168,132a44,44,0,1,1-44-44A44,44,0,0,1,168,132Z" opacity="0.2"/><path d="M248,168v32a8,8,0,0,1-16,0V187.31l-2.21,2.22C226.69,192.9,189.44,232,128,232c-62.84,0-100.38-40.91-101.95-42.65A8,8,0,0,1,38,178.65C38.27,179,72.5,216,128,216s89.73-37,90.07-37.36a3.85,3.85,0,0,1,.27-.3l2.35-2.34H208a8,8,0,0,1,0-16h32A8,8,0,0,1,248,168ZM160,94.53V84A36,36,0,0,0,91.92,67.64a8,8,0,0,1-14.25-7.28A52,52,0,0,1,176,84v92a8,8,0,0,1-16,0v-6.53a52,52,0,1,1,0-74.94ZM160,132a36,36,0,1,0-36,36A36,36,0,0,0,160,132Z"/>`,
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
        ${ArcIconAmazonLogo.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-icon-amazon-logo': ArcIconAmazonLogo;
  }
}
