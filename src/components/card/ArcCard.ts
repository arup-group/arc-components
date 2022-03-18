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
        border: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-grey-040));
      }

      header,
      #body,
      footer {
        display: grid;
        padding: var(--arc-spacing-normal);
      }
    `,
  ];

  render() {
    return html`
      <article id="main" role="article" aria-labelledby="title">
        <header id="header">
          <div>
            <h1 id="title"><slot name="title"></slot></h1>
            <p id="subtitle"><slot name="subtitle"></slot></p>
          </div>
          <div></div>
        </header>
        <div id="image"><slot name="image"></slot></div>
        <div id="body"><slot></slot></div>
        <footer id="footer">
          <slot name="footer"></slot>
        </footer>
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-card': ArcCard;
  }
}
