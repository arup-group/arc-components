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
@customElement('ph-icon-fan')
export default class PhIconFan extends LitElement {
  /** @internal */
  static tag = 'ph-icon-fan';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M233,135a60,60,0,0,0-89.62-35.45l16.39-65.44a8,8,0,0,0-3.45-8.68A60,60,0,1,0,95.69,128.91L30.82,147.44a8,8,0,0,0-5.8,7.32,60,60,0,0,0,44.42,60.66,60.52,60.52,0,0,0,15.62,2.07,60.07,60.07,0,0,0,59.88-62l48.48,46.92a8,8,0,0,0,9.25,1.35A60,60,0,0,0,233,135Zm-121-7a16,16,0,1,1,16,16A16,16,0,0,1,112,128ZM80,76a44,44,0,0,1,62.75-39.82L127.77,96A32,32,0,0,0,99.85,112.8,43.85,43.85,0,0,1,80,76Zm27,119.57a44,44,0,0,1-65.86-34.43l59.31-16.94A32,32,0,0,0,128,160l.91,0A43.82,43.82,0,0,1,107,195.57Zm106.17-23a43.92,43.92,0,0,1-13,14.14l-44.32-42.89a31.91,31.91,0,0,0-.59-32.57,44,44,0,0,1,57.91,61.32Z"/>`;

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
        ${PhIconFan.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-fan': PhIconFan;
  }
}
