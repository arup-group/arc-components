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
@customElement('ph-icon-pencil-circle')
export default class PhIconPencilCircle extends LitElement {
  /** @internal */
  static tag = 'ph-icon-pencil-circle';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M201.54,54.46A104,104,0,0,0,54.46,201.54,104,104,0,0,0,201.54,54.46ZM88,192a16,16,0,0,1,32,0v23.59a88,88,0,0,1-32-9.22Zm48,0a16,16,0,0,1,32,0v14.37a88,88,0,0,1-32,9.22Zm-28.73-56h41.46l11.58,25.1A31.93,31.93,0,0,0,128,170.87a31.93,31.93,0,0,0-32.31-9.77Zm7.39-16L128,91.09,141.34,120Zm75.56,70.23c-2,2-4.08,3.87-6.22,5.64V176a7.91,7.91,0,0,0-.74-3.35l-48-104a8,8,0,0,0-14.52,0l-48,104A7.91,7.91,0,0,0,72,176v19.87c-2.14-1.77-4.22-3.64-6.22-5.64a88,88,0,1,1,124.44,0Z"/>`;

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
        ${PhIconPencilCircle.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-pencil-circle': PhIconPencilCircle;
  }
}
