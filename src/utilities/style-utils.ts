/*
Retrieves the computed value of a style.
i.e. <component style='--my-var: 30rem'></component>
getPropertyValue(element, '--my-var') will return 30rem
*/
function getPropertyValue(element: any, property: string) {
  const computedStyles = window.getComputedStyle(element);
  return computedStyles.getPropertyValue(property).trim();
}

/*
Calling this method will resolve the flash-of-unstyled-content (FOUC)
*/
function noFOUC() {
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

export { getPropertyValue, noFOUC };
