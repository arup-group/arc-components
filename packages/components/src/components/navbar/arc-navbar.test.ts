import { html } from 'lit';
import { elementUpdated, expect, fixture, waitUntil } from '@open-wc/testing';
import { setViewport } from '@web/test-runner-commands';
import sinon, { SinonSpy } from 'sinon';
import { getPropertyValue } from '../../utilities/style-utils.js';
import { hasSlot } from '../../internal/slot.js';
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
      expect(element).dom.to.equal(`<arc-navbar></arc-navbar>`);
    });

    /* Test the accessibility */
    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });

    it('should be rendered as a page landmark', () => {
      const mainDiv = element.shadowRoot?.getElementById('main')!;
      const navDiv = element.shadowRoot?.getElementById('tabs')!;
      expect(mainDiv.tagName).to.equal('HEADER');
      expect(navDiv.tagName).to.equal('NAV');
      expect(navDiv.hasAttribute('aria-label')).to.be.true;
    });
  });

  /* Test the setters/getters */
  describe('setters/getters', () => {
    it('renders the navbar with a custom home property', async () => {
      const element: ArcNavbar = await fixture(
        html`<arc-navbar home="myURL"></arc-navbar>`,
      );
      const logoWrapper = element.shadowRoot!.querySelector('#logoWrapper')!;

      expect(element.home).to.equal('myURL');
      expect(element.getAttribute('home')).to.equal('myURL');
      expect(logoWrapper.getAttribute('href')).to.equal('myURL');
    });

    it('renders the logoWrapper as a div when no home property is set', async () => {
      const element: ArcNavbar = await fixture(html`<arc-navbar></arc-navbar>`);
      const logoWrapper = element.shadowRoot!.querySelector('#logoWrapper')!;

      expect(logoWrapper.tagName).to.equal('DIV');
    });

    it('renders the navbar with a custom logo property', async () => {
      const element: ArcNavbar = await fixture(
        html`<arc-navbar logo="myURL"></arc-navbar>`,
      );
      const toolLogo = element.shadowRoot!.querySelector('#tool-logo')!;
      expect(toolLogo).to.exist;

      expect(element.logo).to.equal('myURL');
      expect(element.getAttribute('logo')).to.equal('myURL');
      expect(toolLogo.getAttribute('src')).to.equal('myURL');
    });
  });

  /* Test the events (click, focus, blur etc.) */
  describe('events', () => {
    let element: ArcNavbar;
    let showHandler: SinonSpy;

    beforeEach(async () => {
      showHandler = sinon.spy();
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

  /* Test whether the slots can be filled and that they exist */
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
      expect(hasSlot(rightContainer, 'user')).to.be.true;
    });
  });

  /* Test the css variables that can be overwritten */
  describe('css variables', () => {
    it('uses the default css variables', async () => {
      const element: ArcNavbar = await fixture(html`<arc-navbar></arc-navbar>`);

      expect(getPropertyValue(element, 'height')).to.equal('56px');
    });

    it('overwrites the css variables', async () => {
      const element: ArcNavbar = await fixture(
        html`<arc-navbar style="height:30px"></arc-navbar>`,
      );

      expect(getPropertyValue(element, 'height')).to.equal('30px');
    });
  });
});
