import { createElement, CreateElement } from '../../internal/story-utils.js';

/**
 * ArcRadio default arguments.
 */
export const ARC_RADIO_DEFAULT_ARGS = {
  name: 'arc-test',
  value: 'option_1',
  checked: false,
  disabled: false,
};

/**
 * Create ArcChip element.
 */
export const ArcRadio: CreateElement<typeof ARC_RADIO_DEFAULT_ARGS> = ({ name, value, checked, disabled }) => {
  const arcRadio = createElement('label', { 'arc-radio': true });
  const base = createElement('div', { 'arc-radio--base': true });
  const input = createElement(
    'input',
    {},
    {
      type: { value: 'radio', set: true },
      name: { value: name, set: name.length > 0 },
      value: { value, set: value.length > 0 },
      checked: { value: checked ? 'true' : 'false', set: true },
      disabled: { value: 'true', set: disabled },
      'aria-checked': { value: checked ? 'true' : 'false', set: true },
      'aria-disabled': { value: disabled ? 'true' : 'false', set: true },
    }
  );
  const control = createElement('span', { 'arc-radio--control': true });
  const icon = createElement('span', { 'arc-radio--icon': true });
  const bg = createElement(
    'svg',
    { bg: true },
    {
      focusable: { value: 'false', set: true },
      'aria-hidden': { value: 'true', set: true },
      viewBox: { value: '0 0 24 24', set: true },
    }
  );
  const bgPath = createElement(
    'path',
    {},
    {
      d: {
        value:
          'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
        set: true,
      },
    }
  );
  bg.append(bgPath);
  const fill = createElement(
    'svg',
    { fill: true },
    {
      focusable: { value: 'false', set: true },
      'aria-hidden': { value: 'true', set: true },
      viewBox: { value: '0 0 24 24', set: true },
    }
  );
  const fillPath = createElement(
    'path',
    {},
    {
      d: {
        value:
          'M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z',
        set: true,
      },
    }
  );
  fill.append(fillPath);
  icon.append(bg, fill);
  control.append(icon);
  base.append(input, control);
  const label = createElement('span', { 'arc-radio--label': true });
  label.innerText = 'Radio';
  arcRadio.append(base, label);
  return arcRadio;
};
