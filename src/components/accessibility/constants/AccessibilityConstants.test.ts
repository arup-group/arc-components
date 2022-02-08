import { expect } from '@open-wc/testing';

import { ACCESSIBILITY_OPTIONS, AccessibilityKey, USER_PREFERENCES } from './AccessibilityConstants.js';

describe('AccessibilityConstants', () => {
  describe('AccessibilityOptions', () => {
    it('should contain the basic ARC options', () => {
      expect (ACCESSIBILITY_OPTIONS).to.exist;
      const keys = Object.keys(ACCESSIBILITY_OPTIONS);

      expect(keys.length).to.equal(3);
      keys.forEach((key: AccessibilityKey) => {
        expect(ACCESSIBILITY_OPTIONS[key]).to.contain('icon');
        expect(ACCESSIBILITY_OPTIONS[key]).to.contain('values');
      })
    });

  });

  describe('UserPreferences', () => {
    it('should contain the basic ARC preferences', () => {
      expect (USER_PREFERENCES).to.exist;
      const keys = Object.keys(USER_PREFERENCES);

      expect(keys.length).to.equal(3);
      expect(keys).to.contain('colourMode');
      expect(keys).to.contain('textSize');
      expect(keys).to.contain('textDisplay');
    });

    it('should contain a set of text display options', () => {
      const keys = Object.keys(USER_PREFERENCES.textDisplay);

      expect(keys.length).to.equal(3);
      expect(keys).to.contain('highLegibilityFonts');
      expect(keys).to.contain('highlightLinks');
      expect(keys).to.contain('plainText');
    });
  });
});
