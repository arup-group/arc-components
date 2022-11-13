import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import {classMap} from 'lit/directives/class-map.js';
import { getBasePath } from '../../utilities/base-path.js';
import { ICON_TYPES, IconType } from './constants/IconConstants.js';
import { FONT_SIZES, FontSize } from '../../internal/constants/styleConstants.js';
// @ts-ignore
import styles from './arc-icon.styles.css.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
export default class ArcIcon extends LitElement {
  /** @internal */
  static tag = 'arc-icon';

  static styles = styles;

  /** The name of the icon to draw. */
  @property({ type: String, reflect: true }) name: IconType = ICON_TYPES.fire;

  /** An alternate description to use for accessibility. If omitted, the icon will be ignored by assistive devices. */
  @property({ type: String }) label: string;

  /** Set the size of the icon. */
  @property({ type: String, reflect: true }) size: FontSize = FONT_SIZES.medium;

  /** Set the rotation of the icon. */
  @property({ type: Number }) rotation: 0 | 90 | 180 | 270 = 0;

  protected render() {
    const DEFAULT_PATH: string = `${getBasePath()}/assets/icons.svg`;

    return html`
      <svg
        id="main"
        class=${classMap({
          'arc-icon': true,
          'arc-icon--rotate-0': this.rotation === 0,
          'arc-icon--rotate-90': this.rotation === 90,
          'arc-icon--rotate-180': this.rotation === 180,
          'arc-icon--rotate-270': this.rotation === 270,
          'arc-icon--size-xx-small': this.size === 'xx-small',
          'arc-icon--size-x-small': this.size === 'x-small',
          'arc-icon--size-small': this.size === 'small',
          'arc-icon--size-medium': this.size === 'medium',
          'arc-icon--size-large': this.size === 'large',
          'arc-icon--size-x-large': this.size === 'x-large',
          'arc-icon--size-xx-large': this.size === 'xx-large',
          'arc-icon--size-xxx-large': this.size === 'xxx-large',
          'arc-icon--size-xxxx-large': this.size === 'xxxx-large',
        })}
        role=${ifDefined(this.label ? 'img' : undefined)}
        aria-label=${ifDefined(this.label || undefined)}
        aria-hidden=${ifDefined(this.label ? undefined : 'true')}
      >
        <use href="${DEFAULT_PATH}#arc-${this.name}" xlink:href="${DEFAULT_PATH}#arc-${this.name}" />
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-icon': ArcIcon;
  }
}
