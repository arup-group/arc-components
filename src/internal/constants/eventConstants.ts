export declare type ArcEvent = 'afterHide' | 'afterShow' | 'auth' | 'hide' | 'initialFocus' | 'requestClose' | 'select' | 'showAccessibility' | 'show';

export const ARC_EVENTS: { [key in ArcEvent ]: string } = {
  afterHide: 'arc-after-hide',
  afterShow: 'arc-after-show',
  auth: 'arc-auth',
  hide: 'arc-hide',
  initialFocus: 'arc-initial-focus',
  requestClose: 'arc-request-close',
  select: 'arc-select',
  showAccessibility: 'arc-show-accessibility',
  show: 'arc-show'
}
