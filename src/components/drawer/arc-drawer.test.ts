import { html } from 'lit';
import { expect, fixture, elementUpdated, waitUntil } from '@open-wc/testing';
import sinon, { SinonSpy } from 'sinon';
import { getPropertyValue } from '../../utilities/style-utils.js';
import { hasSlot } from '../../internal/slot.js';
import { escEvent } from '../../utilities/test-utils.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';

import type ArcDrawer from './ArcDrawer.js';
import './arc-drawer.js';

describe('ArcDrawer', () => {
  /* Test the rendering of the component */
  describe('rendering', () => {
    let element: ArcDrawer;
    beforeEach(async () => {
      element = await fixture(html`<arc-drawer></arc-drawer>`);
    });

    /* Test default properties that reflect to the DOM */
    it('renders the element with default properties in the dom', () => {
      expect(element).dom.to.equal(`<arc-drawer placement='end'></arc-drawer>`);
    });

    /* Test the accessibility */
    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });

  /* Test the setters/getters */
  describe('setters/getters', () => {
    it('renders the element with a custom placement and label property', async () => {
      const element: ArcDrawer = await fixture(html`<arc-drawer placement="top" label="Test label"></arc-drawer>`);

      expect(element.placement).to.equal('top');
      expect(element.getAttribute('placement')).to.equal('top');

      expect(element.label).to.equal('Test label');
      expect(element.getAttribute('label')).to.equal('Test label');
    });

    it('activates the drawer when the open state is set', async () => {
      const element: ArcDrawer = await fixture(html`<arc-drawer open></arc-drawer>`);
      const panel = element.shadowRoot?.getElementById('panel');
      const isOpen = () => panel?.getAttribute('aria-hidden') === 'false';

      expect(element.open).to.be.true;
      expect(element.hasAttribute('open')).to.be.true;
      expect(isOpen()).to.be.true;
    });
  });

  /* Test different component states (active, disabled, loading etc.) */
  describe('states', () => {
    let element: ArcDrawer;

    beforeEach(async () => {
      element = await fixture(html`<arc-drawer></arc-drawer>`);
    });

    it('renders the component in an open state', async () => {
      expect(element.open).to.be.false;
      expect(element.hasAttribute('open')).to.be.false;

      element.open = true;
      await elementUpdated(element);

      expect(element.open).to.be.true;
      expect(element.hasAttribute('open')).to.be.true;
    });

    it('renders the component in a contained state', async () => {
      expect(element.contained).to.be.false;
      expect(element.hasAttribute('contained')).to.be.false;

      element.contained = true;
      await elementUpdated(element);

      expect(element.contained).to.be.true;
      expect(element.hasAttribute('contained')).to.be.true;
    });
  });

  /* Test the events (click, focus, blur etc.) */
  describe('events', () => {
    let element: ArcDrawer;
    let elementTwo: ArcDrawer;
    let input: HTMLElement;
    let overlay: HTMLElement;
    let panel: HTMLElement;
    let isOpen: Function;

    const showHandler: SinonSpy = sinon.spy();
    const afterShowHandler: SinonSpy = sinon.spy();
    const initialFocusHandler: SinonSpy = sinon.spy(event => {
      event.preventDefault();
      input.focus();
    });
    const closeHandler: SinonSpy = sinon.spy();
    const hideHandler: SinonSpy = sinon.spy();
    const afterHideHandler: SinonSpy = sinon.spy();

    beforeEach(async () => {
      element = await fixture(html`<arc-drawer id="one"><input /></arc-drawer>`);
      elementTwo = await fixture(html`<arc-drawer id="two"><input /></arc-drawer>`);

      input = element.querySelector('input') as HTMLElement;
      overlay = element.shadowRoot?.getElementById('overlay') as HTMLElement;
      panel = element.shadowRoot?.getElementById('panel') as HTMLElement;
      isOpen = () => panel.getAttribute('aria-hidden') === 'false';
    });

    afterEach(() => {
      showHandler.resetHistory();
      afterShowHandler.resetHistory();
      initialFocusHandler.resetHistory();
      closeHandler.resetHistory();
      hideHandler.resetHistory();
      afterHideHandler.resetHistory();
      element.open = false;
    });

    it('should emit arc-show and arc-after-show when calling show()', async () => {
      element.addEventListener(ARC_EVENTS.show, showHandler);
      element.addEventListener(ARC_EVENTS.afterShow, afterShowHandler);

      await element.show();
      await waitUntil(() => showHandler.calledOnce);
      await waitUntil(() => afterShowHandler.calledOnce);

      expect(showHandler).to.have.been.calledOnce;
      expect(afterShowHandler).to.have.been.calledOnce;
      expect(element.open).to.be.true;
      expect(isOpen()).to.be.true;
    });

    it('should emit arc-hide and arc-after-hide when calling hide()', async () => {
      await element.show();

      element.addEventListener(ARC_EVENTS.hide, hideHandler);
      element.addEventListener(ARC_EVENTS.afterHide, afterHideHandler);

      await element.hide();
      await waitUntil(() => hideHandler.calledOnce);
      await waitUntil(() => afterHideHandler.calledOnce);

      expect(hideHandler).to.have.been.calledOnce;
      expect(afterHideHandler).to.have.been.calledOnce;
      expect(element.open).to.be.false;
      expect(isOpen()).to.be.false;
    });

    it('should emit arc-show and arc-after-show when setting open = true', async () => {
      element.addEventListener(ARC_EVENTS.show, showHandler);
      element.addEventListener(ARC_EVENTS.afterShow, afterShowHandler);

      element.open = true;
      await waitUntil(() => showHandler.calledOnce);
      await waitUntil(() => afterShowHandler.calledOnce);

      expect(showHandler).to.have.been.calledOnce;
      expect(afterShowHandler).to.have.been.calledOnce;
      expect(element.open).to.be.true;
      expect(isOpen()).to.be.true;
    });

    it('should emit arc-hide and arc-after-hide when setting open = false', async () => {
      element.open = true;
      await elementUpdated(element);

      element.addEventListener(ARC_EVENTS.hide, hideHandler);
      element.addEventListener(ARC_EVENTS.afterHide, afterHideHandler);

      element.open = false;
      await waitUntil(() => hideHandler.calledOnce);
      await waitUntil(() => afterHideHandler.calledOnce);

      expect(hideHandler).to.have.been.calledOnce;
      expect(afterHideHandler).to.have.been.calledOnce;
      expect(element.open).to.be.false;
      expect(isOpen()).to.be.false;
    });

    it('should prevent emitting the arc-show and arc-after-show when the drawer is already open', async () => {
      element.addEventListener(ARC_EVENTS.show, showHandler);
      element.addEventListener(ARC_EVENTS.afterShow, afterShowHandler);

      await element.show();
      expect(isOpen()).to.be.true;

      await element.show();
      expect(isOpen()).to.be.true;

      expect(showHandler).to.have.been.calledOnce;
      expect(afterShowHandler).to.have.been.calledOnce;
    });

    it('should prevent emitting the arc-hide and arc-after-hide when the drawer is not open', async () => {
      await element.show();

      element.addEventListener(ARC_EVENTS.hide, hideHandler);
      element.addEventListener(ARC_EVENTS.afterHide, afterHideHandler);

      await element.hide();
      await element.hide();

      expect(hideHandler).to.have.been.calledOnce;
      expect(afterHideHandler).to.have.been.calledOnce;
    });

    it('should not close when arc-request-close is prevented', async () => {
      await element.show();

      element.addEventListener(ARC_EVENTS.requestClose, event => event.preventDefault());
      overlay.click();

      expect(element.open).to.be.true;
      expect(isOpen()).to.be.true;
    });

    it('should set focus to the last opened drawer', async () => {
      /* Open both dialogs */
      await element.show();
      await elementTwo.show();

      expect(document.activeElement === elementTwo).to.be.true;
    });

    it('should allow initial focus to be set', async () => {
      element.addEventListener(ARC_EVENTS.initialFocus, initialFocusHandler);

      await element.show();
      await waitUntil(() => initialFocusHandler.calledOnce);

      expect(initialFocusHandler).to.have.been.calledOnce;
      expect(document.activeElement).to.equal(input);
    });

    it('closes the menu when escape is pressed', async () => {
      await element.show();

      element.addEventListener(ARC_EVENTS.hide, hideHandler);

      /* Close the menu with the Escape keypress on the overlay */
      element.handleKeyDown(escEvent);
      await waitUntil(() => hideHandler.calledOnce);

      expect(hideHandler).to.have.been.calledOnce;
      expect(element.open).to.be.false;
      expect(isOpen()).to.be.false;
    });
  });

  /* Test whether the slots can be filled and that they exist */
  describe('slots', () => {
    let element: ArcDrawer;
    beforeEach(async () => {
      element = await fixture(html`<arc-drawer></arc-drawer>`);
    });

    it('renders default slots to fill the component', () => {
      const main = element.shadowRoot!.getElementById('main')!;

      /* An empty slot is available */
      expect(hasSlot(main)).to.be.true;

      /* A specific (named) slot is available */
      expect(hasSlot(main, 'label')).to.be.true;
      expect(hasSlot(main, 'footer')).to.be.true;
    });
  });

  /* Test the css variables that can be overwritten */
  describe('css variables', () => {
    it('uses the default css variables', async () => {
      const element: ArcDrawer = await fixture(html`<arc-drawer></arc-drawer>`);

      expect(getPropertyValue(element, '--size')).to.equal('25rem');
    });
    it('overwrites the css variables', async () => {
      const element: ArcDrawer = await fixture(html`<arc-drawer style="--size:5px"></arc-drawer>`);

      expect(getPropertyValue(element, '--size')).to.equal('5px');
    });
  });
});
