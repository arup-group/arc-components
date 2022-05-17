import { expect } from '@open-wc/testing';
import { CHIP_TYPES } from './ChipConstants.js';

describe('ChipConstants', () => {
  it('should contain the correct chip types', () => {
    expect(CHIP_TYPES).to.exist;
    const keys = Object.keys(CHIP_TYPES);

    expect(keys.length).to.equal(2);
    expect(keys).to.contain('filled');
    expect(keys).to.contain('outlined');
  });
});
