/**
 * Function to check whether a given component has a given (named) slot
 * @param {any} el - The web-component holding the <slot> attribute
 * @param {string} [name] - The name of the slot to validate
 * */
function hasSlot(el: any, name?: string) {
  if (name) {
    return el.querySelector(`:scope > [slot="${name}"]`) !== null;
  }
  return [...el.childNodes].some((node) => {
    if (node.nodeType === node.TEXT_NODE && node.textContent.trim() !== "") {
      return true;
    }
    if (node.nodeType === node.ELEMENT_NODE) {
      if (!node.hasAttribute("slot")) {
        return true;
      }
    }
    return false;
  });
}

export {
  hasSlot
}
