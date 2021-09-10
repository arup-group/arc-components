import { html } from 'lit';
import { expect, fixture } from '@open-wc/testing';

import { ArcButton } from './arc-button.js';

describe('ArcButton', () => {
  describe('rendering', () => {
    let element: ArcButton;
    beforeEach(async () => {
      element = await fixture(html`<arc-button></arc-button>`)
    })

    it('renders a slot to fill the button', () => {
      const button = element.shadowRoot!.getElementById('button')!;
      expect(button.querySelector('slot')).to.exist;
    })

    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });
  describe('states', () => {
    it('draws the button in an active state', async () => {
      const element: ArcButton = await fixture(html`<arc-button active></arc-button>`);
      expect(element.hasAttribute('active')).to.be.true;
      expect(element.active).to.be.true;
    });
    it('draws the button in a disabled state', async () => {
      const element: ArcButton = await fixture(html`<arc-button disabled></arc-button>`);
      expect(element.hasAttribute('disabled')).to.be.true;
      expect(element.disabled).to.be.true;
    });
    // TODO: Add this test once the arc-loader component is done
    // it('draws the button in a loading state', async () => {
    //   const element = await fixture(html`<arc-button></arc-button>`);
    // });
  })
})
