/* GENERATED FILE */
import { html, svg, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styleMap } from 'lit/directives/style-map.js';
import {
  FONT_SIZES,
  FontSize,
} from '../../../internal/constants/styleConstants.js';
import styles from '../../icon/icon.styles.js';

/**
 * @cssproperty --icon-color - Set the color of the icon.
 *
 * @ssr - True
 */
@customElement('ph-icon-church')
export default class PhIconChurch extends LitElement {
  /** @internal */
  static tag = 'ph-icon-church';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M228.12,145.14,192,123.47V104a8,8,0,0,0-4-7L136,67.36V48h16a8,8,0,0,0,0-16H136V16a8,8,0,0,0-16,0V32H104a8,8,0,0,0,0,16h16V67.36L68,97.05a8,8,0,0,0-4,7v19.47L27.88,145.14A8,8,0,0,0,24,152v64a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V168a8,8,0,0,1,16,0v48a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V152A8,8,0,0,0,228.12,145.14ZM40,156.53l24-14.4V208H40ZM128,144a24,24,0,0,0-24,24v40H80V108.64l48-27.43,48,27.43V208H152V168A24,24,0,0,0,128,144Zm88,64H192V142.13l24,14.4Z"/>`;

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
        ${PhIconChurch.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-church': PhIconChurch;
  }
}
