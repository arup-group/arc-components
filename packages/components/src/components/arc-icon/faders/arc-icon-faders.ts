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
import styles from './arc-icon-faders.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-faders')
export default class ArcIconFaders extends LitElement {
  /** @internal */
  static tag = 'arc-icon-faders';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [IconWeight.THIN, svg`<path d="M132,120v96a4,4,0,0,1-8,0V120a4,4,0,0,1,8,0Zm68,76a4,4,0,0,0-4,4v16a4,4,0,0,0,8,0V200A4,4,0,0,0,200,196Zm24-32H204V40a4,4,0,0,0-8,0V164H176a4,4,0,0,0,0,8h48a4,4,0,0,0,0-8ZM56,164a4,4,0,0,0-4,4v48a4,4,0,0,0,8,0V168A4,4,0,0,0,56,164Zm24-32H60V40a4,4,0,0,0-8,0v92H32a4,4,0,0,0,0,8H80a4,4,0,0,0,0-8Zm72-48H132V40a4,4,0,0,0-8,0V84H104a4,4,0,0,0,0,8h48a4,4,0,0,0,0-8Z"/>`],
    [IconWeight.LIGHT, svg`<path d="M134,120v96a6,6,0,0,1-12,0V120a6,6,0,0,1,12,0Zm66,74a6,6,0,0,0-6,6v16a6,6,0,0,0,12,0V200A6,6,0,0,0,200,194Zm24-32H206V40a6,6,0,0,0-12,0V162H176a6,6,0,0,0,0,12h48a6,6,0,0,0,0-12ZM56,162a6,6,0,0,0-6,6v48a6,6,0,0,0,12,0V168A6,6,0,0,0,56,162Zm24-32H62V40a6,6,0,0,0-12,0v90H32a6,6,0,0,0,0,12H80a6,6,0,0,0,0-12Zm72-48H134V40a6,6,0,0,0-12,0V82H104a6,6,0,0,0,0,12h48a6,6,0,0,0,0-12Z"/>`],
    [IconWeight.REGULAR, svg`<path d="M136,120v96a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm64,72a8,8,0,0,0-8,8v16a8,8,0,0,0,16,0V200A8,8,0,0,0,200,192Zm24-32H208V40a8,8,0,0,0-16,0V160H176a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16ZM56,160a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V168A8,8,0,0,0,56,160Zm24-32H64V40a8,8,0,0,0-16,0v88H32a8,8,0,0,0,0,16H80a8,8,0,0,0,0-16Zm72-48H136V40a8,8,0,0,0-16,0V80H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Z"/>`],
    [IconWeight.BOLD, svg`<path d="M140,124v92a12,12,0,0,1-24,0V124a12,12,0,0,1,24,0Zm60,68a12,12,0,0,0-12,12v12a12,12,0,0,0,24,0V204A12,12,0,0,0,200,192Zm24-40H212V40a12,12,0,0,0-24,0V152H176a12,12,0,0,0,0,24h48a12,12,0,0,0,0-24ZM56,160a12,12,0,0,0-12,12v44a12,12,0,0,0,24,0V172A12,12,0,0,0,56,160Zm24-40H68V40a12,12,0,0,0-24,0v80H32a12,12,0,0,0,0,24H80a12,12,0,0,0,0-24Zm72-48H140V40a12,12,0,0,0-24,0V72H104a12,12,0,0,0,0,24h48a12,12,0,0,0,0-24Z"/>`],
    [IconWeight.FILL, svg`<path d="M136,120v96a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm64,72a8,8,0,0,0-8,8v16a8,8,0,0,0,16,0V200A8,8,0,0,0,200,192Zm24-48H208V40a8,8,0,0,0-16,0V144H176a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,224,144ZM56,160a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V168A8,8,0,0,0,56,160Zm24-48H64V40a8,8,0,0,0-16,0v72H32a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8H80a8,8,0,0,0,8-8V120A8,8,0,0,0,80,112Zm72-48H136V40a8,8,0,0,0-16,0V64H104a8,8,0,0,0-8,8V88a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V72A8,8,0,0,0,152,64Z"/>`],
    [IconWeight.DUOTONE, svg`<path d="M200,40V216H56V40Z" opacity="0.2"/><path d="M136,120v96a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm64,72a8,8,0,0,0-8,8v16a8,8,0,0,0,16,0V200A8,8,0,0,0,200,192Zm24-32H208V40a8,8,0,0,0-16,0V160H176a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16ZM56,160a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V168A8,8,0,0,0,56,160Zm24-32H64V40a8,8,0,0,0-16,0v88H32a8,8,0,0,0,0,16H80a8,8,0,0,0,0-16Zm72-48H136V40a8,8,0,0,0-16,0V80H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Z"/>`],
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
        ${ArcIconFaders.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "arc-icon-faders": ArcIconFaders;
  }
}
