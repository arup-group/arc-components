import { createElement, CreateElement } from '../../internal/story-utils.js';

/**
 * ArcSwitch default arguments.
 */
export const ARC_SWITCH_DEFAULT_ARGS = {
  name: 'arc-test',
  value: 'switch',
  checked: false,
  disabled: false,
};

/**
 * Create ArcSwitch element.
 */
export const ArcSwitch: CreateElement<typeof ARC_SWITCH_DEFAULT_ARGS> = ({ name, value, checked, disabled }) => {
  const arcSwitch = createElement('label', { 'arc-switch': true });
  const base = createElement('span', { 'arc-switch--base': true });
  const input = createElement(
    'input',
    {},
    {
      type: { value: 'checkbox', set: true },
      name: { value: name, set: name.length > 0 },
      value: { value, set: value.length > 0 },
      checked: { value: checked ? 'true' : 'false', set: true },
      disabled: { value: 'true', set: disabled },
      role: { value: 'switch', set: true },
      'aria-checked': { value: checked ? 'true' : 'false', set: true },
      'aria-disabled': { value: disabled ? 'true' : 'false', set: true },
    }
  );
  const control = createElement('span', { 'arc-switch--control': true });
  const thumb = createElement('span', { 'arc-switch--thumb': true });
  control.append(thumb);
  base.append(input, thumb);
  const label = createElement('span', { 'arc-switch--label': true });
  label.innerText = 'Switch';
  arcSwitch.append(base, label);
  return arcSwitch;
};
