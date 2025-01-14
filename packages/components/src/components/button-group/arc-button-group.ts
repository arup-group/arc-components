import { LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { html } from 'lit/static-html.js';
import { classMap } from 'lit/directives/class-map.js';
import { when } from 'lit/directives/when.js';
import {
  INPUT_SIZES,
  InputSize,
  THEME_COLORS,
  ThemeColor,
} from '../../internal/constants/styleConstants.js';
import { customElement } from 'lit/decorators.js';
import { BUTTON_TYPES } from '../button/constants/ButtonConstants.js';
import styles from './arc-button-group.styles.js';
import ArcDropdown from '../dropdown/ArcDropdown.js';
import ArcButton from '../button/ArcButton.js';
import '../button/arc-button.js';
import '../spinner/arc-spinner.js';

/**
 * An error that is thrown when the slot contains incorrect elements.
 * @type {Error}
 * @constant
 */
const SLOT_ERROR: Error = new Error('arc-button-group slot error');

/**
 * The type of the button group.
 * @typedef {string} ButtonGroupType
 */
export declare type ButtonGroupType = 'group-filled' | 'group-outlined';

/**
 * The button group types.
 * @typedef {Object} ButtonGroupTypes
 */
declare type ButtonGroupTypes = { [key in ButtonGroupType]: ButtonGroupType };

/**
 * The button group types.
 * @type {ButtonGroupTypes}
 * @constant
 */
export const BUTTON_GROUP_TYPES: ButtonGroupTypes = {
  'group-filled': 'group-filled',
  'group-outlined': 'group-outlined',
};

/**
 * A button group component that groups buttons together.
 * @element arc-button-group
 * @slot - The default slot where buttons are placed.
 * @slot menu - The slot where the dropdown menu is placed.
 */
@customElement('arc-button-group')
export default class ArcButtonGroup extends LitElement {
  public static tag = 'arc-button-group';
  public static styles = styles;

  /**
   * The orientation of the button group.
   * @attr {boolean} column
   * @type {boolean}
   * @default false
   */
  @property({ type: Boolean, reflect: true }) public column: boolean = false;

  /**
   * The color of the button group.
   * @attr {default|primary|secondary|error|warning|info|success} color
   * @type {ThemeColor}
   * @default default
   */
  @property({ type: String, reflect: true }) public color: ThemeColor =
    THEME_COLORS.default;

  /**
   * The size of the button group.
   * @attr {small|medium|large} size
   * @type {InputSize}
   * @default medium
   */
  @property({ type: String, reflect: true }) public size: InputSize =
    INPUT_SIZES.medium;

  /**
   * The type of the button group.
   * @attr {group-filled|group-outlined} type
   * @type {ButtonGroupType}
   * @default group-filled
   */
  @property({ type: String, reflect: true }) public type: ButtonGroupType =
    BUTTON_GROUP_TYPES['group-filled'];

  /**
   * The disabled state of the button group.
   * @attr {boolean} disabled
   * @type {boolean}
   * @default false
   */
  @property({ type: Boolean, reflect: true }) public disabled: boolean = false;

  /**
   * The loading state of the button group.
   * @attr {boolean} loading
   * @type {boolean}
   * @default false
   */
  @property({ type: Boolean, reflect: true }) public loading: boolean = false;

  /**
   * Button group buttons.
   * @private
   * @type {HTMLSlotElement}
   * @internal
   */
  @query('slot') private buttons: HTMLSlotElement;

  /**
   * Button group menu.
   * @private
   * @type {HTMLSlotElement}
   * @internal
   */
  @query('#menu') private menu: HTMLSlotElement;

  /**
   * Ensures that the menu slot contains correct elements.
   * @throws {Error} - If the menu slot contains incorrect elements.
   * @private
   * @internal
   */
  private ensureMenu(): void {
    if (!this.menu.assignedElements().length) return;
    if (
      this.menu.assignedElements().some((el) => !(el instanceof ArcDropdown)) ||
      this.menu.assignedElements().length !== 1 ||
      !this.menu.assignedElements()[0]?.querySelector('arc-button')
    ) {
      throw SLOT_ERROR;
    }
  }

  /**
   * Updates the menu slot.
   * @param {Map<string | number | symbol, unknown>} props - Changed properties.
   * @private
   * @internal
   */
  private updateMenu(props: Map<string | number | symbol, unknown>): void {
    if (!this.menu.assignedElements().length) return;
    const els = this.menu?.assignedElements({ flatten: true });
    if (!els) return;
    const dropdown = els[0] as ArcDropdown;
    dropdown.setAttribute('hoist', '');
    const button = dropdown.querySelector('arc-button') as ArcButton;
    if (!button) return;
    props.forEach((_, propName) => {
      if (typeof this[propName as keyof ArcButtonGroup] === 'string') {
        const prop = propName as keyof ArcButtonGroup;
        button.setAttribute(prop, this[prop] as string);
      }
      if (typeof this[propName as keyof ArcButtonGroup] === 'boolean') {
        const prop = propName as keyof ArcButtonGroup;
        if (this[prop]) {
          button.setAttribute(propName as string, '');
        } else {
          button.removeAttribute(propName as string);
        }
      }
    });
    const menuButtonType =
      this.type === BUTTON_GROUP_TYPES['group-filled']
        ? BUTTON_TYPES['group-filled-menu']
        : BUTTON_TYPES['group-outlined-menu'];

    button.setAttribute('type', menuButtonType);
  }

  /**
   * Ensures that the button group contains correct elements.
   * @throws {Error} - If the button group does not contain arc-button-group-button elements.
   * @throws {Error} - If the button group contains incorrect elements.
   * @private
   * @internal
   */
  private ensureButtonGroupButtons(): void {
    if (
      !this.buttons ||
      !this.buttons.assignedElements().length ||
      this.buttons.assignedElements().some((el) => !(el instanceof ArcButton))
    ) {
      throw SLOT_ERROR;
    }
  }

  /**
   * Updates the button group buttons.
   * @param {Map<string | number | symbol, unknown>} props - Changed properties.
   * @private
   * @internal
   */
  private updateButtons(props: Map<string | number | symbol, unknown>): void {
    const els = this.buttons?.assignedElements({ flatten: true });
    if (!els) return;
    els.forEach((el) => {
      props.forEach((_, propName) => {
        if (typeof this[propName as keyof ArcButtonGroup] === 'string') {
          const prop = propName as keyof ArcButtonGroup;
          el.setAttribute(prop, this[prop] as string);
        }
        if (typeof this[propName as keyof ArcButtonGroup] === 'boolean') {
          const prop = propName as keyof ArcButtonGroup;
          if (this[prop]) {
            el.setAttribute(propName as string, '');
          } else {
            el.removeAttribute(propName as string);
          }
        }
      });
    });
  }

  protected firstUpdated(props: Map<string | number | symbol, unknown>): void {
    this.ensureButtonGroupButtons();
    this.updateButtons(props);
    this.buttons?.addEventListener('slotchange', () => {
      this.ensureButtonGroupButtons();
      this.updateButtons(props);
    });
    this.ensureMenu();
    this.updateMenu(props);
    this.menu.addEventListener('slotchange', () => {
      this.ensureMenu();
      this.updateMenu(props);
    });
  }

  protected updated(props: Map<string | number | symbol, unknown>): void {
    this.updateButtons(props);
    this.updateMenu(props);
  }

  protected render() {
    return html`
      <div
        class=${classMap({
          'button-group': true,
          'button-group--horizontal': this.column === false,
          'button-group--vertical': this.column === true,
          'button-group--small': this.size === INPUT_SIZES.small,
          'button-group--medium': this.size === INPUT_SIZES.medium,
          'button-group--large': this.size === INPUT_SIZES.large,
          'button-group--filled':
            this.type === BUTTON_GROUP_TYPES['group-filled'],
          'button-group--outlined':
            this.type === BUTTON_GROUP_TYPES['group-outlined'],
          'button-group--loading': this.loading,
        })}
      >
        <slot></slot>
        <slot id="menu" name="menu"></slot>
        ${when(
          this.loading,
          () => html`<arc-spinner id="loader"></arc-spinner>`,
        )}
      </div>
    `;
  }
}
