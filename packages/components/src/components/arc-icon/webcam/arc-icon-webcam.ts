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
import styles from './arc-icon-webcam.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-webcam')
export default class ArcIconWebcam extends LitElement {
  /** @internal */
  static tag = 'arc-icon-webcam';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      IconWeight.THIN,
      svg`<path d="M164,104a36,36,0,1,0-36,36A36,36,0,0,0,164,104Zm-64,0a28,28,0,1,1,28,28A28,28,0,0,1,100,104ZM224,204H132V179.89a76,76,0,1,0-8,0V204H32a4,4,0,0,0,0,8H224a4,4,0,0,0,0-8ZM60,104a68,68,0,1,1,68,68A68.07,68.07,0,0,1,60,104Z"/>`,
    ],
    [
      IconWeight.LIGHT,
      svg`<path d="M166,104a38,38,0,1,0-38,38A38,38,0,0,0,166,104Zm-64,0a26,26,0,1,1,26,26A26,26,0,0,1,102,104Zm122,98H134V181.75a78,78,0,1,0-12,0V202H32a6,6,0,0,0,0,12H224a6,6,0,0,0,0-12ZM62,104a66,66,0,1,1,66,66A66.08,66.08,0,0,1,62,104Z"/>`,
    ],
    [
      IconWeight.REGULAR,
      svg`<path d="M168,104a40,40,0,1,0-40,40A40,40,0,0,0,168,104Zm-64,0a24,24,0,1,1,24,24A24,24,0,0,1,104,104Zm120,96H136V183.6a80,80,0,1,0-16,0V200H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM64,104a64,64,0,1,1,64,64A64.07,64.07,0,0,1,64,104Z"/>`,
    ],
    [
      IconWeight.BOLD,
      svg`<path d="M168,104a40,40,0,1,0-40,40A40,40,0,0,0,168,104Zm-56,0a16,16,0,1,1,16,16A16,16,0,0,1,112,104Zm112,92H140v-8.87a84,84,0,1,0-24,0V196H32a12,12,0,0,0,0,24H224a12,12,0,0,0,0-24ZM68,104a60,60,0,1,1,60,60A60.07,60.07,0,0,1,68,104Z"/>`,
    ],
    [
      IconWeight.FILL,
      svg`<path d="M160,104a32,32,0,1,1-32-32A32,32,0,0,1,160,104Zm72,104a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16h88V183.6a80,80,0,1,1,16,0V200h88A8,8,0,0,1,232,208ZM128,152a48,48,0,1,0-48-48A48.05,48.05,0,0,0,128,152Z"/>`,
    ],
    [
      IconWeight.DUOTONE,
      svg`<path d="M128,32a72,72,0,1,0,72,72A72,72,0,0,0,128,32Zm0,104a32,32,0,1,1,32-32A32,32,0,0,1,128,136Z" opacity="0.2"/><path d="M168,104a40,40,0,1,0-40,40A40,40,0,0,0,168,104Zm-64,0a24,24,0,1,1,24,24A24,24,0,0,1,104,104Zm120,96H136V183.6a80,80,0,1,0-16,0V200H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM64,104a64,64,0,1,1,64,64A64.07,64.07,0,0,1,64,104Z"/>`,
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
        ${ArcIconWebcam.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-icon-webcam': ArcIconWebcam;
  }
}
