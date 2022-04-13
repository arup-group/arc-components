import { expect } from '@open-wc/testing';

import { ARC_ANIMATION_OPTIONS } from './animationConstants.js';

describe('AnimationConstants', () => {
  it('should have the correct transition speeds', () => {
    expect(ARC_ANIMATION_OPTIONS).to.exist;
    const keys = Object.keys(ARC_ANIMATION_OPTIONS);

    expect(keys.length).to.equal(6);
    expect(keys).to.contain('xx-slow');
    expect(keys).to.contain('x-slow');
    expect(keys).to.contain('slow');
    expect(keys).to.contain('medium');
    expect(keys).to.contain('fast');
    expect(keys).to.contain('x-fast');
  });

  it('should have the correct animation options', () => {
    const values = Object.values(ARC_ANIMATION_OPTIONS);

    values.forEach(value => {
      expect(value.duration).to.exist;
      expect(value.easing).to.exist;
    });
  });
});
