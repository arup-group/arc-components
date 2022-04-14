import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styleMap } from 'lit/directives/style-map.js';
import { getBasePath } from '../../utilities/base-path.js';
import componentStyles from '../../styles/component.styles.js';
import { ICON_TYPES } from './constants/IconConstants.js';
import { FONT_SIZES, FontSize } from '../../internal/constants/styleConstants.js';

/**
 * @cssproperty --icon-color-primary - Set the primary color of the icon.
 * @cssproperty --icon-color-secondary - Set the secondary color of the icon (if supported).
 */
export default class ArcIcon extends LitElement {
  static tag = 'arc-icon';

  static styles = [
    componentStyles,
    css`
      :host {
        display: flex;
        --icon-color-primary: inherit;
        --icon-color-secondary: currentColor;
      }

      #icon {
        display: inline-block;
        color: var(--icon-color-primary);
        line-height: 1;
        flex-shrink: 0;
        max-width: initial;
      }

      /* Caps/Corners */
      #icon use {
        fill: var(--icon-color-secondary);
        stroke: var(--icon-color-secondary);
        --icon-stroke-linecap-butt: butt;
        stroke-miterlimit: 10;
        stroke-linecap: square;
        stroke-linejoin: miter;
      }

      .stroke-round use {
        --icon-stroke-linecap-butt: round;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
    `,
  ];

  /** The name of the icon to draw. */
  @property({ type: String, reflect: true }) name: string = ICON_TYPES.fire;

  /** An alternate description to use for accessibility. If omitted, the icon will be ignored by assistive devices. */
  @property({ type: String }) label: string;

  /** Set the size of the icon. */
  @property({ type: String, reflect: true }) size: FontSize = FONT_SIZES.medium;

  /** Set the rotation of the icon. */
  @property({ type: Number }) rotation: 0 | 90 | 180 | 270 = 0;

  render() {
    const DEFAULT_PATH: string = `${getBasePath()}/assets/icons.svg`;

    const styles = {
      transform: this.rotation ? `rotate(${this.rotation}deg)` : null,
      height: `var(--arc-font-size-${this.size})`,
      width: `var(--arc-font-size-${this.size})`,
    };

    return html`
      <svg
        id="icon"
        style=${styleMap(styles)}
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
