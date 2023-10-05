import { expect } from '@open-wc/testing';
import {
  uppercaseFirstLetter,
  stringToInitials,
  stringToSpaceSeparated,
  stringToHyphenSeparated,
  stringToArray,
  stringifyObject,
  parseObject,
} from './string.js';

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

  describe('stringToSpaceSeparated', () => {
    it('should return a camelCase string into a space separated string', () => {
      expect(stringToSpaceSeparated('testOption')).to.equal('Test Option');
    });

    it('should return a PascalCase string into a space separated string', () => {
      expect(stringToSpaceSeparated('TestOption')).to.equal('Test Option');
    });

    it('should return a camelCaseString into a space separated string', () => {
      expect(stringToSpaceSeparated('testOptionTwo')).to.equal(
        'Test Option Two',
      );
    });

    it('should return PascalCaseString into a space separated string', () => {
      expect(stringToSpaceSeparated('TestOptionTwo')).to.equal(
        'Test Option Two',
      );
    });

    it('should return the original string when a faulty string is provided', () => {
      expect(stringToSpaceSeparated('testoptiontwo')).to.equal('Testoptiontwo');
      expect(stringToSpaceSeparated('TESTOPTIONTWO')).to.equal('TESTOPTIONTWO');
    });
  });

  describe('stringToHyphenSeparated', () => {
    it('should return a camelCase string into a hyphen separated string', () => {
      expect(stringToHyphenSeparated('testOption')).to.equal('test-option');
    });

    it('should return a PascalCase string into a hyphen separated string', () => {
      expect(stringToHyphenSeparated('TestOption')).to.equal('test-option');
    });

    it('should return a camelCaseString into a hyphen separated string', () => {
      expect(stringToHyphenSeparated('testOptionTwo')).to.equal(
        'test-option-two',
      );
    });

    it('should return a PascalCaseString into a hyphen separated string', () => {
      expect(stringToHyphenSeparated('TestOptionTwo')).to.equal(
        'test-option-two',
      );
    });

    it('should return the original string when a faulty string is provided', () => {
      expect(stringToHyphenSeparated('testoptiontwo')).to.equal(
        'testoptiontwo',
      );
      expect(stringToHyphenSeparated('TESTOPTIONTWO')).to.equal(
        'TESTOPTIONTWO',
      );
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

  describe('stringifyObject', () => {
    it('returns a JSON object as JSON string', () => {
      const JSONObj = { one: 'one' };
      expect(stringifyObject(JSONObj)).to.equal('{"one":"one"}');
    });

    it('throws an error when trying to convert a faulty (circular) object', () => {
      const JSONObj = { one: {} };

      /* Cyclical object that references itself */
      JSONObj.one = JSONObj;

      expect(() => stringifyObject(JSONObj)).to.throw('Invalid JSON object');
    });
  });

  describe('parseObject', () => {
    it('returns a JSON string as JSON object', () => {
      const JSONStr = '{"one":"one"}';
      const parsedObj = parseObject(JSONStr);

      expect(Object.keys(parsedObj).length).to.equal(1);
      expect(parsedObj.one).to.equal('one');
    });

    it('throws an error when trying to convert a faulty string', () => {
      const string = "{'one':'one'}";
      expect(() => parseObject(string)).to.throw('Invalid JSON string');
    });
  });
});
