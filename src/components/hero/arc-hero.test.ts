import { html } from 'lit';
import { expect, fixture, elementUpdated, waitUntil } from '@open-wc/testing';
import { setViewport } from '@web/test-runner-commands';
import { getPropertyValue } from '../../utilities/style-utils.js';
import { hasSlot } from '../../utilities/dom-utils.js';

import ArcHero from './ArcHero.js';
import './arc-hero.js';

describe('ArcHero', () => {
  /* Test the rendering of the component */
  describe('rendering', () => {
    let element: ArcHero;

    beforeEach(async () => {
      element = await fixture(html`<arc-hero>Test</arc-hero>`);
    });

    /* Test default properties that reflect to the DOM */
    it('renders the element with default properties in the dom', () => {
      expect(element).dom.to.equal(`<arc-hero>Test</arc-hero>`);
    });

    /* Test the accessibility */
    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });


  });

  /* Test the setters/getters */
  describe('setters/getters', () => {
    it('renders the hero with a custom bgImg property', async () => {
      const element: ArcHero = await fixture(html`<arc-hero bgImg='testProp'></arc-hero>`);
      const heroTarget=element.shadowRoot!.getElementById("main")!;

      await elementUpdated(element);
      expect(element.bgImg).to.equal('testProp');
      expect(element.getAttribute('bgImg')).to.equal('testProp');
      expect(getPropertyValue(heroTarget, 'background')).to.contain(`testProp`);
    });

  });

    /* Test whether the slots can be filled and that they exist */
    describe('slots', () => {
      let element: ArcHero;
      let heroTarget:HTMLElement;

      beforeEach(async () => {
        element = await fixture(html`<arc-hero></arc-hero>`);
        heroTarget=element.shadowRoot!.getElementById("main")!;
      });

      it('renders default slots to fill the component', () => {

        /* An empty slot is available */
        expect(hasSlot(heroTarget)).to.be.true;

        /* A specific (named) slot is available */
        expect(hasSlot(heroTarget, 'title')).to.be.true;

      });
    });

  /* Test the css variables that can be overwritten */
  describe('css variables', () => {
    it('uses the default css variables', async () => {
      const element: ArcHero = await fixture(html`<arc-hero></arc-hero>`);
      expect(getPropertyValue(element, '--custom-color')).to.equal('');
    });

    it('overwrites the css variables', async () => {
      const element: ArcHero = await fixture(html`<arc-hero style='--custom-color:red'></arc-hero>`);
      expect(getPropertyValue(element, '--custom-color')).to.equal('red');
    });
  });


   /* Test the component responsiveness */
   describe('responsiveness', () => {
    let element: ArcHero;
    let heroTarget:HTMLElement;

    beforeEach(async () => {
      element = await fixture(html`<arc-hero><h1 slot="title">Test Title</h1><span>Test text</span></arc-hero>`);
      heroTarget=element.shadowRoot!.getElementById("main")!;
    });

    it('shows correct styling on a desktop', async () => {
      await setViewport({ width: 1200, height: 640 });

      expect(getPropertyValue(heroTarget, 'display')).to.equal('grid');
      expect(getPropertyValue(heroTarget, 'grid-auto-flow')).to.equal('column');

    });
    it('shows correct styling on a phone', async () => {
      await setViewport({ width: 360, height: 640 });

      expect(getPropertyValue(heroTarget, 'display')).to.equal('grid');
      expect(getPropertyValue(heroTarget, 'grid-auto-flow')).to.equal('row');
    });

  });

});
