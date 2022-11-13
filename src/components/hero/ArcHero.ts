import { LitElement } from 'lit';
import { html } from 'lit/static-html.js';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
// @ts-ignore
import componentStyles from '../../styles/component.styles.css.js';
// @ts-ignore
import styles from './arc-hero.styles.css.js';

/**
 * @slot default - The content of the hero.
 * @slot title - The title of the hero.
 * @slot subtitle - The subtitle of the hero.
 *
 * @cssproperty --content-gap - Set the distance between the title and the content.
 */
export default class ArcHero extends LitElement {
  /** @internal */
  static tag = 'arc-hero';

  static styles = [componentStyles, styles];

  /** Set the banner to full screen. */
  @property({ type: Boolean }) fullscreen: boolean = false;

  /** The title of the hero. Alternatively, the title slot can be used. */
  @property({ type: String }) title: string;

  /** The subtitle of the hero. Alternatively, the subtitle slot can be used. */
  @property({ type: String }) subtitle: string;

  /** Set the background of the hero. */
  @property({ type: String }) background: string;

  protected render() {
    const imageStyle = {
      background: `url(${this.background}) no-repeat center center`,
      backgroundSize: 'cover',
    };

    return html`
      <header
        id="main"
        class=${classMap({
          hero: true,
          'hero--fullscreen': this.fullscreen,
        })}
        style=${ifDefined(this.background ? styleMap(imageStyle) : undefined)}
        aria-label=${ifDefined(this.title || undefined)}
        aria-labelledby="${ifDefined(this.title ? undefined : 'title')}"
      >
        <div>
          <h1 id="title"><slot name="title">${this.title}</slot></h1>
          <slot name="subtitle">${this.subtitle}</slot>
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
