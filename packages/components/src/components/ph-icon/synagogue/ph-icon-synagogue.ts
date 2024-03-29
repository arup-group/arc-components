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
@customElement('ph-icon-synagogue')
export default class PhIconSynagogue extends LitElement {
  /** @internal */
  static tag = 'ph-icon-synagogue';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M208,57.38V32a8,8,0,0,0-16,0V57.38A24,24,0,0,0,176,80v42.21L136,99.36V72a8,8,0,0,0-16,0V99.36L80,122.21V80A24,24,0,0,0,64,57.38V32a8,8,0,0,0-16,0V57.38A24,24,0,0,0,32,80V216a8,8,0,0,0,8,8h72a8,8,0,0,0,8-8V176a8,8,0,0,1,16,0v40a8,8,0,0,0,8,8h72a8,8,0,0,0,8-8V80A24,24,0,0,0,208,57.38ZM200,72a8,8,0,0,1,8,8v24H192V80A8,8,0,0,1,200,72ZM56,72a8,8,0,0,1,8,8v24H48V80A8,8,0,0,1,56,72Zm-8,48H64v88H48Zm80,32a24,24,0,0,0-24,24v32H80V140.64l48-27.43,48,27.43V208H152V176A24,24,0,0,0,128,152Zm64,56V120h16v88Z"/>`;

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
        ${PhIconSynagogue.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-synagogue': PhIconSynagogue;
  }
}
