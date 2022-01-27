import { html } from 'lit';
import { elementUpdated, expect, fixture, waitUntil } from '@open-wc/testing';
import { setViewport } from '@web/test-runner-commands';
import sinon, { SinonSpy } from 'sinon';
import { getPropertyValue } from '../../utilities/style-utils.js';
import { hasSlot } from '../../utilities/dom-utils.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';

import type ArcNavbar from './ArcNavbar.js';
import './arc-navbar.js';
import '../button/arc-button.js';

describe('ArcNavbar', () => {
  /* Test the rendering of the component */
  describe('rendering', () => {
    let element: ArcNavbar;
    beforeEach(async () => {
      element = await fixture(html`<arc-navbar></arc-navbar>`);
    });

    /* Test default properties that reflect to the DOM */
    it('renders the element with default properties in the dom', () => {
      expect(element).dom.to.equal(`<arc-navbar arup='' tabs='5'></arc-navbar>`);
    });

    /* Test the accessibility */
    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });

  /* Test the setters/getters */
  describe('setters/getters', () => {
    it('renders the navbar with a custom home property', async () => {
      const element: ArcNavbar = await fixture(html` <arc-navbar home="myURL"></arc-navbar>`);
      const logoWrapper = element.shadowRoot!.querySelector('#logoWrapper')!;

      expect(element.home).to.equal('myURL');
      expect(element.getAttribute('home')).to.equal('myURL');
      expect(logoWrapper.getAttribute('href')).to.equal('myURL');
    });

    it('renders the logoWrapper as a div when no home property is set', async () => {
      const element: ArcNavbar = await fixture(html` <arc-navbar></arc-navbar>`);
      const logoWrapper = element.shadowRoot!.querySelector('#logoWrapper')!;

      expect(logoWrapper.tagName).to.equal('DIV');
    });

    it('renders the navbar with a custom logo property', async () => {
      const element: ArcNavbar = await fixture(html` <arc-navbar logo="myURL"></arc-navbar>`);
      const toolLogo = element.shadowRoot!.querySelector('#tool-logo')!;
      expect(toolLogo).to.exist;

      expect(element.logo).to.equal('myURL');
      expect(element.getAttribute('logo')).to.equal('myURL');
      expect(toolLogo.getAttribute('src')).to.equal('myURL');
    });

    it('renders the navbar without an Arup logo', async () => {
      const element: ArcNavbar = await fixture(html` <arc-navbar arup="false"></arc-navbar>`);
      const companyLogo = element.shadowRoot!.querySelector('#company-logo')!;
      expect(companyLogo).to.be.null;

      expect(element.arup).to.equal(false);
      expect(element.hasAttribute('arup')).to.be.false;
    });

    it('renders the navbar with a custom tabs property', async () => {
      const element: ArcNavbar = await fixture(html` <arc-navbar tabs="3"></arc-navbar>`);

      expect(element.tabs).to.equal(3);
      expect(element.getAttribute('tabs')).to.equal('3');
    });
  });

  /* Test the events (click, focus, blur etc.) */
  describe('events', () => {
    let element: ArcNavbar;

    const showHandler: SinonSpy = sinon.spy();

    beforeEach(async () => {
      element = await fixture(html`<arc-navbar></arc-navbar>`);
    });

    afterEach(() => {
      showHandler.resetHistory();
    });

    it('should emit arc-show-accessibility when calling emitAccessibility()', async () => {
      element.addEventListener(ARC_EVENTS.showAccessibility, showHandler);

      await element.emitAccessibility();
      await waitUntil(() => showHandler.calledOnce);
      expect(showHandler).to.have.been.calledOnce;
    });
  });

  /* Test the component responsiveness */
  describe('responsiveness', () => {
    let element: ArcNavbar;
    let toolName: HTMLElement;
    let tabContainer: HTMLElement;
    let tabSlot: HTMLElement;

    /* Function that returns hidden and untouched elements when the slotted button and icon-button components exceed the tab limit */
    function retrieveElements() {
      return {
        hiddenTabs: [...element.children].filter(el => (el as HTMLElement).style.display === 'none'),
        untouchedElements: [...element.children].filter(el => (el as HTMLElement).style.display === '')
      };
    }

    beforeEach(async () => {
      element = await fixture(html`
        <arc-navbar tabs="7">
          <span slot="name">Custom Brand</span>
          <div>Some div</div>
          <arc-dropdown>
            <arc-button slot='trigger'>Dropdown</arc-button>
          </arc-dropdown>
          <arc-button type="tab">1</arc-button>
          <arc-button type="tab" disabled>2</arc-button>
          <arc-button type="tab"></arc-button>
          <arc-icon-button>Home</arc-icon-button>
          <arc-icon-button label='Home'></arc-icon-button>
          <arc-icon-button name='home'></arc-icon-button>
          <arc-icon-button></arc-icon-button>
        </arc-navbar>
      `);
      toolName = element.shadowRoot!.getElementById('tool-name')!;
      tabContainer = element.shadowRoot!.getElementById('tabs')!;
      tabSlot = element.shadowRoot!.getElementById('tabSlot')!;
    });

    it('shows the correct elements on a desktop', async () => {
      await setViewport({ width: 1200, height: 640 });

      expect(getPropertyValue(toolName, 'display')).to.equal('flex');
      expect(getPropertyValue(tabSlot, 'display')).to.equal('flex');
    });

    it('shows the correct elements on a phone', async () => {
      await setViewport({ width: 360, height: 640 });

      /* If the component has no logo, display the tool name */
      expect(getPropertyValue(toolName, 'display')).to.equal('flex');

      /* If the component has a logo, hide the tool name */
      element.logo = 'myCustomLogo';
      await elementUpdated(element);
      expect(getPropertyValue(toolName, 'display')).to.equal('none');

      /* Hide the tabs */
      expect(getPropertyValue(tabSlot, 'display')).to.equal('none');
    });

    it('shows the correct elements when the tab count changes', async () => {
      /* Lower the tab count to exceed the tab limit */
      element.tabs = 1;
      await elementUpdated(element);
      expect(element.showDropdown).to.be.true;

      /* Validate the hidden tabs and untouched elements */
      expect(retrieveElements().hiddenTabs.length).to.equal(7);
      expect(retrieveElements().untouchedElements.length).to.equal(3);

      /* A dropdown menu exists */
      const dropdown = tabContainer.querySelector('arc-dropdown');
      expect(dropdown).to.exist;
    });

    it('shows the correct elements when slots change', async () => {
      /* Add a new child component to exceed the tab limit */
      element.appendChild(document.createElement('arc-button'));
      await elementUpdated(element);

      /* Validate the hidden tabs and untouched elements */
      expect(retrieveElements().hiddenTabs.length).to.equal(8);
      expect(retrieveElements().untouchedElements.length).to.equal(3);

      /* A dropdown menu exists */
      const dropdown = tabContainer.querySelector('arc-dropdown');
      expect(dropdown).to.exist;
    })

    it('retrieves the correct properties from the slotted button and icon-button components', async () => {
      element.tabs = 1;
      await elementUpdated(element);

      const dropdown = tabContainer.querySelector('arc-dropdown')!;
      const menu = dropdown.querySelector('arc-menu')!;

      /* Validate the properties of the menu-items with the button or icon-button components */
      expect(menu.children[0].textContent?.includes(`${element.children[3].textContent}`)).to.be.true;
      expect(menu.children[1].textContent?.includes(`${element.children[4].textContent}`)).to.be.true;
      expect(menu.children[1].hasAttribute('disabled')).to.equal(element.children[4].hasAttribute('disabled'));
      expect(menu.children[2].textContent?.includes('Invalid label')).to.be.true;
      expect(menu.children[3].textContent?.includes(`${element.children[6].textContent}`)).to.be.true;
      expect(menu.children[4].textContent?.includes(`${element.children[7].getAttribute('label')}`)).to.be.true;
      expect(menu.children[5].textContent?.includes(`${element.children[8].getAttribute('name')}`)).to.be.true;
      expect(menu.children[6].textContent?.includes('Invalid label')).to.be.true;
    })
  });

  /* Test whether the slots can be filled and that they exist */
  describe('slots', () => {
    let element: ArcNavbar;
    beforeEach(async () => {
      element = await fixture(html` <arc-navbar></arc-navbar>`);
    });

    it('renders slots to fill the navbar', () => {
      const leftContainer = element.shadowRoot!.getElementById('left')!;
      const rightContainer = element.shadowRoot!.getElementById('right')!;

      expect(hasSlot(leftContainer, 'name')).to.be.true;
      expect(hasSlot(rightContainer)).to.be.true;
      expect(hasSlot(rightContainer, 'user')).to.be.true;
    });
  });

  /* Test the css variables that can be overwritten */
  describe('css variables', () => {
    it('uses the default css variables', async () => {
      const element: ArcNavbar = await fixture(html` <arc-navbar></arc-navbar>`);

      expect(getPropertyValue(element, 'height')).to.equal('auto');
    });
    it('overwrites the css variables', async () => {
      const element: ArcNavbar = await fixture(html` <arc-navbar style="height:30px"></arc-navbar>`);

      expect(getPropertyValue(element, 'height')).to.equal('30px');
    });
  });
});
