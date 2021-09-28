import { html } from 'lit';
import { expect, fixture, elementUpdated } from '@open-wc/testing';
import { setViewport } from '@web/test-runner-commands';

import { ArcNavbar } from './ArcNavbar.js';
import './arc-navbar.js';
import '../button/arc-button.js';

describe('ArcNavbar', () => {
  describe('rendering', () => {
    let element: ArcNavbar;
    let leftContainer: HTMLElement;
    let rightContainer: HTMLElement;

    beforeEach(async () => {
      element = await fixture(html`<arc-navbar></arc-navbar>`);
      leftContainer = element.shadowRoot!.getElementById('left')!;
      rightContainer = element.shadowRoot!.getElementById('right')!;
    });

    it('renders the navbar with default properties in the dom', () => {
      expect(element).dom.to.equal('<arc-navbar tabs="5"></arc-navbar>');
    })

    it('renders slots to fill the navbar', () => {
      expect(leftContainer.querySelector('slot[name="name"]')).to.exist;
      expect(rightContainer.querySelector('slot')).to.exist;
    })

    it('renders the navbar with a custom logo', async () => {
      element.logo = 'myCustomURL';
      await elementUpdated(element);

      const toolLogo = leftContainer.querySelector('#tool-logo')!;
      expect(toolLogo).to.exist;
      expect(toolLogo.getAttribute('src')).to.equal('myCustomURL');
    })

    it('renders the navbar with a custom tab count', async () => {
      element.tabs = 1;
      await elementUpdated(element);
      expect(element.getAttribute('tabs')).to.equal('1');

      // TODO: ARC-12 Write a test once the arc-dropdown functionality is added
    })

    it('renders the navbar with/without an Arup logo', async () => {
      element.arup = false;
      await elementUpdated(element);
      expect(rightContainer.querySelector('#company-logo')).to.be.null;

      element.arup = true;
      await elementUpdated(element);
      expect(rightContainer.querySelector('#company-logo')).to.be.exist;

      element.setAttribute('arup', 'false');
      await elementUpdated(element);
      expect(rightContainer.querySelector('#company-logo')).to.be.null;

      element.setAttribute('arup', 'true');
      await elementUpdated(element);
      expect(rightContainer.querySelector('#company-logo')).to.be.exist;
    })

    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });
  describe('responsiveness', () => {
    let element: ArcNavbar;
    let toolName: HTMLElement;
    let tabContainer: HTMLElement;

    beforeEach(async () => {
      element = await fixture(html`
        <arc-navbar tabs='2'>
          <span slot='name'>Custom Brand</span>
          <arc-button type='tab'>1</arc-button>
          <arc-button type='tab'>2</arc-button>
          <arc-button type='tab'>3</arc-button>
        </arc-navbar>
      `)
      toolName = element.shadowRoot!.getElementById('tool-name')!;
      tabContainer = element.shadowRoot!.getElementById('tabs')!;
    })
    it('shows the correct elements on a desktop', async () => {
      await setViewport({ width: 1200, height: 640 });
      expect(window.getComputedStyle(<Element>toolName).display).to.equal('block');
      expect(window.getComputedStyle(<Element>tabContainer).display).to.equal('grid');
    })
    it('shows the correct elements on a phone', async () => {
      await setViewport({ width: 360, height: 640 });

      // If the component has no logo, display the tool name
      expect(window.getComputedStyle(<Element>toolName).display).to.equal('block');

      // If the component has a logo, hide the tool name
      element.logo = 'myCustomLogo';
      await elementUpdated(element);
      expect(window.getComputedStyle(<Element>toolName).display).to.equal('none');

      // Hide the tabs
      expect(window.getComputedStyle(<Element>tabContainer).display).to.equal('none');

      // TODO: ARC-12 Write a test once the arc-dropdown functionality is added
    })
  });
})
