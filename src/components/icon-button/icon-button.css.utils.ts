import { createElement, CreateElement, setClassInfo } from '../../internal/story-utils.js';
import { ICON_TYPES } from '../icon/constants/IconConstants.js';
import { ARC_ICON_DEFAULT_ARGS, ArcIcon } from '../icon/arc-icon.css.utils.js';
import { ARC_SPINNER_DEFAULT_ARGS, ArcSpinner } from '../spinner/arc-spinner.css.utils';

/**
 * ArcIconButton Default Arguments.
 */
export const ARC_ICON_BUTTON_DEFAULT_ARGS = {
  name: ICON_TYPES.fire,
  label: 'Icon button',
  href: '',
  target: '',
  download: '',
  active: false,
  disabled: false,
  loading: false,
};

/**
 * Create ArcIconButton elements.
 */
export const ArcIconButton: CreateElement<typeof ARC_ICON_BUTTON_DEFAULT_ARGS> = ({
  name,
  label,
  href,
  target,
  download,
  active,
  disabled,
  loading,
}) => {
  const arcIconButton = createElement(
    href ? 'a' : 'button',
    {
      'arc-icon-button': true,
      'arc-icon-button--active': active,
      'arc-icon-button--disabled': disabled,
      'arc-icon-button--loading': loading,
    },
    {
      disabled: { value: '', set: disabled },
      type: { value: 'button', set: true },
      href: { value: href, set: href.length > 0 },
      target: { value: target, set: target.length > 0 },
      download: { value: download, set: download.length > 0 },
      rel: { value: 'noreferrer noopener', set: target.length > 0 },
      role: { value: 'button', set: true },
      'aria-disabled': { value: disabled ? 'ture' : 'false', set: true },
      'aira-label': { value: label, set: label.length > 0 },
      tabindex: { value: disabled ? '-1' : '0', set: true },
    }
  );
  const iconWrapper = createElement(
    'span',
    { 'arc-icon-button--icon-wrapper': true },
    { 'aria-hidden': { value: 'true', set: true } }
  );
  const arcIcon = ArcIcon({ ...ARC_ICON_DEFAULT_ARGS, name });
  setClassInfo(arcIcon, { 'arc-icon-button--icon': true });
  iconWrapper.append(arcIcon);
  arcIconButton.append(iconWrapper);
  if (loading) {
    const loader = ArcSpinner({ ...ARC_SPINNER_DEFAULT_ARGS });
    setClassInfo(loader, { 'arc-icon-button--loader': true });
    iconWrapper.append(loader);
  }
  const action = createElement('span', { 'arc-icon-button--action': true }, {});
  action.innerText = label;
  arcIconButton.append(action);
  return arcIconButton;
};
