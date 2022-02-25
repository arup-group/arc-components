import { expect } from '@open-wc/testing';

import { setBasePath, getBasePath } from './base-path.js';

describe('BasePath', () => {
  afterEach(() => {
    setBasePath('');
  });

  it('returns the correct base path when using a simple string', () => {
    setBasePath('test');
    expect(getBasePath()).to.equal('test');
  });
  it('returns the correct base path when using slashes', () => {
    setBasePath('/test/');
    expect(getBasePath()).to.equal('/test');
  });
  it('returns the correct base path when using relative path', () => {
    setBasePath('../../../test/');
    expect(getBasePath()).to.equal('../../../test');
  });
});
