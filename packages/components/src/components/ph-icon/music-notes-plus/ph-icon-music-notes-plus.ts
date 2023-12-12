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
@customElement('ph-icon-music-notes-plus')
export default class PhIconMusicNotesPlus extends LitElement {
  /** @internal */
  static tag = 'ph-icon-music-notes-plus';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M232,56a8,8,0,0,1-8,8H208V80a8,8,0,0,1-16,0V64H176a8,8,0,0,1,0-16h16V32a8,8,0,0,1,16,0V48h16A8,8,0,0,1,232,56ZM88,118.25V204a36,36,0,1,1-16-29.92V64a8,8,0,0,1,6.06-7.76l56-14a8,8,0,0,1,3.88,15.52L88,70.25v31.5l70.06-17.51a8,8,0,0,1,3.88,15.52ZM72,204a20,20,0,1,0-20,20A20,20,0,0,0,72,204Zm144-84v52a36,36,0,1,1-16-29.92V120a8,8,0,0,1,16,0Zm-16,52a20,20,0,1,0-20,20A20,20,0,0,0,200,172Z"/>`;

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
        ${PhIconMusicNotesPlus.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ph-icon-music-notes-plus': PhIconMusicNotesPlus;
  }
}
