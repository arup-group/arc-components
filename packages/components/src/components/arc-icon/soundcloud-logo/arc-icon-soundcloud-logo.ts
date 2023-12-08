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
import styles from './arc-icon-soundcloud-logo.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-soundcloud-logo')
export default class ArcIconSoundcloudLogo extends LitElement {
  /** @internal */
  static tag = 'arc-icon-soundcloud-logo';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [IconWeight.THIN, svg`<path d="M20,120v48a4,4,0,0,1-8,0V120a4,4,0,0,1,8,0ZM48,92a4,4,0,0,0-4,4v96a4,4,0,0,0,8,0V96A4,4,0,0,0,48,92Zm32-8a4,4,0,0,0-4,4V192a4,4,0,0,0,8,0V88A4,4,0,0,0,80,84Zm32-32a4,4,0,0,0-4,4V192a4,4,0,0,0,8,0V56A4,4,0,0,0,112,52Zm107.27,57.46A76,76,0,0,0,144,44a4,4,0,0,0,0,8,67.75,67.75,0,0,1,67.66,61.13,4,4,0,0,0,3.22,3.53A36,36,0,0,1,208,188H144a4,4,0,0,0,0,8h64a44,44,0,0,0,11.27-86.54Z"/>`],
    [IconWeight.LIGHT, svg`<path d="M22,120v48a6,6,0,0,1-12,0V120a6,6,0,0,1,12,0ZM48,90a6,6,0,0,0-6,6v96a6,6,0,0,0,12,0V96A6,6,0,0,0,48,90Zm32-8a6,6,0,0,0-6,6V192a6,6,0,0,0,12,0V88A6,6,0,0,0,80,82Zm32-32a6,6,0,0,0-6,6V192a6,6,0,0,0,12,0V56A6,6,0,0,0,112,50Zm109.06,57.88A78,78,0,0,0,144,42a6,6,0,0,0,0,12,65.75,65.75,0,0,1,65.67,59.33,6,6,0,0,0,4.83,5.29A34,34,0,0,1,208,186H144a6,6,0,0,0,0,12h64a46,46,0,0,0,13.06-90.12Z"/>`],
    [IconWeight.REGULAR, svg`<path d="M24,120v48a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0ZM48,88a8,8,0,0,0-8,8v96a8,8,0,0,0,16,0V96A8,8,0,0,0,48,88Zm32-8a8,8,0,0,0-8,8V192a8,8,0,0,0,16,0V88A8,8,0,0,0,80,80Zm32-32a8,8,0,0,0-8,8V192a8,8,0,0,0,16,0V56A8,8,0,0,0,112,48Zm110.84,58.34A80,80,0,0,0,144,40a8,8,0,0,0,0,16,63.76,63.76,0,0,1,63.68,57.53,8,8,0,0,0,6.44,7A32,32,0,0,1,208,184H144a8,8,0,0,0,0,16h64a48,48,0,0,0,14.84-93.66Z"/>`],
    [IconWeight.BOLD, svg`<path d="M32,120v48a12,12,0,0,1-24,0V120a12,12,0,0,1,24,0ZM60,84A12,12,0,0,0,48,96v96a12,12,0,0,0,24,0V96A12,12,0,0,0,60,84Zm40-40A12,12,0,0,0,88,56V192a12,12,0,0,0,24,0V56A12,12,0,0,0,100,44Zm122.34,59.33A84,84,0,0,0,140,36a12,12,0,0,0,0,24,59.78,59.78,0,0,1,59.7,53.93,12,12,0,0,0,9.66,10.58A28,28,0,0,1,204,180H140a12,12,0,0,0,0,24h64a52,52,0,0,0,18.34-100.67Z"/>`],
    [IconWeight.FILL, svg`<path d="M24,120v48a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0ZM48,88a8,8,0,0,0-8,8v96a8,8,0,0,0,16,0V96A8,8,0,0,0,48,88Zm32-8a8,8,0,0,0-8,8V192a8,8,0,0,0,16,0V88A8,8,0,0,0,80,80Zm32-32a8,8,0,0,0-8,8V192a8,8,0,0,0,16,0V56A8,8,0,0,0,112,48Zm110.84,58.34A80,80,0,0,0,144,40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8h64a48,48,0,0,0,14.84-93.66Z"/>`],
    [IconWeight.DUOTONE, svg`<path d="M248,152a40,40,0,0,1-40,40H144V48a72,72,0,0,1,71.64,64.73A40,40,0,0,1,248,152Z" opacity="0.2"/><path d="M24,120v48a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0ZM48,88a8,8,0,0,0-8,8v96a8,8,0,0,0,16,0V96A8,8,0,0,0,48,88Zm32-8a8,8,0,0,0-8,8V192a8,8,0,0,0,16,0V88A8,8,0,0,0,80,80Zm32-32a8,8,0,0,0-8,8V192a8,8,0,0,0,16,0V56A8,8,0,0,0,112,48Zm110.84,58.34A80,80,0,0,0,144,40a8,8,0,0,0,0,16,63.76,63.76,0,0,1,63.68,57.53,8,8,0,0,0,6.44,7A32,32,0,0,1,208,184H144a8,8,0,0,0,0,16h64a48,48,0,0,0,14.84-93.66Z"/>`],
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
        ${ArcIconSoundcloudLogo.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "arc-icon-soundcloud-logo": ArcIconSoundcloudLogo;
  }
}
