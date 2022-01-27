import { expect } from '@open-wc/testing';

import { ICON_SIZES, ICON_TYPES } from './IconConstants.js';

describe('ButtonConstants', () => {
  describe('sizes', () => {
    it('should contain the correct icon sizes', () => {
      expect(ICON_SIZES).to.exist;
      const keys = Object.keys(ICON_SIZES);

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
    })
  });

  describe('types', () => {
    it ('should have a default set of icons available', () => {
      expect(ICON_TYPES).to.exist;
      const keys = Object.keys(ICON_TYPES);

      expect(keys.length).to.be.greaterThan(0);
      expect(keys).to.contain('accessibility'); // Used in the navbar
      expect(keys).to.contain('arrow-left'); // Used in the sidebar
      expect(keys).to.contain('arrow-right'); // Used in the sidebar
      expect(keys).to.contain('bulb'); // Used in the accessibility panel
      expect(keys).to.contain('eye'); // Used in the accessibility panel
      expect(keys).to.contain('fire'); // Used as default icon
      expect(keys).to.contain('menu'); // Used in the navbar
      expect(keys).to.contain('book-open'); // Used in the accessibility panel
      expect(keys).to.contain('x'); // Used in the accessibility panel
    })
  });
});
