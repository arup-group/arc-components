import { createElement, CreateElement } from '../../internal/story-utils.js';
import { ARC_ICON_BUTTON_DEFAULT_ARGS, ArcIconButton } from '../icon-button/icon-button.css.utils';

/**
 * ArcBottombar default arguments.
 */
export const ARC_BOTTOMBAR_DEFAULT_ARGS = {};

/**
 * Create ArcBottombar element.
 */
export const ArcBottombar: CreateElement<typeof ARC_BOTTOMBAR_DEFAULT_ARGS> = () => {
  const arcBottombar = createElement(
    'nav',
    { 'arc-bottombar': true },
    { 'aria-label': { value: 'mobile navigation', set: true } }
  );
  const content = createElement('div', { 'arc-bottombar--content': true });
  const fooButton = ArcIconButton({ ...ARC_ICON_BUTTON_DEFAULT_ARGS, name: 'home', label: 'foo' });
  const barButton = ArcIconButton({ ...ARC_ICON_BUTTON_DEFAULT_ARGS, name: 'home', label: 'bar' });
  const bazButton = ArcIconButton({ ...ARC_ICON_BUTTON_DEFAULT_ARGS, name: 'home', label: 'baz' });
  content.append(fooButton, barButton, bazButton);
  arcBottombar.append(content);
  return arcBottombar;
};

/**
 * Create ArcBottombar element with a custom height.
 */
export const ArcBottombarCustomHeight: CreateElement<typeof ARC_BOTTOMBAR_DEFAULT_ARGS> = () => {
  const arcBottombar = createElement(
    'nav',
    { 'arc-bottombar': true },
    { 'aria-label': { value: 'mobile navigation', set: true } }
  );
  const content = createElement('div', { 'arc-bottombar--content': true });
  const fooButton = ArcIconButton({ ...ARC_ICON_BUTTON_DEFAULT_ARGS, name: 'home', label: 'foo' });
  const barButton = ArcIconButton({ ...ARC_ICON_BUTTON_DEFAULT_ARGS, name: 'home', label: 'bar' });
  const bazButton = ArcIconButton({ ...ARC_ICON_BUTTON_DEFAULT_ARGS, name: 'home', label: 'baz' });
  content.append(fooButton, barButton, bazButton);
  arcBottombar.append(content);
  arcBottombar.style.display = 'block';
  arcBottombar.style.height = '8rem';
  return arcBottombar;
};
