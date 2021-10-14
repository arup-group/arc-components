function emit(element: any, name: string, options: {}) {
  const event = new CustomEvent(name, {
    bubbles: true,
    cancelable: false,
    composed: true,
    detail: {},
    ...options
  });
  element.dispatchEvent(event);
  return event;
}

export {
  emit
};
