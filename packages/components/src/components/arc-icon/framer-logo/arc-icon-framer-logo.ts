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
import styles from './arc-icon-framer-logo.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-framer-logo')
export default class ArcIconFramerLogo extends LitElement {
  /** @internal */
  static tag = 'arc-icon-framer-logo';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [IconWeight.THIN, svg`<path d="M204,96V32a4,4,0,0,0-4-4H56a4,4,0,0,0-2.66,7l64.14,57H56a4,4,0,0,0-4,4v64a4,4,0,0,0,1.17,2.83l72,72A4,4,0,0,0,132,232V164h68a4,4,0,0,0,2.66-7l-64.14-57H200A4,4,0,0,0,204,96Zm-14.52,60H128a4,4,0,0,0-4,4v62.34l-64-64V100h66.48ZM196,92H129.52l-63-56H196Z"/>`],
    [IconWeight.LIGHT, svg`<path d="M206,96V32a6,6,0,0,0-6-6H56a6,6,0,0,0-4,10.48L112.22,90H56a6,6,0,0,0-6,6v64a6,6,0,0,0,1.76,4.24l72,72A6,6,0,0,0,134,232V166h66a6,6,0,0,0,4-10.48L143.78,102H200A6,6,0,0,0,206,96Zm-21.78,58H128a6,6,0,0,0-6,6v57.51l-60-60V102h63.72ZM194,90H130.28L71.78,38H194Z"/>`],
    [IconWeight.REGULAR, svg`<path d="M208,96V32a8,8,0,0,0-8-8H56a8,8,0,0,0-5.31,14L107,88H56a8,8,0,0,0-8,8v64a8,8,0,0,0,2.34,5.66l72,72A8,8,0,0,0,136,232V168h64a8,8,0,0,0,5.31-14L149,104h51A8,8,0,0,0,208,96Zm-29,56H128a8,8,0,0,0-8,8v52.69l-56-56V104h61Zm13-64H131L77,40H192Z"/>`],
    [IconWeight.BOLD, svg`<path d="M212,96V32a12,12,0,0,0-12-12H56a12,12,0,0,0-8,21L96.44,84H56A12,12,0,0,0,44,96v64a12,12,0,0,0,3.52,8.49l72,72A12,12,0,0,0,140,232V172h60a12,12,0,0,0,8-21l-48.41-43H200A12,12,0,0,0,212,96Zm-43.56,52H128a12,12,0,0,0-12,12v43L68,155V108h55.44ZM188,84H132.56l-45-40H188Z"/>`],
    [IconWeight.FILL, svg`<path d="M200,104H149l56.27,50A8,8,0,0,1,200,168H136v64a8,8,0,0,1-13.66,5.66l-72-72A8,8,0,0,1,48,160V96a8,8,0,0,1,8-8h51L50.69,38A8,8,0,0,1,56,24H200a8,8,0,0,1,8,8V96A8,8,0,0,1,200,104Z"/>`],
    [IconWeight.DUOTONE, svg`<path d="M200,96H128L56,32H200ZM56,160l72,72V160h72L128,96H56Z" opacity="0.2"/><path d="M208,96V32a8,8,0,0,0-8-8H56a8,8,0,0,0-5.31,14L107,88H56a8,8,0,0,0-8,8v64a8,8,0,0,0,2.34,5.66l72,72A8,8,0,0,0,136,232V168h64a8,8,0,0,0,5.31-14L149,104h51A8,8,0,0,0,208,96Zm-29,56H128a8,8,0,0,0-8,8v52.69l-56-56V104h61Zm13-64H131L77,40H192Z"/>`],
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
        ${ArcIconFramerLogo.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "arc-icon-framer-logo": ArcIconFramerLogo;
  }
}
