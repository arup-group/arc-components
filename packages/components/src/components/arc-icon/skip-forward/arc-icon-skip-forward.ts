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
import styles from './arc-icon-skip-forward.styles.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
@customElement('arc-icon-skip-forward')
export default class ArcIconSkipForward extends LitElement {
  /** @internal */
  static tag = 'arc-icon-skip-forward';

  /** @internal */
  static styles = styles;

  /** @internal */
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [IconWeight.THIN, svg`<path d="M200,36a4,4,0,0,0-4,4v76.44L70.31,37.84a12,12,0,0,0-12.18-.32A11.69,11.69,0,0,0,52,47.88V208.12a11.69,11.69,0,0,0,6.13,10.36,12,12,0,0,0,12.18-.32L196,139.56V216a4,4,0,0,0,8,0V40A4,4,0,0,0,200,36Zm-5.82,95.26L66.06,211.38a4,4,0,0,1-4.06.11,3.8,3.8,0,0,1-2-3.37V47.88a3.8,3.8,0,0,1,2-3.37A4,4,0,0,1,64,44a4,4,0,0,1,2.11.62l128.12,80.12a3.83,3.83,0,0,1,0,6.52Z"/>`],
    [IconWeight.LIGHT, svg`<path d="M200,34a6,6,0,0,0-6,6v72.84L71.37,36.14a14,14,0,0,0-14.21-.37A13.69,13.69,0,0,0,50,47.88V208.12a13.69,13.69,0,0,0,7.16,12.11,14,14,0,0,0,14.21-.37L194,143.17V216a6,6,0,0,0,12,0V40A6,6,0,0,0,200,34Zm-6.88,95.56L65,209.69a2,2,0,0,1-2,.05,1.79,1.79,0,0,1-1-1.62V47.88a1.79,1.79,0,0,1,1-1.62A2.1,2.1,0,0,1,64,46a2,2,0,0,1,1,.31l128.12,80.13a1.82,1.82,0,0,1,0,3.12Z"/>`],
    [IconWeight.REGULAR, svg`<path d="M200,32a8,8,0,0,0-8,8v69.23L72.43,34.45A15.95,15.95,0,0,0,48,47.88V208.12a16,16,0,0,0,24.43,13.43L192,146.77V216a8,8,0,0,0,16,0V40A8,8,0,0,0,200,32ZM64,207.93V48.05l127.84,80Z"/>`],
    [IconWeight.BOLD, svg`<path d="M200,28a12,12,0,0,0-12,12v62l-113.45-71A20,20,0,0,0,44,47.88V208.12A20,20,0,0,0,74.55,225L188,154v62a12,12,0,0,0,24,0V40A12,12,0,0,0,200,28ZM68,200.73V55.27L184.3,128Z"/>`],
    [IconWeight.FILL, svg`<path d="M208,40V216a8,8,0,0,1-16,0V146.77L72.43,221.55A15.95,15.95,0,0,1,48,208.12V47.88A15.95,15.95,0,0,1,72.43,34.45L192,109.23V40a8,8,0,0,1,16,0Z"/>`],
    [IconWeight.DUOTONE, svg`<path d="M196.3,134.65,68.19,214.77A8,8,0,0,1,56,208.12V47.88a8,8,0,0,1,12.19-6.65L196.3,121.35A7.83,7.83,0,0,1,196.3,134.65Z" opacity="0.2"/><path d="M200,32a8,8,0,0,0-8,8v69.23L72.43,34.45A15.95,15.95,0,0,0,48,47.88V208.12a16,16,0,0,0,24.43,13.43L192,146.77V216a8,8,0,0,0,16,0V40A8,8,0,0,0,200,32ZM64,207.93V48.05l127.84,80Z"/>`],
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
        ${ArcIconSkipForward.weightsMap.get(this.weight)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "arc-icon-skip-forward": ArcIconSkipForward;
  }
}
