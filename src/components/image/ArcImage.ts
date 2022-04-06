import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { emit } from '../../internal/event.js';
import { watch } from '../../internal/watch.js';
import componentStyles from '../../styles/component.styles.js';

/**
* @slot default - A description of the default slot.
* @slot something - A description of the something slot.
*
* @event arc-event-name - A description of the event.
*
* @cssproperty --custom-color - A description of the --custom-color property.
*/
export default class ArcImage extends LitElement {
  static tag = 'arc-image';

  static styles = [
    componentStyles,
    css`
      :host {
        --custom-color: rgb(var(--arc-red-050));
      }
      #main {
        color: var(--custom-color);
      }
      #main.active {
        color: rgb(var(--arc-green-050));
      }
    `,
  ];

  /** A description of the property. */
  @property({ type: String, reflect: true }) name: string = 'Hello World';

  /** A description of the property. */
  @property({ type: Boolean }) active: boolean = false;

  @watch('active')
  handlePropChange() {
    emit(this, 'arc-event-name');
  }

  render() {
    return html`
      <div id='main' class='${classMap({active: this.active})}'>
        <slot>${this.name}</slot>
        <slot name="something"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-image': ArcImage;
  }
}
