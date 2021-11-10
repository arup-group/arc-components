/*
Given a slot, this function iterates over all of its assigned element and text nodes and returns the concatenated
HTML as a string. This is useful because we can't use slot.innerHTML as an alternative.
 */
function getInnerHTML(slot: HTMLSlotElement): string {
  const nodes = slot.assignedNodes({ flatten: true });
  let html = '';

  [...nodes].forEach(node => {
    if (node.nodeType === Node.ELEMENT_NODE) {
      html += (node as HTMLElement).outerHTML;
    }

    if (node.nodeType === Node.TEXT_NODE) {
      html += node.textContent;
    }
  });

  return html;
}

/*
Given a slot, this function iterates over all of its assigned text nodes and returns the concatenated text as a
string. This is useful because we can't use slot.textContent as an alternative.
 */
function getTextContent(slot: HTMLSlotElement): string {
  const nodes = slot ? slot.assignedNodes({ flatten: true }) : [];
  let text = '';

  [...nodes].forEach(node => {
    if (node.nodeType === Node.TEXT_NODE) {
      text += node.textContent;
    }
  });

  return text;
}

/*
Determines whether an element has slots.
If name is specified, the function will look for a corresponding named slot,
otherwise it will look for slotted content (e.g. a non-empty text node or an element with no slot attribute).
 */
function hasSlot(el: HTMLElement, name?: string) {
  /* Look for a named slot */
  if (name) {
    return el.querySelector(`:scope > [slot="${name}"]`) !== null;
  }

  /* Look for a default slot */
  return [...el.childNodes].some(node => {
    if (node.nodeType === node.TEXT_NODE && node.textContent!.trim() !== '') {
      return true;
    }

    if (node.nodeType === node.ELEMENT_NODE) {
      const nodeEl = node as HTMLElement;
      if (!nodeEl.hasAttribute('slot')) {
        return true;
      }
    }

    return false;
  });
}

/*
Determines whether an element has a slot.
If name is specified, the function will look for a specific named slot,
otherwise it will look for a default slot.
 */
function slotExists(el: HTMLElement, name?: string) {
  /* Look for a named slot */
  if (name) {
    return el.querySelector(`slot[name='${name}']`) !== null;
  }

  /* Look for a default slot */
  return [...el.querySelectorAll('slot')].some(node => !node.hasAttribute('name'));
}

export { getInnerHTML, getTextContent, hasSlot, slotExists };
