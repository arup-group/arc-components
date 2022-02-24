import {css, html, LitElement} from 'lit';
import {property} from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { mobileBreakpoint } from '../../arc';

export default class ArcHero2 extends LitElement {
  static tag = 'arc-hero2';

  static styles = [

    css`
         #main {
              display: grid;
              place-items : center;
              font-family :var(--arc-font-headline);
              gap:  var(--arc-spacing-medium);/*5vw*/
              padding:  var(--arc-spacing-medium); /*5vw*/
          }

           #main.bgImage{
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
          }

           ::slotted(img){
            width: 100%;
            height: 100%;
            object-fit: cover;
            overflow: hidden;
            }

            #title{
              font-size: var(--arc-font-size-xxxx-large);
              border:1px solid yellow;
            }
            #title,#content {
              word-break:break-word;
             /* overflow-wrap:nowrap;*/
              /*white-space:normal;*/
              margin: 0;
            }
            #content {
             font-size: var(--arc-font-size-x-large);
            }
          /* Medium devices and up */
              @media (min-width: ${mobileBreakpoint}rem) {
                #main {
                grid-auto-flow: column;
                grid-template-columns: 1fr 1fr;
                padding:var(--arc-spacing-x-large);
                }
              }    `,
    ];

    @property({type: String}) bgImg: string;
    @property({type: String}) textColor: string;

    render() {

    const setImg = {background : `url(${this.bgImg})`, color :this.textColor}
    return html`

             <div id="main" class=${classMap({bgImage:this.bgImg})} style=${styleMap(setImg)}>

              <slot id="title" name="title"></slot>
              <slot id="content"></slot>

            </div>
`
        }
    }

declare global {
  interface HTMLElementTagNameMap {
    'arc-hero2': ArcHero2;
  }
}
