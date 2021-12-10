/* Emits a custom event with more convenient defaults. */
function emit(el: HTMLElement, name: string, options?: CustomEventInit) {
  const event = new CustomEvent(name, {
    bubbles: true,
    cancelable: false,
    composed: true,
    detail: {},
    ...options,
  });
  el.dispatchEvent(event);
  return event;
}

/*
Waits for a specific event to be emitted from an element.
Ignores events that bubble up from child elements.
*/
function waitForEvent(el: HTMLElement, eventName: string) {
  return new Promise<void>(resolve => {
    function done(event: Event) {
      if (event.target === el) {
        el.removeEventListener(eventName, done);
        resolve();
      }
    }

    el.addEventListener(eventName, done);
  });
}

export { emit, waitForEvent };
