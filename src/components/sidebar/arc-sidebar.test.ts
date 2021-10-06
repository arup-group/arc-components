import { html } from 'lit';
import { expect, fixture, elementUpdated } from '@open-wc/testing';

import { ArcSidebar } from './ArcSidebar.js';
import './arc-sidebar.js';

describe('ArcSidebar', () => {
  // Test the rendering of the component
  // Test properties that reflect to the DOM
  describe('rendering', () => {
    let element: ArcSidebar;
    beforeEach(async() => {
      element = await fixture(html`<arc-sidebar></arc-sidebar>`);
    })

    it('renders the element with default properties in the dom', () => {
      expect(element).dom.to.equal(`<arc-sidebar open=''></arc-sidebar>`)
    });

    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });

  // Test different component states (active, disabled, loading etc.)
  describe('states', () => {
    let element: ArcSidebar;
    beforeEach(async() => {
      element = await fixture(html`<arc-sidebar></arc-sidebar>`);
    })
    it('renders the open state', async () => {
      expect(element.open).to.be.true;
      expect(element.hasAttribute('open')).to.be.true;

      element.open = false
      await elementUpdated(element);
      expect(element.open).to.be.false;
      expect(element.hasAttribute('open')).to.be.false;
    })
  });

  // Test whether the slots can be filled and that they exist
  describe('slots', () => {
    it ('renders a slot to fill the sidebar', async () => {
      const element = await fixture(html`<arc-sidebar></arc-sidebar>`)
      expect(element.shadowRoot!.querySelector('slot')).to.exist;
    })

    it('should automatically add a gap between added slots', async () => {
      const element = await fixture(html`
        <arc-sidebar style='--gap-distance: 30px;'>
          <div>Test container</div>
          <div>Test container</div>
        </arc-sidebar>
      `)
      const main = element.shadowRoot!.getElementById('main')!;
      const containerStyles = window.getComputedStyle(<Element>main);
      expect(containerStyles.getPropertyValue('column-gap')).to.equal('30px');
    })
  });

  // Test the css variables that can be overwritten
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
  });
})
