import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { componentStyles } from '../styles/component.styles.js';

export class ArcNavbar extends LitElement {
  static tag = 'arc-navbar';

  static styles = [
    componentStyles,
    css`
      :host {
        display: flex;
        --height: 3.5rem;
      }

      /* Layout */
      #main, #left, #right, #tabs {
        display: grid;
        grid-auto-flow: column;
      }

      #main {
        height: var(--height);
        width: 100%;
        padding: 0 var(--arc-spacing-medium) 0 var(--arc-spacing-medium)
      }

      #left {
        justify-content: flex-start;
        padding-right: var(--arc-spacing-medium);
      }

      #left > img + #tool-name {
        margin-left: var(--arc-spacing-small);
      }

      #left > #tool-name {
        overflow: hidden;
        text-overflow: ellipsis;
      }

      #right {
        justify-content: flex-end;
        color: rgb(var(--arc-color-primary));
      }

      /* Navigation tabs */
      ::slotted(arc-button) {
        border-left: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
      }

      ::slotted(arc-button:last-child) {
        border-right: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
      }

      /* Logo's */
      #tool-logo, #company-logo {
        height: var(--arc-brand-height);
        width: auto;
      }

      #tool-logo, #company-logo, #tool-name {
        align-self: center;
      }

      #company-logo {
        margin-left: var(--arc-spacing-medium);
      }

      /* Phone */
      @media (max-width: 40rem) {
        #tabs, #left > img + #tool-name {
          display: none;
        }
      }
    `,
  ];

  @property({ type: String })
  logo: string = '';

  @property({
    type: Boolean,
    converter: (attrValue: string | null) => attrValue ? attrValue !== 'false' : true,
  })
  arup: boolean = true;

  @property({ type: Number, reflect: true })
  tabs: number = 5;

  handleTabChange = (e: any) => {
    const isButton = (element: any) => element.tagName === 'ARC-BUTTON';

    const childNodes = e.target.assignedElements({flatten: true});
    const arcTabs = childNodes.filter(isButton);

    if (arcTabs.length > this.tabs) {
      // TODO: ARC-12 Put the slotted tabs inside an arc-dropdown component once they exceed the given tab count
    }
  }

  render() {
    return html`
      <div id='main'>
        <div id='left'>
          ${this.logo && html`<img id='tool-logo' src='${this.logo}' alt='tool-logo'>`}
          <div id='tool-name'><slot name='name'></slot></div>
        </div>
        <div id='right'>
          <div id='tabs'>
            <slot @slotchange=${this.handleTabChange}></slot>
          </div>
          ${this.arup ? html`
            <svg id='company-logo' width='512' height='159' viewBox='0 0 512 159' fill='currentColor'
                 xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M331.03 146.348C302.146 146.348 289.628 133.297 284.742 125.522C279.153 116.521 278.43 104.335 278.43 94.7163V31.8024C278.43 31.1942 278.439 30.5858 278.449 29.9586C278.554 23.4 278.658 17.2028 268.47 16.8796H265.228V11.6328H317.459L317.495 16.9176L316.565 16.9081C312.668 16.8701 309.701 17.9061 307.592 19.9877C305.093 22.4686 303.819 26.4417 303.819 31.8024V101.008C303.819 124.438 314.007 136.32 334.102 136.32C345.469 136.32 355.031 132.964 361.011 126.872C370.676 116.882 371.448 103.936 371.448 88.0436V31.6124C371.448 23.267 370.62 16.8891 360.163 16.8891H357.445V11.6328H395.97V16.8891H394.343C386.627 16.8891 382.16 19.2939 382.16 31.6124V89.0037C382.167 127.594 365.439 146.348 331.03 146.348Z' />
              <path
                d='M460.357 143.553H408.078V138.325L408.962 138.297C421.216 137.945 421.842 134.029 421.842 122.775V31.7264C421.842 20.0162 421.386 17.2408 409.476 16.8891L408.592 16.8606V11.6328H461.926C493.434 11.6328 509.916 30.1011 509.916 48.3411C509.916 69.2143 491.305 85.5629 467.552 85.5629L455.785 85.3918V76.1529C455.785 76.1529 460.243 76.1054 461.867 76.1054C476.486 76.1054 484.005 65.0511 484.005 48.5978C484.005 31.4602 473.018 19.9402 456.669 19.9402L446.157 19.9117V124.895C446.157 135.92 448.152 137.916 459.483 138.287L460.367 138.316V143.553H460.357Z' />
              <path
                d='M268.611 143.553H230.943L190.642 82.2647V74.7842L191.459 74.6987C205.593 73.2064 218.862 65.0701 218.862 46.6968C218.862 31.2797 207.77 20.5201 191.887 20.5201H181.013V124.895C181.013 136.263 186.232 137.394 193.608 137.736L194.472 137.774V143.544H143.364V138.24L144.229 138.192C155.312 137.574 156.88 134.799 156.88 124.885V30.2816C156.471 18.5715 155.749 17.0697 144.267 16.8891L143.373 16.8796V11.6328H198.427C219.423 11.6328 243.945 20.8621 243.945 46.887C243.945 62.3991 234.546 73.5296 215.991 79.9834L236.903 110.856C239.183 114.354 247.567 124.524 251.322 128.668C258.479 136.367 263.63 137.432 267.043 138.135L268.611 138.468V143.553Z' />
              <path
                d='M134.287 143.553H84.4139V138.401L85.2978 138.373C91.3906 138.164 95.164 136.833 95.164 130.883C95.164 128.221 93.0825 123.013 91.9608 120.209L83.8532 100.818H38.8088L30.5299 119.676C27.783 125.902 26.9846 128.155 26.9846 131.073C26.9846 135.36 26.9846 138.192 37.0123 138.373L37.9059 138.392V143.563H1.93879V138.401L2.83226 138.382C9.96102 138.221 13.668 134.599 18.7057 122.88L67.495 11.6328H72.5042L72.7417 12.1841L121.674 127.404C125.2 135.987 126.036 138.021 133.422 138.325L134.296 138.363V143.553H134.287ZM42.5062 91.8932H80.2031L61.7729 47.1817L42.5062 91.8932Z' />
            </svg>
          ` : html``}
        </div>
      </div>
    `;
  }
}
