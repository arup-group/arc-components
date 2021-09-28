import { html } from 'lit';
import { expect, fixture } from '@open-wc/testing';

import { ArcNavbar } from './ArcNavbar.js';
import './arc-navbar.js';

describe('ArcNavbar', () => {
  describe('rendering', () => {
    let element: ArcNavbar;
    beforeEach(async () => {
      element = await fixture(html`<arc-navbar></arc-navbar>`);
    });

    it('renders slots to fill the tabs', () => {
      const tabContainer = element.shadowRoot!.getElementById('tabs')!;

      expect(tabContainer.querySelector('slot')).to.exist;
    })

    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });
})
