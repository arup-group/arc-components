import { html } from 'lit';
import { expect, fixture } from '@open-wc/testing';
import { hasSlot } from '../../internal/slot.js';

import ArcSSO from './ArcSSO.js';
import './arc-sso.js';

describe('ArcSSO', () => {
  /* Test the rendering of the component. */
  describe('rendering', () => {
    let element: ArcSSO;
    beforeEach(async () => {
      element = await fixture(html`<arc-sso></arc-sso>`);
    });

    /* Test default properties that reflect to the DOM. */
    it('renders the element with default properties in the dom', () => {
      expect(element).dom.to.equal(`<arc-sso></arc-sso>`);
    });

    /* Test the accessibility. */
    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });

  /* Test the setters/getters */
  describe('setters/getters', () => {
    it('renders the element with a custom client-id', async () => {
      const element: ArcSSO = await fixture(html`<arc-sso client-id="1"></arc-sso>`);

      expect(element.clientId).to.equal('1');
      expect(element.getAttribute('client-id')).to.equal('1');
    });

    it('renders the element with a custom tenant-id', async () => {
      const element: ArcSSO = await fixture(html`<arc-sso tenant-id="2"></arc-sso>`);

      expect(element.tenantId).to.equal('2');
      expect(element.getAttribute('tenant-id')).to.equal('2');
    });

    it('renders the element with a custom redirect-uri', async () => {
      const element: ArcSSO = await fixture(html`<arc-sso redirect-uri="/"></arc-sso>`);

      expect(element.redirectUri).to.equal('/');
      expect(element.getAttribute('redirect-uri')).to.equal('/');
    });

    it('renders the element with custom scopes', async () => {
      const element: ArcSSO = await fixture(html`<arc-sso scopes="one,two, three"></arc-sso>`);

      /* The scopes are being converted into an array */
      expect(element.scopes.length).to.equal(3);
      expect(element.scopes[0]).to.equal('one');
      expect(element.scopes[1]).to.equal('two');
      expect(element.scopes[2]).to.equal('three');

      expect(element.getAttribute('scopes')).to.equal('one,two, three');
    });
  });

  /* Test specific methods */
  describe('methods', () => {
    let element: ArcSSO;

    beforeEach(async () => {
      element = await fixture(
        html`<arc-sso
          client-id="b4a4c03f-4915-42db-aa79-d49a650974c2"
          tenant-id="4ae48b41-0137-4599-8661-fc641fe77bea"
        ></arc-sso> `
      );
    });

    it('should retrieve an undefined account', () => {
      expect(element.getAccount()).to.be.undefined;
    });

    it('should retrieve an empty avatar string', async () => {
      const avatar = await element.getAvatar();
      expect(avatar).to.equal('');
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
      expect(hasSlot(main, 'login')).to.be.true;
      expect(hasSlot(main, 'logout')).to.be.true;
    });

    it('shows/hides the correct slots on initialization', () => {
      const loginSlot = element.shadowRoot!.querySelector('slot[name="login"]')!;
      const logoutSlot = element.shadowRoot!.querySelector('slot[name="logout"]')!;

      expect(loginSlot.hasAttribute('hidden')).to.be.false;
      expect(logoutSlot.hasAttribute('hidden')).to.be.true;
    });
  });
});
