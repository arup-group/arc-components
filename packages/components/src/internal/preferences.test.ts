import { expect } from '@open-wc/testing';
import { setViewport, emulateMedia } from '@web/test-runner-commands';

import { isMobile, prefersReducedMotion } from './preferences.js';

describe('isMobile', () => {
  it('returns true if width < 49rem', async () => {
    await setViewport({ width: 783, height: 640 });
    expect(isMobile()).to.be.true;
  });

  it('returns false if width > 49rem', async () => {
    await setViewport({ width: 785, height: 640 });
    expect(isMobile()).to.be.false;
  });
});

describe('prefersReducedMotion', () => {
  it('validates the prefers-reduced-motion state', async () => {
    expect(prefersReducedMotion()).to.be.false;

    await emulateMedia({ reducedMotion: 'reduce' });
    expect(prefersReducedMotion()).to.be.true;

    await emulateMedia({ reducedMotion: 'no-preference' });
    expect(prefersReducedMotion()).to.be.false;
  });
});
