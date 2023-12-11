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
import styles from './arc-icon-plug-charging.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-plug-charging')
export default class ArcIconPlugCharging extends LitElement {
  /** @internal */
  static tag = 'arc-icon-plug-charging';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      IconWeight.THIN,
      svg`<path d="M224,60H172V16a4,4,0,0,0-8,0V60H92V16a4,4,0,0,0-8,0V60H32.55C28.13,60,28,63.59,28,64a4,4,0,0,0,4,4H52v92a36,36,0,0,0,36,36h36v44a4,4,0,0,0,8,0V196h36a36,36,0,0,0,36-36V68h20a4,4,0,0,0,0-8ZM196,160a28,28,0,0,1-28,28H88a28,28,0,0,1-28-28V68H196Zm-87.29-29.72a4,4,0,0,1-.46-3.68l12-32a4,4,0,0,1,7.5,2.8l-10,26.6H144a4,4,0,0,1,3.75,5.4l-12,32a4,4,0,1,1-7.5-2.8l10-26.6H112A4,4,0,0,1,108.71,130.28Z"/>`,
    ],
    [
      IconWeight.LIGHT,
      svg`<path d="M224,58H174V16a6,6,0,0,0-12,0V58H94V16a6,6,0,0,0-12,0V58H32.55A6.1,6.1,0,0,0,26,64a6,6,0,0,0,6,6H50v90a38,38,0,0,0,38,38h34v42a6,6,0,0,0,12,0V198h34a38,38,0,0,0,38-38V70h18a6,6,0,0,0,0-12ZM194,160a26,26,0,0,1-26,26H88a26,26,0,0,1-26-26V70H194Zm-86.93-28.58a6,6,0,0,1-.69-5.53l12-32a6,6,0,1,1,11.24,4.22l-9,23.89H144a6,6,0,0,1,5.62,8.11l-12,32a6,6,0,0,1-11.24-4.22l9-23.89H112A6,6,0,0,1,107.07,131.42Z"/>`,
    ],
    [
      IconWeight.REGULAR,
      svg`<path d="M224,56H176V16a8,8,0,0,0-16,0V56H96V16a8,8,0,0,0-16,0V56H32.55C26.28,56,24,60.78,24,64a8,8,0,0,0,8,8H48v88a40,40,0,0,0,40,40h32v40a8,8,0,0,0,16,0V200h32a40,40,0,0,0,40-40V72h16a8,8,0,0,0,0-16ZM168,184H88a24,24,0,0,1-24-24V72H192v88A24,24,0,0,1,168,184Zm-17.42-60.56a8,8,0,0,1,.91,7.37l-12,32a8,8,0,0,1-15-5.62l8-21.19H112a8,8,0,0,1-7.49-10.81l12-32a8,8,0,1,1,15,5.62l-8,21.19H144A8,8,0,0,1,150.58,123.44Z"/>`,
    ],
    [
      IconWeight.BOLD,
      svg`<path d="M224,48H180V16a12,12,0,0,0-24,0V48H100V16a12,12,0,0,0-24,0V48H32.55C24.4,48,20,54.18,20,60A12,12,0,0,0,32,72H44v92a44.05,44.05,0,0,0,44,44h28v32a12,12,0,0,0,24,0V208h28a44.05,44.05,0,0,0,44-44V72h12a12,12,0,0,0,0-24ZM188,164a20,20,0,0,1-20,20H88a20,20,0,0,1-20-20V72H188Zm-85.86-29.17a12,12,0,0,1-1.38-11l12-32a12,12,0,1,1,22.48,8.42L129.32,116H144a12,12,0,0,1,11.24,16.21l-12,32a12,12,0,0,1-22.48-8.42L126.68,140H112A12,12,0,0,1,102.14,134.83Z"/>`,
    ],
    [
      IconWeight.FILL,
      svg`<path d="M224,56H176V16a8,8,0,0,0-16,0V56H96V16a8,8,0,0,0-8-8c-3.21,0-8,2.27-8,8.54V56H32.55C26.28,56,24,60.78,24,64a8,8,0,0,0,8,8H48v88a40,40,0,0,0,40,40h32v40a8,8,0,0,0,16,0V200h32a40,40,0,0,0,40-40V72h16a8,8,0,0,0,0-16Zm-72.51,74.81-12,32a8,8,0,0,1-15-5.62l8-21.19H112a8,8,0,0,1-7.49-10.81l12-32a8,8,0,1,1,15,5.62l-8,21.19H144a8,8,0,0,1,7.49,10.81Z"/>`,
    ],
    [
      IconWeight.DUOTONE,
      svg`<path d="M200,64v96a32,32,0,0,1-32,32H88a32,32,0,0,1-32-32V64Z" opacity="0.2"/><path d="M224,56H176V16a8,8,0,0,0-16,0V56H96V16a8,8,0,0,0-16,0V56H32.55C26.28,56,24,60.78,24,64a8,8,0,0,0,8,8H48v88a40,40,0,0,0,40,40h32v40a8,8,0,0,0,16,0V200h32a40,40,0,0,0,40-40V72h16a8,8,0,0,0,0-16ZM192,160a24,24,0,0,1-24,24H88a24,24,0,0,1-24-24V72H192Zm-86.58-27.44a8,8,0,0,1-.91-7.37l12-32a8,8,0,1,1,15,5.62l-8,21.19H144a8,8,0,0,1,7.49,10.81l-12,32a8,8,0,0,1-15-5.62l8-21.19H112A8,8,0,0,1,105.42,132.56Z"/>`,
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
        ${ArcIconPlugCharging.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-icon-plug-charging': ArcIconPlugCharging;
  }
}
