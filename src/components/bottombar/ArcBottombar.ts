import { css, html, LitElement } from 'lit';
import { state } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles.js';

export default class ArcBottombar extends LitElement {
  static tag = 'arc-bottombar';

  static styles = [
    componentStyles,
    css`
      :host {
        height: var(--arc-bottom-height);
        background: rgb(var(--arc-background-color));
      }

      #main {
        height: inherit;
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: 1fr;
      }
    `,
  ];

  @state() tabs: number = 5;

  handleTabChange = (e: any) => {
    const isIconButton = (element: any) =>
      element.tagName === 'ARC-ICON-BUTTON';

    const nodes = e.target.assignedElements({ flatten: true });
    const arcTabs = nodes.filter(isIconButton);

    if (arcTabs.length > this.tabs) {
      // TODO: ARC-12 Put the slotted tabs inside an arc-dropdown component once they exceed the given tab count
      this.log(`Please limit your tab count to a maximum of ${this.tabs} tabs`);
    }
  };

  // eslint-disable-next-line no-console
  log = (msg: string) => console.log(msg);

  render() {
    return html`
      <div id="main">
        <slot @slotchange=${this.handleTabChange}></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-bottombar': ArcBottombar;
  }
}
