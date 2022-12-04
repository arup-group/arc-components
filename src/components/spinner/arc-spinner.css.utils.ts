import { createElement, CreateElement } from '../../internal/story-utils.js';

/**
 * ArcSpinner Default Arguments.
 */
export const ARC_SPINNER_DEFAULT_ARGS = {};

/**
 * Create an ArcSpinner element.
 */
export const ArcSpinner: CreateElement<typeof ARC_SPINNER_DEFAULT_ARGS> = () => {
  const arcSpinner = createElement(
    'svg',
    { 'arc-spinner': true },
    { 'aria-busy': { value: 'true', set: true }, 'aria-live': { value: 'polite', set: true } }
  );
  const arcSpinnerTrack = createElement(
    'circle',
    { 'arc-spinner--track': true },
    { cx: { value: '0.5em', set: true }, cy: { value: '0.5em', set: true }, r: { value: '0', set: true } }
  );
  arcSpinner.append(arcSpinnerTrack);
  const arcSpinnerIndicator = createElement(
    'circle',
    { 'arc-spinner--indicator': true },
    { cx: { value: '0.5em', set: true }, cy: { value: '0.5em', set: true }, r: { value: '0', set: true } }
  );
  arcSpinner.append(arcSpinnerIndicator);
  return arcSpinner;
};
