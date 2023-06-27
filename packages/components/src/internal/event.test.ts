import { html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { expect, fixture, oneEvent } from '@open-wc/testing';
import { emit, waitForEvent } from './event.js';

@customElement('event-test')
class EventTest extends LitElement {
  @property() done: boolean = false;

  fireEvent(options?: CustomEventInit) {
    this.done = true;
    emit(this, 'event-test', {
      detail: this.done,
      ...options,
    });
  }
}

describe('event', () => {
  let element: EventTest;

  beforeEach(async () => {
    element = await fixture(html`<event-test></event-test>`);
  });

  it('should emit a custom event', async () => {
    setTimeout(() => element.fireEvent());

    const { detail } = await oneEvent(element, 'event-test');

    expect(element.done).to.be.true;
    expect(detail).to.be.true;
  });

  it('should allow for option overwrites', async () => {
    setTimeout(() =>
      element.fireEvent({
        bubbles: false,
        cancelable: true,
        composed: false,
      })
    );

    const { bubbles, cancelable, composed, detail } = await oneEvent(
      element,
      'event-test'
    );

    expect(element.done).to.be.true;
    expect(bubbles).to.be.false;
    expect(cancelable).to.be.true;
    expect(composed).to.be.false;
    expect(detail).to.be.true;
  });

  it('should emit after another event is done', async () => {
    let isCalled = false;

    setTimeout(() => element.fireEvent());
    await waitForEvent(element, 'event-test').then(() => {
      isCalled = true;
    });

    expect(isCalled).to.be.true;
  });
});
