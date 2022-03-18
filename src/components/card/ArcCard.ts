import { css, html, LitElement } from 'lit';
import componentStyles from '../../styles/component.styles.js';

/**
 * @slot default - The card's content.
 * @slot heading - The card's heading.
 * @slot actions - The card's actions.
 *
 * @cssproperty --header-padding - Set the padding value of the header.
 * @cssproperty --arc-card-height - Set the height of the card.
 * @cssproperty --arc-card-width - Set the width of the card.
 */
export default class ArcCard extends LitElement {
  static tag = 'arc-card';

  static styles = [
    componentStyles,
    css`
      :host {
        display: inline-block;
      }

      #main {
        display: grid;
        padding: var(--arc-spacing-normal);
        border: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-grey-040));
      }
    `,
  ];

  render() {
    return html`
      <article id="main" tabindex="0">
        <div id="header">
          <h1>
            <slot name="title">Title</slot>
          </h1>
          <h2>
            <slot name="subtitle">Subtitle</slot>
          </h2>
        </div>
        <div id="image">
          <slot name="image">Image</slot>
        </div>
        <div id="body">
          <slot name="body">Content</slot>
        </div>
        <div id="footer">
          <slot name="footer">Footer</slot>
        </div>
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-card': ArcCard;
  }
}
