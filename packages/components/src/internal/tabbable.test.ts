import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { expect, fixture } from '@open-wc/testing';

import { getTabbableBoundary } from './tabbable.js';

@customElement('tab-test')
class TabTest extends LitElement {
  protected render() {
    return html`
      <button id="button">Tabbable</button>
      <span>Not tabbable</span>
      <a id="anchor" href="/">Tabbable</a>
      <a>Not tabbable</a>
    `;
  }
}

describe('getTabbableBoundary', () => {
  it('should return the first and last tabbable items', async () => {
    const element: TabTest = await fixture(
      html`<tab-test>Not Tabbable</tab-test>`,
    );
    const button = element.shadowRoot?.getElementById('button');
    const anchor = element.shadowRoot?.getElementById('anchor');

    const boundary = getTabbableBoundary(element);
    const { start, end } = boundary;

    expect(start).to.equal(button);
    expect(end).to.equal(anchor);
  });

  it('should return null for the first and last tabbable items', () => {
    const tabTestTwo = document.createElement('div');
    tabTestTwo.innerHTML = 'Not tabbable';

    const boundary = getTabbableBoundary(tabTestTwo);
    const { start, end } = boundary;

    expect(start).to.be.null;
    expect(end).to.be.null;
  });
});
