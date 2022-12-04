import { createElement, CreateElement } from '../../internal/story-utils.js';
import { ICON_TYPES } from './constants/IconConstants.js';
import { FONT_SIZES } from '../../internal/constants/styleConstants.js';

/**
 * ArcIcon default arguments.
 */
export const ARC_ICON_DEFAULT_ARGS = {
  name: ICON_TYPES.fire,
  label: '',
  size: FONT_SIZES.large,
  rotation: 0,
};

export const ArcIcon: CreateElement<typeof ARC_ICON_DEFAULT_ARGS> = ({ name, label, size, rotation }) => {
  const arcIcon = createElement(
    'svg',
    {
      'arc-icon': true,
      'arc-icon--rotate-0': rotation === 0,
      'arc-icon--rotate-90': rotation === 90,
      'arc-icon--rotate-180': rotation === 180,
      'arc-icon--rotate-270': rotation === 270,
      'arc-icon--size-xx-small': size === 'xx-small',
      'arc-icon--size-x-small': size === 'x-small',
      'arc-icon--size-small': size === 'small',
      'arc-icon--size-medium': size === 'medium',
      'arc-icon--size-large': size === 'large',
      'arc-icon--size-x-large': size === 'x-large',
      'arc-icon--size-xx-large': size === 'xx-large',
      'arc-icon--size-xxx-large': size === 'xxx-large',
      'arc-icon--size-xxxx-large': size === 'xxxx-large',
    },
    {
      role: { value: 'img', set: label.length > 0 },
      'aria-label': { value: label, set: label.length > 0 },
      'aria-hidden': { value: 'true', set: label.length === 0 },
    }
  );
  const use = createElement(
    'use',
    {},
    {
      href: { value: `/icons.svg#arc-${name}`, set: true },
      'xlink:href': { value: `/icons.svg#arc-${name}`, set: true },
    }
  );
  arcIcon.append(use);
  return arcIcon;
};
