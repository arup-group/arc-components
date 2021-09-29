import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { componentStyles } from '../styles/component.styles.js';

export class ArcMenuDivider extends LitElement {
  static tag = 'arc-menu-divider';

  static styles = [
    componentStyles,
    css`
      #main {
        background: inherit;
      }

      #main.border {
        padding: calc(var(--arc-spacing-normal) / 2) 0;
      }

      #border {
        margin: 0;
        border: 0;
        border-top: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
      }

      #borderless {
        margin: var(--arc-spacing-normal) 0;
      }
    `
  ]

  @property({
    type: Boolean,
    reflect: true
  })
  border: boolean = false;

  render() {
    const classes = {
      border: this.border,
    }

    return html`
      <div id='main' class='${classMap(classes)}'>
        ${this.border ? html`
          <hr id='border'>
        ` : html`
          <div id='borderless'></div>
        `}
      </div>
    `
  }
}
