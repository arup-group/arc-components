import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { mobileBreakpoint } from '../../utilities/ui-utils.js';

export default class ArcHero extends LitElement {
  static tag = 'arc-hero';

  static styles = [
    css`

      #main{
        display: grid;
        font-family: var(--arc-font-headline);
        padding: var(--arc-spacing-medium);
        color:var(--custom-color);
      }

      /* For slotted image, fit the image */
      ::slotted(img) {
        width: 100%;
        height: 100%;
        object-fit: cover;
        overflow: hidden;
      }

      #title {
        font-size: var(--arc-font-size-xxxx-large);
        line-height:var(--arc-line-height-x-small-dense);
        padding-top:500px;
      }
      #title,
      #content {
        word-break: break-word;
        font-weight:var(--arc-font-weight-normal);
      }
      #content {
        font-size: var(--arc-font-size-x-large);
        line-height:var( --arc-line-height-x-small-dense);
        line-height:1.9rem;
      }

      /* Medium devices and up */
      @media (min-width: ${mobileBreakpoint}rem) {
        #main {
          grid-auto-flow: column;
          place-items: center;
          gap: var(--arc-spacing-medium);
        }
      }
    `,
  ];

  @property({ type: String }) bgImg: string;

  render() {
    /* Cover hero with the background image */
    const setImg = { background: `  url(${this.bgImg})  no-repeat  center center `, "background-size" : 'cover'};
    return html`
      <section id="main"  aria-label="hero section" style=${styleMap(setImg)} tabindex="0">
        <slot id="title" name="title"></slot>
        <slot id="content"></slot>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-hero': ArcHero;
  }
}
