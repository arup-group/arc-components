import { css, html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles.js';

import '../spinner/arc-spinner.js';

/**
 * @slot default - A description of the default slot.
 * @slot something - A description of the something slot.
 *
 * @event arc-event-name - A description of the event.
 *
 * @cssproperty --custom-color - A description of the --custom-color property.
 */
export default class ArcImage extends LitElement {
  static tag = 'arc-image';

  static styles = [
    componentStyles,
    css`
      :host {
        --custom-color: rgb(var(--arc-red-050));
      }
      #main {
        color: var(--custom-color);
      }
      #main.active {
        color: rgb(var(--arc-green-050));
      }
    `,
  ];

  /** @internal - State that keeps track of the intersection observer. */
  @state() private _intersectionObserver: IntersectionObserver;

  /** Set the path to the image. */
  @property({ type: String }) src: string;

  /** Set the path to a fallback image. */
  @property({ type: String }) fallback: string = '';

  /** Set the alternate text for the image. */
  @property({ type: String }) alt: string;

  /** Set the delay in ms before loading the image. */
  @property({
    type: Number,
    reflect: true,
    converter: (attrValue: string | null) => {
      if (!attrValue) return;
      const delayInt = parseInt(attrValue, 10);
      return !!delayInt ? delayInt : 1000;
    },
  })
  delay: number = 1000;

  /** Set the margin of the bounding box. */
  @property({ type: String }) margin: string;

  /** Set the width of the image. */
  @property({ type: String }) width: string;

  /** Set the height of the image. */
  @property({ type: String }) height: string;

  connectedCallback() {
    super.connectedCallback();
  }

  private _attachObserver() {}

  private _removeObserver() {}

  render() {
    return html`
      <div id="main">
        <img src=${this.src} alt="" />
        <arc-spinner></arc-spinner>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-image': ArcImage;
  }
}
