import { createElement, CreateElement } from '../../internal/story-utils.js';

/**
 * ArcTable default arguments.
 */
export const ARC_TABLE_DEFAULT_ARGS = {};

/**
 * Create ArcTable element.
 */
export const ArcTable: CreateElement<typeof ARC_TABLE_DEFAULT_ARGS> = () => {
  const arcTable = createElement('div', {
    'arc-table': true,
  });
  arcTable.innerHTML = 'ArcTable';
  return arcTable;
};
