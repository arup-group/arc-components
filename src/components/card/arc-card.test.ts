import { html } from 'lit';
import { expect, fixture, elementUpdated, waitUntil } from '@open-wc/testing';
import sinon, { SinonSpy } from 'sinon';
import { getPropertyValue } from '../../utilities/style-utils.js';
import { hasSlot } from '../../internal/slot.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import type ArcCard from './ArcCard.js';
import './arc-card.js';

describe('ArcCard', () => {
  /* Test the rendering of the component */
  describe('rendering', () => {
    let element: ArcCard;
    beforeEach(async () => {
      element = await fixture(html`<arc-card></arc-card>`);
    });

    /* Test default properties that reflect to the DOM */
    it('renders the element with default properties in the dom', () => {
      expect(element).dom.to.equal('<arc-card></arc-card>');
    });

    /* Test the accessibility */
    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });

  /* Test different component states (active, disabled, loading etc.) */
  describe('states', () => {
    let element: ArcCard;

    beforeEach(async () => {
      element = await fixture(html`<arc-card></arc-card>`);
    });

    it('renders the component in a collapsed state', async () => {
      expect(element.collapsed).to.be.false;
      expect(element.hasAttribute('collapsed')).to.be.false;

      element.collapsed = true;
      await elementUpdated(element);
      expect(element.collapsed).to.be.true;
      expect(element.hasAttribute('collapsed')).to.be.true;
    });
  });

  /* Test the events (click, focus, blur etc.) */
  describe('events', () => {
    let element: ArcCard;

    const showHandler: SinonSpy = sinon.spy();
    const afterShowHandler: SinonSpy = sinon.spy();
    const hideHandler: SinonSpy = sinon.spy();
    const afterHideHandler: SinonSpy = sinon.spy();

    beforeEach(async () => {
      element = await fixture(html`
        <arc-card>
          <div slot="header"></div>
        </arc-card>
      `);
    });

    afterEach(async () => {
      showHandler.resetHistory();
      afterShowHandler.resetHistory();
      hideHandler.resetHistory();
      afterHideHandler.resetHistory();
    });

    it('should emit arc-hide and arc-after-hide when calling collapse()', async () => {
      element.addEventListener(ARC_EVENTS.hide, hideHandler);
      element.addEventListener(ARC_EVENTS.afterHide, afterHideHandler);

      await element.collapse();

      expect(hideHandler).to.have.been.calledOnce;
      expect(afterHideHandler).to.have.been.calledOnce;
      expect(element.collapsed).to.be.true;
    });

    it('should emit arc-show and arc-after-show when calling expand()', async () => {
      await element.collapse();

      element.addEventListener(ARC_EVENTS.show, showHandler);
      element.addEventListener(ARC_EVENTS.afterShow, afterShowHandler);

      await element.expand();

      expect(showHandler).to.have.been.calledOnce;
      expect(afterShowHandler).to.have.been.calledOnce;
      expect(element.collapsed).to.be.false;
    });

    it('should emit arc-hide and arc-after-hide when setting collapsed = true', async () => {
      element.addEventListener(ARC_EVENTS.hide, hideHandler);
      element.addEventListener(ARC_EVENTS.afterHide, afterHideHandler);

      element.collapsed = true;
      await waitUntil(() => hideHandler.calledOnce);
      await waitUntil(() => afterHideHandler.calledOnce);

      expect(hideHandler).to.have.been.calledOnce;
      expect(afterHideHandler).to.have.been.calledOnce;
      expect(element.collapsed).to.be.true;
    });

    it('should emit arc-show and arc-after-show when setting collapsed = false', async () => {
      await element.collapse();

      element.addEventListener(ARC_EVENTS.show, showHandler);
      element.addEventListener(ARC_EVENTS.afterShow, afterShowHandler);

      element.collapsed = false;
      await waitUntil(() => showHandler.calledOnce);
      await waitUntil(() => afterShowHandler.calledOnce);

      expect(showHandler).to.have.been.calledOnce;
      expect(afterShowHandler).to.have.been.calledOnce;
      expect(element.collapsed).to.be.false;
    });

    it('should prevent emitting the arc-show and arc-after-show when the card is already expanded', async () => {
      await element.collapse();

      element.addEventListener(ARC_EVENTS.show, showHandler);
      element.addEventListener(ARC_EVENTS.afterShow, afterShowHandler);

      await element.expand();
      await element.expand();

      expect(showHandler).to.have.been.calledOnce;
      expect(afterShowHandler).to.have.been.calledOnce;
    });

    it('should prevent emitting the arc-hide and arc-after-hide when the cards is not expanded', async () => {
      element.addEventListener(ARC_EVENTS.hide, hideHandler);
      element.addEventListener(ARC_EVENTS.afterHide, afterHideHandler);

      await element.collapse();
      await element.collapse();

      expect(hideHandler).to.have.been.calledOnce;
      expect(afterHideHandler).to.have.been.calledOnce;
    });

    it('should prevent emitting the arc-hide and arc-after-hide when the card has no header', async () => {
      element.addEventListener(ARC_EVENTS.hide, hideHandler);
      element.addEventListener(ARC_EVENTS.afterHide, afterHideHandler);

      element.innerHTML = '';
      await element.collapse();

      element.collapsed = true;
      await elementUpdated(element);

      expect(hideHandler).to.not.have.been.calledOnce;
      expect(afterHideHandler).to.not.have.been.calledOnce;
    });
  });

  /* Test whether the slots can be filled and that they exist */
  describe('slots', () => {
    let element: ArcCard;
    beforeEach(async () => {
      element = await fixture(html`<arc-card></arc-card>`);
    });

    it('renders default slots to fill the component', () => {
      const main = element.shadowRoot!.getElementById('main')!;

      /* An empty slot is available */
      expect(hasSlot(main)).to.be.true;

      /* A specific (named) slot is available */
      expect(hasSlot(main, 'header')).to.be.true;
      expect(hasSlot(main, 'image')).to.be.true;
      expect(hasSlot(main, 'footer')).to.be.true;
    });
  });

  /* Test the css variables that can be overwritten */
  describe('css variables', () => {
    it('uses the default css variables', async () => {
      const element: ArcCard = await fixture(html`<arc-card></arc-card>`);

      expect(getPropertyValue(element, 'width')).to.equal('0px');
    });
    it('overwrites the css variables', async () => {
      const element: ArcCard = await fixture(html`<arc-card style="width:30px"></arc-card>`);

      expect(getPropertyValue(element, 'width')).to.equal('30px');
    });
  });
});
