import { css } from 'lit';

export default css`
  :host,
  arc-container[theme='dark'] {
    --arc-font-color: var(--arc-white-000);
    --arc-input-color: var(--arc-grey-100);
    --arc-background-color: var(--arc-grey-090);
    --arc-container-color: var(--arc-grey-100);
    --arc-color-default: var(--arc-background-color);
    --arc-color-primary: var(--arc-font-color);
    --arc-color-secondary: var(--arc-white-000);
    --arc-color-error: var(--arc-red-030);
    --arc-color-warning: var(--arc-orange-030);
    --arc-color-info: var(--arc-blue-030);
    --arc-color-success: var(--arc-green-030);
    --arc-hover-light: rgba(var(--arc-black-100), 0.8);
  }
`;