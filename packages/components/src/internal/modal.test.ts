import { expect } from '@open-wc/testing';

import Modal from './modal.js';
import '../components/drawer/arc-drawer.js';

describe('methods', () => {
  let modalElement: HTMLElement;
  let modal: Modal | null;

  beforeEach(async () => {
    modalElement = document.createElement('arc-drawer');
    modal = new Modal(modalElement);
  });

  afterEach(() => {
    modal = null;
  });

  it('should create the modal', () => {
    expect(modal).to.exist;
    expect(modal?.element).to.equal(modalElement);
  });

  it('should set the correct tab direction for the keyDown event', () => {
    expect(modal?.tabDirection).to.equal('forward');

    modal?.handleKeyDown(
      new KeyboardEvent('keydown', {
        key: 'Tab',
        shiftKey: true,
      }),
    );

    expect(modal?.tabDirection).to.equal('backward');

    setTimeout(() => {
      expect(modal?.tabDirection).to.equal('forward');
    });
  });
});
