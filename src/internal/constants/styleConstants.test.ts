import { expect } from '@open-wc/testing';
import { FONT_SIZES } from './styleConstants.js';

describe('FontConstants', () => {
  it('should contain the correct font sizes', () => {
    expect(FONT_SIZES).to.exist;
    const keys = Object.keys(FONT_SIZES);

    expect(keys.length).to.be.equal(9);
    expect(keys).to.contain('xx-small');
    expect(keys).to.contain('x-small');
    expect(keys).to.contain('small');
    expect(keys).to.contain('medium');
    expect(keys).to.contain('large');
    expect(keys).to.contain('x-large');
    expect(keys).to.contain('xx-large');
    expect(keys).to.contain('xxx-large');
    expect(keys).to.contain('xxxx-large');
  });
});
