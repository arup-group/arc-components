import { html } from 'lit';
import { expect, fixture, elementUpdated } from '@open-wc/testing';

import { ArcSidebar } from './ArcSidebar.js';
import './arc-sidebar.js';

describe('ArcSidebar', () => {
  describe('rendering', () => {
    let element: ArcSidebar;
    beforeEach(async () => {
      element = await fixture(html`<arc-sidebar></arc-sidebar>`);
    });

    it('renders a slot to fill the sidebar', () => {
      const main = element.shadowRoot!.getElementById('main')!;

      expect(main.querySelector('slot')).to.exist;
    })

    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });
  describe('css variables', () => {
    it('uses the default css variables', async () => {
      const element: ArcSidebar = await fixture(html`<arc-sidebar></arc-sidebar>`);

    });
    it('overwrites the width', async () => {
      const element: ArcSidebar = await fixture(html`<arc-sidebar></arc-sidebar>`);

    });
    it('overwrites the gap', async () => {

    })
  })
})
