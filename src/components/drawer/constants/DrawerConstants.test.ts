import { expect } from '@open-wc/testing';

import { DRAWER_PLACEMENTS } from './DrawerConstants.js';

describe('DrawerConstants', () => {
  describe('placements', () => {
    expect(DRAWER_PLACEMENTS).to.exist;
    const keys = Object.keys(DRAWER_PLACEMENTS);

    expect(keys.length).to.equal(4);
    expect(keys).to.contain('top');
    expect(keys).to.contain('end');
    expect(keys).to.contain('bottom');
    expect(keys).to.contain('start');
  });
});
