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
import styles from './arc-icon-prescription.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-prescription')
export default class ArcIconPrescription extends LitElement {
  /** @internal */
  static tag = 'arc-icon-prescription';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      IconWeight.THIN,
      svg`<path d="M177.66,188l25.17-25.17a4,4,0,0,0-5.66-5.66L172,182.34,121.66,132H124a48,48,0,0,0,0-96H72a4,4,0,0,0-4,4V192a4,4,0,0,0,8,0V132h34.34l56,56-25.17,25.17a4,4,0,0,0,5.66,5.66L172,193.66l25.17,25.17a4,4,0,0,0,5.66-5.66ZM76,44h48a40,40,0,0,1,0,80H76Z"/>`,
    ],
    [
      IconWeight.LIGHT,
      svg`<path d="M180.49,188l23.75-23.76a6,6,0,0,0-8.48-8.48L172,179.51l-45.58-45.57A50,50,0,0,0,124,34H72a6,6,0,0,0-6,6V192a6,6,0,0,0,12,0V134h31.51l54,54-23.75,23.76a6,6,0,1,0,8.48,8.48L172,196.49l23.76,23.75a6,6,0,0,0,8.48-8.48ZM78,46h46a38,38,0,0,1,0,76H78Z"/>`,
    ],
    [
      IconWeight.REGULAR,
      svg`<path d="M183.31,188l22.35-22.34a8,8,0,0,0-11.32-11.32L172,176.69l-41.15-41.16A52,52,0,0,0,124,32H72a8,8,0,0,0-8,8V192a8,8,0,0,0,16,0V136h28.69l52,52-22.35,22.34a8,8,0,0,0,11.32,11.32L172,199.31l22.34,22.35a8,8,0,0,0,11.32-11.32ZM80,48h44a36,36,0,0,1,0,72H80Z"/>`,
    ],
    [
      IconWeight.BOLD,
      svg`<path d="M189,188l19.52-19.51a12,12,0,0,0-17-17L172,171,138.93,138A56,56,0,0,0,124,28H72A12,12,0,0,0,60,40V192a12,12,0,0,0,24,0V140h23l48,48-19.52,19.51a12,12,0,0,0,17,17L172,205l19.51,19.52a12,12,0,0,0,17-17ZM84,52h40a32,32,0,0,1,0,64H84Z"/>`,
    ],
    [
      IconWeight.FILL,
      svg`<path d="M128,120H96V72h32a24,24,0,0,1,0,48Zm96-72V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM189.66,186.34,175.31,172l14.35-14.34a8,8,0,0,0-11.32-11.32L164,160.69l-26-26A40,40,0,0,0,128,56H88a8,8,0,0,0-8,8V176a8,8,0,0,0,16,0V136h20.69l36,36-14.35,14.34a8,8,0,0,0,11.32,11.32L164,183.31l14.34,14.35a8,8,0,0,0,11.32-11.32Z"/>`,
    ],
    [
      IconWeight.DUOTONE,
      svg`<path d="M168,84a44,44,0,0,1-44,44H72V40h52A44,44,0,0,1,168,84Z" opacity="0.2"/><path d="M183.31,188l22.35-22.34a8,8,0,0,0-11.32-11.32L172,176.69l-41.15-41.16A52,52,0,0,0,124,32H72a8,8,0,0,0-8,8V192a8,8,0,0,0,16,0V136h28.69l52,52-22.35,22.34a8,8,0,0,0,11.32,11.32L172,199.31l22.34,22.35a8,8,0,0,0,11.32-11.32ZM80,48h44a36,36,0,0,1,0,72H80Z"/>`,
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
        ${ArcIconPrescription.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-icon-prescription': ArcIconPrescription;
  }
}
