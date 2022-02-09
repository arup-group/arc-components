import { Placement } from '@popperjs/core';

export const DROPDOWN_PLACEMENTS: { [key in Placement]: Placement } = {
  'auto-start': 'auto-start',
  'auto-end': 'auto-end',
  auto: 'auto',
  top: 'top',
  'top-start': 'top-start',
  'top-end': 'top-end',
  bottom: 'bottom',
  'bottom-start': 'bottom-start',
  'bottom-end': 'bottom-end',
  right: 'right',
  'right-start': 'right-start',
  'right-end': 'right-end',
  left: 'left',
  'left-start': 'left-start',
  'left-end': 'left-end',
};
