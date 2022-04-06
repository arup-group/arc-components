import type { ReactiveController, ReactiveControllerHost } from 'lit';

/*
Class used to listen to slot changes within an array of slots of the web-component.
This is useful to show/hide elements when a specific slot is not being used.
*/
class HasSlotController implements ReactiveController {
  host: ReactiveControllerHost & Element;

  slotNames: string[] = [];

  constructor(host: ReactiveControllerHost & Element, ...slotNames: string[]) {
    (this.host = host).addController(this);
    this.slotNames = slotNames;
    this.handleSlotChange = this.handleSlotChange.bind(this);
  }

  private hasDefaultSlot() {
    return [...this.host.childNodes].some(node => {
      if (node.nodeType === node.TEXT_NODE && node.textContent!.trim() !== '') {
        return true;
      }

      if (node.nodeType === node.ELEMENT_NODE) {
        const el = node as HTMLElement;
        if (!el.hasAttribute('slot')) {
          return true;
        }
      }

      return false;
    });
  }

  private hasNamedSlot(name: string) {
    return this.host.querySelector(`:scope > [slot="${name}"]`) !== null;
  }

  test(slotName: string) {
    return slotName === '[default]' ? this.hasDefaultSlot() : this.hasNamedSlot(slotName);
  }

  hostConnected() {
    this.host.shadowRoot!.addEventListener('slotchange', this.handleSlotChange);
  }

  hostDisconnected() {
    this.host.shadowRoot!.removeEventListener('slotchange', this.handleSlotChange);
  }

  handleSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;

    /*
    If an unnamed slot is given, ensure that the array contains the [default],
    if a named slot is given, ensure that the array contains the named slot.
    */
    if ((!slot.name && this.slotNames.includes('[default]')) || (!!slot.name && this.slotNames.includes(slot.name))) {
      this.host.requestUpdate();
    }
  }
}

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
  const nodes = slot.assignedNodes({ flatten: true });
  let text = '';

  [...nodes].forEach(node => {
    if (node.nodeType === Node.TEXT_NODE) {
      text += node.textContent;
    }
  });

  return text;
}

/*
Determines whether a web-component has a slot.
If name is specified, the function will look for a specific named slot,
otherwise it will look for a default slot.
 */
function hasSlot(el: HTMLElement, name?: string) {
  /* Look for a named slot. */
  if (name) {
    return el.querySelector(`slot[name='${name}']`) !== null;
  }

  /* Look for a default slot. */
  return [...el.querySelectorAll('slot')].some(node => !node.hasAttribute('name'));
}

export { HasSlotController, getInnerHTML, getTextContent, hasSlot };
