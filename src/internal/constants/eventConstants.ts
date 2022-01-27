export declare type ArcEvent = 'afterHide' | 'afterShow' | 'auth' | 'hide' | 'initialFocus' | 'openAccessibility' | 'requestClose' | 'select' | 'show';

export const ARC_EVENTS: { [key in ArcEvent ]: string } = {
  afterHide: 'arc-after-hide',
  afterShow: 'arc-after-show',
  auth: 'arc-auth',
  hide: 'arc-hide',
  initialFocus: 'arc-initial-focus',
  openAccessibility: 'arc-open-accessibility',
  requestClose: 'arc-request-close',
  select: 'arc-select',
  show: 'arc-show'
}
