import { expect } from '@open-wc/testing';
import { TOOLTIP_PLACEMENTS } from './TooltipConstants.js';

describe('TooltipConstants', () => {
  it('should contain the correct tooltip placements', () => {
    expect(TOOLTIP_PLACEMENTS).to.exist;
    const keys = Object.keys(TOOLTIP_PLACEMENTS);

    expect(keys.length).to.equal(12);
    expect(keys).to.contain('top');
    expect(keys).to.contain('top-start');
    expect(keys).to.contain('top-end');
    expect(keys).to.contain('right');
    expect(keys).to.contain('right-start');
    expect(keys).to.contain('right-end');
    expect(keys).to.contain('bottom');
    expect(keys).to.contain('bottom-start');
    expect(keys).to.contain('bottom-end');
    expect(keys).to.contain('left');
    expect(keys).to.contain('left-start');
    expect(keys).to.contain('left-end');
  });
});
