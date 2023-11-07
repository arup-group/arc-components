import { html } from 'lit';
import { expect, fixture, elementUpdated } from '@open-wc/testing';
import { setViewport } from '@web/test-runner-commands';
import { isMobile } from '../../internal/preferences.js';
import { getPropertyValue } from '../../utilities/style-utils.js';
import { hasSlot } from '../../internal/slot.js';

import ArcCheckboxGroup from './ArcCheckboxGroup.js';
import ArcCheckBox from '../checkbox/ArcCheckBox.js';
import './arc-checkbox-group.js';
import '../checkbox/arc-checkbox.js';

describe('ArcCheckboxGroup', () => {
  /* Test the rendering of the component */
  describe('rendering', () => {
    let element: ArcCheckboxGroup;
    beforeEach(async () => {
      element = await fixture(html`
        <arc-checkbox-group>
          <arc-checkbox>1</arc-checkbox>
        </arc-checkbox-group>
      `);
    });

    /* Test default properties that reflect to the DOM */
    it('renders the element with default properties in the dom', () => {
      expect(element).dom.to.equal(
        `<arc-checkbox-group>
        <arc-checkbox>1</arc-checkbox>
        </arc-checkbox-group>`,
      );
    });

    /* Test the accessibility */
    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });

  /* Test the setters/getters */
  describe('setters/getters', () => {
    it('renders the element with a custom label and row property', async () => {
      const element: ArcCheckboxGroup = await fixture(
        html`<arc-checkbox-group label="Test label" row></arc-checkbox-group>`,
      );

      expect(element.label).to.equal('Test label');
      expect(element.row).to.be.true;
      expect(element.getAttribute('label')).to.equal('Test label');
      expect(element.hasAttribute('row')).to.be.true;
    });
  });

  /* Test specific methods */
  describe('events', () => {
    let element: ArcCheckboxGroup;

    beforeEach(async () => {
      element = await fixture(html`
        <arc-checkbox-group>
          <arc-checkbox>1</arc-checkbox>
          <arc-checkbox>2</arc-checkbox>
          <arc-checkbox>3</arc-checkbox>
        </arc-checkbox-group>
      `);
    });
  });

  /* Test the component responsiveness */
  describe('responsiveness', () => {
    let element: ArcCheckboxGroup;
    let checkboxWrapper: HTMLElement;

    beforeEach(async () => {
      element = await fixture(
        html`<arc-checkbox-group row></arc-checkbox-group>`,
      );
      checkboxWrapper = element.shadowRoot!.getElementById('checkboxGroup')!;
    });

    it('shows correct styling on a desktop when the row property is set', async () => {
      await setViewport({ width: 1200, height: 640 });
      expect(isMobile()).to.be.false;

      expect(getPropertyValue(checkboxWrapper, 'display')).to.equal('grid');
      expect(getPropertyValue(checkboxWrapper, 'grid-auto-flow')).to.equal(
        'column',
      );
    });

    it('shows correct styling on a phone when the row property is set', async () => {
      await setViewport({ width: 360, height: 640 });
      expect(isMobile()).to.be.true;

      /* Set the radio in a vertical order on mobile devices */
      expect(getPropertyValue(checkboxWrapper, 'display')).to.equal('grid');
      expect(getPropertyValue(checkboxWrapper, 'grid-auto-flow')).to.equal(
        'row',
      );
    });
  });

  /* Test whether the slots can be filled and that they exist */
  describe('slots', () => {
    let element: ArcCheckboxGroup;
    beforeEach(async () => {
      element = await fixture(html`<arc-checkbox-group></arc-checkbox-group>`);
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
