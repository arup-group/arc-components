export declare type ArcEvent =
  | 'accessibilityChange'
  | 'afterHide'
  | 'afterShow'
  | 'auth'
  | 'cellClick'
  | 'change'
  | 'clear'
  | 'error'
  | 'hide'
  | 'initialFocus'
  | 'loaded'
  | 'requestClose'
  | 'rowClick'
  | 'select'
  | 'showAccessibility'
  | 'show';

export const ARC_EVENTS: { [key in ArcEvent]: string } = {
  accessibilityChange: 'arc-accessibility-change',
  afterHide: 'arc-after-hide',
  afterShow: 'arc-after-show',
  auth: 'arc-auth',
  cellClick: 'arc-cell-click',
  change: 'arc-change',
  clear: 'arc-clear',
  error: 'arc-error',
  hide: 'arc-hide',
  initialFocus: 'arc-initial-focus',
  loaded: 'arc-loaded',
  requestClose: 'arc-request-close',
  rowClick: 'arc-row-click',
  select: 'arc-select',
  showAccessibility: 'arc-show-accessibility',
  show: 'arc-show',
};
