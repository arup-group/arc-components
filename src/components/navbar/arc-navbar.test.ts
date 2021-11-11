import { html } from 'lit';
import { elementUpdated, expect, fixture } from '@open-wc/testing';
import { setViewport } from '@web/test-runner-commands';
import { getPropertyValue } from '../../utilities/style-utils.js';
import { hasSlot } from '../../utilities/test-utils.js';

import type ArcNavbar from './ArcNavbar.js';
import './arc-navbar.js';
import '../button/arc-button.js';

describe('ArcNavbar', () => {
  // Test the rendering of the component
  describe('rendering', () => {
    let element: ArcNavbar;
    beforeEach(async () => {
      element = await fixture(html`<arc-navbar></arc-navbar>`);
    });

    // Test default properties that reflect to the DOM
    it('renders the element with default properties in the dom', () => {
      expect(element).dom.to.equal(
        `<arc-navbar arup='' tabs='5'></arc-navbar>`
      );
    });

    // Test the accessibility
    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });

  // Test the setters/getters
  describe('setters/getters', () => {
    it('renders the navbar with a custom logo property', async () => {
      const element: ArcNavbar = await fixture(
        html`<arc-navbar logo="myURL"></arc-navbar>`
      );
      const toolLogo = element.shadowRoot!.querySelector('#tool-logo')!;
      expect(toolLogo).to.exist;

      expect(element.logo).to.equal('myURL');
      expect(element.getAttribute('logo')).to.equal('myURL');
      expect(toolLogo.getAttribute('src')).to.equal('myURL');
    });

    it('renders the navbar without an Arup logo', async () => {
      const element: ArcNavbar = await fixture(
        html`<arc-navbar arup="false"></arc-navbar>`
      );
      const companyLogo = element.shadowRoot!.querySelector('#company-logo')!;
      expect(companyLogo).to.be.null;

      expect(element.arup).to.equal(false);
      expect(element.hasAttribute('arup')).to.be.false;
    });

    it('renders the navbar with a custom tabs property', async () => {
      const element: ArcNavbar = await fixture(
        html`<arc-navbar tabs="3"></arc-navbar>`
      );

      expect(element.tabs).to.equal(3);
      expect(element.getAttribute('tabs')).to.equal('3');
    });
  });

  // Test the component responsiveness
  describe('responsiveness', () => {
    let element: ArcNavbar;
    let toolName: HTMLElement;
    let tabContainer: HTMLElement;

    beforeEach(async () => {
      element = await fixture(html`
        <arc-navbar tabs="2">
          <span slot="name">Custom Brand</span>
          <arc-button type="tab">1</arc-button>
          <arc-button type="tab">2</arc-button>
          <arc-button type="tab">3</arc-button>
        </arc-navbar>
      `);
      toolName = element.shadowRoot!.getElementById('tool-name')!;
      tabContainer = element.shadowRoot!.getElementById('tabs')!;
    });
    it('shows the correct elements on a desktop', async () => {
      await setViewport({ width: 1200, height: 640 });

      expect(getPropertyValue(toolName, 'display')).to.equal('block');
      expect(getPropertyValue(tabContainer, 'display')).to.equal('grid');
    });
    it('shows the correct elements on a phone', async () => {
      await setViewport({ width: 360, height: 640 });

      // If the component has no logo, display the tool name
      expect(getPropertyValue(toolName, 'display')).to.equal('block');

      // If the component has a logo, hide the tool name
      element.logo = 'myCustomLogo';
      await elementUpdated(element);
      expect(getPropertyValue(toolName, 'display')).to.equal('none');

      // Hide the tabs
      expect(getPropertyValue(tabContainer, 'display')).to.equal('none');

      // TODO: ARC-12 Write a test once the arc-dropdown functionality is added
    });
  });

  // Test whether the slots can be filled and that they exist
  describe('slots', () => {
    let element: ArcNavbar;
    beforeEach(async () => {
      element = await fixture(html`<arc-navbar></arc-navbar>`);
    });

    it('renders slots to fill the navbar', () => {
      const leftContainer = element.shadowRoot!.getElementById('left')!;
      const rightContainer = element.shadowRoot!.getElementById('right')!;

      expect(hasSlot(leftContainer, 'name')).to.be.true;
      expect(hasSlot(rightContainer)).to.be.true;
    });
  });

  // Test the css variables that can be overwritten
  describe('css variables', () => {
    it('uses the default css variables', async () => {
      const element: ArcNavbar = await fixture(html`<arc-navbar></arc-navbar>`);

      expect(getPropertyValue(element, 'height')).to.equal('auto');
    });
    it('overwrites the css variables', async () => {
      const element: ArcNavbar = await fixture(
        html`<arc-navbar style="height:30px"></arc-navbar>`
      );

      expect(getPropertyValue(element, 'height')).to.equal('30px');
    });
  });
});
