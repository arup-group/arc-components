import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
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
      background: rgb(var(--arc-background-color));
      border: var(--arc-border-width) var(--arc-border-style);
      display: flex;
      flex-flow: column nowrap;
      width: 20rem;
    }
    
    #card {
      --arc-card-height: 25rem;
      --arc-card-width: 20rem;
      --header-padding: 1.2rem;
        display: contents;
        height: var(--arc-card-height);
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

  /** Set the url of the image */
  @property({ attribute: 'image-url', type: String }) imageUrl = '';

  /** Specifies an alternate text for an image, if the image cannot be displayed. */
  @property({ attribute: 'image-alt', type: String }) imageAlt = '';

  render() {
    return html`
    <div id="card">
        ${this.imageUrl ? html`
        <header id="image-header">
          <slot name="heading"></slot>
        </header>
        <figure>
            <img id="card-image" src="${ifDefined(this.imageUrl)}" alt="${ifDefined(this.imageAlt)}">
        </figure>
    ` : html`
            <header id="heading">
                <slot name="heading"></slot>
            </header>
        `}
        <div id="content" role="document">
            <slot></slot>
        </div>
        <footer id="actions">
            <slot name="actions"></slot>
        </footer>
    </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-card': ArcCard;
  }
}
