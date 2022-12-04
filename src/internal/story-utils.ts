/**
 * Class Information.
 * Key is the class name and value is a boolean
 * representing if the class name should be set.
 */
interface ClassInfo {
  readonly [className: string]: boolean;
}

/**
 * Element Attribute.
 */
interface Attribute {
  /* Value of the attribute. */
  readonly value: string;
  /* Boolean representing if the attribute should be set */
  readonly set: boolean;
}

/**
 * Attributes.
 * Key is the attribute name and the value is a
 * object of type `Attribute`.
 */
interface Attributes {
  readonly [qualifiedName: string]: Attribute;
}

/**
 * Create an element.
 */
export type CreateElement<TArgs> = (args: TArgs) => HTMLElement;

/**
 * Set class information on element.
 */
export function setClassInfo(element: HTMLElement, classInfo: ClassInfo) {
  Object.keys(classInfo)
    .filter(className => classInfo[className])
    .forEach(className => element.classList.add(className));
}

/**
 * Sets attributes on element.
 */
export function setAttributes(element: HTMLElement, attributes: Attributes) {
  Object.keys(attributes)
    .filter(qualifiedName => attributes[qualifiedName].set)
    .forEach(qualifiedName => element.setAttribute(qualifiedName, attributes[qualifiedName].value));
}

/**
 * Create an element with given tag name, class information and attributes.
 */
export function createElement(tageName: string, classInfo: ClassInfo = {}, attributes: Attributes = {}) {
  const element = document.createElement(tageName);
  setClassInfo(element, classInfo);
  setAttributes(element, attributes);
  return element;
}
