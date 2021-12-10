import { expect } from '@open-wc/testing';

import { DROPDOWN_PLACEMENTS } from './DropdownConstants.js';

describe('DropdownConstants', () => {
  describe('placements', () => {
    expect(DROPDOWN_PLACEMENTS).to.exist;
    const keys: Array<keyof typeof DROPDOWN_PLACEMENTS> = Object.keys(DROPDOWN_PLACEMENTS);

    expect(keys.length).to.equal(12);
    expect(keys).to.contain('top');
    expect(keys).to.contain('topStart');
    expect(keys).to.contain('topEnd');
    expect(keys).to.contain('bottom');
    expect(keys).to.contain('bottomStart');
    expect(keys).to.contain('bottomEnd');
    expect(keys).to.contain('right');
    expect(keys).to.contain('rightStart');
    expect(keys).to.contain('rightEnd');
    expect(keys).to.contain('left');
    expect(keys).to.contain('leftStart');
    expect(keys).to.contain('leftEnd');
  })
})
