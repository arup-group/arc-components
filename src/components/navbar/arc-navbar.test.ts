import { html } from 'lit';
import { expect, fixture, elementUpdated } from '@open-wc/testing';

import { ArcNavbar } from './ArcNavbar.js';
import './arc-navbar.js';

describe('ArcNavbar', () => {
  describe('rendering', () => {
    let element: ArcNavbar;
    beforeEach(async () => {
      element = await fixture(html`<arc-navbar></arc-navbar>`);
    });

    it('renders the navbar with default properties in the dom', () => {
      expect(element).dom.to.equal('<arc-navbar></arc-navbar>');
    })

    it('renders slots to fill the navbar', () => {
      const leftContainer = element.shadowRoot!.getElementById('left')!;
      const tabContainer = element.shadowRoot!.getElementById('tabs')!;

      expect(leftContainer.querySelector('slot[name="name"]')).to.exist;
      expect(tabContainer.querySelector('slot')).to.exist;
    })

    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });

    it('renders the navbar without an Arup logo', async () => {
      element.arup = false;
      await elementUpdated(element);

    })
  });
})
