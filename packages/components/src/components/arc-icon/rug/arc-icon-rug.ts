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
import styles from './arc-icon-rug.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-rug')
export default class ArcIconRug extends LitElement {
  /** @internal */
  static tag = 'arc-icon-rug';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [IconWeight.THIN, svg`<path d="M200,20a4,4,0,0,0-4,4V44H156V24a4,4,0,0,0-8,0V44H108V24a4,4,0,0,0-8,0V44H60V24a4,4,0,0,0-8,0V232a4,4,0,0,0,8,0V212h40v20a4,4,0,0,0,8,0V212h40v20a4,4,0,0,0,8,0V212h40v20a4,4,0,0,0,8,0V24A4,4,0,0,0,200,20ZM60,52H196V204H60Zm68,120a4,4,0,0,0,3.43-1.94l24-40a4,4,0,0,0,0-4.12l-24-40a4,4,0,0,0-6.86,0l-24,40a4,4,0,0,0,0,4.12l24,40A4,4,0,0,0,128,172Zm0-76.23L147.33,128,128,160.23,108.67,128Z"/>`],
    [IconWeight.LIGHT, svg`<path d="M200,18a6,6,0,0,0-6,6V42H158V24a6,6,0,0,0-12,0V42H110V24a6,6,0,0,0-12,0V42H62V24a6,6,0,0,0-12,0V232a6,6,0,0,0,12,0V214H98v18a6,6,0,0,0,12,0V214h36v18a6,6,0,0,0,12,0V214h36v18a6,6,0,0,0,12,0V24A6,6,0,0,0,200,18ZM62,54H194V202H62Zm66,120a6,6,0,0,0,5.14-2.91l24-40a6,6,0,0,0,0-6.18l-24-40a6,6,0,0,0-10.28,0l-24,40a6,6,0,0,0,0,6.18l24,40A6,6,0,0,0,128,174Zm0-74.34L145,128l-17,28.34L111,128Z"/>`],
    [IconWeight.REGULAR, svg`<path d="M200,16a8,8,0,0,0-8,8V40H160V24a8,8,0,0,0-16,0V40H112V24a8,8,0,0,0-16,0V40H64V24a8,8,0,0,0-16,0V232a8,8,0,0,0,16,0V216H96v16a8,8,0,0,0,16,0V216h32v16a8,8,0,0,0,16,0V216h32v16a8,8,0,0,0,16,0V24A8,8,0,0,0,200,16ZM64,56H192V200H64Zm64,120a8,8,0,0,0,6.86-3.88l24-40a8,8,0,0,0,0-8.24l-24-40a8,8,0,0,0-13.72,0l-24,40a8,8,0,0,0,0,8.24l24,40A8,8,0,0,0,128,176Zm0-72.45L142.67,128,128,152.45,113.33,128Z"/>`],
    [IconWeight.BOLD, svg`<path d="M200,12a12,12,0,0,0-12,12V36H164V24a12,12,0,0,0-24,0V36H116V24a12,12,0,0,0-24,0V36H68V24a12,12,0,0,0-24,0V232a12,12,0,0,0,24,0V220H92v12a12,12,0,0,0,24,0V220h24v12a12,12,0,0,0,24,0V220h24v12a12,12,0,0,0,24,0V24A12,12,0,0,0,200,12ZM68,60H188V196H68Zm60,120a12,12,0,0,0,10.29-5.83l24-40a12,12,0,0,0,0-12.34l-24-40a12,12,0,0,0-20.58,0l-24,40a12,12,0,0,0,0,12.34l24,40A12,12,0,0,0,128,180Zm0-68.68L138,128l-10,16.68L118,128Z"/>`],
    [IconWeight.FILL, svg`<path d="M200,16a8,8,0,0,0-8,8V40H160V24a8,8,0,0,0-16,0V40H112V24a8,8,0,0,0-16,0V40H64V24a8,8,0,0,0-16,0V232a8,8,0,0,0,16,0V216H96v16a8,8,0,0,0,16,0V216h32v16a8,8,0,0,0,16,0V216h32v16a8,8,0,0,0,16,0V24A8,8,0,0,0,200,16ZM64,56H192V200H64Zm57.14,116.12-24-40a8,8,0,0,1,0-8.24l24-40a8,8,0,0,1,13.72,0l24,40a8,8,0,0,1,0,8.24l-24,40a8,8,0,0,1-13.72,0Z"/>`],
    [IconWeight.DUOTONE, svg`<path d="M56,48V208H200V48Zm72,120-24-40,24-40,24,40Z" opacity="0.2"/><path d="M200,16a8,8,0,0,0-8,8V40H160V24a8,8,0,0,0-16,0V40H112V24a8,8,0,0,0-16,0V40H64V24a8,8,0,0,0-16,0V232a8,8,0,0,0,16,0V216H96v16a8,8,0,0,0,16,0V216h32v16a8,8,0,0,0,16,0V216h32v16a8,8,0,0,0,16,0V24A8,8,0,0,0,200,16Zm-8,184H64V56H192Zm-70.86-27.88a8,8,0,0,0,13.72,0l24-40a8,8,0,0,0,0-8.24l-24-40a8,8,0,0,0-13.72,0l-24,40a8,8,0,0,0,0,8.24ZM128,103.55,142.67,128,128,152.45,113.33,128Z"/>`],
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
        ${ArcIconRug.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "arc-icon-rug": ArcIconRug;
  }
}
