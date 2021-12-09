import { isTabbable } from 'tabbable';

/*
Returns the first and last bounding elements that are tabbable. This is more performant than checking every single
element because it short-circuits after finding the first and last ones.
*/
function getTabbableBoundary(root: HTMLElement | ShadowRoot) {
  const allElements: HTMLElement[] = [];

  function walk(el: HTMLElement | ShadowRoot) {
    if (el instanceof HTMLElement) {
      allElements.push(el);

      if (el.shadowRoot && el.shadowRoot.mode === 'open') {
        walk(el.shadowRoot);
      }
    }

    [...el.querySelectorAll('*')].map((e: HTMLElement) => walk(e));
  }

  /* Collect all elements including the root */
  walk(root);

  /* Find the first and last tabbable elements */
  const start = allElements.find(el => isTabbable(el)) || null;
  const end = allElements.reverse().find(el => isTabbable(el)) || null;

  return { start, end };
}

export { getTabbableBoundary }
