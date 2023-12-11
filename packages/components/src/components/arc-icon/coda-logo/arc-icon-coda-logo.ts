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
import styles from './arc-icon-coda-logo.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-coda-logo')
export default class ArcIconCodaLogo extends LitElement {
  /** @internal */
  static tag = 'arc-icon-coda-logo';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      IconWeight.THIN,
      svg`<path d="M176,84a43.82,43.82,0,0,1,23.69,6.73A8,8,0,0,0,212,84V48a12,12,0,0,0-12-12H56A12,12,0,0,0,44,48V208a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V172a8,8,0,0,0-12.28-6.75c-8,5.14-14.82,7.09-23.56,6.74H176a44,44,0,0,1,0-88Zm-52,44a52.05,52.05,0,0,0,51.92,52c10.35.4,18.76-2,28.08-8v36a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H200a4,4,0,0,1,4,4V84a52.24,52.24,0,0,0-80,44Z"/>`,
    ],
    [
      IconWeight.LIGHT,
      svg`<path d="M176,86a41.82,41.82,0,0,1,22.61,6.41A10,10,0,0,0,214,84V48a14,14,0,0,0-14-14H56A14,14,0,0,0,42,48V208a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V172a10,10,0,0,0-15.36-8.43c-7.63,4.89-14.11,6.76-22.4,6.42H176a42,42,0,0,1,0-84Zm-54,42a54.06,54.06,0,0,0,53.88,54A46.36,46.36,0,0,0,202,175.57V208a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H200a2,2,0,0,1,2,2V80.48A54.28,54.28,0,0,0,122,128Z"/>`,
    ],
    [
      IconWeight.REGULAR,
      svg`<path d="M176,88a39.79,39.79,0,0,1,21.53,6.1A12,12,0,0,0,216,84V48a16,16,0,0,0-16-16H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V172a12,12,0,0,0-18.44-10.11c-7.25,4.65-13.41,6.41-21.24,6.11H176a40,40,0,0,1,0-80Zm-56,40a56.07,56.07,0,0,0,55.84,56A48.37,48.37,0,0,0,200,178.89V208H56V48H200V77.23A56.3,56.3,0,0,0,120,128Z"/>`,
    ],
    [
      IconWeight.BOLD,
      svg`<path d="M176,92a35.79,35.79,0,0,1,19.38,5.47A16,16,0,0,0,220,84V48a20,20,0,0,0-20-20H56A20,20,0,0,0,36,48V208a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V172a16,16,0,0,0-24.6-13.48c-6.58,4.22-11.89,5.76-18.92,5.48H176a36,36,0,0,1,0-72Zm-.24,96A52.4,52.4,0,0,0,196,185v19H60V52H196V71.3A61.55,61.55,0,0,0,176,68a60,60,0,0,0-.24,120Z"/>`,
    ],
    [
      IconWeight.FILL,
      svg`<path d="M136,128a40,40,0,0,0,40,40h.32c7.83.3,14-1.46,21.24-6.11A12,12,0,0,1,216,172v36a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V48A16,16,0,0,1,56,32H200a16,16,0,0,1,16,16V84a12,12,0,0,1-18.47,10.1A40.23,40.23,0,0,0,136,128Z"/>`,
    ],
    [
      IconWeight.DUOTONE,
      svg`<path d="M128,128a48,48,0,0,0,48,48c10.27.41,17.9-2.25,25.88-7.37A4,4,0,0,1,208,172v36a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H200a8,8,0,0,1,8,8V84a4,4,0,0,1-6.15,3.36A48.24,48.24,0,0,0,128,128Z" opacity="0.2"/><path d="M176,88a39.79,39.79,0,0,1,21.53,6.1A12,12,0,0,0,216,84V48a16,16,0,0,0-16-16H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V172a12,12,0,0,0-18.44-10.11c-7.25,4.65-13.41,6.41-21.24,6.11H176a40,40,0,0,1,0-80Zm-56,40a56.07,56.07,0,0,0,55.84,56A48.4,48.4,0,0,0,200,178.89V208H56V48H200V77.23A56.3,56.3,0,0,0,120,128Z"/>`,
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
        ${ArcIconCodaLogo.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-icon-coda-logo': ArcIconCodaLogo;
  }
}
