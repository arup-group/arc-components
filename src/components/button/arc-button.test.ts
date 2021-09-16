import { html } from 'lit';
import { expect, fixture, elementUpdated } from '@open-wc/testing';

import { ArcButton } from './ArcButton.js';
import './arc-button.js';

describe('ArcButton', () => {
  describe('rendering', () => {
    it('renders slots to fill the button', async () => {
      const button: ArcButton = await fixture(html` <arc-button></arc-button> `)

      button.active = true;
      await elementUpdated(button);

      expect(button).dom.to.equal(`<arc-button active></arc-button>`)
    })

    it('passes the a11y audit', async () => {
      const button: ArcButton = await fixture(html` <arc-button>Hey</arc-button> `)
      await expect(button).shadowDom.to.be.accessible();
    });
  });
});
