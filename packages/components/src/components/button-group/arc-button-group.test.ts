import { html } from 'lit';
import { expect, fixture } from '@open-wc/testing';
import type ArcButton from './arc-button-group.js';
import '../button/arc-button.js';

describe('ArcButton', () => {
  /* Test the rendering of the component */
  describe('rendering', () => {
    let element: ArcButton;
    beforeEach(async () => {
      element = await fixture(html`<arc-button-group><arc-button>Button One</arc-button><arc-button>Button Two</arc-button></arc-button-group>`);
    });

    it('renders', () => {
      expect(element).dom.to.equal(`
        <arc-button-group>
          <arc-button>Button One</arc-button>
          <arc-button>Button Two</arc-button>
        </arc-button-group>
      `);
    });

    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });
});
