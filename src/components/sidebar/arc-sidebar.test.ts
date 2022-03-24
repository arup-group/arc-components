import { html } from 'lit';
import { expect, fixture, elementUpdated, oneEvent, waitUntil } from '@open-wc/testing';
import sinon, { SinonSpy } from 'sinon';
import { getPropertyValue } from '../../utilities/style-utils.js';
import { hasSlot } from '../../internal/slot.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';

import type ArcSidebar from './ArcSidebar.js';
import './arc-sidebar.js';

describe('ArcSidebar', () => {
  /* Test the rendering of the component */
  describe('rendering', () => {
    let element: ArcSidebar;
    beforeEach(async () => {
      element = await fixture(html`<arc-sidebar label="Test sidebar"></arc-sidebar>`);
    });

    /* Test properties that reflect to the DOM */
    it('renders the element with default properties in the dom', () => {
      expect(element).dom.to.equal(`<arc-sidebar label='Test sidebar' open=''></arc-sidebar>`);
    });

    /* Test the accessibility */
    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });

    it('should be rendered as a page landmark', () => {
      const mainDiv = element.shadowRoot?.getElementById('main')!;
      expect(mainDiv.tagName).to.equal('ASIDE');
      expect(mainDiv.hasAttribute('aria-label')).to.be.true;
    });
  });

  /* Test the setters/getters */
  describe('setters/getters', () => {
    it('renders the element with a custom label property', async () => {
      const element: ArcSidebar = await fixture(html`<arc-sidebar label="Test label"></arc-sidebar>`);

      expect(element.label).to.equal('Test label');
      expect(element.getAttribute('label')).to.equal('Test label');
    });
  });

  /* Test different component states (active, disabled, loading etc.) */
  describe('states', () => {
    let element: ArcSidebar;

    beforeEach(async () => {
      element = await fixture(html`<arc-sidebar></arc-sidebar>`);
    });

    it('toggle the open state with setters/getters', async () => {
      expect(element.open).to.be.true;
      expect(element.hasAttribute('open')).to.be.true;

      /* Close */
      element.open = false;
      await elementUpdated(element);
      expect(element.hasAttribute('open')).to.be.false;

      /* Open */
      element.open = true;
      await elementUpdated(element);
      expect(element.open).to.be.true;
      expect(element.hasAttribute('open')).to.be.true;
    });

    it('toggle the open state with the toggle button', async () => {
      /* By default the sidebar is set in the open state */
      const toggleClose = element.shadowRoot!.getElementById('toggleClose')!;
      expect(toggleClose).to.exist;
      toggleClose.click();

      await elementUpdated(element);
      expect(element.open).to.be.false;
      expect(element.hasAttribute('open')).to.be.false;

      /* When the open state === false, the toggleOpen should be displayed */
      const toggleOpen = element.shadowRoot!.getElementById('toggleOpen')!;
      expect(toggleOpen).to.exist;
      toggleOpen.click();

      await elementUpdated(element);
      expect(element.open).to.be.true;
      expect(element.hasAttribute('open')).to.be.true;
    });
  });

  /* Test the events (click, focus, blur etc.) */
  describe('events', () => {
    let element: ArcSidebar;

    const showHandler: SinonSpy = sinon.spy();
    const afterShowHandler: SinonSpy = sinon.spy();
    const hideHandler: SinonSpy = sinon.spy();
    const afterHideHandler: SinonSpy = sinon.spy();

    beforeEach(async () => {
      element = await fixture(html`<arc-sidebar></arc-sidebar>`);
    });

    afterEach(() => {
      showHandler.resetHistory();
      afterShowHandler.resetHistory();
      hideHandler.resetHistory();
      afterHideHandler.resetHistory();
    });

    it('should emit arc-show and arc-after-show when calling show()', async () => {
      await element.hide();

      element.addEventListener(ARC_EVENTS.show, showHandler);
      element.addEventListener(ARC_EVENTS.afterShow, afterShowHandler);

      await element.show();

      expect(showHandler).to.have.been.calledOnce;
      expect(afterShowHandler).to.have.been.calledOnce;
      expect(element.open).to.be.true;
    });

    it('should emit arc-hide and arc-after-hide when calling hide()', async () => {
      element.addEventListener(ARC_EVENTS.hide, hideHandler);
      element.addEventListener(ARC_EVENTS.afterHide, afterHideHandler);

      await element.hide();

      expect(hideHandler).to.have.been.calledOnce;
      expect(afterHideHandler).to.have.been.calledOnce;
      expect(element.open).to.be.false;
    });

    it('should emit arc-show and arc-after-show when setting open = true', async () => {
      await element.hide();

      element.addEventListener(ARC_EVENTS.show, showHandler);
      element.addEventListener(ARC_EVENTS.afterShow, afterShowHandler);

      element.open = true;
      await waitUntil(() => showHandler.calledOnce);
      await waitUntil(() => afterShowHandler.calledOnce);

      expect(showHandler).to.have.been.calledOnce;
      expect(afterShowHandler).to.have.been.calledOnce;
      expect(element.open).to.be.true;
    });

    it('should emit arc-hide and arc-after-hide when setting open = false', async () => {
      element.addEventListener(ARC_EVENTS.hide, hideHandler);
      element.addEventListener(ARC_EVENTS.afterHide, afterHideHandler);

      element.open = false;
      await waitUntil(() => hideHandler.calledOnce);
      await waitUntil(() => afterHideHandler.calledOnce);

      expect(hideHandler).to.have.been.calledOnce;
      expect(afterHideHandler).to.have.been.calledOnce;
      expect(element.open).to.be.false;
    });

    it('should prevent emitting the arc-show and arc-after-show when the sidebar is already open', async () => {
      await element.hide();

      element.addEventListener(ARC_EVENTS.show, showHandler);
      element.addEventListener(ARC_EVENTS.afterShow, afterShowHandler);

      await element.show();
      await element.show();

      expect(showHandler).to.have.been.calledOnce;
      expect(afterShowHandler).to.have.been.calledOnce;
    });

    it('should prevent emitting the arc-hide and arc-after-hide when the sidebar is not open', async () => {
      element.addEventListener(ARC_EVENTS.hide, hideHandler);
      element.addEventListener(ARC_EVENTS.afterHide, afterHideHandler);

      await element.hide();
      await element.hide();

      expect(hideHandler).to.have.been.calledOnce;
      expect(afterHideHandler).to.have.been.calledOnce;
    });

    it('triggers the arc-show event', async () => {
      element.open = false;
      await elementUpdated(element);

      const clickButton = () => element.shadowRoot!.querySelector('arc-icon-button')!.click();
      setTimeout(clickButton);
      await oneEvent(element, 'arc-show');
      expect(element.open).to.be.true;
    });

    it('triggers the arc-hide event', async () => {
      const clickButton = () => element.shadowRoot!.querySelector('arc-icon-button')!.click();
      setTimeout(clickButton);
      await oneEvent(element, 'arc-hide');
      expect(element.open).to.be.false;
    });
  });

  /* Test whether the slots can be filled and that they exist */
  describe('slots', () => {
    it('renders default slots to fill the component', async () => {
      const element: ArcSidebar = await fixture(html`<arc-sidebar></arc-sidebar>`);
      const main: HTMLElement = element.shadowRoot!.getElementById('main')!;

      /* An empty slot is available */
      expect(hasSlot(main)).to.be.true;

      /* A specific (named) slot is available */
      expect(hasSlot(main, 'label')).to.be.true;
    });

    it('should automatically add a gap between added slots', async () => {
      const element = await fixture(html`
        <arc-sidebar style="--gap-distance: 30px;">
          <div>Test container</div>
          <div>Test container</div>
        </arc-sidebar>
      `);
      const content = element.shadowRoot!.getElementById('content')!;
      const containerStyles = window.getComputedStyle(content);
      expect(containerStyles.getPropertyValue('column-gap')).to.equal('30px');
    });
  });

  /* Test the css variables that can be overwritten */
  describe('css variables', () => {
    it('uses the default css variables', async () => {
      const element: ArcSidebar = await fixture(html`<arc-sidebar></arc-sidebar>`);

      expect(getPropertyValue(element, '--gap-distance')).to.equal('');
      expect(getPropertyValue(element, '--sidebar-width')).to.equal('clamp(15rem, 30%, 23rem)');
    });
    it('overwrites the css variables', async () => {
      const element: ArcSidebar = await fixture(html`
        <arc-sidebar style="--gap-distance:5px; --sidebar-width:368px"></arc-sidebar>
      `);

      expect(getPropertyValue(element, '--gap-distance')).to.equal('5px');
      expect(getPropertyValue(element, '--sidebar-width')).to.equal('368px');
    });
  });
});
