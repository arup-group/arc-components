import { html } from 'lit';
import { expect, fixture } from '@open-wc/testing';
import { hasSlot } from '../../utilities/dom-utils.js';

import ArcSSO from './ArcSSO.js';
import './arc-sso.js';

describe('ArcSSO', () => {
  /* Test the rendering of the component */
  describe('rendering', () => {
    let element: ArcSSO;
    beforeEach(async () => {
      element = await fixture(html`<arc-sso></arc-sso>`);
    });

    /* Test default properties that reflect to the DOM */
    it('renders the element with default properties in the dom', () => {
      expect(element).dom.to.equal(`<arc-sso></arc-sso>`);
    });

    /* Test the accessibility */
    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });

  /* Test the setters/getters */
  describe('setters/getters', () => {
    it('renders the element with a custom client-id, tenant-id, redirect-uri, scopes and interaction property', async () => {
      const element: ArcSSO = await fixture(html`<arc-sso client-id='1' tenant-id='2' redirect-uri='/' scopes='one,two, three'></arc-sso>`);

      expect(element.clientId).to.equal('1');
      expect(element.getAttribute('client-id')).to.equal('1');

      expect(element.tenantId).to.equal('2');
      expect(element.getAttribute('tenant-id')).to.equal('2');

      expect(element.redirectUri).to.equal('/');
      expect(element.getAttribute('redirect-uri')).to.equal('/');

      /* The scopes are being converted into an array */
      expect(element.scopes.length).to.equal(3);
      expect(element.scopes[0]).to.equal('one');
      expect(element.scopes[1]).to.equal('two');
      expect(element.scopes[2]).to.equal('three');

      expect(element.getAttribute('scopes')).to.equal('one,two, three');
    });
  });

  /* Test whether the slots can be filled and that they exist */
  describe('slots', () => {
    let element: ArcSSO;
    beforeEach(async () => {
      element = await fixture(html`<arc-sso></arc-sso>`);
    });

    it('renders default slots to fill the component', () => {
      const main = element.shadowRoot!.getElementById('main')!;

      /* The login slot is available when the user is not signed in */
      expect(hasSlot(main, 'login')).to.be.true;

      /* The logout slot is available when the user is signed in */

    });
  });
});
