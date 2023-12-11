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
import styles from './arc-icon-dice-four.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-dice-four')
export default class ArcIconDiceFour extends LitElement {
  /** @internal */
  static tag = 'arc-icon-dice-four';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      IconWeight.THIN,
      svg`<path d="M192,36H64A28,28,0,0,0,36,64V192a28,28,0,0,0,28,28H192a28,28,0,0,0,28-28V64A28,28,0,0,0,192,36Zm20,156a20,20,0,0,1-20,20H64a20,20,0,0,1-20-20V64A20,20,0,0,1,64,44H192a20,20,0,0,1,20,20ZM108,100a8,8,0,1,1-8-8A8,8,0,0,1,108,100Zm56,0a8,8,0,1,1-8-8A8,8,0,0,1,164,100Zm-56,56a8,8,0,1,1-8-8A8,8,0,0,1,108,156Zm56,0a8,8,0,1,1-8-8A8,8,0,0,1,164,156Z"/>`,
    ],
    [
      IconWeight.LIGHT,
      svg`<path d="M192,34H64A30,30,0,0,0,34,64V192a30,30,0,0,0,30,30H192a30,30,0,0,0,30-30V64A30,30,0,0,0,192,34Zm18,158a18,18,0,0,1-18,18H64a18,18,0,0,1-18-18V64A18,18,0,0,1,64,46H192a18,18,0,0,1,18,18ZM110,100a10,10,0,1,1-10-10A10,10,0,0,1,110,100Zm56,0a10,10,0,1,1-10-10A10,10,0,0,1,166,100Zm-56,56a10,10,0,1,1-10-10A10,10,0,0,1,110,156Zm56,0a10,10,0,1,1-10-10A10,10,0,0,1,166,156Z"/>`,
    ],
    [
      IconWeight.REGULAR,
      svg`<path d="M192,32H64A32,32,0,0,0,32,64V192a32,32,0,0,0,32,32H192a32,32,0,0,0,32-32V64A32,32,0,0,0,192,32Zm16,160a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V64A16,16,0,0,1,64,48H192a16,16,0,0,1,16,16Zm-96-92a12,12,0,1,1-12-12A12,12,0,0,1,112,100Zm56,0a12,12,0,1,1-12-12A12,12,0,0,1,168,100Zm-56,56a12,12,0,1,1-12-12A12,12,0,0,1,112,156Zm56,0a12,12,0,1,1-12-12A12,12,0,0,1,168,156Z"/>`,
    ],
    [
      IconWeight.BOLD,
      svg`<path d="M192,28H64A36,36,0,0,0,28,64V192a36,36,0,0,0,36,36H192a36,36,0,0,0,36-36V64A36,36,0,0,0,192,28Zm12,164a12,12,0,0,1-12,12H64a12,12,0,0,1-12-12V64A12,12,0,0,1,64,52H192a12,12,0,0,1,12,12ZM112,96A16,16,0,1,1,96,80,16,16,0,0,1,112,96Zm64,0a16,16,0,1,1-16-16A16,16,0,0,1,176,96Zm-64,64a16,16,0,1,1-16-16A16,16,0,0,1,112,160Zm64,0a16,16,0,1,1-16-16A16,16,0,0,1,176,160Z"/>`,
    ],
    [
      IconWeight.FILL,
      svg`<path d="M192,32H64A32,32,0,0,0,32,64V192a32,32,0,0,0,32,32H192a32,32,0,0,0,32-32V64A32,32,0,0,0,192,32ZM100,168a12,12,0,1,1,12-12A12,12,0,0,1,100,168Zm0-56a12,12,0,1,1,12-12A12,12,0,0,1,100,112Zm56,56a12,12,0,1,1,12-12A12,12,0,0,1,156,168Zm0-56a12,12,0,1,1,12-12A12,12,0,0,1,156,112Z"/>`,
    ],
    [
      IconWeight.DUOTONE,
      svg`<path d="M216,64V192a24,24,0,0,1-24,24H64a24,24,0,0,1-24-24V64A24,24,0,0,1,64,40H192A24,24,0,0,1,216,64Z" opacity="0.2"/><path d="M192,32H64A32,32,0,0,0,32,64V192a32,32,0,0,0,32,32H192a32,32,0,0,0,32-32V64A32,32,0,0,0,192,32Zm16,160a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V64A16,16,0,0,1,64,48H192a16,16,0,0,1,16,16Zm-96-92a12,12,0,1,1-12-12A12,12,0,0,1,112,100Zm56,0a12,12,0,1,1-12-12A12,12,0,0,1,168,100Zm-56,56a12,12,0,1,1-12-12A12,12,0,0,1,112,156Zm56,0a12,12,0,1,1-12-12A12,12,0,0,1,168,156Z"/>`,
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
        ${ArcIconDiceFour.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-icon-dice-four': ArcIconDiceFour;
  }
}
