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
import styles from './arc-icon-arrows-in-simple.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-arrows-in-simple')
export default class ArcIconArrowsInSimple extends LitElement {
  /** @internal */
  static tag = 'arc-icon-arrows-in-simple';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      IconWeight.THIN,
      svg`<path d="M210.83,50.83,153.66,108H192a4,4,0,0,1,0,8H144a4,4,0,0,1-4-4V64a4,4,0,0,1,8,0v38.34l57.17-57.17a4,4,0,1,1,5.66,5.66ZM112,140H64a4,4,0,0,0,0,8h38.34L45.17,205.17a4,4,0,0,0,5.66,5.66L108,153.66V192a4,4,0,0,0,8,0V144A4,4,0,0,0,112,140Z"/>`,
    ],
    [
      IconWeight.LIGHT,
      svg`<path d="M212.24,52.24,158.48,106H192a6,6,0,0,1,0,12H144a6,6,0,0,1-6-6V64a6,6,0,0,1,12,0V97.52l53.76-53.76a6,6,0,0,1,8.48,8.48ZM112,138H64a6,6,0,0,0,0,12H97.52L43.76,203.76a6,6,0,1,0,8.48,8.48L106,158.48V192a6,6,0,0,0,12,0V144A6,6,0,0,0,112,138Z"/>`,
    ],
    [
      IconWeight.REGULAR,
      svg`<path d="M213.66,53.66,163.31,104H192a8,8,0,0,1,0,16H144a8,8,0,0,1-8-8V64a8,8,0,0,1,16,0V92.69l50.34-50.35a8,8,0,0,1,11.32,11.32ZM112,136H64a8,8,0,0,0,0,16H92.69L42.34,202.34a8,8,0,0,0,11.32,11.32L104,163.31V192a8,8,0,0,0,16,0V144A8,8,0,0,0,112,136Z"/>`,
    ],
    [
      IconWeight.BOLD,
      svg`<path d="M216.49,56.48,177,96h19a12,12,0,0,1,0,24H148a12,12,0,0,1-12-12V60a12,12,0,0,1,24,0V79l39.51-39.52a12,12,0,0,1,17,17ZM108,136H60a12,12,0,0,0,0,24H79L39.51,199.51a12,12,0,0,0,17,17L96,177v19a12,12,0,0,0,24,0V148A12,12,0,0,0,108,136Z"/>`,
    ],
    [
      IconWeight.FILL,
      svg`<path d="M120,144v48a8,8,0,0,1-13.66,5.66L88,179.31,53.66,213.66a8,8,0,0,1-11.32-11.32L76.69,168,58.34,149.66A8,8,0,0,1,64,136h48A8,8,0,0,1,120,144ZM213.66,42.34a8,8,0,0,0-11.32,0L168,76.69,149.66,58.34A8,8,0,0,0,136,64v48a8,8,0,0,0,8,8h48a8,8,0,0,0,5.66-13.66L179.31,88l34.35-34.34A8,8,0,0,0,213.66,42.34Z"/>`,
    ],
    [
      IconWeight.DUOTONE,
      svg`<path d="M192,112H144V64Zm-80,80V144H64Z" opacity="0.2"/><path d="M213.66,42.34a8,8,0,0,0-11.32,0L168,76.69,149.66,58.34A8,8,0,0,0,136,64v48a8,8,0,0,0,8,8h48a8,8,0,0,0,5.66-13.66L179.31,88l34.35-34.34A8,8,0,0,0,213.66,42.34ZM152,104V83.31L172.69,104Zm-40,32H64a8,8,0,0,0-5.66,13.66L76.69,168,42.34,202.34a8,8,0,0,0,11.32,11.32L88,179.31l18.34,18.35A8,8,0,0,0,120,192V144A8,8,0,0,0,112,136Zm-8,36.69L83.31,152H104Z"/>`,
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
        ${ArcIconArrowsInSimple.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-icon-arrows-in-simple': ArcIconArrowsInSimple;
  }
}
