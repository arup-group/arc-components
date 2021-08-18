import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import './ArcComponent.js';

describe('ArcComponents', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<arc-component></arc-component>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot.querySelector('h1');
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('No title given');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
