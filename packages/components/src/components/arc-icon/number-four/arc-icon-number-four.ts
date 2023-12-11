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
import styles from './arc-icon-number-four.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-number-four')
export default class ArcIconNumberFour extends LitElement {
  /** @internal */
  static tag = 'arc-icon-number-four';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      IconWeight.THIN,
      svg`<path d="M180,152a4,4,0,0,1-4,4H156v52a4,4,0,0,1-8,0V156H72a4,4,0,0,1-3.77-5.35l40-112a4,4,0,1,1,7.54,2.69L77.68,148H148V96a4,4,0,0,1,8,0v52h20A4,4,0,0,1,180,152Z"/>`,
    ],
    [
      IconWeight.LIGHT,
      svg`<path d="M182,152a6,6,0,0,1-6,6H158v50a6,6,0,0,1-12,0V158H72a6,6,0,0,1-5.65-8l40-112a6,6,0,0,1,11.3,4L80.51,146H146V96a6,6,0,0,1,12,0v50h18A6,6,0,0,1,182,152Z"/>`,
    ],
    [
      IconWeight.REGULAR,
      svg`<path d="M184,152a8,8,0,0,1-8,8H160v48a8,8,0,0,1-16,0V160H72a8,8,0,0,1-7.53-10.69l40-112a8,8,0,0,1,15.06,5.38L83.35,144H144V96a8,8,0,0,1,16,0v48h16A8,8,0,0,1,184,152Z"/>`,
    ],
    [
      IconWeight.BOLD,
      svg`<path d="M188,152a12,12,0,0,1-12,12H164v44a12,12,0,0,1-24,0V164H72a12,12,0,0,1-11.3-16l40-112A12,12,0,1,1,123.3,44L89,140h51V96a12,12,0,0,1,24,0v44h12A12,12,0,0,1,188,152Z"/>`,
    ],
    [
      IconWeight.FILL,
      svg`<path d="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM168,152h-8v32a8,8,0,0,1-16,0V152H88a8,8,0,0,1-7.43-11l32-80A8,8,0,0,1,127.43,67L99.82,136H144V104a8,8,0,0,1,16,0v32h8a8,8,0,0,1,0,16Z"/>`,
    ],
    [
      IconWeight.DUOTONE,
      svg`<path d="M216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40Z" opacity="0.2"/><path d="M184,152a8,8,0,0,1-8,8H160v48a8,8,0,0,1-16,0V160H72a8,8,0,0,1-7.53-10.69l40-112a8,8,0,0,1,15.06,5.38L83.35,144H144V96a8,8,0,0,1,16,0v48h16A8,8,0,0,1,184,152Z"/>`,
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
        ${ArcIconNumberFour.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-icon-number-four': ArcIconNumberFour;
  }
}
