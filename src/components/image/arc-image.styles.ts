import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  .image {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img,
  .image--has-image #overlay,
  .image--loading #placeholder,
  #loader {
    display: none;
  }

  .image--has-image img {
    width: 100%;
    height: 100%;
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    object-fit: cover;
  }

  /* Loading state */
  #overlay {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(var(--arc-grey-020));
  }

  .image--loading #loader {
    --shadow-p: 0.6em 0.6em 0 0.3em currentcolor;
    --shadow-n: -0.6em -0.6em 0 0.3em currentcolor;
    --shadow-pn: 0.6em -0.6em 0 0.3em currentcolor;
    --shadow-np: -0.6em 0.6em 0 0.3em currentcolor;
    width: 0.3em;
    height: 0.3em;
    display: block;
    color: rgb(var(--arc-grey-030));
  }
`;
