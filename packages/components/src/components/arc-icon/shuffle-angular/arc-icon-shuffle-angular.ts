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
import styles from './arc-icon-shuffle-angular.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-shuffle-angular')
export default class ArcIconShuffleAngular extends LitElement {
  /** @internal */
  static tag = 'arc-icon-shuffle-angular';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      IconWeight.THIN,
      svg`<path d="M234.83,181.17a4,4,0,0,1,0,5.66l-24,24a4,4,0,0,1-5.66-5.66L222.34,188H172.12a12,12,0,0,1-9.77-5L87.14,77.67A4,4,0,0,0,83.88,76H32a4,4,0,0,1,0-8H83.88a12,12,0,0,1,9.77,5l75.21,105.31a4,4,0,0,0,3.26,1.67h50.22l-17.17-17.17a4,4,0,0,1,5.66-5.66Zm-89.49-77.44a4,4,0,0,0,5.58-.93l17.94-25.13A4,4,0,0,1,172.12,76h50.22L205.17,93.17a4,4,0,0,0,5.66,5.66l24-24a4,4,0,0,0,0-5.66l-24-24a4,4,0,0,0-5.66,5.66L222.34,68H172.12a12,12,0,0,0-9.77,5L144.41,98.15A4,4,0,0,0,145.34,103.73Zm-34.68,48.54a4,4,0,0,0-5.58.93L87.14,178.33A4,4,0,0,1,83.88,180H32a4,4,0,0,0,0,8H83.88a12,12,0,0,0,9.77-5l17.94-25.13A4,4,0,0,0,110.66,152.27Z"/>`,
    ],
    [
      IconWeight.LIGHT,
      svg`<path d="M236.24,179.76a6,6,0,0,1,0,8.48l-24,24a6,6,0,0,1-8.48-8.48L217.52,190h-45.4a14.05,14.05,0,0,1-11.4-5.86L85.51,78.84A2,2,0,0,0,83.88,78H32a6,6,0,0,1,0-12H83.88a14.05,14.05,0,0,1,11.4,5.86l75.21,105.3a2,2,0,0,0,1.63.84h45.4l-13.76-13.76a6,6,0,0,1,8.48-8.48Zm-92.07-74.4a6,6,0,0,0,8.37-1.4l18-25.12a2,2,0,0,1,1.63-.84h45.4L203.76,91.76a6,6,0,1,0,8.48,8.48l24-24a6,6,0,0,0,0-8.48l-24-24a6,6,0,0,0-8.48,8.48L217.52,66h-45.4a14.05,14.05,0,0,0-11.4,5.86L142.78,97A6,6,0,0,0,144.17,105.36Zm-32.34,45.28a6,6,0,0,0-8.37,1.4L85.51,177.16a2,2,0,0,1-1.63.84H32a6,6,0,0,0,0,12H83.88a14.05,14.05,0,0,0,11.4-5.86L113.22,159A6,6,0,0,0,111.83,150.64Z"/>`,
    ],
    [
      IconWeight.REGULAR,
      svg`<path d="M237.66,178.34a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L212.69,192H172.12a16,16,0,0,1-13-6.7L83.88,80H32a8,8,0,0,1,0-16H83.88a16,16,0,0,1,13,6.7L172.12,176h40.57l-10.35-10.34a8,8,0,0,1,11.32-11.32ZM143,107a8,8,0,0,0,11.16-1.86l18-25.12h40.57L202.34,90.34a8,8,0,0,0,11.32,11.32l24-24a8,8,0,0,0,0-11.32l-24-24a8,8,0,0,0-11.32,11.32L212.69,64H172.12a16,16,0,0,0-13,6.7L141.15,95.82A8,8,0,0,0,143,107Zm-30,42a8,8,0,0,0-11.16,1.86L83.88,176H32a8,8,0,0,0,0,16H83.88a16,16,0,0,0,13-6.7l17.95-25.12A8,8,0,0,0,113,149Z"/>`,
    ],
    [
      IconWeight.BOLD,
      svg`<path d="M240.49,175.51a12,12,0,0,1,0,17l-24,24a12,12,0,0,1-17-17L203,196H172.12a20,20,0,0,1-16.28-8.38L81.82,84H32a12,12,0,0,1,0-24H83.88a20.05,20.05,0,0,1,16.28,8.37l74,103.63H203l-3.52-3.51a12,12,0,0,1,17-17ZM110.4,152.64a12,12,0,0,0-16.74,2.79L81.82,172H32a12,12,0,0,0,0,24H83.88a20,20,0,0,0,16.28-8.38l13-18.24A12,12,0,0,0,110.4,152.64Zm35.2-49.28a12,12,0,0,0,16.74-2.79L174.18,84H203l-3.52,3.51a12,12,0,0,0,17,17l24-24a12,12,0,0,0,0-17l-24-24a12,12,0,0,0-17,17L203,60H172.12a20.05,20.05,0,0,0-16.28,8.37l-13,18.25A12,12,0,0,0,145.6,103.36Z"/>`,
    ],
    [
      IconWeight.FILL,
      svg`<path d="M237.66,178.34a8,8,0,0,1,0,11.32l-24,24A8,8,0,0,1,200,208V192H172.12a16,16,0,0,1-13-6.7L83.88,80H32a8,8,0,0,1,0-16H83.88a16,16,0,0,1,13,6.7L172.12,176H200V160a8,8,0,0,1,13.66-5.66ZM143,107a8,8,0,0,0,11.16-1.86l18-25.12H200V96a8,8,0,0,0,13.66,5.66l24-24a8,8,0,0,0,0-11.32l-24-24A8,8,0,0,0,200,48V64H172.12a16,16,0,0,0-13,6.7L141.15,95.82A8,8,0,0,0,143,107Zm-30,42a8,8,0,0,0-11.16,1.86L83.88,176H32a8,8,0,0,0,0,16H83.88a16,16,0,0,0,13-6.7l17.95-25.12A8,8,0,0,0,113,149Z"/>`,
    ],
    [
      IconWeight.DUOTONE,
      svg`<path d="M90.39,75.35,128,128,90.39,180.65A8,8,0,0,1,83.88,184H32V72H83.88A8,8,0,0,1,90.39,75.35ZM172.12,72a8,8,0,0,0-6.51,3.35L128,128l37.61,52.65a8,8,0,0,0,6.51,3.35H232V72Z" opacity="0.2"/><path d="M237.66,178.34a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L212.69,192H172.12a16,16,0,0,1-13-6.7L83.88,80H32a8,8,0,0,1,0-16H83.88a16,16,0,0,1,13,6.7L172.12,176h40.57l-10.35-10.34a8,8,0,0,1,11.32-11.32ZM143,107a8,8,0,0,0,11.16-1.86l18-25.12h40.57L202.34,90.34a8,8,0,0,0,11.32,11.32l24-24a8,8,0,0,0,0-11.32l-24-24a8,8,0,0,0-11.32,11.32L212.69,64H172.12a16,16,0,0,0-13,6.7L141.15,95.82A8,8,0,0,0,143,107Zm-30,42a8,8,0,0,0-11.16,1.86L83.88,176H32a8,8,0,0,0,0,16H83.88a16,16,0,0,0,13-6.7l17.95-25.12A8,8,0,0,0,113,149Z"/>`,
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
        ${ArcIconShuffleAngular.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-icon-shuffle-angular': ArcIconShuffleAngular;
  }
}
