import { createElement, CreateElement } from '../../internal/story-utils.js';
import { CONTAINER_THEMES } from './constants/ContainerConstants.js';
import { ARC_BOTTOMBAR_DEFAULT_ARGS, ArcBottombar } from '../bottombar/arc-bottombar.css.utils';
import './arc-container.css';

/**
 * ArcContainer default arguments.
 */
export const ARC_CONTAINER_DEFAULT_ARGS = {
  theme: CONTAINER_THEMES.light,
  fullscreen: false,
};

/**
 * Create ArcContainer element.
 */
export const ArcContainer: CreateElement<typeof ARC_CONTAINER_DEFAULT_ARGS> = ({ theme, fullscreen }) => {
  const arcContainer = createElement(
    'div',
    { 'arc-container': true, 'arc-container--fullscreen': fullscreen },
    { theme: { value: theme, set: true } }
  );
  // create nav
  const container = createElement('div', { 'arc-container--container': true });
  const content = createElement('div', { 'arc-container--content': true });
  content.innerText = 'Container';
  container.append(content);
  arcContainer.append(container);
  const arcBottombar = ArcBottombar({ ...ARC_BOTTOMBAR_DEFAULT_ARGS });
  arcContainer.append(arcBottombar);
  return arcContainer;
};
