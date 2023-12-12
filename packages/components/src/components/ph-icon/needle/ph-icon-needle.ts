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
 */
@customElement('ph-icon-needle')
export default class PhIconNeedle extends LitElement {
  /** @internal */
  static tag = 'ph-icon-needle';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M189.66,66.34a8,8,0,0,1,0,11.32l-16,16a8,8,0,0,1-11.32-11.32l16-16A8,8,0,0,1,189.66,66.34ZM224,72a39.71,39.71,0,0,1-11.72,28.28l-24,24a8,8,0,0,1-4.3,2.23c-51.49,8.84-137.46,94.28-138.32,95.15h0a8,8,0,0,1-11.31-11.32h0C36,208.73,120.69,123.28,129.49,72a8,8,0,0,1,2.23-4.3l24-24A40,40,0,0,1,224,72Zm-16,0a24,24,0,0,0-41-17L144.77,77.29c-4.41,21.15-18.9,46.19-35.49,69.43,23.24-16.59,48.28-31.08,69.43-35.49L201,89A23.85,23.85,0,0,0,208,72Z"/>`;

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
        ${PhIconNeedle.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-needle': PhIconNeedle;
  }
}
