import { createComponent, EventName } from '@lit-labs/react';
import React from 'react';
import { Row } from 'gridjs';
import { TCell, TColumn } from 'gridjs/dist/src/types';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import ArcTableWC from './ArcTable.js';
import './arc-table.js';

export const ArcTable = createComponent(React, 'arc-table', ArcTableWC, {
  onArcChange: ARC_EVENTS.change as EventName<
    CustomEvent<[e: MouseEvent, row: Row] | [e: MouseEvent, cell: TCell, column: TColumn, row: Row] | undefined>
  >,
});
