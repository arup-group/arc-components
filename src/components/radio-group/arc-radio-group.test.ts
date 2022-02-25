import { html } from 'lit';
import { expect, fixture, elementUpdated } from '@open-wc/testing';
import { setViewport } from '@web/test-runner-commands';
import { isMobile } from '../../utilities/ui-utils.js';
import { getPropertyValue } from '../../utilities/style-utils.js';
import { hasSlot } from '../../utilities/dom-utils.js';

import type ArcRadioGroup from './ArcRadioGroup.js';
import type ArcRadio from '../radio/ArcRadio.js';
import './arc-radio-group.js';
import '../radio/arc-radio.js';

describe('ArcRadioGroup', () => {
  /* Retrieve the tabindex of a radio button */
  function getIndex(el: ArcRadio) {
    return el.input.getAttribute('tabindex');
  }

  /* Test the rendering of the component */
  describe('rendering', () => {
    let element: ArcRadioGroup;
    beforeEach(async () => {
      element = await fixture(html`
        <arc-radio-group>
          <arc-radio>1</arc-radio>
        </arc-radio-group>
      `);
    });

    /* Test default properties that reflect to the DOM */
    it('renders the element with default properties in the dom', () => {
      expect(element).dom.to.equal(`<arc-radio-group><arc-radio>1</arc-radio></arc-radio-group>`);
    });

    /* Test the accessibility */
    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });

  /* Test the setters/getters */
  describe('setters/getters', () => {
    it('renders the element with a custom label and row property', async () => {
      const element: ArcRadioGroup = await fixture(html`<arc-radio-group label="Test label" row></arc-radio-group>`);

      expect(element.label).to.equal('Test label');
      expect(element.row).to.be.true;
      expect(element.getAttribute('label')).to.equal('Test label');
      expect(element.hasAttribute('row')).to.be.true;
    });
  });

  /* Test specific methods */
  describe('events', () => {
    let element: ArcRadioGroup;

    beforeEach(async () => {
      element = await fixture(html`
        <arc-radio-group>
          <arc-radio>1</arc-radio>
          <arc-radio>2</arc-radio>
          <arc-radio>3</arc-radio>
        </arc-radio-group>
      `);
    });

    it('sets focus on the checked radio button when the radio-group gains focus', async () => {
      const radioButtons = element.querySelectorAll('arc-radio');

      /* By default all tabs are set to -1 (except the first available one) */
      expect(getIndex(radioButtons[0])).to.equal('0');
      expect(getIndex(radioButtons[1])).to.equal('-1');
      expect(getIndex(radioButtons[2])).to.equal('-1');

      /* Set the checked status of the last radio */
      radioButtons[2].checked = true;
      await elementUpdated(radioButtons[2]);

      /* Set focus to the checked radio */
      element.handleFocusIn();
      expect(document.activeElement).to.equal(radioButtons[2]);
    });
  });

  /* Test the component responsiveness */
  describe('responsiveness', () => {
    let element: ArcRadioGroup;
    let radioWrapper: HTMLElement;

    beforeEach(async () => {
      element = await fixture(html` <arc-radio-group row></arc-radio-group> `);
      radioWrapper = element.shadowRoot!.getElementById('radioGroup')!;
    });

    it('shows correct styling on a desktop when the row property is set', async () => {
      await setViewport({ width: 1200, height: 640 });
      expect(isMobile()).to.be.false;

      expect(getPropertyValue(radioWrapper, 'display')).to.equal('grid');
      expect(getPropertyValue(radioWrapper, 'grid-auto-flow')).to.equal('column');
    });

    it('shows correct styling on a phone when the row property is set', async () => {
      await setViewport({ width: 360, height: 640 });
      expect(isMobile()).to.be.true;

      /* Set the radio in a vertical order on mobile devices */
      expect(getPropertyValue(radioWrapper, 'display')).to.equal('grid');
      expect(getPropertyValue(radioWrapper, 'grid-auto-flow')).to.equal('row');
    });
  });

  /* Test whether the slots can be filled and that they exist */
  describe('slots', () => {
    let element: ArcRadioGroup;
    beforeEach(async () => {
      element = await fixture(html`<arc-radio-group></arc-radio-group>`);
    });

    it('renders default slots to fill the component', () => {
      const main = element.shadowRoot!.getElementById('main')!;

      /* An empty slot is available */
      expect(hasSlot(main)).to.be.true;

      /* A specific (named) slot is available */
      expect(hasSlot(main, 'label')).to.be.true;
    });
  });
});
