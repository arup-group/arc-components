import { html } from 'lit';
import { elementUpdated, expect, fixture } from '@open-wc/testing';
import { getPropertyValue } from '../../utilities/style-utils.js';
import { hasSlot } from '../../internal/slot.js';

import type ArcAvatar from './ArcAvatar.js';
import type ArcIcon from '../icon/ArcIcon.js';
import './arc-avatar.js';
import '../icon/arc-icon.js';

describe('ArcAvatar', () => {
  /* Test the rendering of the component */
  describe('rendering', () => {
    let element: ArcAvatar;

    beforeEach(async () => {
      element = await fixture(
        html`<arc-avatar label="User avatar"></arc-avatar>`
      );
    });

    /* Test default properties that reflect to the DOM */
    it('renders the element with default properties in the dom', () => {
      expect(element).dom.to.equal(
        `<arc-avatar label="User avatar"></arc-avatar>`
      );
    });

    it('renders a placeholder icon when no properties are given', () => {
      const icon = element.shadowRoot!.getElementById('icon')!;
      const defaultIcon: ArcIcon = icon.querySelector('arc-icon')!;

      expect(defaultIcon).to.exist;
      expect(defaultIcon.name).to.equal('user');
      expect(defaultIcon.size).to.equal('medium');
    });

    it('renders an avatar with a proper image attribute', async () => {
      element.image = 'https://picsum.photos/100';
      await elementUpdated(element);

      const avatar = element.shadowRoot!.getElementById('avatar');
      const initials = element.shadowRoot!.getElementById('initials');
      const icon = element.shadowRoot!.getElementById('icon');

      expect(avatar).to.exist;
      expect(initials).to.be.null;
      expect(icon).to.be.null;
    });

    /* Test the accessibility */
    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });

  /* Test the setters/getters */
  describe('setters/getters', () => {
    it('renders the element with a custom image property', async () => {
      const element: ArcAvatar = await fixture(
        html`<arc-avatar image="testProp"></arc-avatar>`
      );

      expect(element.image).to.equal('testProp');
      expect(element.getAttribute('image')).to.equal('testProp');
    });

    it('renders the element with a custom label property', async () => {
      const element: ArcAvatar = await fixture(
        html`<arc-avatar label="testProp"></arc-avatar>`
      );

      expect(element.label).to.equal('testProp');
      expect(element.getAttribute('label')).to.equal('testProp');
    });

    it('renders the element with a custom name property', async () => {
      const element: ArcAvatar = await fixture(
        html`<arc-avatar name="Some Username"></arc-avatar>`
      );

      expect(element.name).to.equal('SU');
      expect(element.getAttribute('name')).to.equal('Some Username');
    });
  });

  /* Test whether the slots can be filled and that they exist */
  describe('slots', () => {
    let element: ArcAvatar;

    beforeEach(async () => {
      element = await fixture(html`<arc-avatar></arc-avatar>`);
    });

    it('renders default slots to fill the component', () => {
      const main = element.shadowRoot!.getElementById('main')!;

      /* A specific icon slot is available */
      expect(hasSlot(main, 'icon')).to.be.true;
    });
  });

  /* Test the css variables that can be overwritten */
  describe('css variables', () => {
    it('uses the default css variables', async () => {
      const element: ArcAvatar = await fixture(html`<arc-avatar></arc-avatar>`);
      expect(getPropertyValue(element, '--size')).to.equal('3rem');
    });

    it('overwrites the css variables', async () => {
      const element: ArcAvatar = await fixture(
        html`<arc-avatar style="--size:5px"></arc-avatar>`
      );
      expect(getPropertyValue(element, '--size')).to.equal('5px');
    });
  });
});
