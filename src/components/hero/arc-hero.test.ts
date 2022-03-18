import { html } from 'lit';
import { expect, fixture, elementUpdated } from '@open-wc/testing';
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
      element = await fixture(html`
        <arc-hero>
          <span slot="title">Title</span>
          <span>Content</span>
        </arc-hero>
      `);
    });

    /* Test default properties that reflect to the DOM */
    it('renders the element with default properties in the dom', () => {
      expect(element).dom.to.equal(`<arc-hero><span slot="title">Title</span><span>Content</span></arc-hero>`);
    });

    /* Test the accessibility */
    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });

  /* Test the setters/getters */
  describe('setters/getters', () => {
    it('renders the hero with custom properties', async () => {
      const element: ArcHero = await fixture(html`<arc-hero fullscreen title="Title" subtitle="SubTitle"></arc-hero>`);

      expect(element.fullscreen).to.be.true;
      expect(element.hasAttribute('fullscreen')).to.be.true;
      expect(element.title).to.equal('Title');
      expect(element.getAttribute('title')).to.equal('Title');
      expect(element.subtitle).to.equal('SubTitle');
      expect(element.getAttribute('subtitle')).to.equal('SubTitle');
    });

    it('renders the hero with a custom background property', async () => {
      const arcRed = new URL('../../../assets/arc-red.svg', import.meta.url);
      const element: ArcHero = await fixture(html`<arc-hero background=${arcRed}></arc-hero>`);
      const heroTarget = element.shadowRoot?.getElementById('main')!;

      expect(element.background).to.contain('arc-red.svg');
      expect(element.getAttribute('background')).to.contain('arc-red.svg');
      expect(getPropertyValue(heroTarget, 'background')).to.contain('arc-red.svg');
      expect(getPropertyValue(heroTarget, 'background-size')).to.equal(`cover`);
      expect(getPropertyValue(heroTarget, 'align-items')).to.equal(`normal`);

      /* When the fullscreen property is set, the items are aligned in the center */
      element.fullscreen = true;
      await elementUpdated(element);
      expect(getPropertyValue(heroTarget, 'align-items')).to.equal(`center`);
    });
  });

  /* Test the component responsiveness */
  describe('responsiveness', () => {
    let element: ArcHero;
    let heroTarget: HTMLElement;

    beforeEach(async () => {
      element = await fixture(html`<arc-hero></arc-hero>`);
      heroTarget = element.shadowRoot?.getElementById('main')!;
    });

    it('shows correct styling on a desktop', async () => {
      await setViewport({ width: 1200, height: 640 });
      expect(getPropertyValue(heroTarget, 'grid-auto-flow')).to.equal('column');
      expect(getPropertyValue(heroTarget, 'align-content')).to.equal('normal');
    });

    it('shows correct styling on a phone', async () => {
      await setViewport({ width: 360, height: 640 });
      expect(getPropertyValue(heroTarget, 'grid-auto-flow')).to.equal('row');
      expect(getPropertyValue(heroTarget, 'align-content')).to.equal('start');
    });
  });

  /* Test whether the slots can be filled and that they exist */
  describe('slots', () => {
    let element: ArcHero;
    beforeEach(async () => {
      element = await fixture(html`<arc-hero></arc-hero>`);
    });

    it('renders default slots to fill the component', () => {
      const heroTarget = element.shadowRoot?.getElementById('main')!;

      expect(hasSlot(heroTarget)).to.be.true;
      expect(hasSlot(heroTarget, 'title')).to.be.true;
      expect(hasSlot(heroTarget, 'subtitle')).to.be.true;
    });
  });

  /* Test the css variables that can be overwritten */
  describe('css variables', () => {
    it('uses the default css variables', async () => {
      const element: ArcHero = await fixture(html`<arc-hero></arc-hero>`);
      expect(getPropertyValue(element, '--content-gap')).to.equal('5rem');
    });

    it('overwrites the css variables', async () => {
      const element: ArcHero = await fixture(html`<arc-hero style="--content-gap:red"></arc-hero>`);
      expect(getPropertyValue(element, '--content-gap')).to.equal('red');
    });
  });
});
