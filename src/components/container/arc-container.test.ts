import { html } from 'lit';
import { expect, fixture } from '@open-wc/testing';
import { setViewport } from '@web/test-runner-commands';

import { ArcContainer } from './arc-container.js';
import './arc-container.js';

import { CONTAINER_THEMES } from './constants/ContainerConstants.js';

import { isNight } from '../../utils/date-utils.js';
import { isMobile } from '../../utils/ui-utils.js';
import { getPropertyValue } from '../../utils/style-utils.js';

describe('ArcContainer', () => {
  // Test the rendering of the component
  describe('rendering', () => {
    let element: ArcContainer;
    beforeEach(async () => {
      element = await fixture(html`
        <arc-container></arc-container>`);
    });

    // Test default properties that reflect to the DOM
    it('renders the element with default properties in the dom', () => {
      if (isNight()) {
        expect(element).dom.to.equal(`<arc-container theme=${CONTAINER_THEMES.dark}></arc-container>`);
      } else {
        expect(element).dom.to.equal(`<arc-container theme=${CONTAINER_THEMES.light}></arc-container>`);
      }
    });

    // Test the accessibility
    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });

  // Test the setters/getters
  describe('setters/getters', () => {
    it('renders the element with a custom theme property', async () => {
      const element: ArcContainer = await fixture(html`<arc-container theme='test-theme'></arc-container>`);

      expect(element.theme).to.equal('test-theme');
      expect(element.getAttribute('theme')).to.equal('test-theme');
    });

    it('renders a theme based on the time of day', async () => {
      const element: ArcContainer = await fixture(html`<arc-container theme='auto'></arc-container>`);

      if (isNight()) {
        expect(element.theme).to.equal(CONTAINER_THEMES.dark);
      } else {
        expect(element.theme).to.equal(CONTAINER_THEMES.light);
      }
    });
  });

  // Test the component responsiveness
  describe('responsiveness', () => {
    let element: ArcContainer;
    let container: HTMLElement;
    let nav: HTMLSlotElement;
    let side: HTMLSlotElement;
    let bottom: HTMLSlotElement;
    let slottedNav: Node;
    let slottedSide: Node;
    let slottedBottom: Node;

    beforeEach(async () => {
      element = await fixture(html`
        <arc-container>
          <arc-navbar id="nav" slot="nav">nav</arc-navbar>
          <arc-sidebar id="side" slot="side">side</arc-sidebar>
          Some content
          <arc-bottombar id="bottom" slot="bottom">bottom</arc-bottombar>
        </arc-container>
      `);
      container = element.shadowRoot!.getElementById('container')!;
      nav = element.shadowRoot!.querySelector('slot[name="nav"]')!;
      side = element.shadowRoot!.querySelector('slot[name="side"]')!;
      bottom = element.shadowRoot!.querySelector('slot[name="bottom"]')!;
      slottedNav = nav.assignedNodes()[0];
      slottedSide = side.assignedNodes()[0];
      slottedBottom = bottom.assignedNodes()[0];
    });
    it('shows correct styling on a desktop', async () => {
      await setViewport({ width: 1200, height: 640 });
      expect(isMobile()).to.be.false;

      expect(getPropertyValue(slottedNav, 'display')).to.equal('block');
      expect(getPropertyValue(slottedSide, 'display')).to.equal('block');
      expect(getPropertyValue(slottedBottom, 'display')).to.equal('none');
    });
    it('shows correct styling on a phone', async () => {
      await setViewport({ width: 360, height: 640 });
      expect(isMobile()).to.be.true;

      expect(getPropertyValue(slottedNav, 'display')).to.equal('block');
      expect(getPropertyValue(container, 'gap')).to.equal('0px');
      expect(getPropertyValue(container, 'padding')).to.equal('0px');
      expect(getPropertyValue(slottedSide, 'display')).to.equal('none');
      expect(getPropertyValue(slottedBottom, 'display')).to.equal('block');
    });
  });

  // Test whether the slots can be filled and that they exist
  describe('slots', () => {
    let element: ArcContainer;
    beforeEach(async () => {
      element = await fixture(html`<arc-container></arc-container>`);
    });

    it('renders default slots to fill the container', () => {
      const main = element.shadowRoot!.getElementById('main')!;

      expect(main.querySelector('slot[name="nav"]')).to.exist;
      expect(main.querySelector('slot[name="side"]')).to.exist;
      expect(main.querySelector('#content > slot')).to.exist;
      expect(main.querySelector('slot[name="bottom"]')).to.exist;
    });
  });

  // Test the css variables that can be overwritten
  describe('css variables', () => {
    it('uses the default css variables', async () => {
      const element: ArcContainer = await fixture(html`<arc-container></arc-container>`);

      expect(getPropertyValue(element, '--bottom-height')).to.equal('');
    });
    it('overwrites the css variables', async () => {
      const element: ArcContainer = await fixture(html`<arc-container style='--bottom-height:30rem'></arc-container>`);

      expect(getPropertyValue(element, '--bottom-height')).to.equal('30rem');
    });

  });
});
