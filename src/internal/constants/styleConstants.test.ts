import { expect } from '@open-wc/testing';
import { FONT_SIZES, FONT_SPACING, THEME_COLORS } from './styleConstants.js';

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

  it('should contain the correct font spacings', () => {
    expect(FONT_SPACING).to.exist;
    const keys = Object.keys(FONT_SPACING);

    expect(keys.length).to.be.equal(3);
    expect(keys).to.contain('dense');
    expect(keys).to.contain('normal');
    expect(keys).to.contain('loose');
  });

  it('should contain the correct theme colors', () => {
    expect(THEME_COLORS).to.exist;
    const keys = Object.keys(THEME_COLORS);

    expect(keys.length).to.equal(7);
    expect(keys).to.contain('default');
    expect(keys).to.contain('primary');
    expect(keys).to.contain('secondary');
    expect(keys).to.contain('error');
    expect(keys).to.contain('warning');
    expect(keys).to.contain('info');
    expect(keys).to.contain('success');
  });
});
