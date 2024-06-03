import { expect, fixture } from '@open-wc/testing';
import './arc-checkbox.js';
import ArcCheckbox from './ArcCheckbox.js';

describe('ArcCheckbox', () => {
  describe('slots', () => {
    let checkbox: ArcCheckbox;

    beforeEach(async () => {
      checkbox = await fixture('<arc-checkbox>Arc Checkbox</arc-checkbox>');
    });

    it('renders defualt slot as checkbox label', async () => {
      expect(checkbox.innerText).to.equal('Arc Checkbox');
      expect(checkbox.shadowRoot?.querySelector('label')).to.exist;
    });
  });
});
