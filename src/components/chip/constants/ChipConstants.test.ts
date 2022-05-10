import { expect } from '@open-wc/testing';
import { CHIP_SIZES, CHIP_TYPES } from './ChipConstants.js';

describe('ChipConstants', () => {
  it('should contain the correct chip sizes', () => {
    expect(CHIP_SIZES).to.exist;
    const keys = Object.keys(CHIP_SIZES);

    expect(keys.length).to.equal(3);
    expect(keys).to.contain('small');
    expect(keys).to.contain('medium');
    expect(keys).to.contain('large');
  });

  it('should contain the correct chip types', () => {
    expect(CHIP_TYPES).to.exist;
    const keys = Object.keys(CHIP_TYPES);

    expect(keys.length).to.equal(2);
    expect(keys).to.contain('filled');
    expect(keys).to.contain('outlined');
  });
});
