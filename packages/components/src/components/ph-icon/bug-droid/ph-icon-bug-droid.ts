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
@customElement('ph-icon-bug-droid')
export default class PhIconBugDroid extends LitElement {
  /** @internal */
  static tag = 'ph-icon-bug-droid';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M191.83,43.48l13.83-13.82a8,8,0,1,0-11.32-11.32L179.79,32.9a87.81,87.81,0,0,0-103.58,0L61.66,18.34A8,8,0,0,0,50.34,29.66L64.17,43.48A87.72,87.72,0,0,0,40,104v40a88,88,0,0,0,176,0V104A87.72,87.72,0,0,0,191.83,43.48ZM128,32a72.08,72.08,0,0,1,72,72v8H56v-8A72.08,72.08,0,0,1,128,32Zm0,184a72.08,72.08,0,0,1-72-72V128H200v16A72.08,72.08,0,0,1,128,216ZM144,84a12,12,0,1,1,12,12A12,12,0,0,1,144,84ZM88,84a12,12,0,1,1,12,12A12,12,0,0,1,88,84Z"/>`;

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
        ${PhIconBugDroid.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-bug-droid': PhIconBugDroid;
  }
}
