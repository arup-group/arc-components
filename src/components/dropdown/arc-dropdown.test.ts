import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { expect, fixture, elementUpdated } from '@open-wc/testing';
import { hasSlot } from '../../internal/slot.js';
import {
  addShowListeners,
  addHideListeners,
  clearShowHideListeners,
  waitForShow,
  waitForHide,
  showCalledOnce,
  hideCalledOnce,
  createKeyEvent,
  downEvent,
  escEvent,
  tabEvent,
  mouseEvent,
  spaceEvent,
  enterEvent,
  upEvent,
} from '../../internal/test-utils.js';
import { FLOATING_PLACEMENTS } from '../../internal/constants/placementConstants.js';
import type ArcDropdown from './ArcDropdown.js';
import type ArcMenu from '../menu/ArcMenu.js';
import type ArcMenuItem from '../menu-item/ArcMenuItem.js';
import type ArcButton from '../button/ArcButton.js';
import './arc-dropdown.js';
import '../menu/arc-menu.js';
import '../menu-item/arc-menu-item.js';
import '../button/arc-button.js';

@customElement('shadow-dropdown')
class DropdownInShadowDOM extends LitElement {
  protected render() {
    return html`
      <arc-dropdown>
        <arc-button slot="trigger">Button</arc-button>
        <arc-menu>
          <arc-menu-item>1</arc-menu-item>
          <arc-menu-item>2</arc-menu-item>
        </arc-menu>
      </arc-dropdown>
    `;
  }
}

describe('ArcDropdown', () => {
  /* Test the rendering of the component */
  describe('rendering', () => {
    let element: ArcDropdown;
    beforeEach(async () => {
      element = await fixture(html`<arc-dropdown></arc-dropdown>`);
    });

    /* Test default properties that reflect to the DOM */
    it('renders the element with default properties in the dom', () => {
      expect(element).dom.to.equal(`<arc-dropdown></arc-dropdown>`);
    });

    it('renders the element in an open state', async () => {
      const openElement: ArcDropdown = await fixture(html`<arc-dropdown open></arc-dropdown>`);
      expect(openElement.open).to.be.true;
      expect(openElement.hasAttribute('open')).to.be.true;
    });

    it('renders the element in a hoisted state', async () => {
      const hoistedElement: ArcDropdown = await fixture(html` <arc-dropdown hoist></arc-dropdown> `);
      expect(hoistedElement.hoist).to.be.true;
      expect(hoistedElement.hasAttribute('hoist')).to.be.true;
    });

    /* Test the accessibility */
    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });

  /* Test the setters/getters */
  describe('setters/getters', () => {
    it('renders the element with a custom placement property', async () => {
      const element: ArcDropdown = await fixture(
        html`<arc-dropdown placement=${FLOATING_PLACEMENTS.top}></arc-dropdown>`
      );

      expect(element.placement).to.equal(FLOATING_PLACEMENTS.top);
      expect(element.getAttribute('placement')).to.equal(FLOATING_PLACEMENTS.top);
    });

    it('renders the element with a custom distance property', async () => {
      const element: ArcDropdown = await fixture(html`<arc-dropdown distance="5"></arc-dropdown>`);

      expect(element.distance).to.equal(5);
      expect(element.getAttribute('distance')).to.equal('5');
    });

    it('renders the element with a custom skidding property', async () => {
      const element: ArcDropdown = await fixture(html`<arc-dropdown skidding="5"></arc-dropdown>`);

      expect(element.skidding).to.equal(5);
      expect(element.getAttribute('skidding')).to.equal('5');
    });
  });

  /* Test different component states (active, disabled, loading etc.) */
  describe('states', () => {
    let element: ArcDropdown;

    beforeEach(async () => {
      element = await fixture(html`<arc-dropdown></arc-dropdown>`);
    });

    it('renders the component in an open state', async () => {
      expect(element.open).to.be.false;
      expect(element.hasAttribute('open')).to.be.false;

      element.open = true;
      await elementUpdated(element);

      expect(element.open).to.be.true;
      expect(element.hasAttribute('open')).to.be.true;
    });

    it('renders the component in a disabled state', async () => {
      expect(element.disabled).to.be.false;
      expect(element.hasAttribute('disabled')).to.be.false;

      element.disabled = true;
      await elementUpdated(element);

      expect(element.disabled).to.be.true;
      expect(element.hasAttribute('disabled')).to.be.true;
    });

    it('hides the component when the disabled state is set', async () => {
      element.open = true;
      await elementUpdated(element);

      element.disabled = true;
      await elementUpdated(element);

      expect(element.open).to.be.false;
    });

    it('renders the component in a hoist state', async () => {
      element.open = true;
      await elementUpdated(element);

      element.hoist = true;
      await elementUpdated(element);

      expect(element.hoist).to.be.true;
      expect(element.hasAttribute('hoist')).to.be.true;
    });
  });

  /* Test specific methods */
  describe('methods', async () => {
    let element: ArcDropdown;

    beforeEach(async () => {
      element = await fixture(html`
        <arc-dropdown>
          <arc-button slot="trigger">Trigger</arc-button>
          <arc-menu></arc-menu>
        </arc-dropdown>
      `);
    });

    it('should focus the trigger', () => {
      expect(document.activeElement === element.children[0]).to.be.false;
      element.focusOnTrigger();
      expect(document.activeElement === element.children[0]).to.be.true;
    });

    it('should return the menu', () => {
      expect(element.getMenu()).to.equal(element.children[1]);
    });
  });

  /* Test the events (click, focus, blur etc.) */
  describe('events', () => {
    let element: ArcDropdown;
    let trigger: HTMLElement;
    let menu: ArcMenu;
    let isOpen: Function;

    beforeEach(async () => {
      element = await fixture(html`
        <arc-dropdown>
          <arc-button slot="trigger">Trigger</arc-button>
          <arc-menu>
            <arc-menu-item>Item 1</arc-menu-item>
            <arc-menu-item>Item 2</arc-menu-item>
            <arc-menu-item>Item 3</arc-menu-item>
          </arc-menu>
        </arc-dropdown>
      `);
      trigger = element.children[0] as ArcButton;
      menu = element.children[1] as ArcMenu;
      isOpen = () => trigger.getAttribute('aria-expanded') === 'true' && element.open === true;
    });

    afterEach(() => {
      clearShowHideListeners(element);
      element.open = false;
    });

    it('should emit arc-show and arc-after-show when calling show()', async () => {
      addShowListeners(element);
      await element.show();
      expect(showCalledOnce()).to.be.true;
      expect(isOpen()).to.be.true;
    });

    it('should emit arc-hide and arc-after-hide when calling hide()', async () => {
      await element.show();
      addHideListeners(element);
      await element.hide();
      expect(hideCalledOnce()).to.be.true;
      expect(isOpen()).to.be.false;
    });

    it('should emit arc-show and arc-after-show when setting open = true', async () => {
      addShowListeners(element);
      element.open = true;
      await waitForShow();
      expect(showCalledOnce()).to.be.true;
      expect(isOpen()).to.be.true;
    });

    it('should emit arc-hide and arc-after-hide when setting open = false', async () => {
      await element.show();
      addHideListeners(element);
      element.open = false;
      await waitForHide();
      expect(hideCalledOnce()).to.be.true;
      expect(isOpen()).to.be.false;
    });

    it('should prevent emitting the arc-show and arc-after-show when the menu is already open', async () => {
      addShowListeners(element);
      await element.show();
      await element.show();
      expect(showCalledOnce()).to.be.true;
    });

    it('should prevent emitting the arc-hide and arc-after-hide when the menu is not open', async () => {
      addHideListeners(element);
      await element.hide();
      expect(hideCalledOnce()).to.be.false;
    });

    it('should prevent the menu to be displayed when the dropdown is disabled', async () => {
      element.disabled = true;
      await elementUpdated(element);

      addShowListeners(element);
      element.open = true;
      expect(showCalledOnce()).to.be.false;
      expect(isOpen()).to.be.false;
    });

    it('closes the menu when escape is pressed on the document', async () => {
      await element.show();
      addHideListeners(element);
      element.handleDocumentKeyDown(escEvent);
      await waitForHide();
      expect(hideCalledOnce()).to.be.true;
      expect(isOpen()).to.be.false;
    });

    it('closes the menu when escape is pressed on the element', async () => {
      await element.show();
      addHideListeners(element);
      element.handleTriggerKeyDown(escEvent);
      await waitForHide();
      expect(hideCalledOnce()).to.be.true;
      expect(isOpen()).to.be.false;
      expect(document.activeElement === trigger).to.be.true;
    });

    it('closes the menu when tabbing inside an open menu', async () => {
      await element.show();
      addHideListeners(element);

      /* Press tab to enter the menu */
      element.handleDocumentKeyDown(tabEvent);

      /* Navigate to the next menu-item */
      menu.handleKeyDown(downEvent);

      /* Press tab again to close the menu and focus the trigger */
      element.handleDocumentKeyDown(tabEvent);
      await waitForHide();
      expect(hideCalledOnce()).to.be.true;
      expect(isOpen()).to.be.false;
      expect(document.activeElement === trigger).to.be.true;
    });

    it('returns focus to parent element when used inside a shadow DOM', async () => {
      const elementInSD: DropdownInShadowDOM = await fixture(html`<shadow-dropdown></shadow-dropdown>`);
      const dropdownInSD: ArcDropdown = elementInSD.shadowRoot!.querySelector('arc-dropdown')!;
      const menuInSD: ArcMenu = elementInSD.shadowRoot!.querySelector('arc-menu')!;

      await dropdownInSD.show();
      addHideListeners(dropdownInSD);

      /* Press tab to enter the menu */
      dropdownInSD.handleDocumentKeyDown(tabEvent);

      /* Navigate to the next menu-item */
      menuInSD.handleKeyDown(downEvent);

      /* Press tab again to close the menu and focus the trigger */
      dropdownInSD.handleDocumentKeyDown(tabEvent);
      await waitForHide();
      expect(hideCalledOnce()).to.be.true;
      expect(document.activeElement === elementInSD).to.be.true;
    });

    it('closes the menu when clicking on a menu item', async () => {
      await element.show();
      addHideListeners(element);

      /* Click on a menu item */
      (menu.children[1] as ArcMenuItem).click();
      await waitForHide();
      expect(hideCalledOnce()).to.be.true;
      expect(isOpen()).to.be.false;
    });

    it('closes the menu when clicking outside of the element', async () => {
      await element.show();
      addHideListeners(element);

      /* Click the body */
      element.handleDocumentMouseDown(mouseEvent);
      await waitForHide();
      expect(hideCalledOnce()).to.be.true;
      expect(isOpen()).to.be.false;
    });

    it('toggles the menu when the space bar or enter is pressed', async () => {
      addShowListeners(element);
      addHideListeners(element);

      /* Open / close the menu with space */
      element.handleTriggerKeyDown(spaceEvent);
      await waitForShow();
      expect(showCalledOnce()).to.be.true;
      expect(isOpen()).to.be.true;

      /*
      Fire only the KeyUp space bar event through the TriggerKeyUp,
      Firefox handles this as another 'click' and this should be prevented.
      */
      element.handleTriggerKeyUp(spaceEvent);
      element.handleTriggerKeyDown(spaceEvent);
      await waitForHide();
      expect(hideCalledOnce()).to.be.true;
      expect(isOpen()).to.be.false;
    });

    it('toggles the menu when enter is pressed', async () => {
      addShowListeners(element);
      addHideListeners(element);

      /* Open / close the menu with enter */
      element.handleTriggerKeyDown(enterEvent);
      await waitForShow();
      expect(showCalledOnce()).to.be.true;
      expect(isOpen()).to.be.true;

      element.handleTriggerKeyDown(enterEvent);
      await waitForHide();
      expect(hideCalledOnce()).to.be.true;
      expect(isOpen()).to.be.false;
    });

    it('focuses the first menu item when ArrowDown is pressed', async () => {
      addShowListeners(element);

      /* Open the menu with ArrowDown */
      element.handleTriggerKeyDown(downEvent);
      await waitForShow();
      expect(showCalledOnce()).to.be.true;

      /* Navigate to the first menu item */
      element.handleTriggerKeyDown(downEvent);
      expect(menu.children[0].getAttribute('tabindex')).to.equal('0');
    });

    it('focuses the last menu item when ArrowUp is pressed', async () => {
      addShowListeners(element);

      /* Open the menu with ArrowUp */
      element.handleTriggerKeyDown(upEvent);
      await waitForShow();
      expect(showCalledOnce()).to.be.true;

      /* Navigate to the last menu item */
      element.handleTriggerKeyDown(upEvent);
      expect(menu.children[2].getAttribute('tabindex')).to.equal('0');
    });

    it('does not trigger typeToSelect when the menu is closed', async () => {
      /* The active item does not change */
      expect(menu.children[0].getAttribute('tabindex')).to.equal('0');
      element.handleTriggerKeyDown(createKeyEvent('Item 3'));
      expect(menu.children[0].getAttribute('tabindex')).to.equal('0');
    });

    it('does not trigger typeToSelect when there is no menu', async () => {
      menu.remove();
      element.handleTriggerKeyDown(createKeyEvent('Item 3'));
      expect('nothing').to.equal('nothing');
    });

    it('triggers typeToSelect to the menu', async () => {
      await element.show();
      expect(isOpen()).to.be.true;

      element.handleTriggerKeyDown(createKeyEvent('Item 3'));
      expect(menu.children[2].getAttribute('tabindex')).to.equal('0');
    });
  });

  /* Test whether the slots can be filled and that they exist */
  describe('slots', () => {
    let element: ArcDropdown;
    beforeEach(async () => {
      element = await fixture(html`<arc-dropdown></arc-dropdown>`);
    });

    it('renders default slots to fill the component', () => {
      const main = element.shadowRoot!.getElementById('main')!;

      /* An empty slot is available */
      expect(hasSlot(main)).to.be.true;

      /* A specific (named) slot is available */
      expect(hasSlot(main, 'trigger')).to.be.true;
    });
  });
});
