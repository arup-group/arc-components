import { css, html, LitElement } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import componentStyles from '../../styles/component.styles.js';
import { HasSlotController } from '../../internal/slot.js';

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
        width: auto;
      }

      #main {
        display: grid;
        border: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-input-color));
      }

      #header,
      #body,
      #footer {
        padding: var(--arc-spacing-normal);
      }

      #image {
        width: 100%;
        overflow: hidden;
      }

      #image ::slotted(img) {
        display: block;
        width: 100%;
      }

      /* Hide elements when they are not slotted */
      #main:not(.card--has-header) #header,
      #main:not(.card--has-header) #image,
      #main:not(.card--has-body) #body,
      #main:not(.card--has-footer) #footer {
        display: none;
      }

      #header ::slotted(*),
      #footer ::slotted(*) {
        display: grid;
        align-items: center;
        grid-auto-flow: column;
        justify-content: space-between;
      }

      #footer ::slotted(*) {
        justify-content: end;
      }
    `,
  ];

  private readonly hasSlotController = new HasSlotController(this, 'header', 'image', '[default]', 'footer');

  render() {
    return html`
      <article
        id="main"
        role="article"
        aria-labelledby="title"
        class=${classMap({
          'card--has-header': this.hasSlotController.test('header'),
          'card--has-image': this.hasSlotController.test('image'),
          'card--has-body': this.hasSlotController.test('[default]'),
          'card--has-footer': this.hasSlotController.test('footer'),
        })}
      >
        <header id="header">
          <slot name="header"></slot>
        </header>
        <div id="image">
          <slot name="image"></slot>
        </div>
        <div id="body">
          <slot></slot>
        </div>
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
