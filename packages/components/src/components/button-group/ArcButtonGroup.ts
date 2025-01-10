import { LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { html } from 'lit/static-html.js';
import {
  INPUT_SIZES,
  InputSize,
  THEME_COLORS,
  ThemeColor,
} from '../../internal/constants/styleConstants.js';
import { ButtonTarget } from '../button/constants/ButtonConstants.js';
import {
  ButtonGroupType,
  BUTTON_GROUP_TYPES,
} from './constants/ButtonGroupConstants.js';
import styles from './arc-button-group.styles.js';

export default class ArcButtonGroup extends LitElement {
  /** @internal */
  static tag = 'arc-button-group';

  static styles = styles;

  /** Set the color of the button. */
  @property({ type: String, reflect: true }) color: ThemeColor =
    THEME_COLORS.default;

  /** Set the size of the button. */
  @property({ type: String, reflect: true }) size: InputSize =
    INPUT_SIZES.medium;

  /** Set the type of the button. */
  @property({ type: String, reflect: true }) type: ButtonGroupType =
    BUTTON_GROUP_TYPES.filled;

  @property({ type: Boolean, reflect: true }) disabled: Boolean = false;
  @property({ type: Boolean, reflect: true }) loading: Boolean = false;

  @query('slot') defaultSlot?: HTMLSlotElement;

  /* ensure that only ArcButton compoennts are rendered in the default slot
   *  then apply ensure that the correct attributes are rendered for each button
   */
  protected firstUpdated(changedProperties) {
    const els = this.defaultSlot?.assignedElements({ flatten: true });
    if (els.filter(({ tagName }) => tagName !== 'ARC-BUTTON').length > 0) {
      this.defaultSlot.remove();
      throw new Error(
        'ArcButton components are the only allowed slotted elements within an ArcButtonGroup',
      );
    }
    changedProperties.forEach((_, propName) => {
      if (propName === 'loading') return;
      els.forEach((el) => el.setAttribute(propName, this[propName]));
    });
    els.forEach((el) => {
      el.setAttribute('type', 'tab');
    });
  }

  /* for each changed prop ensure that its chanaged in for every arc button */
  protected updated(changedProperties) {
    const els = this.defaultSlot?.assignedElements({ flatten: true });
    changedProperties.forEach((_, propName) => {
      if (propName === 'loading') return;
      if (typeof this[propName] === 'string') {
        els.forEach((el) => el.setAttribute(propName, this[propName]));
      } else {
        els.forEach((el) => el.toggleAttribute(propName));
      }
    });
  }

  protected render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-button-group': ArcButtonGroup;
  }
}
