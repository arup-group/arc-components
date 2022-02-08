import { css, html, LitElement } from 'lit';
import { mobileBreakpoint } from "../../utilities/ui-utils.js";



export default class ArcHero extends LitElement {
  static tag = 'arc-hero';

  static styles = [
    css`
      #main{
        display: flex;
        flex-direction: column;
      }
        #title, #content{
        flex : 1 1 100%;
        overflow: auto;
        gap: var(--arc-spacing-normal);
        padding: var(--arc-spacing-normal) var(--arc-spacing-medium);
        }

        /* Medium devices and up */
        @media (min-width: ${mobileBreakpoint}rem) {
          #main{
           flex-direction: row;
          }
          #title, #content{
            flex : 1 1 50%;
            }
        `,
  ];

  render() {
    return html`
    <div id="main">
        <div id="title">
          <slot name='title'></slot>
        </div>
        <div id="content">
           <slot></slot>
        </div>
    </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-hero': ArcHero;
  }
}
