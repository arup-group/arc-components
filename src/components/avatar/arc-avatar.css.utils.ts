import { createElement, CreateElement } from '../../internal/story-utils.js';
import { ARC_ICON_DEFAULT_ARGS, ArcIcon } from '../icon/arc-icon.css.utils';
import { stringToInitials } from '../../internal/string.js';

/**
 * ArcAvatar default arguments.
 */
export const ARC_AVATAR_DEFAULT_ARGS = {
  image: '',
  label: '',
  name: '',
};

/**
 * Create ArcAvatar element.
 */
export const ArcAvatar: CreateElement<typeof ARC_AVATAR_DEFAULT_ARGS> = ({ image, label, name }) => {
  const arcAvatar = createElement(
    'div',
    {
      'arc-avatar': true,
    },
    { role: { value: 'img', set: true }, 'aria-label': { value: label, set: label.length > 0 } }
  );

  if (image) {
    const img = createElement(
      'img',
      { 'arc-avatar--avatar': true },
      { src: { value: image, set: image.length > 0 }, alt: { value: 'Avatar', set: true } }
    );
    arcAvatar.append(img);
  } else if (name) {
    const initials = createElement('div', { 'arc-avatar--initials': true }, {});
    initials.innerText = stringToInitials(name);
    arcAvatar.append(initials);
  } else {
    const icon = createElement('div', { 'arc-avatar--icon': true }, {});
    const userIcon = ArcIcon({ ...ARC_ICON_DEFAULT_ARGS, name: 'user' });
    icon.append(userIcon);
    arcAvatar.append(icon);
  }
  return arcAvatar;
};
