import { html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { elementUpdated, expect, fixture } from '@open-wc/testing';
import sinon from 'sinon';
import { watch } from './watch.js';

@customElement('watch-test')
class WatchTest extends LitElement {
  @property() test: string;

  @watch('test')
  propChangeOne = (oldVal: string, newVal: string) => {
    this.dispatchEvent(
      new CustomEvent('watch-changed', {
        detail: [oldVal, newVal],
      }),
    );
  };

  @watch('test', { waitUntilFirstUpdate: true })
  propChangeTwo = (oldVal: string, newVal: string) => {
    this.dispatchEvent(
      new CustomEvent('watch-waited', {
        detail: [oldVal, newVal],
      }),
    );
  };

  @watch('test')
  propChangeThree = (oldVal: string, newVal: string) => {
    if (this.hasUpdated) {
      this.dispatchEvent(
        new CustomEvent('watch-waited-two', {
          detail: [oldVal, newVal],
        }),
      );
    }
  };
}

describe('watch', () => {
  let element: WatchTest;

  beforeEach(async () => {
    element = await fixture(html`<watch-test test="A"></watch-test>`);
  });

  it('should wait for an update to change', async () => {
    const changeHandler = sinon.spy();
    element.addEventListener('watch-changed', changeHandler);

    element.test = 'B';
    await elementUpdated(element);

    expect(changeHandler).to.have.been.calledOnce;
  });

  it('should start watching for changes after the initial setup', async () => {
    const waitHandlerWithOptions = sinon.spy();
    const waitHandler = sinon.spy();
    element.addEventListener('watch-waited', waitHandlerWithOptions);
    element.addEventListener('watch-waited-two', waitHandler);

    element.test = 'B';
    await elementUpdated(element);

    expect(waitHandlerWithOptions).to.have.been.calledOnce;
    expect(waitHandler).to.have.been.calledOnce;
  });
});
