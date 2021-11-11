/*
Retrieves the computed value of a style.
i.e. <component style='--my-var: 30rem'></component>
getPropertyValue(element, '--my-var') will return 30rem
*/
function getPropertyValue(element: any, property: string) {
  const computedStyles = window.getComputedStyle(element);
  return computedStyles.getPropertyValue(property).trim();
}

export { getPropertyValue };
