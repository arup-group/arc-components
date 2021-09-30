import { html } from 'lit';
import { expect, fixture, elementUpdated } from '@open-wc/testing';

import { ArcSidebar } from './ArcSidebar.js';
import './arc-sidebar.js';

describe('ArcSidebar', () => {
  describe('rendering', () => {
    let element: ArcSidebar;
    let main: HTMLElement;

    beforeEach(async () => {
      element = await fixture(html`<arc-sidebar></arc-sidebar>`);
      main = element.shadowRoot!.getElementById('main')!;
    });

    it('renders a slot to fill the sidebar', () => {
      expect(main.querySelector('slot')).to.exist;
    })

    it('adds a gap between multiple slots', async () => {
      element.innerHTML = `
        <div>Slotted content 1</div>
        <div>Slotted content 2</div>
      `;
      await elementUpdated(element);

      expect(main.classList.contains('gap')).to.be.true;
    })

    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });
  describe('css variables', () => {
    it('uses the default css variables', async () => {
      const element: ArcSidebar = await fixture(html`<arc-sidebar></arc-sidebar>`);
      const elementStyles = window.getComputedStyle(element);

      expect(elementStyles.getPropertyValue('--gap-distance')).to.equal('');
      expect(elementStyles.getPropertyValue('width')).to.equal('auto');
    });
    it('overwrites the css variables', async () => {
      const element: ArcSidebar = await fixture(html`
        <arc-sidebar style='--gap-distance:2rem; width:368px'></arc-sidebar>
      `);
      const elementStyles = window.getComputedStyle(element);

      expect(elementStyles.getPropertyValue('--gap-distance')).to.equal('2rem');
      expect(elementStyles.getPropertyValue('width')).to.equal(`368px`);
    });
  })
})
