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
@customElement('ph-icon-microphone-stage')
export default class PhIconMicrophoneStage extends LitElement {
  /** @internal */
  static tag = 'ph-icon-microphone-stage';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M168,16A72.07,72.07,0,0,0,96,88a73.29,73.29,0,0,0,.63,9.42L27.12,192.22A15.93,15.93,0,0,0,28.71,213L43,227.29a15.93,15.93,0,0,0,20.78,1.59l94.81-69.53A73.29,73.29,0,0,0,168,160a72,72,0,1,0,0-144Zm56,72a55.72,55.72,0,0,1-11.16,33.52L134.49,43.16A56,56,0,0,1,224,88ZM54.32,216,40,201.68,102.14,117A72.37,72.37,0,0,0,139,153.86ZM112,88a55.67,55.67,0,0,1,11.16-33.51l78.34,78.34A56,56,0,0,1,112,88Zm-2.35,58.34a8,8,0,0,1,0,11.31l-8,8a8,8,0,1,1-11.31-11.31l8-8A8,8,0,0,1,109.67,146.33Z"/>`;

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
        ${PhIconMicrophoneStage.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-microphone-stage': PhIconMicrophoneStage;
  }
}
