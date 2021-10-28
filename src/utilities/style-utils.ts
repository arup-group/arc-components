function getPropertyValue(element: any, property: string) {
  const computedStyles = window.getComputedStyle(element);
  return computedStyles.getPropertyValue(property).trim();
}

export { getPropertyValue };
