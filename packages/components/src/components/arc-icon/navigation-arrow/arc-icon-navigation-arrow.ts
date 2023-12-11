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
import styles from './arc-icon-navigation-arrow.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-navigation-arrow')
export default class ArcIconNavigationArrow extends LitElement {
  /** @internal */
  static tag = 'arc-icon-navigation-arrow';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [IconWeight.THIN, svg`<path d="M228,102,51.93,36.67A12,12,0,0,0,36.69,52L102,228a11.81,11.81,0,0,0,11.31,8h.22a11.82,11.82,0,0,0,11.26-8.47L148.32,151a4,4,0,0,1,2.65-2.65l76.56-23.55A12,12,0,0,0,228,102Zm-2.83,15.13-76.57,23.56a12,12,0,0,0-7.94,7.94l-23.55,76.56a3.89,3.89,0,0,1-3.76,2.82,3.93,3.93,0,0,1-3.85-2.69l0-.08L44.22,49.32a3.93,3.93,0,0,1,1-4.14A4,4,0,0,1,48,44a3.86,3.86,0,0,1,1.25.21l176.08,65.32a4,4,0,0,1-.13,7.6Z"/>`],
    [IconWeight.LIGHT, svg`<path d="M228.65,100.1,52.72,34.83l-.13,0A14,14,0,0,0,34.78,52.59s0,.09,0,.13L100.1,228.65A13.77,13.77,0,0,0,113.28,238h.26a13.8,13.8,0,0,0,13.14-9.88l23.56-76.56a2,2,0,0,1,1.32-1.32l76.56-23.56a14,14,0,0,0,.53-26.58Zm-4.06,15.11L148,138.77a14,14,0,0,0-9.26,9.26l-23.56,76.56a1.86,1.86,0,0,1-1.88,1.41,1.82,1.82,0,0,1-1.92-1.35.61.61,0,0,0,0-.12L46.11,48.62a2,2,0,0,1,2.51-2.51l175.91,65.26.12,0a2,2,0,0,1-.06,3.8Z"/>`],
    [IconWeight.REGULAR, svg`<path d="M229.33,98.21,53.41,33l-.16-.05A16,16,0,0,0,32.9,53.25a1,1,0,0,0,.05.16L98.21,229.33A15.77,15.77,0,0,0,113.28,240h.3a15.77,15.77,0,0,0,15-11.29l23.56-76.56,76.56-23.56a16,16,0,0,0,.62-30.38ZM224,113.3l-76.56,23.56a16,16,0,0,0-10.58,10.58L113.3,224h0l-.06-.17L48,48l175.82,65.22.16.06Z"/>`],
    [IconWeight.BOLD, svg`<path d="M230.7,94.46,54.81,29.21l-.25-.09A20,20,0,0,0,29.12,54.56l.09.25L94.46,230.7A20,20,0,0,0,113.3,244h.35a20,20,0,0,0,18.77-14.12l22.93-74.53,74.53-22.93a20,20,0,0,0,.82-38ZM146.27,133A20,20,0,0,0,133,146.27L113,211.55,54.8,54.8,211.55,113Z"/>`],
    [IconWeight.FILL, svg`<path d="M240,113.58a15.76,15.76,0,0,1-11.29,15l-76.56,23.56-23.56,76.56a15.77,15.77,0,0,1-15,11.29h-.3a15.77,15.77,0,0,1-15.07-10.67L33,53.41a1,1,0,0,1-.05-.16A16,16,0,0,1,53.25,32.9l.16.05L229.33,98.21A15.78,15.78,0,0,1,240,113.58Z"/>`],
    [IconWeight.DUOTONE, svg`<path d="M226.35,121,149.8,144.5a8,8,0,0,0-5.3,5.3L121,226.35a8,8,0,0,1-15.21.27l-65.28-176A8,8,0,0,1,50.63,40.46l176,65.28A8,8,0,0,1,226.35,121Z" opacity="0.2"/><path d="M229.33,98.21,53.41,33l-.16-.05A16,16,0,0,0,32.9,53.25a1,1,0,0,0,.05.16L98.21,229.33A15.77,15.77,0,0,0,113.28,240h.3a15.77,15.77,0,0,0,15-11.29l23.56-76.56,76.56-23.56a16,16,0,0,0,.62-30.38ZM224,113.3l-76.56,23.56a16,16,0,0,0-10.58,10.58L113.3,224h0l-.06-.17L48,48l175.82,65.22.16.06Z"/>`],
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
        ${ArcIconNavigationArrow.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "arc-icon-navigation-arrow": ArcIconNavigationArrow;
  }
}
