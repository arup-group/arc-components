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
@customElement('ph-icon-patreon-logo')
export default class PhIconPatreonLogo extends LitElement {
  /** @internal */
  static tag = 'ph-icon-patreon-logo';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M176,40a64,64,0,1,0,64,64A64.07,64.07,0,0,0,176,40Zm0,112a48,48,0,1,1,48-48A48.05,48.05,0,0,1,176,152ZM80,40H64A16,16,0,0,0,48,56V208a16,16,0,0,0,16,16H80a16,16,0,0,0,16-16V56A16,16,0,0,0,80,40Zm0,168H64V56H80V208Z"/>`;

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
        ${PhIconPatreonLogo.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-patreon-logo': PhIconPatreonLogo;
  }
}
