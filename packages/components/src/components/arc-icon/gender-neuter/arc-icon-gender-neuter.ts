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
import styles from './arc-icon-gender-neuter.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-gender-neuter')
export default class ArcIconGenderNeuter extends LitElement {
  /** @internal */
  static tag = 'arc-icon-gender-neuter';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [IconWeight.THIN, svg`<path d="M204,104a76,76,0,1,0-80,75.89V232a4,4,0,0,0,8,0V179.89A76.09,76.09,0,0,0,204,104Zm-76,68a68,68,0,1,1,68-68A68.07,68.07,0,0,1,128,172Z"/>`],
    [IconWeight.LIGHT, svg`<path d="M206,104a78,78,0,1,0-84,77.75V232a6,6,0,0,0,12,0V181.75A78.09,78.09,0,0,0,206,104Zm-78,66a66,66,0,1,1,66-66A66.08,66.08,0,0,1,128,170Z"/>`],
    [IconWeight.REGULAR, svg`<path d="M208,104a80,80,0,1,0-88,79.6V232a8,8,0,0,0,16,0V183.6A80.11,80.11,0,0,0,208,104Zm-80,64a64,64,0,1,1,64-64A64.07,64.07,0,0,1,128,168Z"/>`],
    [IconWeight.BOLD, svg`<path d="M212,104a84,84,0,1,0-96,83.13V232a12,12,0,0,0,24,0V187.13A84.12,84.12,0,0,0,212,104Zm-84,60a60,60,0,1,1,60-60A60.07,60.07,0,0,1,128,164Z"/>`],
    [IconWeight.FILL, svg`<path d="M167.84,108.35a40,40,0,1,1-36.19-36.19A40,40,0,0,1,167.84,108.35ZM216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40Zm-32,72a56,56,0,1,0-64,55.42v32.31a8.18,8.18,0,0,0,7.47,8.25,8,8,0,0,0,8.53-8V167.42A56.09,56.09,0,0,0,184,112Z"/>`],
    [IconWeight.DUOTONE, svg`<path d="M200,104a72,72,0,1,1-72-72A72,72,0,0,1,200,104Z" opacity="0.2"/><path d="M208,104a80,80,0,1,0-88,79.6V232a8,8,0,0,0,16,0V183.6A80.11,80.11,0,0,0,208,104Zm-80,64a64,64,0,1,1,64-64A64.07,64.07,0,0,1,128,168Z"/>`],
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
        ${ArcIconGenderNeuter.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "arc-icon-gender-neuter": ArcIconGenderNeuter;
  }
}
