import { createElement, CreateElement } from '../../internal/story-utils.js';
import { INPUT_SIZES, THEME_COLORS } from '../../internal/constants/styleConstants.js';
import { BUTTON_TYPES } from './constants/ButtonConstants.js';
import { ArcSpinner } from '../spinner/arc-spinner.css.utils';

/**
 * ArcButton Default Arguments.
 */
export const ARC_BUTTON_DEFAULT_ARGS = {
  color: THEME_COLORS.primary,
  size: INPUT_SIZES.medium,
  type: BUTTON_TYPES.filled,
  name: '',
  value: '',
  href: '',
  target: '',
  download: '',
  active: false,
  disabled: false,
  loading: false,
  submit: false,
  prefix: false,
  suffix: false,
};

/**
 * Create ArcButton Element.
 */
export const ArcButton: CreateElement<typeof ARC_BUTTON_DEFAULT_ARGS> = ({
  color,
  size,
  type,
  name,
  value,
  href,
  target,
  download,
  active,
  disabled,
  loading,
  submit,
  prefix,
  suffix,
}) => {
  const arcButton = createElement(
    href ? 'a' : 'button',
    {
      'arc-button': true,
      'arc-button--size-small': size === INPUT_SIZES.small,
      'arc-button--size-medium': size === INPUT_SIZES.medium,
      'arc-button--size-large': size === INPUT_SIZES.large,
      'arc-button--color-default': color === THEME_COLORS.default,
      'arc-button--color-primary': color === THEME_COLORS.primary,
      'arc-button--color-secondary': color === THEME_COLORS.secondary,
      'arc-button--color-error': color === THEME_COLORS.error,
      'arc-button--color-warning': color === THEME_COLORS.warning,
      'arc-button--color-info': color === THEME_COLORS.info,
      'arc-button--color-success': color === THEME_COLORS.success,
      'arc-button--type-filled': type === BUTTON_TYPES.filled,
      'arc-button--type-outlined': type === BUTTON_TYPES.outlined,
      'arc-button--type-tab': type === BUTTON_TYPES.tab,
      'arc-button--active': active,
      'arc-button--disabled': href.length > 0 && disabled,
      'arc-button--loading': loading,
    },
    {
      disabled: { value: '', set: disabled },
      type: { value: submit ? 'submit' : 'button', set: true },
      name: { value: name, set: href.length === 0 && name.length > 0 },
      value: { value, set: href.length === 0 && value.length > 0 },
      href: { value: href, set: href.length > 0 },
      target: { value: target, set: target.length > 0 },
      download: { value: download, set: download.length > 0 },
      rel: { value: 'noreferrer noopener', set: target.length > 0 },
      role: { value: 'button', set: true },
      'aria-disabled': { value: disabled ? '-1' : '0', set: true },
    }
  );
  if (prefix) {
    const arcButtonPrefix = createElement('div', { 'arc-button--prefix': true }, {});
    arcButtonPrefix.innerText = 'Prefix';
    arcButton.append(arcButtonPrefix);
  }
  const arcButtonLabel = createElement('div', { 'arc-button--label': true }, {});
  arcButtonLabel.innerText = 'Button';
  arcButton.append(arcButtonLabel);
  if (suffix) {
    const arcButtonSuffix = createElement('div', { 'arc-button--suffix': true }, {});
    arcButtonSuffix.innerText = 'Prefix';
    arcButton.append(arcButtonSuffix);
  }
  if (loading) {
    const arcButtonLoader = ArcSpinner({});
    arcButton.append(arcButtonLoader);
  }
  return arcButton;
};
