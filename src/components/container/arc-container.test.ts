import { html } from 'lit';
import { expect, fixture, elementUpdated, waitUntil } from '@open-wc/testing';
import sinon, { SinonSpy } from 'sinon';
import { setViewport } from '@web/test-runner-commands';
import { isNight } from '../../internal/theme.js';
import { isMobile } from '../../utilities/ui-utils.js';
import { getPropertyValue } from '../../utilities/style-utils.js';
import { hasSlot } from '../../utilities/dom-utils.js';
import { createKeyEvent } from '../../utilities/test-utils.js';
import { CONTAINER_THEMES } from './constants/ContainerConstants.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';

import type ArcContainer from './ArcContainer.js';
import './arc-container.js';

describe('ArcContainer', () => {
  /* Ensure that local preferences are reset! */
  beforeEach(() => localStorage.clear());
  afterEach(() => localStorage.clear());

  /* Test the rendering of the component */
  describe('rendering', () => {
    let element: ArcContainer;
    beforeEach(async () => {
      /* Ensure that local preferences from the built-in arc-accessibility are reset! */
      localStorage.clear();
      element = await fixture(html` <arc-container></arc-container>`);
    });

    /* Test default properties that reflect to the DOM */
    it('renders the element with default properties in the dom', () => {
      if (isNight()) {
        expect(element).dom.to.equal(`<arc-container theme=${CONTAINER_THEMES.dark}></arc-container>`);
      } else {
        expect(element).dom.to.equal(`<arc-container theme=${CONTAINER_THEMES.light}></arc-container>`);
      }
    });

    /* Test the accessibility */
    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });

  /* Test the setters/getters */
  describe('setters/getters', () => {
    beforeEach(() => {
      /* Ensure that local preferences from the built-in arc-accessibility are reset! */
      localStorage.clear();
    });

    it('prevents the element from having a non-existing theme', async () => {
      const element: ArcContainer = await fixture(html` <arc-container theme="test-theme"></arc-container>`);

      if (isNight()) {
        expect(element.theme).to.equal(CONTAINER_THEMES.dark);
      } else {
        expect(element.theme).to.equal(CONTAINER_THEMES.light);
      }
    });

    it('renders a theme based on the time of day', async () => {
      const element: ArcContainer = await fixture(html` <arc-container theme="auto"></arc-container>`);

      if (isNight()) {
        expect(element.theme).to.equal(CONTAINER_THEMES.dark);
      } else {
        expect(element.theme).to.equal(CONTAINER_THEMES.light);
      }
    });

    it('removes the gap and padding properties when the fullscreen property is set', async () => {
      const element: ArcContainer = await fixture(html` <arc-container fullscreen></arc-container>`);
      const container = element.shadowRoot!.getElementById('container');

      expect(element.fullscreen).to.equal(true);
      expect(element.hasAttribute('fullscreen')).to.be.true;
      expect(getPropertyValue(container, 'gap')).to.equal('0px');
      expect(getPropertyValue(container, 'padding')).to.equal('0px');
    });

    it('removes the gap and padding properties when the fullscreen property is set', async () => {
      const element: ArcContainer = await fixture(html` <arc-container></arc-container>`);
      const container = element.shadowRoot!.getElementById('container');

      element.fullscreen = true;
      await elementUpdated(element);

      expect(getPropertyValue(container, 'gap')).to.equal('0px');
      expect(getPropertyValue(container, 'padding')).to.equal('0px');
    });
  });

  /* Test specific methods */
  describe('methods', () => {
    let element: ArcContainer;

    const showHandler: SinonSpy = sinon.spy();
    const afterShowHandler: SinonSpy = sinon.spy();

    beforeEach(async () => {
      element = await fixture(html`
        <arc-container theme="dark">
          <input />
        </arc-container>
      `);
    });

    afterEach(() => {
      showHandler.resetHistory();
      afterShowHandler.resetHistory();
    });

    it('returns the correct theme when a specific date is given', async () => {
      const dayTime: Date = new Date('January 15, 2021 15:00:00');
      const nightTime: Date = new Date('January 15, 2021 03:00:00');

      expect(element.getTheme(dayTime)).to.equal(CONTAINER_THEMES.light);
      expect(element.getTheme(nightTime)).to.equal(CONTAINER_THEMES.dark);
    });

    it('should update the theme when the user-preferences change', async () => {
      const theme = 'light';

      /* Set up a fake event to imitate new user preferences */
      element.handleAccessibilityChange(
        new CustomEvent(ARC_EVENTS.accessibilityChange, {
          detail: { preferences: { theme } },
        })
      );
      await elementUpdated(element);

      expect(element.theme).to.equal(theme);

      /* Set up a fake event to imitate restored user preferences */
      element.handleAccessibilityChange(
        new CustomEvent(ARC_EVENTS.accessibilityChange, {
          detail: { preferences: {} },
        })
      );
      await elementUpdated(element);

      expect(element.theme).to.equal(CONTAINER_THEMES.dark);
    });

    it('should emit arc-show and arc-after-show when calling showAccessibility()', async () => {
      element.addEventListener(ARC_EVENTS.show, showHandler);
      element.addEventListener(ARC_EVENTS.afterShow, afterShowHandler);

      await element.showAccessibility();
      await waitUntil(() => showHandler.calledOnce);
      await waitUntil(() => afterShowHandler.calledOnce);

      expect(showHandler).to.have.been.calledOnce;
      expect(afterShowHandler).to.have.been.calledOnce;
    });

    it('should emit arc-show and arc-after-show when pressing the accessibility key (a)', async () => {
      element.addEventListener(ARC_EVENTS.show, showHandler);
      element.addEventListener(ARC_EVENTS.afterShow, afterShowHandler);

      /* Press the 'a' key */
      element.handleKeyDown(createKeyEvent('a'));

      await waitUntil(() => showHandler.calledOnce);
      await waitUntil(() => afterShowHandler.calledOnce);

      expect(showHandler).to.have.been.calledOnce;
      expect(afterShowHandler).to.have.been.calledOnce;
    });
  });

  /* Test the component responsiveness */
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

  /* Test whether the slots can be filled and that they exist */
  describe('slots', () => {
    let element: ArcContainer;
    beforeEach(async () => {
      element = await fixture(html` <arc-container></arc-container>`);
    });

    it('renders default slots to fill the container', () => {
      const main = element.shadowRoot!.getElementById('main')!;

      expect(hasSlot(main)).to.be.true; /* Default content slot */
      expect(hasSlot(main, 'nav')).to.be.true;
      expect(hasSlot(main, 'side')).to.be.true;
      expect(hasSlot(main, 'bottom')).to.be.true;
    });
  });

  /* Test the css variables that can be overwritten */
  describe('css variables', () => {
    it('uses the default css variables', async () => {
      const element: ArcContainer = await fixture(html` <arc-container></arc-container>`);

      expect(getPropertyValue(element, '--bottom-height')).to.equal('');
    });
    it('overwrites the css variables', async () => {
      const element: ArcContainer = await fixture(html` <arc-container style="--bottom-height:30rem"></arc-container>`);

      expect(getPropertyValue(element, '--bottom-height')).to.equal('30rem');
    });
  });
});
