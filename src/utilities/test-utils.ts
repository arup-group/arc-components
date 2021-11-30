/*
Determines whether a web-component has a slot.
If name is specified, the function will look for a specific named slot,
otherwise it will look for a default slot.
 */
function hasSlot(el: HTMLElement, name?: string) {
  /* Look for a named slot */
  if (name) {
    return el.querySelector(`slot[name='${name}']`) !== null;
  }

  /* Look for a default slot */
  return [...el.querySelectorAll('slot')].some(node => !node.hasAttribute('name'));
}

export { hasSlot };
