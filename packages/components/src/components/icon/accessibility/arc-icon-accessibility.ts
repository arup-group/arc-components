import { html, svg, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styleMap } from 'lit/directives/style-map.js';
import {
  FONT_SIZES,
  FontSize,
} from '../../../internal/constants/styleConstants.js';
import styles from '../icon.styles.js';

/**
 * @cssproperty --icon-color - Set the color of the icon.
 */
@customElement('arc-icon-accessibility')
export default class ArcIconAccessibility extends LitElement {
  /** @internal */
  static tag = 'ph-icon-${key}';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg`<path d="M16 3C13.6471 3 11.472 3.57975 9.47461 4.73926C7.47721 5.89876 5.89876 7.47721 4.73926 9.47461C3.57975 11.472 3 13.6471 3 16C3 18.3529 3.57975 20.528 4.73926 22.5254C5.89876 24.5228 7.47721 26.1012 9.47461 27.2607C11.472 28.4202 13.6471 29 16 29C18.3529 29 20.528 28.4202 22.5254 27.2607C24.5228 26.1012 26.1012 24.5228 27.2607 22.5254C28.4202 20.528 29 18.3529 29 16C29 13.6471 28.4202 11.472 27.2607 9.47461C26.1012 7.47721 24.5228 5.89876 22.5254 4.73926C20.528 3.57975 18.3529 3 16 3ZM16 27.4004C14.7643 27.4004 13.5667 27.21 12.4072 26.8291C11.2477 26.4482 10.2025 25.9023 9.27148 25.1914C8.3405 24.4805 7.52376 23.6595 6.82129 22.7285C6.11882 21.7975 5.57715 20.7523 5.19629 19.5928C4.81543 18.4333 4.625 17.2357 4.625 16C4.625 14.4596 4.92546 12.987 5.52637 11.582C6.12728 10.1771 6.93555 8.9668 7.95117 7.95117C8.9668 6.93555 10.1771 6.12728 11.582 5.52637C12.987 4.92546 14.4596 4.625 16 4.625C17.5404 4.625 19.013 4.92546 20.418 5.52637C21.8229 6.12728 23.0332 6.93555 24.0488 7.95117C25.0645 8.9668 25.8727 10.1771 26.4736 11.582C27.0745 12.987 27.375 14.4596 27.375 16C27.375 17.5404 27.0745 19.013 26.4736 20.418C25.8727 21.8229 25.0645 23.0374 24.0488 24.0615C23.0332 25.0856 21.8229 25.8981 20.418 26.499C19.013 27.0999 17.5404 27.4004 16 27.4004Z"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.5504 13.1667H23.6504C24.1196 13.1665 24.5 12.8041 24.5 12.3572C24.5 11.9101 24.1195 11.5477 23.6502 11.5476L8.35465 11.5476L8.35 11.5476C7.88056 11.5476 7.5 11.9101 7.5 12.3572C7.5 12.8042 7.88056 13.1667 8.35 13.1667L13.4504 13.1667V23.6678C13.4501 23.6753 13.45 23.6829 13.45 23.6905C13.45 24.1376 13.8306 24.5 14.3 24.5C14.7694 24.5 15.15 24.1376 15.15 23.6906L15.1504 18.8468L15.1502 18.8335C15.1502 18.3864 15.5308 18.024 16.0002 18.024C16.4696 18.024 16.8502 18.3864 16.8502 18.8334L16.8504 23.6659C16.8501 23.6741 16.85 23.6823 16.85 23.6905C16.85 24.1376 17.2305 24.5 17.7 24.5C18.1694 24.5 18.5499 24.1376 18.55 23.6906L18.5504 13.1667ZM17.2024 7.97421C16.8836 7.67058 16.4512 7.5 16.0004 7.5C15.0569 7.5 14.3004 8.22048 14.3004 9.11906C14.3004 10.0095 15.0569 10.7381 16.0004 10.7381C16.4512 10.7381 16.8836 10.5675 17.2024 10.2639C17.5212 9.96027 17.7004 9.54846 17.7004 9.11906C17.7004 8.68966 17.5212 8.27784 17.2024 7.97421Z"></path>

`;

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
        viewBox="0 0 32 32"
        role=${ifDefined(this.label ? 'img' : undefined)}
        aria-label=${ifDefined(this.label || undefined)}
        aria-hidden=${ifDefined(this.label ? undefined : 'true')}
        style=${styleMap({
          transform: this.rotation ? `rotate(${this.rotation}deg)` : null,
          height: `var(--arc-font-size-${this.size})`,
          width: `var(--arc-font-size-${this.size})`,
        })}
      >
        ${ArcIconAccessibility.svg}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-icon-accessibility': ArcIconAccessibility;
  }
}
