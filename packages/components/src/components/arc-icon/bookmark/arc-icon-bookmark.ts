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
import styles from './arc-icon-bookmark.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-bookmark')
export default class ArcIconBookmark extends LitElement {
  /** @internal */
  static tag = 'arc-icon-bookmark';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      IconWeight.THIN,
      svg`<path d="M184,36H72A12,12,0,0,0,60,48V224a4,4,0,0,0,6.12,3.39L128,188.72l61.89,38.67A4,4,0,0,0,192,228a4.06,4.06,0,0,0,1.94-.5A4,4,0,0,0,196,224V48A12,12,0,0,0,184,36ZM72,44H184a4,4,0,0,1,4,4V168.78l-57.89-36.17a4,4,0,0,0-4.24,0L68,168.78V48A4,4,0,0,1,72,44Zm58.11,136.61a4,4,0,0,0-4.24,0L68,216.78V178.22l60-37.5,60,37.5v38.56Z"/>`,
    ],
    [
      IconWeight.LIGHT,
      svg`<path d="M184,34H72A14,14,0,0,0,58,48V224a6,6,0,0,0,9.18,5.09l60.81-38,60.83,38A6,6,0,0,0,198,224V48A14,14,0,0,0,184,34ZM72,46H184a2,2,0,0,1,2,2V165.18l-54.83-34.27a6,6,0,0,0-6.36,0L70,165.17V48A2,2,0,0,1,72,46Zm59.17,132.91a6,6,0,0,0-6.36,0L70,213.17V179.33l58-36.25,58,36.25v33.84Z"/>`,
    ],
    [
      IconWeight.REGULAR,
      svg`<path d="M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Zm0,16V161.57l-51.77-32.35a8,8,0,0,0-8.48,0L72,161.56V48ZM132.23,177.22a8,8,0,0,0-8.48,0L72,209.57V180.43l56-35,56,35v29.14Z"/>`,
    ],
    [
      IconWeight.BOLD,
      svg`<path d="M184,28H72A20,20,0,0,0,52,48V224a12,12,0,0,0,18.36,10.18l57.63-36,57.65,36A12,12,0,0,0,204,224V48A20,20,0,0,0,184,28Zm-4,24V154.35l-45.65-28.53a12,12,0,0,0-12.72,0L76,154.35V52ZM134.35,173.82a12,12,0,0,0-12.72,0L76,202.35v-19.7l52-32.5,52,32.5v19.7Z"/>`,
    ],
    [
      IconWeight.FILL,
      svg`<path d="M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32ZM132.23,177.22a8,8,0,0,0-8.48,0L72,209.57V180.43l56-35,56,35v29.14Z"/>`,
    ],
    [
      IconWeight.DUOTONE,
      svg`<path d="M192,176v48l-64-40L64,224V176l64-40Z" opacity="0.2"/><path d="M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Zm0,16V161.57l-51.77-32.35a8,8,0,0,0-8.48,0L72,161.56V48ZM132.23,177.22a8,8,0,0,0-8.48,0L72,209.57V180.43l56-35,56,35v29.14Z"/>`,
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
        ${ArcIconBookmark.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-icon-bookmark': ArcIconBookmark;
  }
}
