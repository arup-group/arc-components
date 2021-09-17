import { html } from 'lit';
import { expect, fixture } from '@open-wc/testing';
import { setViewport } from '@web/test-runner-commands';

import { ArcContainer } from './ArcContainer.js';
import './arc-container.js';

import { CONTAINER_THEMES } from './constants/ContainerConstants.js';
import { DateUtils } from '../../utils/date-utils.js';
import { UiUtils } from '../../utils/ui-utils.js';

describe('ArcContainer', () => {
  describe('rendering', () => {
    let element: ArcContainer;
    beforeEach(async () => {
      element = await fixture(html`<arc-container></arc-container>`);
    });

    it('renders slots to fill the container', () => {
      const main = element.shadowRoot!.getElementById('main')!;

      expect(main.querySelector('slot[name="nav"]')).to.exist;
      expect(main.querySelector('slot[name="side"]')).to.exist;
      expect(main.querySelector('slot[name="content"]')).to.exist;
      expect(main.querySelector('slot[name="bottom"]')).to.exist;
    });

    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });
  describe('responsiveness', () => {
    let element: ArcContainer;
    let container: HTMLElement;
    let nav: HTMLSlotElement;
    let side: HTMLSlotElement;
    let content: HTMLSlotElement;
    let bottom: HTMLSlotElement;
    let slottedNav: Node;
    let slottedSide: Node;
    let slottedContent: Node;
    let slottedBottom: Node;

    beforeEach(async () => {
      element = await fixture(html`
        <arc-container>
          <arc-navbar id="nav" slot="nav">nav</arc-navbar>
          <arc-sidebar id="side" slot="side">side</arc-sidebar>
          <arc-content id="content" slot="content">content</arc-content>
          <arc-bottombar id="bottom" slot="bottom">bottom</arc-bottombar>
        </arc-container>
      `);
      container = element.shadowRoot!.getElementById('container')!;
      nav = element.shadowRoot!.querySelector('slot[name="nav"]')!;
      side = element.shadowRoot!.querySelector('slot[name="side"]')!;
      content = element.shadowRoot!.querySelector('slot[name="content"]')!;
      bottom = element.shadowRoot!.querySelector('slot[name="bottom"]')!;
      slottedNav = nav.assignedNodes()[0];
      slottedSide = side.assignedNodes()[0];
      slottedContent = content.assignedNodes()[0];
      slottedBottom = bottom.assignedNodes()[0];
    });
    it('shows correct styling on a desktop', async () => {
      await setViewport({ width: 1200, height: 640 });
      expect(UiUtils.isMobile()).to.be.false;

      expect(window.getComputedStyle(<Element>slottedNav).display).to.equal(
        'block'
      );
      expect(window.getComputedStyle(<Element>slottedSide).display).to.equal(
        'block'
      );
      expect(window.getComputedStyle(<Element>slottedContent).display).to.equal(
        'block'
      );
      expect(window.getComputedStyle(<Element>slottedBottom).display).to.equal(
        'none'
      );
    });
    it('shows correct styling on a phone', async () => {
      await setViewport({ width: 360, height: 640 });
      expect(UiUtils.isMobile()).to.be.true;

      expect(window.getComputedStyle(container).padding).to.equal('0px');
      expect(window.getComputedStyle(<Element>slottedSide).width).to.equal(
        '0px'
      );
      expect(
        window.getComputedStyle(<Element>slottedSide).marginRight
      ).to.equal('0px');
      expect(window.getComputedStyle(<Element>slottedBottom).display).to.equal(
        'block'
      );
    });
  });
  describe('theming', () => {
    it('renders a dark theme', async () => {
      const element: ArcContainer = await fixture(
        html` <arc-container theme="${CONTAINER_THEMES.dark}"></arc-container>`
      );
      expect(element.theme).to.equal(CONTAINER_THEMES.dark);
    });

    it('renders a light theme', async () => {
      const element: ArcContainer = await fixture(
        html` <arc-container theme="${CONTAINER_THEMES.light}"></arc-container>`
      );
      expect(element.theme).to.equal(CONTAINER_THEMES.light);
    });

    it('renders a theme based on the time of day', async () => {
      const elementFixed: ArcContainer = await fixture(
        html` <arc-container theme="${CONTAINER_THEMES.auto}"></arc-container>`
      );
      const elementDefault: ArcContainer = await fixture(
        html` <arc-container></arc-container>`
      );

      if (DateUtils.isNight()) {
        expect(elementFixed.theme).to.equal(CONTAINER_THEMES.dark);
        expect(elementDefault.theme).to.equal(CONTAINER_THEMES.dark);
      } else {
        expect(elementFixed.theme).to.equal(CONTAINER_THEMES.light);
        expect(elementDefault.theme).to.equal(CONTAINER_THEMES.light);
      }
    });

    it('provides the correct theme based on the time of day', () => {
      const element: ArcContainer = new ArcContainer();
      const night = new Date('August 25, 21 01:00');
      const morning = new Date('August 26, 21 08:00');

      expect(element.getTheme(night)).to.equal(CONTAINER_THEMES.dark);
      expect(element.getTheme(morning)).to.equal(CONTAINER_THEMES.light);
    });
  });
});
