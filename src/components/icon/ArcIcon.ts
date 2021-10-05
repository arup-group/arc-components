import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { componentStyles } from '../styles/component.styles.js';
import { iconStyles } from '../styles/icon.styles.js';

const arcIcons = new URL('../../../../assets/arc-icons.svg', import.meta.url).href;

export class ArcIcon extends LitElement {
  static tag = 'arc-icon';

  static styles = [
    componentStyles,
    iconStyles
  ]

  @property({
    type: String,
    reflect: true,
  })
  type: string = 'fire'

  render() {
    return html`
      <svg><use href="${arcIcons}#arc-${this.type}" xlink:href="${arcIcons}#arc-${this.type}"/></svg>
    `
  }
}
