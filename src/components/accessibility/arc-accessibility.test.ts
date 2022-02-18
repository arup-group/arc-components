import {html} from 'lit';
import {expect, fixture, elementUpdated, waitUntil} from '@open-wc/testing';
import sinon, {SinonSpy} from 'sinon';
import {parseObject} from "../../internal/string.js";
import {ARC_EVENTS} from "../../internal/constants/eventConstants.js";

import ArcAccessibility, { UserPreferences } from './ArcAccessibility.js';
import type ArcRadioGroup from "../radio-group/ArcRadioGroup.js";
import type ArcRadio from "../radio/ArcRadio.js";
import './arc-accessibility.js';

describe('ArcAccessibility', () => {
  /* Test the rendering of the component */
  describe('rendering', () => {
    let element: ArcAccessibility;
    beforeEach(async () => {
      element = await fixture(html`
        <arc-accessibility></arc-accessibility>`);
    });

    /* Test default properties that reflect to the DOM */
    it('renders the element with default properties in the dom', () => {
      /*
      When a component reflects to the DOM, add them within the component like so:
      <component reflected-prop-1='' reflected-prop-2=''></component>
      */
      expect(element).dom.to.equal(`<arc-accessibility></arc-accessibility>`);
    });

    /* Test the accessibility */
    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });

  /* Test the setters/getters */
  describe('setters/getters', () => {
    it('activates the accessibility panel when the open state is set', async () => {
      const element: ArcAccessibility = await fixture(html`
        <arc-accessibility open></arc-accessibility>`);
      const drawer = element.shadowRoot?.getElementById('drawer')!;

      expect(element.open).to.be.true;
      expect(element.hasAttribute('open')).to.be.true;
      expect(drawer.hasAttribute('open')).to.be.true;
    });
  });

  /* Test different component states (active, disabled, loading etc.) */
  describe('states', () => {
    let element: ArcAccessibility;

    beforeEach(async () => {
      element = await fixture(html`
        <arc-accessibility></arc-accessibility>`);
    });

    it('renders the component in an open state', async () => {
      expect(element.open).to.be.false;
      expect(element.hasAttribute('open')).to.be.false;

      element.open = true;
      await elementUpdated(element);

      expect(element.open).to.be.true;
      expect(element.hasAttribute('open')).to.be.true;
    });
  });

  /* Test specific methods */
  describe('methods', () => {
    const element: ArcAccessibility = new ArcAccessibility();
    // Write the tests for the specific method of element here
  });

  /* Test the events (click, focus, blur etc.) */
  describe('events', () => {
    let element: ArcAccessibility;
    let themeRadioGroup: ArcRadioGroup;
    /* Grab the user preferences from the localStore */
    const getCachedPreferences = () => {
      const cachedPreferences = localStorage.getItem(ArcAccessibility.tag);
      let validateObject: UserPreferences = {} as any;

      if (cachedPreferences) { validateObject = parseObject(cachedPreferences); }
      return validateObject;
    }

    const accessibilityChangeHandler: SinonSpy = sinon.spy();

    beforeEach(async () => {
      element = await fixture(html`<arc-accessibility></arc-accessibility>`);
      themeRadioGroup = element.shadowRoot?.getElementById('theme') as ArcRadioGroup;
    });

    afterEach(() => {
      localStorage.clear(); /* Clear out the user preferences */
      element.open = false;
      accessibilityChangeHandler.resetHistory();
    });

    it('should open the accessibility panel when calling the show() method', async () => {
      expect(element.hasAttribute('open')).to.be.false;

      element.show();
      await elementUpdated(element);

      expect(element.hasAttribute('open')).to.be.true;
    });

    it('should hide the accessibility panel when calling the hide() method', async () => {
      element.show();
      await elementUpdated(element);

      element.hide()
      await elementUpdated(element);

      expect(element.hasAttribute('open')).to.be.false;
    });

    it('should emit arc-accessibility-change when the user preferences change', async () => {
      element.addEventListener(ARC_EVENTS.accessibilityChange, accessibilityChangeHandler);

      /* Open the accessibility panel */
      element.show();
      await elementUpdated(element);

      const currentPreferences = getCachedPreferences();

      /* Change a personal preference. Ensure that the element is an arc-radio and is not already checked */
      const unselectedOptions = [...themeRadioGroup.children].filter(child => child.tagName === 'ARC-RADIO' && !child.hasAttribute('checked'));
      (unselectedOptions[0] as ArcRadio).click();

      await waitUntil(() => accessibilityChangeHandler.calledOnce);
      expect(accessibilityChangeHandler).to.have.been.calledOnce;

      const newPreferences = getCachedPreferences();

      //TODO FIX THIS;
      console.log(currentPreferences.theme);
      console.log(newPreferences.theme);

    });
  });

  /* Test the component responsiveness */
  describe('responsiveness', () => {
  });
});
