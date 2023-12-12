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
@customElement('ph-icon-gitlab-logo-simple')
export default class PhIconGitlabLogoSimple extends LitElement {
  /** @internal */
  static tag = 'ph-icon-gitlab-logo-simple';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M230.15,117.1,210.25,41a11.94,11.94,0,0,0-22.79-1.11L169.78,88H86.22L68.54,39.87A11.94,11.94,0,0,0,45.75,41L25.85,117.1a57.19,57.19,0,0,0,22,61l73.27,51.76a11.91,11.91,0,0,0,13.74,0l73.27-51.76A57.19,57.19,0,0,0,230.15,117.1ZM198.91,165,128,215.09,57.09,165a41.1,41.1,0,0,1-15.75-43.84L58,57.5,73.13,98.76A8,8,0,0,0,80.64,104h94.72a8,8,0,0,0,7.51-5.24L198,57.5l16.63,63.65A41.1,41.1,0,0,1,198.91,165Z"/>`;

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
        ${PhIconGitlabLogoSimple.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-gitlab-logo-simple': PhIconGitlabLogoSimple;
  }
}
