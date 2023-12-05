import { isServer } from 'lit';

/**
 * Returns the computed value of a component.
 */
function getPropertyValue(element: any, property: string): string {
  if (isServer) return '';
  const computedStyles = window.getComputedStyle(element);
  return computedStyles.getPropertyValue(property).trim();
}

/**
 * Returns the computed value of an ARC :root property.
 */
function getRootValue(property: string): string {
  if (isServer) return '';
  const root: HTMLElement = document.querySelector(':root')!;
  const computedStyles = getComputedStyle(root);
  return computedStyles.getPropertyValue(property).trim();
}

/**
 * Sets the computed value of an ARC :root property.
 */
function setRootValue(variable: string, newVal: string): void {
  if (isServer) return;
  const root: HTMLElement = document.querySelector(':root')!;

  /* Only overwrite when the css variable changed. */
  if (getRootValue(variable) !== newVal) {
    root.style.setProperty(variable, newVal);
  }
}

/**
 * Adds a CSS class to the documentElement to prevent a flash of unstyled content (FOUC)
 * and removes it when the document is loaded.
 */
function noFOUC(): void {
  if (isServer) return;
  document.documentElement.className = 'no-fouc';

  if (document.readyState === 'complete') {
    document.documentElement.classList.remove('no-fouc');
  }

  document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      document.documentElement.classList.remove('no-fouc');
    }
  };
}

export { getPropertyValue, getRootValue, setRootValue, noFOUC };
