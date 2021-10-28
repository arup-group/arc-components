import { expect } from '@open-wc/testing';

import { ICON_SIZES } from './IconConstants.js';

describe('ButtonConstants', () => {
  describe('sizes', () => {
    expect(ICON_SIZES).to.exist;
    const keys: Array<keyof typeof ICON_SIZES> = Object.keys(ICON_SIZES);

    expect(keys.length).to.be.equal(3);
    expect(keys).to.contain('small');
    expect(keys).to.contain('medium');
    expect(keys).to.contain('large');
  });
});
