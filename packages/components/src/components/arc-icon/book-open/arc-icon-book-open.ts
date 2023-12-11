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
import styles from './arc-icon-book-open.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-book-open')
export default class ArcIconBookOpen extends LitElement {
  /** @internal */
  static tag = 'arc-icon-book-open';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [IconWeight.THIN, svg`<path d="M224,52H160a36,36,0,0,0-32,19.54A36,36,0,0,0,96,52H32A12,12,0,0,0,20,64V192a12,12,0,0,0,12,12H96a28,28,0,0,1,28,28,4,4,0,0,0,8,0,28,28,0,0,1,28-28h64a12,12,0,0,0,12-12V64A12,12,0,0,0,224,52ZM96,196H32a4,4,0,0,1-4-4V64a4,4,0,0,1,4-4H96a28,28,0,0,1,28,28V209.4A35.93,35.93,0,0,0,96,196Zm132-4a4,4,0,0,1-4,4H160a35.94,35.94,0,0,0-28,13.41V88a28,28,0,0,1,28-28h64a4,4,0,0,1,4,4Z"/>`],
    [IconWeight.LIGHT, svg`<path d="M224,50H160a38,38,0,0,0-32,17.55A38,38,0,0,0,96,50H32A14,14,0,0,0,18,64V192a14,14,0,0,0,14,14H96a26,26,0,0,1,26,26,6,6,0,0,0,12,0,26,26,0,0,1,26-26h64a14,14,0,0,0,14-14V64A14,14,0,0,0,224,50ZM96,194H32a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H96a26,26,0,0,1,26,26V204.31A37.86,37.86,0,0,0,96,194Zm130-2a2,2,0,0,1-2,2H160a37.87,37.87,0,0,0-26,10.32V88a26,26,0,0,1,26-26h64a2,2,0,0,1,2,2Z"/>`],
    [IconWeight.REGULAR, svg`<path d="M224,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h64a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64Z"/>`],
    [IconWeight.BOLD, svg`<path d="M224,44H160a43.86,43.86,0,0,0-32,13.85A43.86,43.86,0,0,0,96,44H32A20,20,0,0,0,12,64V192a20,20,0,0,0,20,20H96a20,20,0,0,1,20,20,12,12,0,0,0,24,0,20,20,0,0,1,20-20h64a20,20,0,0,0,20-20V64A20,20,0,0,0,224,44ZM96,188H36V68H96a20,20,0,0,1,20,20V192.81A43.79,43.79,0,0,0,96,188Zm124,0H160a43.71,43.71,0,0,0-20,4.83V88a20,20,0,0,1,20-20h60Z"/>`],
    [IconWeight.FILL, svg`<path d="M240,64V192a16,16,0,0,1-16,16H160a24,24,0,0,0-24,24,8,8,0,0,1-16,0,24,24,0,0,0-24-24H32a16,16,0,0,1-16-16V64A16,16,0,0,1,32,48H88a32,32,0,0,1,32,32v88a8,8,0,0,0,16,0V80a32,32,0,0,1,32-32h56A16,16,0,0,1,240,64Z"/>`],
    [IconWeight.DUOTONE, svg`<path d="M232,64V192a8,8,0,0,1-8,8H160a32,32,0,0,0-32,32,32,32,0,0,0-32-32H32a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H96a32,32,0,0,1,32,32,32,32,0,0,1,32-32h64A8,8,0,0,1,232,64Z" opacity="0.2"/><path d="M224,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h64a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64Z"/>`],
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
        ${ArcIconBookOpen.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "arc-icon-book-open": ArcIconBookOpen;
  }
}
