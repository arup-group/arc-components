import { isServer } from 'lit';
import { COLORS, THEME_COLORS } from '../internal/constants/styleConstants.js';

/**
 * Returns a regular expression match array to find ARC specific :root CSS variables.
 */
function matchArcVariable(variable: string): RegExpMatchArray | null {
  const arcRegex = /(?<=--arc-)(.*)/gi;
  return variable.match(arcRegex);
}

/**
 * Returns an array of all ARC :root variables.
 */
function getRootVariables(): string[] | string {
  if (isServer) return '';
  const styleSheets = [...document.styleSheets];
  return styleSheets
    ? styleSheets
        .map(
          (styleSheet) =>
            [...styleSheet.cssRules].reduce(
              (def: string[], rule: CSSStyleRule) =>
                rule.selectorText === ':root'
                  ? ([
                      ...def,
                      [...rule.style].filter((name: string) =>
                        name.startsWith('--arc'),
                      ),
                    ] as string[])
                  : def,
              [],
            )[0],
        )
        .flat()
        .filter(Boolean)
    : [];
}

/**
 * Returns an array of all named ARC :root variables that match the rootName parameter.
 */
function getNamedRootVariables(rootName: string): string[] | string {
  const rootVariables = getRootVariables();
  return [...rootVariables].filter(
    (variable) =>
      variable.includes(rootName) && variable.startsWith(`--arc-${rootName}`),
  );
}

/**
 * Returns an array of all ARC :root colors.
 */
function getRootColors(): string[] {
  const regex = /(?<=--arc-)(.*?)(?=-(.*?))/gi;
  return [...getRootVariables()].reduce((prev: string[], curr: string) => {
    const hasMatch = curr.match(regex);
    const colorValue = hasMatch && hasMatch.length > 0 ? hasMatch[0] : '';
    return colorValue in THEME_COLORS || colorValue in COLORS
      ? [...prev, `rgb(var(${curr}))`]
      : prev;
  }, []);
}

/**
 * Returns the computed value of an ARC :root property.
 */
function getRootValue(property: string) {
  if (isServer) return '';
  const root: HTMLElement = document.querySelector(':root')!;
  const computedStyles = getComputedStyle(root);
  return computedStyles.getPropertyValue(property).trim();
}

/**
 * Sets the computed value of an ARC :root property.
 */
function setRootValue(variable: string, newVal: string) {
  if (isServer) return;
  const root: HTMLElement = document.querySelector(':root')!;
  if (getRootValue(variable) !== newVal) {
    root.style.setProperty(variable, newVal);
  }
}

/**
 * Returns the computed value of a component.
 */
function getPropertyValue(element: Element, property: string): string {
  if (isServer) return '';
  const computedStyles = window.getComputedStyle(element);
  return computedStyles.getPropertyValue(property).trim();
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

export {
  matchArcVariable,
  getRootVariables,
  getRootColors,
  getNamedRootVariables,
  getRootValue,
  setRootValue,
  getPropertyValue,
  noFOUC,
};
