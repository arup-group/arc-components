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
import styles from './arc-icon-phosphor-logo.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-phosphor-logo')
export default class ArcIconPhosphorLogo extends LitElement {
  /** @internal */
  static tag = 'arc-icon-phosphor-logo';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [IconWeight.THIN, svg`<path d="M144,28H64a4,4,0,0,0-4,4V160a76.08,76.08,0,0,0,76,76,4,4,0,0,0,4-4V164h4a68,68,0,0,0,0-136ZM68,47.27,129.16,156H68Zm64,97.46L70.84,36H132ZM68.13,164H132v63.88A68.1,68.1,0,0,1,68.13,164ZM144,156h-4V36h4a60,60,0,0,1,0,120Z"/>`],
    [IconWeight.LIGHT, svg`<path d="M144,26H64a6,6,0,0,0-6,6V160a78.09,78.09,0,0,0,78,78,6,6,0,0,0,6-6V166h2a70,70,0,0,0,0-140ZM70,54.91,125.74,154H70Zm60,82.19L74.26,38H130ZM70.28,166H130v59.73A66.1,66.1,0,0,1,70.28,166ZM144,154h-2V38h2a58,58,0,0,1,0,116Z"/>`],
    [IconWeight.REGULAR, svg`<path d="M144,24H64a8,8,0,0,0-8,8V160a80.09,80.09,0,0,0,80,80,8,8,0,0,0,8-8V168a72,72,0,0,0,0-144ZM72,62.54,122.32,152H72Zm56,66.92L77.68,40H128ZM72.51,168H128v55.5A64.14,64.14,0,0,1,72.51,168ZM144,152V40a56,56,0,0,1,0,112Z"/>`],
    [IconWeight.BOLD, svg`<path d="M220,96a76.08,76.08,0,0,0-76-76H64A12,12,0,0,0,52,32V160a84.09,84.09,0,0,0,84,84,12,12,0,0,0,12-12V171.89A76.09,76.09,0,0,0,220,96ZM76,77.81,115.48,148H76Zm48,36.38L84.52,44H124ZM77.22,172H124v46.79A60.18,60.18,0,0,1,77.22,172ZM148,147.83V44.17a52,52,0,0,1,0,103.66Z"/>`],
    [IconWeight.FILL, svg`<path d="M144,24H64a8,8,0,0,0-8,8V160a80.09,80.09,0,0,0,80,80,8,8,0,0,0,8-8V168a72,72,0,0,0,0-144ZM128,223.5A64.14,64.14,0,0,1,72.51,168H128Zm0-94L77.68,40H128ZM144,152V40a56,56,0,0,1,0,112Z"/>`],
    [IconWeight.DUOTONE, svg`<path d="M208,96a64,64,0,0,1-64,64h-8V32h8A64,64,0,0,1,208,96ZM64,160h72L64,32Z" opacity="0.2"/><path d="M144,24H64a8,8,0,0,0-8,8V160a80.09,80.09,0,0,0,80,80,8,8,0,0,0,8-8V168a72,72,0,0,0,0-144ZM72,62.54,122.32,152H72Zm56,161A64.14,64.14,0,0,1,72.51,168H128Zm0-94L77.68,40H128ZM144,152V40a56,56,0,0,1,0,112Z"/>`],
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
        ${ArcIconPhosphorLogo.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "arc-icon-phosphor-logo": ArcIconPhosphorLogo;
  }
}
