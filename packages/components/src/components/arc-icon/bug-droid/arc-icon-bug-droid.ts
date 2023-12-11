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
import styles from './arc-icon-bug-droid.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-bug-droid')
export default class ArcIconBugDroid extends LitElement {
  /** @internal */
  static tag = 'arc-icon-bug-droid';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      IconWeight.THIN,
      svg`<path d="M186.17,43.49l16.66-16.66a4,4,0,1,0-5.66-5.66l-17,17a83.72,83.72,0,0,0-104.26,0l-17-17a4,4,0,0,0-5.66,5.66L69.83,43.49A83.75,83.75,0,0,0,44,104v40a84,84,0,0,0,168,0V104A83.75,83.75,0,0,0,186.17,43.49ZM128,28a76.08,76.08,0,0,1,76,76v12H52V104A76.08,76.08,0,0,1,128,28Zm0,192a76.08,76.08,0,0,1-76-76V124H204v20A76.08,76.08,0,0,1,128,220ZM148,84a8,8,0,1,1,8,8A8,8,0,0,1,148,84ZM92,84a8,8,0,1,1,8,8A8,8,0,0,1,92,84Z"/>`,
    ],
    [
      IconWeight.LIGHT,
      svg`<path d="M189,43.47l15.22-15.23a6,6,0,0,0-8.48-8.48L180,35.54A85.76,85.76,0,0,0,76,35.54L60.24,19.76a6,6,0,0,0-8.48,8.48L67,43.47A85.7,85.7,0,0,0,42,104v40a86,86,0,0,0,172,0V104A85.7,85.7,0,0,0,189,43.47ZM128,30a74.09,74.09,0,0,1,74,74v10H54V104A74.09,74.09,0,0,1,128,30Zm0,188a74.09,74.09,0,0,1-74-74V126H202v18A74.09,74.09,0,0,1,128,218ZM146,84a10,10,0,1,1,10,10A10,10,0,0,1,146,84ZM90,84a10,10,0,1,1,10,10A10,10,0,0,1,90,84Z"/>`,
    ],
    [
      IconWeight.REGULAR,
      svg`<path d="M191.83,43.48l13.83-13.82a8,8,0,1,0-11.32-11.32L179.79,32.9a87.81,87.81,0,0,0-103.58,0L61.66,18.34A8,8,0,0,0,50.34,29.66L64.17,43.48A87.72,87.72,0,0,0,40,104v40a88,88,0,0,0,176,0V104A87.72,87.72,0,0,0,191.83,43.48ZM128,32a72.08,72.08,0,0,1,72,72v8H56v-8A72.08,72.08,0,0,1,128,32Zm0,184a72.08,72.08,0,0,1-72-72V128H200v16A72.08,72.08,0,0,1,128,216ZM144,84a12,12,0,1,1,12,12A12,12,0,0,1,144,84ZM88,84a12,12,0,1,1,12,12A12,12,0,0,1,88,84Z"/>`,
    ],
    [
      IconWeight.BOLD,
      svg`<path d="M197.35,43.62l11.14-11.13a12,12,0,0,0-17-17L179.34,27.69a91.84,91.84,0,0,0-102.68,0L64.49,15.51a12,12,0,0,0-17,17L58.65,43.62A91.58,91.58,0,0,0,36,104v40a92,92,0,0,0,184,0V104A91.58,91.58,0,0,0,197.35,43.62ZM196,104v4H60v-4a68,68,0,0,1,136,0ZM128,212a68.07,68.07,0,0,1-68-68V132H196v12A68.07,68.07,0,0,1,128,212ZM140,80a16,16,0,1,1,16,16A16,16,0,0,1,140,80ZM84,80a16,16,0,1,1,16,16A16,16,0,0,1,84,80Z"/>`,
    ],
    [
      IconWeight.FILL,
      svg`<path d="M191.83,43.48l13.83-13.82a8,8,0,1,0-11.32-11.32L179.79,32.9a87.81,87.81,0,0,0-103.58,0L61.66,18.34A8,8,0,0,0,50.34,29.66L64.17,43.48A87.72,87.72,0,0,0,40,104v40a88,88,0,0,0,176,0V104A87.72,87.72,0,0,0,191.83,43.48ZM128,32a72.08,72.08,0,0,1,72,72v8H56v-8A72.08,72.08,0,0,1,128,32Zm16,52a12,12,0,1,1,12,12A12,12,0,0,1,144,84ZM88,84a12,12,0,1,1,12,12A12,12,0,0,1,88,84Z"/>`,
    ],
    [
      IconWeight.DUOTONE,
      svg`<path d="M208,120v24a80,80,0,0,1-160,0V120Z" opacity="0.2"/><path d="M191.83,43.48l13.83-13.82a8,8,0,1,0-11.32-11.32L179.79,32.9a87.81,87.81,0,0,0-103.58,0L61.66,18.34A8,8,0,0,0,50.34,29.66L64.17,43.48A87.72,87.72,0,0,0,40,104v40a88,88,0,0,0,176,0V104A87.72,87.72,0,0,0,191.83,43.48ZM128,32a72.08,72.08,0,0,1,72,72v8H56v-8A72.08,72.08,0,0,1,128,32Zm0,184a72.08,72.08,0,0,1-72-72V128H200v16A72.08,72.08,0,0,1,128,216ZM144,84a12,12,0,1,1,12,12A12,12,0,0,1,144,84ZM88,84a12,12,0,1,1,12,12A12,12,0,0,1,88,84Z"/>`,
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
        ${ArcIconBugDroid.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-icon-bug-droid': ArcIconBugDroid;
  }
}
