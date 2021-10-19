import { expect } from '@open-wc/testing';
import { setViewport } from '@web/test-runner-commands';

import { isMobile } from './ui-utils.js';

describe('isMobile', () => {
  it('returns true if width < 48rem', async () => {
    await setViewport({ width: 360, height: 640 });
    expect(isMobile()).to.be.true;
  });

  it('returns false if width > 48rem', async () => {
    await setViewport({ width: 1200, height: 640 });
    expect(isMobile()).to.be.false;
  });
});
