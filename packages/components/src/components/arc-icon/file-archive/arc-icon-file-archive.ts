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
import styles from './arc-icon-file-archive.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-file-archive')
export default class ArcIconFileArchive extends LitElement {
  /** @internal */
  static tag = 'arc-icon-file-archive';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [IconWeight.THIN, svg`<path d="M210.83,85.17l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V88A4,4,0,0,0,210.83,85.17ZM156,41.65,198.34,84H156ZM200,220H108V196h12a4,4,0,0,0,0-8H108V164h12a4,4,0,0,0,0-8H108V132h12a4,4,0,0,0,0-8H108V112a4,4,0,0,0-8,0v12H88a4,4,0,0,0,0,8h12v24H88a4,4,0,0,0,0,8h12v24H88a4,4,0,0,0,0,8h12v24H56a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52V216A4,4,0,0,1,200,220Z"/>`],
    [IconWeight.LIGHT, svg`<path d="M212.24,83.76l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V88A6,6,0,0,0,212.24,83.76ZM158,46.48,193.52,82H158ZM200,218H110V198h10a6,6,0,0,0,0-12H110V166h10a6,6,0,0,0,0-12H110V134h10a6,6,0,0,0,0-12H110V112a6,6,0,0,0-12,0v10H88a6,6,0,0,0,0,12H98v20H88a6,6,0,0,0,0,12H98v20H88a6,6,0,0,0,0,12H98v20H56a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50V216A2,2,0,0,1,200,218Z"/>`],
    [IconWeight.REGULAR, svg`<path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H112V200h8a8,8,0,0,0,0-16h-8V168h8a8,8,0,0,0,0-16h-8V136h8a8,8,0,0,0,0-16h-8v-8a8,8,0,0,0-16,0v8H88a8,8,0,0,0,0,16h8v16H88a8,8,0,0,0,0,16h8v16H88a8,8,0,0,0,0,16h8v16H56V40h88V88a8,8,0,0,0,8,8h48V216Z"/>`],
    [IconWeight.BOLD, svg`<path d="M216.49,79.51l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V88A12,12,0,0,0,216.49,79.51ZM183,80H160V57ZM116,212V192h4a12,12,0,0,0,0-24h-4V152h4a12,12,0,0,0,0-24h-4V116a12,12,0,0,0-24,0v12H88a12,12,0,0,0,0,24h4v16H88a12,12,0,0,0,0,24h4v20H60V44h76V92a12,12,0,0,0,12,12h48V212Z"/>`],
    [IconWeight.FILL, svg`<path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H92a4,4,0,0,0,4-4V208H88.27A8.17,8.17,0,0,1,80,200.53,8,8,0,0,1,88,192h8V176H88.27A8.17,8.17,0,0,1,80,168.53,8,8,0,0,1,88,160h8V144H88.27A8.17,8.17,0,0,1,80,136.53,8,8,0,0,1,88,128h8v-7.73a8.18,8.18,0,0,1,7.47-8.25,8,8,0,0,1,8.53,8v8h7.73a8.17,8.17,0,0,1,8.25,7.47,8,8,0,0,1-8,8.53h-8v16h7.73a8.17,8.17,0,0,1,8.25,7.47,8,8,0,0,1-8,8.53h-8v16h7.73a8.17,8.17,0,0,1,8.25,7.47,8,8,0,0,1-8,8.53h-8v20a4,4,0,0,0,4,4h84a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM152,88V44l44,44Z"/>`],
    [IconWeight.DUOTONE, svg`<path d="M208,88H152V32Z" opacity="0.2"/><path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H112V200h8a8,8,0,0,0,0-16h-8V168h8a8,8,0,0,0,0-16h-8V136h8a8,8,0,0,0,0-16h-8v-8a8,8,0,0,0-16,0v8H88a8,8,0,0,0,0,16h8v16H88a8,8,0,0,0,0,16h8v16H88a8,8,0,0,0,0,16h8v16H56V40h88V88a8,8,0,0,0,8,8h48V216Z"/>`],
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
        ${ArcIconFileArchive.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "arc-icon-file-archive": ArcIconFileArchive;
  }
}
