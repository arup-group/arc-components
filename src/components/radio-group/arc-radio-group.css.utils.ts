import { createElement, CreateElement } from '../../internal/story-utils.js';
import { ARC_RADIO_DEFAULT_ARGS, ArcRadio } from '../radio/arc-radio.css.utils.js';

/**
 * ArcRadioGroup default arguments.
 */
export const ARC_RADIO_GROUP_DEFAULT_ARGS = {
  customLabel: 'Radio Group',
  row: false,
};

/**
 * Create ArcRadioGroup element.
 */
export const ArcRadioGroup: CreateElement<typeof ARC_RADIO_GROUP_DEFAULT_ARGS> = ({ customLabel, row }) => {
  const arcRadioGroup = createElement('div', { 'arc-radio-group': true, 'arc-radio-group--row': row });
  const label = createElement('label');
  label.innerHTML = customLabel;
  const radioGroup = createElement('div', { 'arc-radio-group--radio-buttons': true });
  const radio1 = ArcRadio({ ...ARC_RADIO_DEFAULT_ARGS });
  const radio2 = ArcRadio({ ...ARC_RADIO_DEFAULT_ARGS });
  radioGroup.append(radio1, radio2);
  arcRadioGroup.append(label, radioGroup);
  return arcRadioGroup;
};
