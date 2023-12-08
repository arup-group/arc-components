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
import styles from './arc-icon-brandy.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-brandy')
export default class ArcIconBrandy extends LitElement {
  /** @internal */
  static tag = 'arc-icon-brandy';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [IconWeight.THIN, svg`<path d="M220,88h0a91.67,91.67,0,0,0-14.88-50.18A4,4,0,0,0,201.77,36H54.23a4,4,0,0,0-3.35,1.82A91.67,91.67,0,0,0,36,88h0a92.11,92.11,0,0,0,88,91.91V220H88a4,4,0,0,0,0,8h80a4,4,0,0,0,0-8H132V179.91A92.11,92.11,0,0,0,220,88ZM56.43,44H199.57a83.5,83.5,0,0,1,12.32,40H44.11A83.5,83.5,0,0,1,56.43,44ZM128,172A84.1,84.1,0,0,1,44.1,92H211.9A84.1,84.1,0,0,1,128,172Z"/>`],
    [IconWeight.LIGHT, svg`<path d="M222,88h0a93.64,93.64,0,0,0-15.21-51.28,6,6,0,0,0-5-2.72H54.23a6,6,0,0,0-5,2.72A93.64,93.64,0,0,0,34,88h0a94.1,94.1,0,0,0,88,93.8V218H88a6,6,0,0,0,0,12h80a6,6,0,0,0,0-12H134V181.8A94.1,94.1,0,0,0,222,88ZM57.56,46H198.44a81.62,81.62,0,0,1,11.34,36H46.22A81.62,81.62,0,0,1,57.56,46ZM128,170A82.09,82.09,0,0,1,46.24,94H209.76A82.09,82.09,0,0,1,128,170Z"/>`],
    [IconWeight.REGULAR, svg`<path d="M224,88h0a95.63,95.63,0,0,0-15.53-52.37,8,8,0,0,0-6.7-3.63H54.23a8,8,0,0,0-6.7,3.63A95.63,95.63,0,0,0,32,88h0a96.12,96.12,0,0,0,88,95.66V216H88a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16H136V183.66A96.12,96.12,0,0,0,224,88ZM58.7,48H197.3a79.52,79.52,0,0,1,10.3,32H48.4A79.52,79.52,0,0,1,58.7,48ZM128,168A80.11,80.11,0,0,1,48.4,96H207.6A80.11,80.11,0,0,1,128,168Z"/>`],
    [IconWeight.BOLD, svg`<path d="M228,88h0a99.63,99.63,0,0,0-16.18-54.55,12,12,0,0,0-10-5.45H54.23a12,12,0,0,0-10,5.45A99.63,99.63,0,0,0,28,88h0a100.15,100.15,0,0,0,88,99.28V212H88a12,12,0,0,0,0,24h80a12,12,0,0,0,0-24H140V187.28A100.15,100.15,0,0,0,228,88ZM61.05,52H195a75.43,75.43,0,0,1,8.1,24H53A75.43,75.43,0,0,1,61.05,52Zm67,112a76.12,76.12,0,0,1-75-64H203A76.12,76.12,0,0,1,128,164Z"/>`],
    [IconWeight.FILL, svg`<path d="M224,88h0a95.63,95.63,0,0,0-15.53-52.37,8,8,0,0,0-6.7-3.63H54.23a8,8,0,0,0-6.7,3.63A95.63,95.63,0,0,0,32,88h0a96.12,96.12,0,0,0,88,95.66V216H88a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16H136V183.66A96.12,96.12,0,0,0,224,88ZM58.7,48H197.3a79.52,79.52,0,0,1,10.3,32H48.4A79.52,79.52,0,0,1,58.7,48Z"/>`],
    [IconWeight.DUOTONE, svg`<path d="M216,88A88,88,0,0,1,40,88Z" opacity="0.2"/><path d="M224,88h0a95.63,95.63,0,0,0-15.53-52.37,8,8,0,0,0-6.7-3.63H54.23a8,8,0,0,0-6.7,3.63A95.63,95.63,0,0,0,32,88h0a96.12,96.12,0,0,0,88,95.66V216H88a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16H136V183.66A96.12,96.12,0,0,0,224,88ZM58.7,48H197.3a79.52,79.52,0,0,1,10.3,32H48.4A79.52,79.52,0,0,1,58.7,48ZM128,168A80.11,80.11,0,0,1,48.4,96H207.6A80.11,80.11,0,0,1,128,168Z"/>`],
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
        ${ArcIconBrandy.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "arc-icon-brandy": ArcIconBrandy;
  }
}
