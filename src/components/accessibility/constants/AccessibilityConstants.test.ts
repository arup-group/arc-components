import { expect } from '@open-wc/testing';

import { USER_PREFERENCES } from './AccessibilityConstants.js';

describe('UserPreferences', () => {
  it('should contain the basic Arc preferences', () => {
    expect (USER_PREFERENCES).to.exist;
    const keys = Object.keys(USER_PREFERENCES);

    expect(keys.length).to.equal(5);
    expect(keys).to.contain('colourMode');
    expect(keys).to.contain('highLegibilityFonts');
    expect(keys).to.contain('highlightLinks');
    expect(keys).to.contain('plainText');
    expect(keys).to.contain('textSize');
  })
})
