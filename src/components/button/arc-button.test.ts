import { html } from 'lit';
import { expect, fixture } from '@open-wc/testing';

import { ArcButton } from './ArcButton.js';
import './arc-button.js';

describe('ArcButton', () => {
  describe('rendering', () => {
    it('renders slots to fill the button', async () => {
      const button: ArcButton = await fixture(html` <arc-button></arc-button> `);
      const buttonTarget = button.shadowRoot!.getElementById('button')!;

      expect(buttonTarget.querySelector('slot')).to.exist;
    })
    it('renders a button with default properties', async () => {
      const button: ArcButton = await fixture(html` <arc-button></arc-button> `);
      expect(button).dom.to.equal(`<arc-button></arc-button>`);
    })

    it('passes the a11y audit', async () => {
      const button: ArcButton = await fixture(html` <arc-button>Test</arc-button> `);
      await expect(button).shadowDom.to.be.accessible();
    });
  });
  describe('states', () => {

  })
});
