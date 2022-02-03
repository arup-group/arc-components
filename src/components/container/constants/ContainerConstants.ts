export declare type ContainerTheme = 'auto' | 'dark' | 'light'

export const CONTAINER_THEMES: { [key in ContainerTheme]: ContainerTheme } = {
  auto: 'auto',
  dark: 'dark',
  light: 'light',
};

/* An array of elements that are excluded from the arc-container handleKeyDown event. */
export const IGNORE_KEYPRESS: string[] = [
  'INPUT',
  'TEXTAREA',
  'ARC-MENU-ITEM'
]
