import { css } from 'lit';

export default css`
  :root,
  :host,
  arc-container[theme='light'] {
    --arc-font-color: var(--arc-grey-100);
    --arc-input-color: var(--arc-font-color);
    --arc-background-color: var(--arc-grey-010);
    --arc-container-color: var(--arc-white-000);
    --arc-color-default: var(--arc-grey-010);
    --arc-color-primary: var(--arc-red-060);
    --arc-color-secondary: var(--arc-grey-100);
    --arc-color-error: var(--arc-red-050);
    --arc-color-warning: var(--arc-orange-050);
    --arc-color-info: var(--arc-blue-050);
    --arc-color-success: var(--arc-green-050);
    --arc-hover-dark: rgba(var(--arc-black-100), 0.1);
    --arc-hover-light: rgba(var(--arc-white-000), 0.9);
  }
`;