import { html } from 'lit';
import { expect, fixture, elementUpdated } from '@open-wc/testing';

import { ArcDivider } from './ArcDivider.js';
import './arc-divider.js';

import { DIVIDER_TYPES } from './constants/DividerConstants.js';

describe('ArcDivider', () => {
  describe('rendering', () => {
    let divider: ArcDivider;
    beforeEach(async() => {
      divider = await fixture(html`<arc-divider></arc-divider>`);
    })

    it('renders the divider with default properties in the dom', () => {
      expect(divider).dom.to.equal(`<arc-divider type='none'></arc-divider>`)
    });

    it('renders the divider with different types', async () => {
      for (const dividerType of Object.keys(DIVIDER_TYPES)) {
        divider.type = dividerType;

        await elementUpdated(divider); // eslint-disable-line no-await-in-loop
        expect(divider.type).to.equal(dividerType);
        expect(divider.getAttribute('type')).to.equal(dividerType);

        expect(divider).dom.to.equal(`<arc-divider type=${dividerType}></arc-divider>`)
      }
    });

    it('passes the a11y audit', async () => {
      await expect(divider).shadowDom.to.be.accessible();
    });
  })
})
