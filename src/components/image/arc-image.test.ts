import { html } from 'lit';
import { elementUpdated, expect, fixture, waitUntil, aTimeout } from '@open-wc/testing';
import sinon, { SinonSpy } from 'sinon';
import { setViewport } from '@web/test-runner-commands';
import { getPropertyValue } from '../../utilities/style-utils.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
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
      expect(element).dom.to.equal(`<arc-image delay='1000'></arc-image>`);
    });

    it('renders an overlay when no src is provided', () => {
      const image = element.shadowRoot!.getElementById('image');
      const overlay = element.shadowRoot!.getElementById('overlay');
      expect(getPropertyValue(image, 'display')).to.equal('none');
      expect(getPropertyValue(overlay, 'display')).to.equal('flex');
    });

    /* Test the accessibility */
    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });

  /* Test the setters/getters */
  describe('setters/getters', () => {
    it('renders the element with a custom alt property', async () => {
      const element: ArcImage = await fixture(html`<arc-image alt="testAlt"></arc-image>`);

      expect(element.alt).to.equal('testAlt');
      expect(element.getAttribute('alt')).to.equal('testAlt');
    });

    it('renders the element with a custom delay property', async () => {
      const element: ArcImage = await fixture(html`<arc-image delay="testDelay"></arc-image>`);

      expect(element.delay).to.equal(1000);
      expect(element.getAttribute('delay')).to.equal('1000');
    });

    it('renders the element with a converted delay', async () => {
      const element: ArcImage = await fixture(html`<arc-image delay></arc-image>`);
      expect(element.delay).to.equal(1000);
      expect(element.getAttribute('delay')).to.equal('1000');
    });

    it('renders the element with a custom width and height property', async () => {
      const element: ArcImage = await fixture(html`<arc-image width="50" height="50"></arc-image>`);
      const main = element.shadowRoot!.getElementById('main');

      expect(element.width).to.equal('50');
      expect(element.getAttribute('width')).to.equal('50');
      expect(getPropertyValue(main, 'width')).to.equal('50px');

      expect(element.height).to.equal('50');
      expect(element.getAttribute('height')).to.equal('50');
      expect(getPropertyValue(main, 'height')).to.equal('50px');
    });
  });

  /* Test specific methods */
  describe('methods', () => {
    let element: ArcImage;

    beforeEach(async () => {
      element = await fixture(html`<arc-image></arc-image>`);
    });

    it('returns a correct css style property', async () => {
      expect(element.handleSize('100px')).to.equal('100px');
      expect(element.handleSize('100%')).to.equal('100%');
      expect(element.handleSize('100')).to.equal('100px');
    });
  });

  /* Test the events (click, focus, blur etc.) */
  describe('events', () => {
    let element: ArcImage;
    let image: HTMLElement;
    let overlay: HTMLElement;
    const loadHandler: SinonSpy = sinon.spy();
    const errorHandler: SinonSpy = sinon.spy();

    beforeEach(async () => {
      await setViewport({ width: 100, height: 100 });
      element = await fixture(html`<arc-image width="500px" height="500px" delay="1000"></arc-image>`);
      image = element.shadowRoot!.getElementById('image')!;
      overlay = element.shadowRoot!.getElementById('overlay')!;
    });

    afterEach(async () => {
      loadHandler.resetHistory();
      errorHandler.resetHistory();
    });

    it('does not load the image when the container is not fully intersecting', async () => {
      element.addEventListener(ARC_EVENTS.loaded, loadHandler);
      element.addEventListener(ARC_EVENTS.error, errorHandler);

      element.src = 'https://picsum.photos/500';
      await elementUpdated(element);

      /* If the container is not fully intersecting, the image element is not updated. */
      expect(image.getAttribute('src')).to.equal('');
      expect(getPropertyValue(image, 'display')).to.equal('none');
      expect(getPropertyValue(overlay, 'display')).to.equal('flex');

      expect(loadHandler).to.not.have.been.calledOnce;
      expect(errorHandler).to.not.have.been.calledOnce;
    });

    it('should emit arc-loaded when the container is fully intersecting', async () => {
      element.addEventListener(ARC_EVENTS.loaded, loadHandler);

      element.src = 'https://picsum.photos/200';
      await elementUpdated(element);

      /* Ensure that the image is fully intersecting */
      await setViewport({ width: 1000, height: 1000 });
      await aTimeout(1100); /* Timeout needed as the delay within the component is 1000ms. */

      await waitUntil(() => loadHandler.calledOnce);

      /* Once the container is fully intersecting, the image element is updated. */
      expect(image.getAttribute('src')).to.equal(element.src);
      expect(getPropertyValue(image, 'display')).to.equal('block');
      expect(getPropertyValue(overlay, 'display')).to.equal('none');

      expect(loadHandler).to.have.been.calledOnce;
    });

    it('should emit arc-error when the image cannot be loaded', async () => {
      element.addEventListener(ARC_EVENTS.error, errorHandler);

      element.src = 'invalid-src';
      await elementUpdated(element);

      /* Ensure that the image is fully intersecting */
      await setViewport({ width: 1000, height: 1000 });
      await aTimeout(1100); /* Timeout needed as the delay within the component is 1000ms. */

      await waitUntil(() => errorHandler.calledOnce);

      expect(errorHandler).to.have.been.calledOnce;
    });
  });
});
