import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import './Container.js';

describe('Container', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<arc-container></arc-container>`);
  });

  it('renders a main container', () => {
    const main = element.shadowRoot.getElementById('main');
    expect(main).to.exist;
  });
  it('renders the nav, side and content slots', () => {
    const main = element.shadowRoot.getElementById('main');
    expect(main.childElementCount).to.be.greaterThan(0);
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
