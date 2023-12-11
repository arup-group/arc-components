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
import styles from './arc-icon-drop-half-bottom.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-drop-half-bottom')
export default class ArcIconDropHalfBottom extends LitElement {
  /** @internal */
  static tag = 'arc-icon-drop-half-bottom';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      IconWeight.THIN,
      svg`<path d="M171,50.37a250.18,250.18,0,0,0-40.73-37.65,4,4,0,0,0-4.58,0A250.18,250.18,0,0,0,85,50.37C58.17,81.21,44,113.58,44,144a84,84,0,0,0,168,0C212,113.58,197.83,81.21,171,50.37ZM189.91,188H66.09a75.63,75.63,0,0,1-11.4-24H201.31A75.63,75.63,0,0,1,189.91,188ZM53,156a75.41,75.41,0,0,1-1-12,93.38,93.38,0,0,1,.79-12H203.21a93.38,93.38,0,0,1,.79,12,75.41,75.41,0,0,1-1,12ZM90.9,55.77A254,254,0,0,1,128,21a254,254,0,0,1,37.1,34.81c14.37,16.55,31,40.61,36.77,68.23H54.13C59.93,96.38,76.53,72.32,90.9,55.77ZM128,220a75.77,75.77,0,0,1-55.35-24h110.7A75.77,75.77,0,0,1,128,220Z"/>`,
    ],
    [
      IconWeight.LIGHT,
      svg`<path d="M172.53,49.06a251.42,251.42,0,0,0-41.09-38,6,6,0,0,0-6.88,0,251.42,251.42,0,0,0-41.09,38C56.34,80.26,42,113.09,42,144a86,86,0,0,0,172,0C214,113.09,199.66,80.26,172.53,49.06ZM188.88,186H67.12a74.05,74.05,0,0,1-9.78-20H198.66A74.05,74.05,0,0,1,188.88,186ZM54.69,154A75,75,0,0,1,54,144a92.09,92.09,0,0,1,.56-10H201.44a92.09,92.09,0,0,1,.56,10,75,75,0,0,1-.69,10ZM128,23.49c13.13,10.12,59.83,49.06,71.39,98.51H56.61C68.17,72.55,114.87,33.61,128,23.49ZM77.48,198h101a73.81,73.81,0,0,1-101,0Z"/>`,
    ],
    [
      IconWeight.REGULAR,
      svg`<path d="M174,47.75a254.19,254.19,0,0,0-41.45-38.3,8,8,0,0,0-9.18,0A254.19,254.19,0,0,0,82,47.75C54.51,79.32,40,112.6,40,144a88,88,0,0,0,176,0C216,112.6,201.49,79.32,174,47.75ZM187.83,184H68.17a72,72,0,0,1-8-16H195.87A72,72,0,0,1,187.83,184ZM200,144a70.57,70.57,0,0,1-.46,8H56.46a70.57,70.57,0,0,1-.46-8q0-4,.36-8H199.64Q200,140,200,144ZM128,26c14.16,11.1,56.86,47.74,68.84,94H59.16C71.14,73.76,113.84,37.12,128,26ZM82.81,200h90.38a71.82,71.82,0,0,1-90.38,0Z"/>`,
    ],
    [
      IconWeight.BOLD,
      svg`<path d="M134.88,6.17a12,12,0,0,0-13.76,0,259,259,0,0,0-42.18,39C50.85,77.43,36,111.63,36,144a92,92,0,0,0,184,0C220,66.64,138.36,8.6,134.88,6.17ZM191.61,168H64.39a67.1,67.1,0,0,1-3.9-16h135A67.1,67.1,0,0,1,191.61,168ZM96.7,61.29A249.35,249.35,0,0,1,128,31.11a249.35,249.35,0,0,1,31.3,30.18c14,16.19,30.27,39.89,35.2,66.71H61.5C66.43,101.18,82.69,77.48,96.7,61.29ZM128,212a67.78,67.78,0,0,1-48.12-20h96.24A67.78,67.78,0,0,1,128,212Z"/>`,
    ],
    [
      IconWeight.FILL,
      svg`<path d="M174,47.75a254.19,254.19,0,0,0-41.45-38.3,8,8,0,0,0-9.18,0A254.19,254.19,0,0,0,82,47.75C54.51,79.32,40,112.6,40,144a88,88,0,0,0,176,0C216,112.6,201.49,79.32,174,47.75ZM128,26c14.16,11.1,56.86,47.74,68.84,94H59.16C71.14,73.76,113.84,37.12,128,26Z"/>`,
    ],
    [
      IconWeight.DUOTONE,
      svg`<path d="M208,144a80,80,0,0,1-160,0,100.8,100.8,0,0,1,1.3-16H206.7A100.8,100.8,0,0,1,208,144Z" opacity="0.2"/><path d="M174,47.75a254.19,254.19,0,0,0-41.45-38.3,8,8,0,0,0-9.18,0A254.19,254.19,0,0,0,82,47.75C54.51,79.32,40,112.6,40,144a88,88,0,0,0,176,0C216,112.6,201.49,79.32,174,47.75ZM128,26c14.16,11.1,56.86,47.74,68.84,94H59.16C71.14,73.76,113.84,37.12,128,26Zm0,190a72.08,72.08,0,0,1-72-72q0-4,.36-8H199.64q.36,4,.36,8A72.08,72.08,0,0,1,128,216Z"/>`,
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
        ${ArcIconDropHalfBottom.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-icon-drop-half-bottom': ArcIconDropHalfBottom;
  }
}
