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
@customElement('ph-icon-waves')
export default class PhIconWaves extends LitElement {
  /** @internal */
  static tag = 'ph-icon-waves';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M34.33,77.68a8,8,0,0,1,0-11.34C35.1,65.59,53.1,48,88,48c18.42,0,32.24,9.21,44.44,17.34C143.74,72.88,154.42,80,168,80a72.21,72.21,0,0,0,31.75-6.83,44.87,44.87,0,0,0,10.63-6.87,8,8,0,0,1,11.27,11.36C220.9,78.41,202.9,96,168,96c-18.42,0-32.24-9.21-44.44-17.34C112.26,71.12,101.58,64,88,64a72.21,72.21,0,0,0-31.75,6.83A44.87,44.87,0,0,0,45.62,77.7,8,8,0,0,1,34.33,77.68ZM210.38,122.3a44.87,44.87,0,0,1-10.63,6.87A72.21,72.21,0,0,1,168,136c-13.58,0-24.26-7.12-35.56-14.66C120.24,113.21,106.42,104,88,104c-34.9,0-52.9,17.59-53.65,18.34A8,8,0,0,0,45.62,133.7a44.87,44.87,0,0,1,10.63-6.87A72.21,72.21,0,0,1,88,120c13.58,0,24.26,7.12,35.56,14.66,12.2,8.13,26,17.34,44.44,17.34,34.9,0,52.9-17.59,53.65-18.34a8,8,0,0,0-11.27-11.36Zm0,56a44.87,44.87,0,0,1-10.63,6.87A72.21,72.21,0,0,1,168,192c-13.58,0-24.26-7.12-35.56-14.66C120.24,169.21,106.42,160,88,160c-34.9,0-52.9,17.59-53.65,18.34A8,8,0,0,0,45.62,189.7a44.87,44.87,0,0,1,10.63-6.87A72.21,72.21,0,0,1,88,176c13.58,0,24.26,7.12,35.56,14.66,12.2,8.13,26,17.34,44.44,17.34,34.9,0,52.9-17.59,53.65-18.34a8,8,0,0,0-11.27-11.36Z"/>`;

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
        ${PhIconWaves.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-waves': PhIconWaves;
  }
}
