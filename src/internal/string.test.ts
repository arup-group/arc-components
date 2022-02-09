import { expect } from '@open-wc/testing';
import { uppercaseFirstLetter, stringToInitials, stringToArray } from './string.js';

describe('string', () => {
  describe('uppercaseFirstLetter', () => {
    it('should turn the first letter to uppercase', () => {
      const string = 'my string';

      expect(uppercaseFirstLetter(string)).to.equal('My string');
    });
  });

  describe('stringToInitials', () => {
    it('should return the initials with only a first name', () => {
      const string = 'Test';
      expect(stringToInitials(string)).to.equal('T');
    });
    it('should return the initials with a first -and last name', () => {
      const string = 'Test User';
      expect(stringToInitials(string)).to.equal('TU');
    });
    it('should return the initials when one (or many) middle names are present', () => {
      const string = 'Test Middle Name User';
      expect(stringToInitials(string)).to.equal('TU');
    });
    it('should return an empty string when an empty string is given', () => {
      const string = '';
      expect(stringToInitials(string)).to.equal('');
    });
  });

  describe('stringToArray', () => {
    it('should turn a comma-separated string into an array of strings', () => {
      const string = 'one, two, three';
      const stringTwo = 'one,two,     three';
      const stringArray = stringToArray(string);
      const stringArrayTwo = stringToArray(stringTwo);

      expect(stringArray.length).to.equal(3);
      expect(stringArray[0]).to.equal('one');
      expect(stringArray[1]).to.equal('two');
      expect(stringArray[2]).to.equal('three');

      expect(stringArrayTwo.length).to.equal(3);
      expect(stringArrayTwo[0]).to.equal('one');
      expect(stringArrayTwo[1]).to.equal('two');
      expect(stringArrayTwo[2]).to.equal('three');
    });
  });
});
