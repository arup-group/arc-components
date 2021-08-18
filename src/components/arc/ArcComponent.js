import { LitElement, html, css } from 'lit';

const arcBg = new URL('../../assets/arc-background.svg', import.meta.url).href;

export class ArcComponent extends LitElement {
  static get tag() {
    return 'arc-component';
  }

  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      #main {
        min-height: 100vh;
        display: flex;
        font-size: calc(10px + 2vmin);
        color: var(--arc-grey-100);
        background-color: var(--arc-white-000);
        background-size: cover;
      }
      #main > * {
        flex-basis: 100%;
      }
      #left {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        text-align: center;
      }
      #left h1 {
        width: 100%;
        padding: 90px;
        font: var(--arc-font-headline);
        font-size: var(--arc-fontsize-large);
        overflow-wrap: break-word;
        word-wrap: break-word;
        word-break: break-word;

        /* Adds a hyphen where the word breaks, if supported (No Blink) */
        -ms-hyphens: auto;
        -moz-hyphens: auto;
        -webkit-hyphens: auto;
        hyphens: auto;
      }
      @media (max-width: 992px) {
        #right {
          display: none;
        }
      }
    `;
  }

  constructor() {
    super();
    this.title = 'No title given';
  }

  render() {
    return html`
      <main id="main" style='background-image: url("${arcBg}")'>
        <div id="left">
          <h1>${this.title}</h1>
        </div>
        <div id="right"></div>
      </main>
    `;
  }
}

customElements.define(ArcComponent.tag, ArcComponent);
