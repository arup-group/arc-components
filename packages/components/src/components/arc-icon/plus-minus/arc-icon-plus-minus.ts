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
import styles from './arc-icon-plus-minus.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-plus-minus')
export default class ArcIconPlusMinus extends LitElement {
  /** @internal */
  static tag = 'arc-icon-plus-minus';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [IconWeight.THIN, svg`<path d="M202.83,58.83l-144,144a4,4,0,0,1-5.66-5.66l144-144a4,4,0,1,1,5.66,5.66ZM68,112a4,4,0,0,0,8,0V76h36a4,4,0,0,0,0-8H76V32a4,4,0,0,0-8,0V68H32a4,4,0,0,0,0,8H68Zm156,68H144a4,4,0,0,0,0,8h80a4,4,0,0,0,0-8Z"/>`],
    [IconWeight.LIGHT, svg`<path d="M204.24,60.24l-144,144a6,6,0,0,1-8.48-8.48l144-144a6,6,0,0,1,8.48,8.48ZM66,112a6,6,0,0,0,12,0V78h34a6,6,0,0,0,0-12H78V32a6,6,0,0,0-12,0V66H32a6,6,0,0,0,0,12H66Zm158,66H144a6,6,0,0,0,0,12h80a6,6,0,0,0,0-12Z"/>`],
    [IconWeight.REGULAR, svg`<path d="M205.66,61.66l-144,144a8,8,0,0,1-11.32-11.32l144-144a8,8,0,0,1,11.32,11.32ZM64,112a8,8,0,0,0,16,0V80h32a8,8,0,0,0,0-16H80V32a8,8,0,0,0-16,0V64H32a8,8,0,0,0,0,16H64Zm160,64H144a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16Z"/>`],
    [IconWeight.BOLD, svg`<path d="M208.49,64.49l-144,144a12,12,0,0,1-17-17l144-144a12,12,0,0,1,17,17ZM60,112a12,12,0,0,0,24,0V84h28a12,12,0,0,0,0-24H84V32a12,12,0,0,0-24,0V60H32a12,12,0,0,0,0,24H60Zm164,60H144a12,12,0,0,0,0,24h80a12,12,0,0,0,0-24Z"/>`],
    [IconWeight.FILL, svg`<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM56,96a8,8,0,0,1,8-8H80V72a8,8,0,0,1,16,0V88h16a8,8,0,0,1,0,16H96v16a8,8,0,0,1-16,0V104H64A8,8,0,0,1,56,96Zm24,96a8,8,0,0,1-5.66-13.66l96-96a8,8,0,0,1,11.32,11.32l-96,96A8,8,0,0,1,80,192Zm112-8H144a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Z"/>`],
    [IconWeight.DUOTONE, svg`<path d="M216,48V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z" opacity="0.2"/><path d="M205.66,61.66l-144,144a8,8,0,0,1-11.32-11.32l144-144a8,8,0,0,1,11.32,11.32ZM64,112a8,8,0,0,0,16,0V80h32a8,8,0,0,0,0-16H80V32a8,8,0,0,0-16,0V64H32a8,8,0,0,0,0,16H64Zm160,64H144a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16Z"/>`],
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
        ${ArcIconPlusMinus.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "arc-icon-plus-minus": ArcIconPlusMinus;
  }
}
