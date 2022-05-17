import { html, LitElement } from 'lit';
import { state } from 'lit/decorators.js';
import styles from './arc-bottombar.styles.js';

/**
 * @slot - This slot is used to add icon-buttons to the bottom bar.
 */
export default class ArcBottombar extends LitElement {
  static tag = 'arc-bottombar';

  static styles = styles;

  /** @internal - State that stores the max tab count */
  @state() private tabs: number = 5;

  /** @internal - State that keeps track of the current tab count */
  @state() private tabCount: number;

  handleTabChange(e: any) {
    const isTab = (element: any) => element.tagName === 'ARC-ICON-BUTTON';

    const nodes = e.target.assignedElements({ flatten: true });
    const navTabs = nodes.filter(isTab);

    this.tabCount = navTabs.length;

    if (this.tabCount > this.tabs) {
      // TODO: ARC-12 Put the slotted tabs inside an arc-dropdown component once they exceed the given tab count
      this.log(`Please limit your tab count to a maximum of ${this.tabs} tabs`);
    }
  }

  log(msg: string) {
    // eslint-disable-next-line no-console
    console.log(msg);
  }

  render() {
    return html`
      <nav id="main" aria-label="mobile navigation">
        <slot @slotchange=${this.handleTabChange}></slot>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-bottombar': ArcBottombar;
  }
}
