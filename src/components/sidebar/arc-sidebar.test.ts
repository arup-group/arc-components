import { html } from 'lit';
import { expect, fixture, elementUpdated } from '@open-wc/testing';
import { slotExists } from '../../utilities/dom-utils.js';

import type ArcSidebar from './ArcSidebar.js';
import './arc-sidebar.js';

describe('ArcSidebar', () => {
  // Test the rendering of the component
  // Test properties that reflect to the DOM
  describe('rendering', () => {
    let element: ArcSidebar;
    beforeEach(async () => {
      element = await fixture(html`<arc-sidebar></arc-sidebar>`);
    });

    it('renders the element with default properties in the dom', () => {
      expect(element).dom.to.equal(`<arc-sidebar open=''></arc-sidebar>`);
    });

    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });

  // Test different component states (active, disabled, loading etc.)
  describe('states', () => {
    let element: ArcSidebar;
    beforeEach(async () => {
      element = await fixture(html`<arc-sidebar></arc-sidebar>`);
    });
    it('toggle the open state with setters/getters', async () => {
      expect(element.open).to.be.true;
      expect(element.hasAttribute('open')).to.be.true;

      // Close
      element.open = false;
      await elementUpdated(element);
      expect(element.hasAttribute('open')).to.be.false;

      // Open
      element.open = true;
      await elementUpdated(element);
      expect(element.open).to.be.true;
      expect(element.hasAttribute('open')).to.be.true;
    });
    it('toggle the open state with the toggle button', async () => {
      // By default the sidebar is set in the open state
      const toggleClose = element.shadowRoot!.getElementById('toggleClose')!;
      expect(toggleClose).to.exist;
      toggleClose.click();

      await elementUpdated(element);
      expect(element.open).to.be.false;
      expect(element.hasAttribute('open')).to.be.false;

      // When the open state === false, the toggleOpen should be displayed
      const toggleOpen = element.shadowRoot!.getElementById('toggleOpen')!;
      expect(toggleOpen).to.exist;
      toggleOpen.click();

      await elementUpdated(element);
      expect(element.open).to.be.true;
      expect(element.hasAttribute('open')).to.be.true;
    });
  });

  // Test whether the slots can be filled and that they exist
  describe('slots', () => {
    it('renders a slot to fill the sidebar', async () => {
      const element: ArcSidebar = await fixture(html`<arc-sidebar></arc-sidebar>`);
      const target: HTMLElement = element.shadowRoot!.getElementById('sidebar')!;

      expect(slotExists(target)).to.be.true;
    });

    it('should automatically add a gap between added slots', async () => {
      const element = await fixture(html`
        <arc-sidebar style="--gap-distance: 30px;">
          <div>Test container</div>
          <div>Test container</div>
        </arc-sidebar>
      `);
      const sidebar = element.shadowRoot!.getElementById('sidebar')!;
      const containerStyles = window.getComputedStyle(sidebar);
      expect(containerStyles.getPropertyValue('column-gap')).to.equal('30px');
    });
  });

  // Test the css variables that can be overwritten
  describe('css variables', () => {
    it('uses the default css variables', async () => {
      const element: ArcSidebar = await fixture(
        html`<arc-sidebar></arc-sidebar>`
      );
      const elementStyles = window.getComputedStyle(element);

      expect(elementStyles.getPropertyValue('--gap-distance')).to.equal('');
      expect(elementStyles.getPropertyValue('width')).to.equal('auto');
    });
    it('overwrites the css variables', async () => {
      const element: ArcSidebar = await fixture(html`
        <arc-sidebar style="--gap-distance:2rem; width:368px"></arc-sidebar>
      `);
      const elementStyles = window.getComputedStyle(element);

      expect(elementStyles.getPropertyValue('--gap-distance')).to.equal('2rem');
      expect(elementStyles.getPropertyValue('width')).to.equal(`368px`);
    });
  });
});
