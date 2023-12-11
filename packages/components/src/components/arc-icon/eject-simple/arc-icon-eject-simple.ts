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
import styles from './arc-icon-eject-simple.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-eject-simple')
export default class ArcIconEjectSimple extends LitElement {
  /** @internal */
  static tag = 'arc-icon-eject-simple';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      IconWeight.THIN,
      svg`<path d="M228,208a4,4,0,0,1-4,4H32a4,4,0,0,1,0-8H224A4,4,0,0,1,228,208ZM29.2,157.12a12,12,0,0,1,1.51-12.83L112.37,43.46a20.1,20.1,0,0,1,31.26,0l81.66,100.83A12.1,12.1,0,0,1,215.92,164H40.08A12,12,0,0,1,29.2,157.12Zm7.22-3.44A4,4,0,0,0,40.08,156H215.92a4,4,0,0,0,3.66-2.32,4,4,0,0,0-.51-4.36L137.41,48.5a12.09,12.09,0,0,0-18.82,0L36.93,149.32A4,4,0,0,0,36.42,153.68Z"/>`,
    ],
    [
      IconWeight.LIGHT,
      svg`<path d="M230,208a6,6,0,0,1-6,6H32a6,6,0,0,1,0-12H224A6,6,0,0,1,230,208ZM27.39,158A14,14,0,0,1,29.16,143L110.82,42.2a22.1,22.1,0,0,1,34.36,0L226.84,143a14.09,14.09,0,0,1-10.93,23H40.09A14,14,0,0,1,27.39,158Zm10.83-5.16A2,2,0,0,0,40.09,154H215.91a2,2,0,0,0,1.87-1.18,2,2,0,0,0-.27-2.24L135.86,49.76a10.1,10.1,0,0,0-15.72,0L38.49,150.58A2,2,0,0,0,38.22,152.82Z"/>`,
    ],
    [
      IconWeight.REGULAR,
      svg`<path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,1,1,0-16H224A8,8,0,0,1,232,208ZM25.59,158.84a16,16,0,0,1,2-17.07L109.26,40.94a24.11,24.11,0,0,1,37.48,0l81.65,100.83A16.1,16.1,0,0,1,215.91,168H40.09A16,16,0,0,1,25.59,158.84ZM40,151.91s0,.09.08.11l175.83,0s.08-.09.08-.13L134.3,51a8.1,8.1,0,0,0-12.6,0L40,151.84A.28.28,0,0,0,40,151.91Z"/>`,
    ],
    [
      IconWeight.BOLD,
      svg`<path d="M236,208a12,12,0,0,1-12,12H32a12,12,0,1,1,0-24H224A12,12,0,0,1,236,208ZM22,160.57a20,20,0,0,1,2.52-21.32L106.16,38.43a28.08,28.08,0,0,1,43.68,0l81.65,100.82A20.1,20.1,0,0,1,215.91,172H40.09A19.9,19.9,0,0,1,22,160.57ZM48.3,148H207.7L131.2,53.53a4.11,4.11,0,0,0-6.4,0Z"/>`,
    ],
    [
      IconWeight.FILL,
      svg`<path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,1,1,0-16H224A8,8,0,0,1,232,208ZM40.09,168H215.91a16.1,16.1,0,0,0,12.48-26.23L146.74,40.94a24.11,24.11,0,0,0-37.48,0L27.61,141.77A16.1,16.1,0,0,0,40.09,168Z"/>`,
    ],
    [
      IconWeight.DUOTONE,
      svg`<path d="M215.92,160H40.08a8.1,8.1,0,0,1-6.26-13.2L115.48,46a16.1,16.1,0,0,1,25,0L222.18,146.8A8.1,8.1,0,0,1,215.92,160Z" opacity="0.2"/><path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,1,1,0-16H224A8,8,0,0,1,232,208ZM25.59,158.84a16,16,0,0,1,2-17.07L109.26,40.94a24.11,24.11,0,0,1,37.48,0l81.65,100.83A16.1,16.1,0,0,1,215.91,168H40.09A16,16,0,0,1,25.59,158.84ZM40,151.91s0,.09.08.11l175.83,0s.08-.09.08-.13L134.3,51a8.1,8.1,0,0,0-12.6,0L40,151.84A.28.28,0,0,0,40,151.91Z"/>`,
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
        ${ArcIconEjectSimple.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-icon-eject-simple': ArcIconEjectSimple;
  }
}
