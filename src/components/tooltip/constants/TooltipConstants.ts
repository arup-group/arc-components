export declare type TooltipPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end';

export const TOOLTIP_PLACEMENTS: { [key in TooltipPlacement]: TooltipPlacement } = {
  top: 'top',
  'top-start': 'top-start',
  'top-end': 'top-end',
  right: 'right',
  'right-start': 'right-start',
  'right-end': 'right-end',
  bottom: 'bottom',
  'bottom-start': 'bottom-start',
  'bottom-end': 'bottom-end',
  left: 'left',
  'left-start': 'left-start',
  'left-end': 'left-end',
};
