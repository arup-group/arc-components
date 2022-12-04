import { createElement, CreateElement } from '../../internal/story-utils.js';
import { INPUT_SIZES } from '../../internal/constants/styleConstants.js';
import { CHIP_TYPES } from './constants/ChipConstants.js';
import { ARC_ICON_BUTTON_DEFAULT_ARGS, ArcIconButton } from '../icon-button/icon-button.css.utils.js';
import { ARC_AVATAR_DEFAULT_ARGS, ArcAvatar } from '../avatar/arc-avatar.css.utils';

/**
 * ArcChip Default Arguments.
 */
export const ARC_CHIP_DEFAULT_ARGS = {
  size: INPUT_SIZES.medium,
  type: CHIP_TYPES.filled,
  clearable: false,
};

/**
 * Create ArcChip element.
 */
export const ArcChip: CreateElement<typeof ARC_CHIP_DEFAULT_ARGS> = ({ size, type, clearable }) => {
  const arcChip = createElement(
    'div',
    {
      'arc-chip': true,
      'arc-chip--size-small': size === 'small',
      'arc-chip--size-medium': size === 'medium',
      'arc-chip--size-large': size === 'large',
      'arc-chip--type-filled': type === 'filled',
      'arc-chip--type-outlined': type === 'outlined',
      'arc-chip--is-clearable': clearable,
    },
    {}
  );
  const span = createElement('span');
  const label = createElement('span');
  label.innerText = 'Chip';
  span.append(label);
  if (clearable) {
    const arcIconButton = ArcIconButton({ ...ARC_ICON_BUTTON_DEFAULT_ARGS, name: 'close-circle', label: '' });
    span.append(arcIconButton);
  }
  arcChip.append(span);
  return arcChip;
};

/**
 * Create ArcChip element with avatar.
 */
export const ArcChipWithAvatar: CreateElement<typeof ARC_CHIP_DEFAULT_ARGS> = ({ size, type, clearable }) => {
  const arcChip = createElement(
    'div',
    {
      'arc-chip': true,
      'arc-chip--size-small': size === 'small',
      'arc-chip--size-medium': size === 'medium',
      'arc-chip--size-large': size === 'large',
      'arc-chip--type-filled': type === 'filled',
      'arc-chip--type-outlined': type === 'outlined',
      'arc-chip--is-clearable': clearable,
      'arc-chip--has-avatar': true,
    },
    {}
  );
  const arcAvatar = ArcAvatar({ ...ARC_AVATAR_DEFAULT_ARGS, name: 'User Name' });
  const span = createElement('span');
  const label = createElement('span');
  label.innerText = 'Chip';
  span.append(label);
  arcChip.append(arcAvatar);
  arcChip.append(span);
  return arcChip;
};
