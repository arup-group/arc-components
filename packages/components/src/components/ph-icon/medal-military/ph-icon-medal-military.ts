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
@customElement('ph-icon-medal-military')
export default class PhIconMedalMilitary extends LitElement {
  /** @internal */
  static tag = 'ph-icon-medal-military';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M207,32H49A17,17,0,0,0,32,49V98.21a17,17,0,0,0,10,15.47l62.6,28.45a48,48,0,1,0,46.88,0L214,113.68a17,17,0,0,0,10-15.47V49A17,17,0,0,0,207,32ZM160,48v72.67l-32,14.54L96,120.67V48ZM48,98.21V49a1,1,0,0,1,1-1H80v65.39L48.59,99.12A1,1,0,0,1,48,98.21ZM128,216a32,32,0,1,1,32-32A32,32,0,0,1,128,216ZM208,98.21a1,1,0,0,1-.59.91L176,113.39V48h31a1,1,0,0,1,1,1Z"/>`;

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
        ${PhIconMedalMilitary.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-medal-military': PhIconMedalMilitary;
  }
}
