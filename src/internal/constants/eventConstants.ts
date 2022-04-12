export declare type ArcEvent =
  | 'accessibilityChange'
  | 'afterHide'
  | 'afterShow'
  | 'auth'
  | 'change'
  | 'hide'
  | 'initialFocus'
  | 'loaded'
  | 'requestClose'
  | 'select'
  | 'showAccessibility'
  | 'show';

export const ARC_EVENTS: { [key in ArcEvent]: string } = {
  accessibilityChange: 'arc-accessibility-change',
  afterHide: 'arc-after-hide',
  afterShow: 'arc-after-show',
  auth: 'arc-auth',
  change: 'arc-change',
  hide: 'arc-hide',
  initialFocus: 'arc-initial-focus',
  loaded: 'arc-loaded',
  requestClose: 'arc-request-close',
  select: 'arc-select',
  showAccessibility: 'arc-show-accessibility',
  show: 'arc-show',
};
