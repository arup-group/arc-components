import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default [
  componentStyles,
  css`
    .gridjs *,
    .gridjs :after,
    .gridjs :before {
      box-sizing: border-box;
    }

    /* Container */
    .gridjs-container {
      display: inline-flex;
      flex-direction: column;
      height: inherit;
      overflow: hidden;
      color: rgb(var(--arc-font-color));
      position: relative;
      z-index: 0;
    }

    /* Header (contains the search input plugin) */
    .gridjs-head {
      width: 100%;
      padding-bottom: var(--arc-spacing-small);
    }
    .gridjs-head:empty,
    .gridjs-footer:empty {
      padding: 0;
      border: none;
    }

    /* Wrapper */
    .gridjs-wrapper {
      display: flex;
      width: 100%;
      position: relative;
      overflow: auto;
      border: var(--arc-border-style) var(--arc-border-width) rgb(var(--arc-color-default));
      z-index: 1;
      -webkit-font-smoothing: antialiased;
    }

    /* Table */
    table.gridjs-table {
      flex: 1 1 100%;
      border-collapse: collapse;
      text-align: left;
      display: table;
      table-layout: fixed;
      overflow: auto;
    }

    /* Rows */
    .gridjs-tr {
      border-top: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
      border-bottom: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
    }
    .gridjs-tr:hover td,
    .gridjs-tr-selected td {
      background-color: rgba(var(--arc-font-color), 5%);
    }
    .gridjs-tr:first-child {
      border-top: none;
    }
    .gridjs-tr:last-child {
      border-bottom: none;
    }

    /* Headers */
    th.gridjs-th {
      position: relative;
      color: rgb(var(--arc-font-color));
      background-color: rgb(var(--arc-container-color));
      border: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
      border-top: none;
      padding: 14px 24px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      box-sizing: border-box;
      white-space: nowrap;
      outline: none;
      vertical-align: middle;
    }
    th.gridjs-th .gridjs-th-content {
      text-overflow: ellipsis;
      overflow: hidden;
      width: 100%;
      float: left;
    }
    th.gridjs-th-sort {
      cursor: pointer;
    }
    th.gridjs-th-sort .gridjs-th-content {
      width: calc(100% - 15px);
    }
    th.gridjs-th-sort:hover,
    th.gridjs-th-sort:focus {
      background-color: currentcolor;
      background-image: linear-gradient(var(--arc-hover-lighter) 0 0);
    }
    th.gridjs-th-fixed {
      position: sticky;
      z-index: 1;
      box-shadow: 0 1px 0 0 #e5e7eb;
    }
    th.gridjs-th:first-child {
      border-left: none;
    }
    th.gridjs-th:last-child {
      border-right: none;
    }
    @supports (-moz-appearance: none) {
      th.gridjs-th-fixed {
        box-shadow: 0 0 0 1px #e5e7eb;
      }
    }

    /* Data */
    td.gridjs-td {
      border-left: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
      border-right: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
      padding: var(--arc-spacing-small) var(--arc-spacing-medium);
      background-color: transparent;
      box-sizing: content-box;
    }
    td.gridjs-td:first-child {
      border-left: none;
    }
    td.gridjs-td:last-child {
      border-right: none;
    }

    /* Footer */
    .gridjs-footer {
      display: block;
      position: relative;
      width: 100%;
      z-index: 5;
      padding: var(--arc-spacing-small) var(--arc-spacing-medium);
      border: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
      border-top: none;
    }

    /* Error message */
    td.gridjs-message {
      color: rgb(var(--arc-grey-050));
      text-align: center;
    }

    /* Loading */
    .gridjs-loading-bar {
      z-index: 10;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: transparent;
      opacity: 0.5;
    }
    .gridjs-loading-bar::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transform: translateX(-100%);
      background-image: linear-gradient(
        90deg,
        rgba(204, 204, 204, 0) 0,
        rgba(204, 204, 204, 0.2) 20%,
        rgba(204, 204, 204, 0.5) 60%,
        rgba(204, 204, 204, 0)
      );
      -webkit-animation: shimmer 2s infinite;
      animation: shimmer 2s infinite;
      content: '';
    }

    /* PLUGINS */
    /* Search filter */
    .gridjs-search {
      float: left;
    }
    .gridjs-search-input {
      width: 250px;
    }
    input.gridjs-input {
      outline: none;
      background-color: transparent;
      color: rgb(var(--arc-font-color));
      border: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
      padding: var(--arc-spacing-small) var(--arc-spacing-normal);
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }
    input.gridjs-input:focus {
      box-shadow: var(--arc-box-shadow);
      border-color: rgb(var(--arc-color-info));
    }

    /* Sorting icon */
    button.gridjs-sort {
      float: right;
      height: 24px;
      width: 13px;
      background-color: transparent;
      background-repeat: no-repeat;
      background-position-x: center;
      cursor: pointer;
      padding: 0;
      margin: 0;
      border: none;
      outline: none;
      background-size: contain;
    }
    button.gridjs-sort-neutral {
      opacity: 0.3;
      background-image: url('data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSI0MDEuOTk4cHgiIGhlaWdodD0iNDAxLjk5OHB4IiB2aWV3Qm94PSIwIDAgNDAxLjk5OCA0MDEuOTk4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDEuOTk4IDQwMS45OTg7IgoJIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik03My4wOTIsMTY0LjQ1MmgyNTUuODEzYzQuOTQ5LDAsOS4yMzMtMS44MDcsMTIuODQ4LTUuNDI0YzMuNjEzLTMuNjE2LDUuNDI3LTcuODk4LDUuNDI3LTEyLjg0NwoJCQljMC00Ljk0OS0xLjgxMy05LjIyOS01LjQyNy0xMi44NUwyMTMuODQ2LDUuNDI0QzIxMC4yMzIsMS44MTIsMjA1Ljk1MSwwLDIwMC45OTksMHMtOS4yMzMsMS44MTItMTIuODUsNS40MjRMNjAuMjQyLDEzMy4zMzEKCQkJYy0zLjYxNywzLjYxNy01LjQyNCw3LjkwMS01LjQyNCwxMi44NWMwLDQuOTQ4LDEuODA3LDkuMjMxLDUuNDI0LDEyLjg0N0M2My44NjMsMTYyLjY0NSw2OC4xNDQsMTY0LjQ1Miw3My4wOTIsMTY0LjQ1MnoiLz4KCQk8cGF0aCBkPSJNMzI4LjkwNSwyMzcuNTQ5SDczLjA5MmMtNC45NTIsMC05LjIzMywxLjgwOC0xMi44NSw1LjQyMWMtMy42MTcsMy42MTctNS40MjQsNy44OTgtNS40MjQsMTIuODQ3CgkJCWMwLDQuOTQ5LDEuODA3LDkuMjMzLDUuNDI0LDEyLjg0OEwxODguMTQ5LDM5Ni41N2MzLjYyMSwzLjYxNyw3LjkwMiw1LjQyOCwxMi44NSw1LjQyOHM5LjIzMy0xLjgxMSwxMi44NDctNS40MjhsMTI3LjkwNy0xMjcuOTA2CgkJCWMzLjYxMy0zLjYxNCw1LjQyNy03Ljg5OCw1LjQyNy0xMi44NDhjMC00Ljk0OC0xLjgxMy05LjIyOS01LjQyNy0xMi44NDdDMzM4LjEzOSwyMzkuMzUzLDMzMy44NTQsMjM3LjU0OSwzMjguOTA1LDIzNy41NDl6Ii8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+');
      background-position-y: center;
    }
    button.gridjs-sort-asc {
      background-image: url('data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyOTIuMzYycHgiIGhlaWdodD0iMjkyLjM2MXB4IiB2aWV3Qm94PSIwIDAgMjkyLjM2MiAyOTIuMzYxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyOTIuMzYyIDI5Mi4zNjE7IgoJIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik0yODYuOTM1LDE5Ny4yODdMMTU5LjAyOCw2OS4zODFjLTMuNjEzLTMuNjE3LTcuODk1LTUuNDI0LTEyLjg0Ny01LjQyNHMtOS4yMzMsMS44MDctMTIuODUsNS40MjRMNS40MjQsMTk3LjI4NwoJCUMxLjgwNywyMDAuOTA0LDAsMjA1LjE4NiwwLDIxMC4xMzRzMS44MDcsOS4yMzMsNS40MjQsMTIuODQ3YzMuNjIxLDMuNjE3LDcuOTAyLDUuNDI1LDEyLjg1LDUuNDI1aDI1NS44MTMKCQljNC45NDksMCw5LjIzMy0xLjgwOCwxMi44NDgtNS40MjVjMy42MTMtMy42MTMsNS40MjctNy44OTgsNS40MjctMTIuODQ3UzI5MC41NDgsMjAwLjkwNCwyODYuOTM1LDE5Ny4yODd6Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+');
      background-position-y: 35%;
      background-size: 10px;
    }
    button.gridjs-sort-desc {
      background-image: url('data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyOTIuMzYycHgiIGhlaWdodD0iMjkyLjM2MnB4IiB2aWV3Qm94PSIwIDAgMjkyLjM2MiAyOTIuMzYyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyOTIuMzYyIDI5Mi4zNjI7IgoJIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik0yODYuOTM1LDY5LjM3N2MtMy42MTQtMy42MTctNy44OTgtNS40MjQtMTIuODQ4LTUuNDI0SDE4LjI3NGMtNC45NTIsMC05LjIzMywxLjgwNy0xMi44NSw1LjQyNAoJCUMxLjgwNyw3Mi45OTgsMCw3Ny4yNzksMCw4Mi4yMjhjMCw0Ljk0OCwxLjgwNyw5LjIyOSw1LjQyNCwxMi44NDdsMTI3LjkwNywxMjcuOTA3YzMuNjIxLDMuNjE3LDcuOTAyLDUuNDI4LDEyLjg1LDUuNDI4CgkJczkuMjMzLTEuODExLDEyLjg0Ny01LjQyOEwyODYuOTM1LDk1LjA3NGMzLjYxMy0zLjYxNyw1LjQyNy03Ljg5OCw1LjQyNy0xMi44NDdDMjkyLjM2Miw3Ny4yNzksMjkwLjU0OCw3Mi45OTgsMjg2LjkzNSw2OS4zNzd6Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+');
      background-position-y: 65%;
      background-size: 10px;
    }
    button.gridjs-sort:focus {
      outline: none;
    }

    /* Resizable */
    .gridjs-resizable {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: 5px;
    }
    .gridjs-resizable:hover {
      cursor: ew-resize;
      background-color: rgb(var(--arc-color-info));
    }

    /* Row selection */
    .gridjs-td .gridjs-checkbox {
      display: block;
      margin: auto;
      cursor: pointer;
    }

    /* Pagination */
    .gridjs-pagination {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: rgb(var(--arc-grey-050));
    }
    .gridjs-pagination .gridjs-summary {
      float: left;
    }
    .gridjs-pagination .gridjs-pages {
      float: right;
    }
    .gridjs-pagination .gridjs-pages button {
      cursor: pointer;
      padding: var(--arc-spacing-x-small) var(--arc-spacing-small);
      border: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
      color: rgb(var(--arc-font-color));
      background-color: transparent;
      border-right: none;
      outline: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    .gridjs-pagination .gridjs-pages button:focus {
      box-shadow: var(--arc-box-shadow);
    }
    .gridjs-pagination .gridjs-pages button:hover {
      background-color: rgba(var(--arc-font-color), 10%);
      outline: none;
    }
    .gridjs-pagination .gridjs-pages button:disabled,
    .gridjs-pagination .gridjs-pages button[disabled],
    .gridjs-pagination .gridjs-pages button:hover:disabled {
      cursor: default;
      background-color: transparent;
      color: rgb(var(--arc-grey-050));
    }
    .gridjs-pagination .gridjs-pages button.gridjs-spread {
      cursor: default;
      box-shadow: none;
      background-color: transparent;
    }
    .gridjs-pagination .gridjs-pages button.gridjs-currentPage {
      color: rgb(var(--arc-font-color));
      background-color: rgb(var(--arc-color-default));
      font-weight: bold;
    }
    .gridjs-pagination .gridjs-pages button:last-child {
      border-right: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
    }

    @-webkit-keyframes shimmer {
      100% {
        transform: translateX(100%);
      }
    }

    @keyframes shimmer {
      100% {
        transform: translateX(100%);
      }
    }
  `,
];
