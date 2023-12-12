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
@customElement('ph-icon-webhooks-logo')
export default class PhIconWebhooksLogo extends LitElement {
  /** @internal */
  static tag = 'ph-icon-webhooks-logo';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M178.16,184H111.32A48,48,0,1,1,25.6,147.19a8,8,0,0,1,12.8,9.61A31.69,31.69,0,0,0,32,176a32,32,0,0,0,64,0,8,8,0,0,1,8-8h74.16a16,16,0,1,1,0,16ZM64,192a16,16,0,0,0,14.08-23.61l35.77-58.14a8,8,0,0,0-2.62-11,32,32,0,1,1,46.1-40.06A8,8,0,1,0,172,52.79a48,48,0,1,0-75.62,55.33L64.44,160c-.15,0-.29,0-.44,0a16,16,0,0,0,0,32Zm128-64a48.18,48.18,0,0,0-18,3.49L142.08,79.6A16,16,0,1,0,128,88l.44,0,35.78,58.15a8,8,0,0,0,11,2.61A32,32,0,1,1,192,208a8,8,0,0,0,0,16,48,48,0,0,0,0-96Z"/>`;

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
        ${PhIconWebhooksLogo.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-webhooks-logo': PhIconWebhooksLogo;
  }
}
