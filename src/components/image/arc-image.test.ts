import { html } from 'lit';
import { expect, fixture, elementUpdated, waitUntil } from '@open-wc/testing';
import sinon, { SinonSpy } from 'sinon';
import { getPropertyValue } from '../../utilities/style-utils.js';
import { hasSlot } from '../../internal/slot.js';

import type ArcImage from './ArcImage.js';
import './arc-image.js';

describe('ArcImage', () => {
  /* Test the rendering of the component */
  describe('rendering', () => {
    let element: ArcImage;

    beforeEach(async () => {
      element = await fixture(html`<arc-image></arc-image>`);
    });

    /* Test default properties that reflect to the DOM */
    it('renders the element with default properties in the dom', () => {
      /*
      When a component reflects to the DOM, add them within the component like so:
      <arc-image reflected-prop-1='' reflected-prop-2=''></arc-image>
      */
      expect(element).dom.to.equal(`<arc-image></arc-image>`);
    });

    /* Test the accessibility */
    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });

  /* Test the setters/getters */
  describe('setters/getters', () => {
    it('renders the element with a custom name property', async () => {
      const element: ArcImage = await fixture(html`<arc-image name='testProp'></arc-image>`);

      expect(element.name).to.equal('testProp');
      expect(element.getAttribute('name')).to.equal('testProp');
    });
  });

  /* Test different component states (active, disabled, loading etc.) */
  describe('states', () => {
    let element: ArcImage;

    beforeEach(async () => {
      element = await fixture(html`<arc-image></arc-image>`);
    });

    it('renders the component in an active state', async () => {
      expect(element.active).to.be.false;
      expect(element.hasAttribute('active')).to.be.false;

      element.active = true;
      await elementUpdated(element);

      expect(element.active).to.be.true;
      expect(element.hasAttribute('active')).to.be.true;
    });
  });

  /* Test specific methods */
  describe('methods', () => {
    /* Write the tests for specific methods here */
  });

  /* Test the events (click, focus, blur etc.) */
  describe('events', () => {
    let element: ArcImage;
    const clickSpy: SinonSpy = sinon.spy();

    beforeEach(async () => {
      element = await fixture(html`<arc-image></arc-image>`);
    });

    afterEach(async () => {
      clickSpy.resetHistory();
    });

    it('simulates a click on the button', async () => {
      element.addEventListener('click', clickSpy);

      element.click();
      await waitUntil(() => clickSpy.calledOnce);

      expect(clickSpy).to.have.been.calledOnce;
    });
  });

  /* Test the component responsiveness */
  describe('responsiveness', () => {
    /* Write tests for responsiveness here */
  });

  /* Test whether the slots can be filled and that they exist */
  describe('slots', () => {
    let element: ArcImage;

    beforeEach(async () => {
      element = await fixture(html`<arc-image></arc-image>`);
    });

    it('renders default slots to fill the component', () => {
      const main = element.shadowRoot!.getElementById('main')!;

      /* An empty slot is available */
      expect(hasSlot(main)).to.be.true;

      /* A specific (named) slot is available */
      expect(hasSlot(main, 'testSlotOne')).to.be.true;
      expect(hasSlot(main, 'testSlotTwo')).to.be.true;
    });
  });

  /* Test the css variables that can be overwritten */
  describe('css variables', () => {
    it('uses the default css variables', async () => {
      const element: ArcImage = await fixture(html`<arc-image></arc-image>`);
      expect(getPropertyValue(element, '--custom-color')).to.equal('green');
    });

    it('overwrites the css variables', async () => {
      const element: ArcImage = await fixture(html`<arc-image style='--custom-color:red'></arc-image>`);
      expect(getPropertyValue(element, '--custom-color')).to.equal('red');
    });
  });
});
