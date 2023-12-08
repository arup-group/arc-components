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
import styles from './arc-icon-radical.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-radical')
export default class ArcIconRadical extends LitElement {
  /** @internal */
  static tag = 'arc-icon-radical';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [IconWeight.THIN, svg`<path d="M236,72V96a4,4,0,0,1-8,0V76H122.77l-47,125.4a4,4,0,0,1-7.49,0l-48-128a4,4,0,0,1,7.49-2.81L72,188.61l44.26-118A4,4,0,0,1,120,68H232A4,4,0,0,1,236,72Z"/>`],
    [IconWeight.LIGHT, svg`<path d="M238,72V96a6,6,0,0,1-12,0V78H124.16L77.62,202.11a6,6,0,0,1-11.24,0l-48-128a6,6,0,0,1,11.24-4.22L72,182.91l42.38-113A6,6,0,0,1,120,66H232A6,6,0,0,1,238,72Z"/>`],
    [IconWeight.REGULAR, svg`<path d="M240,72V96a8,8,0,0,1-16,0V80H125.55L79.49,202.81a8,8,0,0,1-15,0l-48-128a8,8,0,1,1,15-5.62L72,177.22l40.51-108A8,8,0,0,1,120,64H232A8,8,0,0,1,240,72Z"/>`],
    [IconWeight.BOLD, svg`<path d="M244,72V96a12,12,0,0,1-24,0V84H128.32L83.24,204.21a12,12,0,0,1-22.47,0l-48-128a12,12,0,1,1,22.47-8.43l36.76,98,36.77-98A12,12,0,0,1,120,60H232A12,12,0,0,1,244,72Z"/>`],
    [IconWeight.FILL, svg`<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,80a8,8,0,0,1-16,0v-8H125.42l-30,75a8,8,0,0,1-14.86,0l-32-80A8,8,0,1,1,63.43,93L88,154.46,112.57,93A8,8,0,0,1,120,88h80a8,8,0,0,1,8,8Z"/>`],
    [IconWeight.DUOTONE, svg`<path d="M232,72V192a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V72Z" opacity="0.2"/><path d="M240,72V96a8,8,0,0,1-16,0V80H125.55L79.49,202.81a8,8,0,0,1-15,0l-48-128a8,8,0,1,1,15-5.62L72,177.22l40.51-108A8,8,0,0,1,120,64H232A8,8,0,0,1,240,72Z"/>`],
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
        ${ArcIconRadical.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "arc-icon-radical": ArcIconRadical;
  }
}
