/* @watch decorator
Runs when @property or @state changes but before the component updates in the DOM.
To wait for an update to complete after a change occurs, use `await this.updateComplete` in the handler.
Example:
connectedCallback() {
  super.connectedCallback();
  this.updateComplete.then(() => {
    ...
  })
}

To start watching for a property to change after the first update/render, use `{ waitUntilFirstUpdate: true }`.
You can also use `this.hasUpdated` in the handler.
Example waitUntilFirstUpdate:
@watch('propName', { waitUntilFirstUpdate: true })
handlePropChange(oldVal, newVal) {
  ...
}

Example this.hasUpdated:
@watch('propName')
handlePropChange(oldVal, newVal) {
  if(this.hasUpdated) {
    ...
  }
}
*/
interface WatchOptions {
  waitUntilFirstUpdate?: boolean;
}

export function watch(propName: string, options?: WatchOptions) {
  return (protoOrDescriptor: any, name: string): any => {
    const { update } = protoOrDescriptor;
    const watchOptions = {
      waitUntilFirstUpdate: false,
      ...options,
    } as WatchOptions;

    /* eslint-disable-next-line no-param-reassign, func-names */
    protoOrDescriptor.update = function (changedProps: Map<string, any>) {
      if (changedProps.has(propName)) {
        const oldValue = changedProps.get(propName);
        const newValue = this[propName];

        if (oldValue !== newValue) {
          if (!watchOptions?.waitUntilFirstUpdate || this.hasUpdated) {
            this[name].call(this, oldValue, newValue);
          }
        }
      }

      update.call(this, changedProps);
    };
  };
}
