import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles.js';

export default class ArcCard extends LitElement {
  static tag = 'arc-card';

  static styles = [
    componentStyles,
    css`
    :host {
        background: rgb(var(--arc-background-color));
        border: var(--arc-border-width) var(--arc-border-style);
        display: flex;
        flex-flow: column nowrap;
        height: var(--arc-card-height);
        position: relative;
        width: var( --arc-card-width);
        --header-padding: 15px;
      }

      article {
        display: contents;
      }

      #heading {
        align-content: start;
        display: flex;
        flex: 2;
        font-family: var(--arc-font-body);
        font-size: var(--arc-font-size-small);
        font-weight: var(--arc-font-weight-light);
        margin: 0 var(--arc-spacing-medium);
        padding-top: var(--header-padding);
      }

      #image-header {
        position: absolute;
        margin: 0 var(--arc-spacing-medium);
        padding-top: var(--header-padding);;
        font-family: var(--arc-font-body);
        font-size: var(--arc-font-size-small);
        font-weight: var(--arc-font-weight-light);
      }

      figure {
        display: flex;
        margin: 0;
      }

      img {
        height: 100%;
        max-height: calc(var(--arc-card-height) / 2.4) ;
        object-fit: cover;
        width: 100%;
        max-width: var( --arc-card-width);
      }

      #content {
        background: rgb(var(--arc-white-000));
        flex: 1;
        padding: var(--arc-spacing-large);
      }

      #actions {
        background: rgb(var(--arc-white-000));
        display: flex;
        flex-basis: 10%;
        flex-flow: row;
        gap: var(--arc-spacing-normal);
        justify-content: flex-end;
        padding: var(--arc-spacing-normal);
      }

      #actions ::slotted(menu) {
        display: contents;
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
      #actions ::slotted(:not(:last-child)) {
        margin-right: var(--arc-spacing-x-small);
      }
      
    `,
  ];

  @property({ type: String, reflect: true }) imageUrl = '';
  @property({ type: String, reflect: true }) imageAlt = '';

  render() {
    return html`
    <article>
        ${this.imageUrl ? html`
        <header id="image-header" part="heading">
          <slot name="heading"></slot>
        </header>
        <figure>
            <img id="card-image" src="${this.imageUrl}" alt="${this.imageAlt}">
        </figure>
    ` : html`
            <header id="heading" part="heading">
                <slot name="heading"></slot>
            </header>
        `}
        <div id="content" part="content" role="document">
            <slot name="content"></slot>
        </div>
        <footer id="actions" part="actions">
            <slot name="actions"></slot>
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
