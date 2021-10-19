import { expect } from '@open-wc/testing';

import { isNight } from './date-utils.js';

describe('isNight', () => {
  it('should return true', () => {
    const date = new Date('August 25, 21 01:00');
    expect(isNight(date)).to.be.true;
  });
  it('should return false', () => {
    const date = new Date('August 26, 21 08:00');
    expect(isNight(date)).to.be.false;
  });
});
