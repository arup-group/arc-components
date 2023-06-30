import { html } from 'lit';
import { expect, fixture, elementUpdated, waitUntil } from '@open-wc/testing';
import sinon, { SinonSpy } from 'sinon';
import { hasSlot } from '../../internal/slot.js';
import { INPUT_SIZES } from '../../internal/constants/styleConstants.js';
import { CHIP_TYPES } from './constants/ChipConstants.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import type ArcChip from './ArcChip.js';
import type ArcIconButton from '../icon-button/ArcIconButton.js';
import './arc-chip.js';

describe('ArcChip', () => {
  /* Test the rendering of the component */
  describe('rendering', () => {
    let element: ArcChip;

    beforeEach(async () => {
      element = await fixture(html`<arc-chip>Test</arc-chip>`);
    });

    /* Test default properties that reflect to the DOM */
    it('renders the element with default properties in the dom', () => {
      expect(element).dom.to.equal(`<arc-chip size='${INPUT_SIZES.small}' type='${CHIP_TYPES.filled}'>Test</arc-chip>`);
    });

    /* Test the accessibility */
    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });

  /* Test the setters/getters */
  describe('setters/getters', () => {
    it('renders the element with a custom size property', async () => {
      const element: ArcChip = await fixture(html`<arc-chip size="testProp"></arc-chip>`);

      expect(element.size).to.equal('testProp');
      expect(element.getAttribute('size')).to.equal('testProp');
    });

    it('renders the element with a custom type property', async () => {
      const element: ArcChip = await fixture(html`<arc-chip type="testProp"></arc-chip>`);

      expect(element.type).to.equal('testProp');
      expect(element.getAttribute('type')).to.equal('testProp');
    });
  });

  /* Test different component states (active, disabled, loading etc.) */
  describe('states', () => {
    let element: ArcChip;

    beforeEach(async () => {
      element = await fixture(html`<arc-chip></arc-chip>`);
    });

    it('renders the component in a clearable state', async () => {
      expect(element.clearable).to.be.false;
      expect(element.hasAttribute('clearable')).to.be.false;

      element.clearable = true;
      await elementUpdated(element);

      expect(element.clearable).to.be.true;
      expect(element.hasAttribute('clearable')).to.be.true;
    });
  });

  /* Test the events (click, focus, blur etc.) */
  describe('events', () => {
    let element: ArcChip;
    let clearButton: ArcIconButton;
    const clearSpy: SinonSpy = sinon.spy();

    beforeEach(async () => {
      element = await fixture(html`<arc-chip clearable>Chip one</arc-chip>`);
      clearButton = element.shadowRoot!.querySelector('arc-icon-button')!;
    });

    afterEach(async () => {
      clearSpy.resetHistory();
    });

    it('clears the chip from the DOM', async () => {
      element.addEventListener(ARC_EVENTS.clear, clearSpy);

      clearButton.click();
      await waitUntil(() => clearSpy.calledOnce);

      expect(clearSpy).to.have.been.calledOnce;
    });
  });

  /* Test whether the slots can be filled and that they exist */
  describe('slots', () => {
    let element: ArcChip;

    beforeEach(async () => {
      element = await fixture(html` <arc-chip></arc-chip> `);
    });

    it('renders default slots to fill the component', () => {
      const main = element.shadowRoot!.getElementById('main')!;

      /* An empty slot is available */
      expect(hasSlot(main)).to.be.true;

      /* A specific (named) slot is available */
      expect(hasSlot(main, 'avatar')).to.be.true;
    });
  });
});
