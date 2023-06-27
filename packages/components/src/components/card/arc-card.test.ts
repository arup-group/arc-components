import { html } from 'lit';
import { expect, fixture, elementUpdated } from '@open-wc/testing';
import { getPropertyValue } from '../../utilities/style-utils.js';
import { hasSlot } from '../../internal/slot.js';
import {
  addShowListeners,
  addHideListeners,
  clearShowHideListeners,
  waitForShow,
  waitForHide,
  showCalledOnce,
  hideCalledOnce,
} from '../../internal/test-utils.js';
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
      expect(element).dom.to.equal(`<arc-card></arc-card>`);
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

    beforeEach(async () => {
      element = await fixture(html`
        <arc-card>
          <div slot="header"></div>
        </arc-card>
      `);
    });

    afterEach(async () => {
      clearShowHideListeners(element);
    });

    it('should emit arc-hide and arc-after-hide when calling collapse()', async () => {
      addHideListeners(element);
      await element.collapse();
      expect(hideCalledOnce()).to.be.true;
      expect(element.collapsed).to.be.true;
    });

    it('should emit arc-show and arc-after-show when calling expand()', async () => {
      await element.collapse();
      addShowListeners(element);
      await element.expand();
      expect(showCalledOnce()).to.be.true;
      expect(element.collapsed).to.be.false;
    });

    it('should emit arc-hide and arc-after-hide when setting collapsed = true', async () => {
      addHideListeners(element);
      element.collapsed = true;
      await waitForHide();
      expect(hideCalledOnce()).to.be.true;
      expect(element.collapsed).to.be.true;
    });

    it('should emit arc-show and arc-after-show when setting collapsed = false', async () => {
      await element.collapse();
      addShowListeners(element);
      element.collapsed = false;
      await waitForShow();
      expect(showCalledOnce()).to.be.true;
      expect(element.collapsed).to.be.false;
    });

    it('should prevent emitting the arc-show and arc-after-show when the card is already expanded', async () => {
      addShowListeners(element);
      await element.expand();
      expect(showCalledOnce()).to.be.false;
      expect(element.collapsed).to.be.false;
    });

    it('should prevent emitting the arc-hide and arc-after-hide when the card is not expanded', async () => {
      addHideListeners(element);
      await element.collapse();
      await element.collapse();
      expect(hideCalledOnce()).to.be.true;
      expect(element.collapsed).to.be.true;
    });

    it('should prevent emitting the arc-hide and arc-after-hide when the card has no header', async () => {
      addHideListeners(element);
      element.innerHTML = '';
      await element.collapse();
      expect(hideCalledOnce()).to.be.false;
      expect(element.collapsed).to.be.false;
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
      const element: ArcCard = await fixture(
        html`<arc-card style="width:30px"></arc-card>`
      );

      expect(getPropertyValue(element, 'width')).to.equal('30px');
    });
  });
});
