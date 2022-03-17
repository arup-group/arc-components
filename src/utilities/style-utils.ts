/*
Retrieves the computed value of a component.
i.e. <component style='--my-var: 30rem'></component>
getPropertyValue(element, '--my-var') will return 30rem
*/
function getPropertyValue(element: any, property: string) {
  const computedStyles = window.getComputedStyle(element);
  return computedStyles.getPropertyValue(property).trim();
}

/* Retrieves the computed value of an ARC :root property. */
function getRootValue(property: string) {
  const root: HTMLElement = document.querySelector(':root')!;
  const computedStyles = getComputedStyle(root);
  return computedStyles.getPropertyValue(property).trim();
}

/* Sets the computed value of an ARC :root property. */
function setRootValue(variable: string, newVal: string) {
  const root: HTMLElement = document.querySelector(':root')!;

  /* Only overwrite when the css variable changed. */
  if (getRootValue(variable) !== newVal) {
    root.style.setProperty(variable, newVal);
  }
}

/* Tells if the user has enabled the "color-scheme" setting in their browser or OS. */
function prefersDark() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

/*
Calling this method will resolve the flash-of-unstyled-content (FOUC)
*/
function noFOUC() {
  document.documentElement.className = 'no-fouc';

  if (document.readyState === 'complete') {
    document.documentElement.classList.remove('no-fouc');
  }

  /* c8 ignore next 5 */
  document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      document.documentElement.classList.remove('no-fouc');
    }
  };
}

export { getPropertyValue, getRootValue, setRootValue, prefersDark, noFOUC };
