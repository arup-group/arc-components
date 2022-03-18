import { css, LitElement } from 'lit';
import { html } from 'lit/static-html.js';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styleMap } from 'lit/directives/style-map.js';
import { mobileBreakpoint } from '../../utilities/ui-utils.js';
import componentStyles from '../../styles/component.styles.js';

/**
 * @slot default - The content of the hero.
 * @slot title - The title of the hero.
 * @slot subtitle - The subtitle of the hero.
 *
 * @cssproperty --content-gap - Set the distance between the title and the content.
 */
export default class ArcHero extends LitElement {
  static tag = 'arc-hero';

  static styles = [
    componentStyles,
    css`
      :host {
        --content-gap: 5rem;
      }

      #main {
        padding: var(--arc-spacing-banner) var(--arc-spacing-medium);
        display: grid;
        align-content: start;
        grid-auto-columns: 1fr;
        gap: var(--content-gap);
      }

      #title,
      #content {
        font-family: var(--arc-font-headline);
        font-size: var(--arc-font-size-xxxx-large);
        font-weight: var(--arc-font-weight-normal);
        word-break: break-word;
        margin: 0;
      }

      #content {
        padding: 0;
        font-size: var(--arc-font-size-x-large);
      }

      * ::slotted(img) {
        height: 100%;
        width: 100%;
        object-fit: fill;
        overflow: hidden;
      }

      @media (min-width: ${mobileBreakpoint}rem) {
        #main {
          padding: var(--arc-spacing-banner);
          grid-auto-flow: column;
          align-content: normal;
        }
      }
    `,
  ];

  /** Set the banner to full screen. */
  @property({ type: Boolean }) fullscreen: boolean = false;

  /** Set the title of the hero. Alternatively, the title slot can be used. */
  @property({ type: String }) title: string;

  /** Set the subtitle of the hero. Alternatively, the subtitle slot can be used. */
  @property({ type: String }) subtitle: string;

  /** Set the background of the hero. */
  @property({ type: String }) background: string;

  render() {
    const imageStyle = {
      background: `url(${this.background}) no-repeat center center`,
      backgroundSize: 'cover',
      height: this.fullscreen ? '100%' : 'auto',
      alignItems: this.fullscreen ? 'center' : 'normal',
    };

    return html`
      <header
        id="main"
        aria-label=${ifDefined(this.title || undefined)}
        aria-labelledby="${ifDefined(this.title ? undefined : 'title')}"
        style=${ifDefined(this.background ? styleMap(imageStyle) : undefined)}
      >
        <div>
          <h1 id="title"><slot name="title">${this.title}</slot></h1>
          <span id="subtitle"><slot name="subtitle">${this.subtitle}</slot></span>
        </div>
        <h2 id="content"><slot></slot></h2>
      </header>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-hero': ArcHero;
  }
}
