import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
    border-radius: 50%;
    --size: 3rem;
  }

  #main {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    color: rgb(var(--arc-grey-000));
    user-select: none;
    vertical-align: middle;
  }

  #main:not(.avatar--has-image) {
    background-color: rgb(var(--arc-grey-050));
  }

  #avatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }

  #main,
  #avatar {
    border-radius: inherit;
  }

  #initials {
    font-size: calc(var(--size) * 0.4);
    line-height: 1;
  }

  #icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
