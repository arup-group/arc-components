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
import styles from './arc-icon-shield-chevron.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-shield-chevron')
export default class ArcIconShieldChevron extends LitElement {
  /** @internal */
  static tag = 'arc-icon-shield-chevron';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      IconWeight.THIN,
      svg`<path d="M208,44H48A12,12,0,0,0,36,56v58.77c0,86.87,73.54,115.7,88.28,120.6a11.65,11.65,0,0,0,7.44,0c14.74-4.9,88.28-33.73,88.28-120.6V56A12,12,0,0,0,208,44ZM129.2,227.79a3.53,3.53,0,0,1-2.4,0c-9.75-3.24-47-17.66-68-54.45L128,124.88l69.23,48.46C176.16,210.13,139,224.55,129.2,227.79Zm82.8-113c0,20.38-4.33,37.35-11,51.41l-70.68-49.48a4,4,0,0,0-4.58,0L55,166.2c-6.7-14.06-11-31-11-51.41V56a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Z"/>`,
    ],
    [
      IconWeight.LIGHT,
      svg`<path d="M208,42H48A14,14,0,0,0,34,56v58.77c0,88.24,74.68,117.52,89.65,122.49a13.5,13.5,0,0,0,8.7,0c15-5,89.65-34.25,89.65-122.49V56A14,14,0,0,0,208,42ZM128.56,225.89a1.55,1.55,0,0,1-1.12,0c-9.46-3.14-45.14-17-66-52L128,127.32l66.56,46.59C173.7,208.93,138,222.75,128.56,225.89ZM210,114.79c0,19-3.83,35-9.85,48.39l-68.71-48.1a6,6,0,0,0-6.88,0l-68.71,48.1c-6-13.4-9.85-29.38-9.85-48.39V56a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Z"/>`,
    ],
    [
      IconWeight.REGULAR,
      svg`<path d="M208,40H48A16,16,0,0,0,32,56v58.77c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40ZM128,224c-9.26-3.08-43.29-16.32-63.87-49.5L128,129.76l63.87,44.71C171.31,207.61,137.34,220.85,128,224Zm80-109.18c0,17.64-3.36,32.63-8.72,45.34l-66.69-46.68a8,8,0,0,0-9.18,0L56.72,160.13C51.36,147.42,48,132.43,48,114.79V56l160,0Z"/>`,
    ],
    [
      IconWeight.BOLD,
      svg`<path d="M208,36H48A20,20,0,0,0,28,56V114.8c0,92.36,78.1,123,93.76,128.18a19.6,19.6,0,0,0,12.48,0C149.9,237.78,228,207.16,228,114.8V56A20,20,0,0,0,208,36ZM52,60H204v54.8a113.07,113.07,0,0,1-6.6,39.14l-62.52-43.77a12,12,0,0,0-13.76,0L58.6,153.94A113.07,113.07,0,0,1,52,114.8Zm76,159.75c-10.07-3.53-39.26-15.79-58.39-44.22L128,134.65l58.39,40.88C167.26,204,138.07,216.22,128,219.75Z"/>`,
    ],
    [
      IconWeight.FILL,
      svg`<path d="M208,40H48A16,16,0,0,0,32,56v58.77c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,17.64-3.36,32.63-8.72,45.34l-66.69-46.68a8,8,0,0,0-9.18,0L56.72,160.13C51.36,147.42,48,132.43,48,114.79V56l160,0Z"/>`,
    ],
    [
      IconWeight.DUOTONE,
      svg`<path d="M202.5,172.15c-21.39,40.41-61.72,56-72,59.44a7.54,7.54,0,0,1-4.92,0c-10.32-3.43-50.65-19-72-59.44L128,120Z" opacity="0.2"/><path d="M208,40H48A16,16,0,0,0,32,56v58.77c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40ZM128,224c-9.26-3.08-43.29-16.32-63.87-49.5L128,129.76l63.87,44.71C171.31,207.61,137.34,220.85,128,224Zm80-109.18c0,17.64-3.36,32.63-8.72,45.34l-66.69-46.68a8,8,0,0,0-9.18,0L56.72,160.13C51.36,147.42,48,132.43,48,114.79V56l160,0Z"/>`,
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
        ${ArcIconShieldChevron.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-icon-shield-chevron': ArcIconShieldChevron;
  }
}
