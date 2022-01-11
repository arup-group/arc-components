import { expect } from '@open-wc/testing';

import { DROPDOWN_PLACEMENTS } from './DropdownConstants.js';

describe('DropdownConstants', () => {
  describe('placements', () => {
    expect(DROPDOWN_PLACEMENTS).to.exist;
    const keys = Object.keys(DROPDOWN_PLACEMENTS);

    expect(keys.length).to.equal(15);
    expect(keys).to.contain('auto-start');
    expect(keys).to.contain('auto-end');
    expect(keys).to.contain('auto');
    expect(keys).to.contain('top');
    expect(keys).to.contain('top-start');
    expect(keys).to.contain('top-end');
    expect(keys).to.contain('bottom');
    expect(keys).to.contain('bottom-start');
    expect(keys).to.contain('bottom-end');
    expect(keys).to.contain('right');
    expect(keys).to.contain('right-start');
    expect(keys).to.contain('right-end');
    expect(keys).to.contain('left');
    expect(keys).to.contain('left-start');
    expect(keys).to.contain('left-end');
  });
});
