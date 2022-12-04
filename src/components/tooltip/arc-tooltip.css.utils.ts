import { createElement, CreateElement } from '../../internal/story-utils.js';
import { ARC_CHIP_DEFAULT_ARGS, ArcChip } from '../chip/arc-chip.css.utils';

/**
 * ArcTooltip default arguments.
 */
export const ARC_TOOLTIP_DEFAULT_ARGS = {
  open: false,
};

/**
 * Create ArcTooltip element.
 */
export const ArcTooltip: CreateElement<typeof ARC_TOOLTIP_DEFAULT_ARGS> = ({ open }) => {
  const arcTooltip = createElement('div', {
    'arc-tooltip': true,
    'arc-tooltip--is-closed': !open,
    'arc-tooltip--is-open': open,
  });
  const target = createElement(
    'div',
    { 'arc-tooltip--target': true },
    { 'aria-describedby': { value: 'tooltip', set: true } }
  );
  const chip = ArcChip({ ...ARC_CHIP_DEFAULT_ARGS });
  chip.innerHTML = 'Chip with Tooltip';
  target.appendChild(chip);
  arcTooltip.appendChild(target);
  const positioner = createElement('div', { 'arc-tooltip--positioner': true });
  const tooltip = createElement('div', { 'arc-tooltip--tooltip': true }, { role: { value: 'tooltip', set: true } });
  const arrow = createElement('div', { 'arc-tooltip--arrow': true });
  const content = createElement('div', { 'arc-tooltip--content': true });
  content.innerHTML = 'Tooltip content';
  tooltip.append(arrow, content);
  positioner.append(tooltip);
  arcTooltip.append(positioner);
  return arcTooltip;
};
