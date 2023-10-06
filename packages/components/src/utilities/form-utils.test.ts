import { html } from 'lit';
import { expect, fixture } from '@open-wc/testing';

import { serialize } from './form-utils.js';

describe('serialize', () => {
  it('serializes input controls', async () => {
    const element: HTMLFormElement = await fixture(html`
      <form>
        <input name="name" value="testName" />
        <input name="test" value="testValue" />
      </form>
    `);
    const data = serialize(element);
    const keys = Object.keys(data);
    const values: any[] = Object.values(data);

    expect(keys.length).to.equal(2);
    expect(keys).to.contain('name');
    expect(keys).to.contain('test');
    expect(values[0]).to.equal('testName');
    expect(values[1]).to.equal('testValue');
  });

  it('serializes a multi select control', async () => {
    const element: HTMLFormElement = await fixture(html`
      <form>
        <select name="values" multiple>
          <option value="one" selected>One</option>
          <option value="two" selected>Two</option>
          <option value="three">Three</option>
          <option value="four">Four</option>
        </select>
      </form>
    `);
    const data = serialize(element);
    const keys = Object.keys(data);
    const values: any[] = Object.values(data);

    expect(keys.length).to.equal(1);
    expect(keys).to.contain('values');
    expect(values[0].length).to.equal(2);
  });

  it('passes form controls that share the same name into an array', async () => {
    const element: HTMLFormElement = await fixture(html`
      <form>
        <input name="name" value="testName" />
        <input name="name" value="testNameTwo" />
      </form>
    `);
    const data = serialize(element);
    const keys = Object.keys(data);
    const values: any[] = Object.values(data);

    expect(keys.length).to.equal(1);
    expect(keys).to.contain('name');
    expect(values[0].length).to.equal(2);
  });

  it('passes array form controls that share the same name into an array', async () => {
    const element: HTMLFormElement = await fixture(html`
      <form>
        <select name="values" multiple>
          <option value="one" selected>One</option>
          <option value="two" selected>Two</option>
          <option value="three">Three</option>
          <option value="four">Four</option>
        </select>
        <select name="values" multiple>
          <option value="one">One</option>
          <option value="two">Two</option>
          <option value="three" selected>Three</option>
          <option value="four" selected>Four</option>
        </select>
      </form>
    `);
    const data = serialize(element);
    const keys = Object.keys(data);
    const values: any[] = Object.values(data);

    expect(keys.length).to.equal(1);
    expect(keys).to.contain('values');
    expect(values[0].length).to.equal(4);
  });
});
