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
@customElement('ph-icon-heartbeat')
export default class PhIconHeartbeat extends LitElement {
  /** @internal */
  static tag = 'ph-icon-heartbeat';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M72,136H32a8,8,0,0,1,0-16H67.72L81.34,99.56a8,8,0,0,1,13.32,0l25.34,38,9.34-14A8,8,0,0,1,136,120h24a8,8,0,0,1,0,16H140.28l-13.62,20.44a8,8,0,0,1-13.32,0L88,118.42l-9.34,14A8,8,0,0,1,72,136ZM178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,.75,0,1.5,0,2.25a8,8,0,1,0,16-.5c0-.58,0-1.17,0-1.75A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46c0,53.61-77.76,102.15-96,112.8-10.83-6.31-42.63-26-66.68-52.21a8,8,0,1,0-11.8,10.82c31.17,34,72.93,56.68,74.69,57.63a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32Z"/>`;

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
        ${PhIconHeartbeat.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-heartbeat': PhIconHeartbeat;
  }
}
