import { css } from 'lit';

export default css`
  input {
    cursor: inherit;
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    z-index: 1;
  }

  #control {
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    background-color: transparent;
    outline: 0;
    border: 0;
    margin: 0;
    cursor: inherit;
    user-select: none;
    appearance: none;
    text-decoration: none;
    padding: var(--arc-spacing-small);
    border-radius: 50%;
  }

  #label {
    line-height: var(--arc-font-size-x-large);
    user-select: none;
  }
`;