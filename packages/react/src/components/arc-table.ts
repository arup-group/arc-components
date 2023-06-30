import { createComponent, EventName } from '@lit-labs/react';
import React from 'react';
import type { Row } from 'gridjs';
import type { TCell, TColumn } from 'gridjs/dist/src/types';
import { ARC_EVENTS } from '@arc-web/components/src/internal/constants/eventConstants.js';
import ArcTableWC from '@arc-web/components/src/components/table/ArcTable.js';
import '@arc-web/components/src/components/table/arc-table.js';

export const ArcTable = createComponent({
  tagName: 'arc-table',
  elementClass: ArcTableWC,
  react: React,
  events: {
    onArcRowClick: ARC_EVENTS.rowClick as EventName<
      CustomEvent<[e: MouseEvent, row: Row]>
    >,
    onArcCellClick: ARC_EVENTS.cellClick as EventName<
      CustomEvent<[e: MouseEvent, cell: TCell, column: TColumn, row: Row]>
    >,
    onArcTableReady: ARC_EVENTS.tableReady as EventName<CustomEvent<{}>>,
  },
});
