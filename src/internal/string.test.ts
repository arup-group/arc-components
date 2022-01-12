import { expect } from '@open-wc/testing';
import { uppercaseFirstLetter } from './string.js';

describe('string', () => {
  it('should turn the first letter to uppercase', () => {
    const string = 'my string';

    expect(uppercaseFirstLetter(string)).to.equal('My string');
  });
})
