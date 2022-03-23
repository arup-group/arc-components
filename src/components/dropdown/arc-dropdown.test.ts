import { html } from 'lit';
import { expect, fixture, elementUpdated, waitUntil } from '@open-wc/testing';
import sinon, { SinonSpy } from 'sinon';
import { hasSlot } from '../../internal/slot.js';
import {
  createKeyEvent,
  downEvent,
  escEvent,
  tabEvent,
  mouseEvent,
  spaceEvent,
  enterEvent,
  upEvent,
} from '../../utilities/test-utils.js';
import { DROPDOWN_PLACEMENTS } from './constants/DropdownConstants.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';

import type ArcDropdown from './ArcDropdown.js';
import type ArcMenu from '../menu/ArcMenu.js';
import type ArcMenuItem from '../menu-item/ArcMenuItem.js';
import type ArcButton from '../button/ArcButton.js';
import './arc-dropdown.js';
import '../menu/arc-menu.js';
import '../menu-item/arc-menu-item.js';
import '../button/arc-button.js';

describe('ArcDropdown', () => {
  /* Test the rendering of the component */
  describe('rendering', () => {
    let element: ArcDropdown;
    beforeEach(async () => {
      element = await fixture(html` <arc-dropdown></arc-dropdown> `);
    });

    /* Test default properties that reflect to the DOM */
    it('renders the element with default properties in the dom', () => {
      expect(element).dom.to.equal(`<arc-dropdown></arc-dropdown>`);
    });

    /* Test the accessibility */
    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });

  /* Test the setters/getters */
  describe('setters/getters', () => {
    it('renders the element with a custom placement, distance and skidding property', async () => {
      const element: ArcDropdown = await fixture(
        html`<arc-dropdown placement=${DROPDOWN_PLACEMENTS.top} distance="5" skidding="5"></arc-dropdown>`
      );

      expect(element.placement).to.equal(DROPDOWN_PLACEMENTS.top);
      expect(element.getAttribute('placement')).to.equal(DROPDOWN_PLACEMENTS.top);

      expect(element.distance).to.equal(5);
      expect(element.getAttribute('distance')).to.equal('5');

      expect(element.skidding).to.equal(5);
      expect(element.getAttribute('skidding')).to.equal('5');
    });

    it('updates the popover strategy with hoist', async () => {
      const element: ArcDropdown = await fixture(html`
        <arc-dropdown hoist>
          <arc-button>Dropdown</arc-button>
          <arc-menu>
            <arc-menu-item>Item 1</arc-menu-item>
            <arc-menu-item>Item 2</arc-menu-item>
            <arc-menu-item>Item 3</arc-menu-item>
          </arc-menu>
        </arc-dropdown>
      `);

      /* First open the menu */
      await element.show();

      /* Trigger the popover update with the placement property */
      element.placement = DROPDOWN_PLACEMENTS.right;
      await elementUpdated(element);

      expect(element.placement).to.equal(DROPDOWN_PLACEMENTS.right);
    });

    it('updates the popover strategy without hoist', async () => {
      const element: ArcDropdown = await fixture(html`
        <arc-dropdown>
          <arc-button>Dropdown</arc-button>
          <arc-menu>
            <arc-menu-item>Item 1</arc-menu-item>
            <arc-menu-item>Item 2</arc-menu-item>
            <arc-menu-item>Item 3</arc-menu-item>
          </arc-menu>
        </arc-dropdown>
      `);

      /* First open the menu */
      await element.show();

      /* Trigger the popover update with the placement property */
      element.placement = DROPDOWN_PLACEMENTS.right;
      await elementUpdated(element);

      expect(element.placement).to.equal(DROPDOWN_PLACEMENTS.right);
    });
  });

  /* Test different component states (active, disabled, loading etc.) */
  describe('states', () => {
    let element: ArcDropdown;

    beforeEach(async () => {
      element = await fixture(html` <arc-dropdown></arc-dropdown> `);
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

    it('renders the component in a hoist state', async () => {
      expect(element.hoist).to.be.false;
      expect(element.hasAttribute('hoist')).to.be.false;

      element.hoist = true;
      await elementUpdated(element);

      expect(element.hoist).to.be.true;
      expect(element.hasAttribute('hoist')).to.be.true;
    });

    it('renders the underlying popover in a hoist state', async () => {
      const hoistedElement: ArcDropdown = await fixture(html`<arc-dropdown hoist></arc-dropdown>`);
      expect(hoistedElement.hoist).to.be.true;
      expect(hoistedElement.hasAttribute('hoist')).to.be.true;
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
    let panel: HTMLElement;
    let isOpen: Function;

    const showHandler: SinonSpy = sinon.spy();
    const afterShowHandler: SinonSpy = sinon.spy();
    const hideHandler: SinonSpy = sinon.spy();
    const afterHideHandler: SinonSpy = sinon.spy();

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
      panel = element.shadowRoot?.getElementById('panel') as HTMLElement;
      isOpen = () => trigger.getAttribute('aria-expanded') === 'true';
    });

    afterEach(() => {
      showHandler.resetHistory();
      afterShowHandler.resetHistory();
      hideHandler.resetHistory();
      afterHideHandler.resetHistory();
      element.open = false;
    });

    it('should emit arc-show and arc-after-show when calling show()', async () => {
      element.addEventListener(ARC_EVENTS.show, showHandler);
      element.addEventListener(ARC_EVENTS.afterShow, afterShowHandler);

      await element.show();

      expect(showHandler).to.have.been.calledOnce;
      expect(afterShowHandler).to.have.been.calledOnce;
      expect(panel.hidden).to.be.false;
    });

    it('should emit arc-hide and arc-after-hide when calling hide()', async () => {
      await element.show();

      element.addEventListener(ARC_EVENTS.hide, hideHandler);
      element.addEventListener(ARC_EVENTS.afterHide, afterHideHandler);

      await element.hide();

      expect(hideHandler).to.have.been.calledOnce;
      expect(afterHideHandler).to.have.been.calledOnce;
      expect(panel.hidden).to.be.true;
    });

    it('should emit arc-show and arc-after-show when setting open = true', async () => {
      element.addEventListener(ARC_EVENTS.show, showHandler);
      element.addEventListener(ARC_EVENTS.afterShow, afterShowHandler);

      element.open = true;
      await waitUntil(() => showHandler.calledOnce);
      await waitUntil(() => afterShowHandler.calledOnce);

      expect(showHandler).to.have.been.calledOnce;
      expect(afterShowHandler).to.have.been.calledOnce;
      expect(panel.hidden).to.be.false;
    });

    it('should emit arc-hide and arc-after-hide when setting open = false', async () => {
      await element.show();

      element.addEventListener(ARC_EVENTS.hide, hideHandler);
      element.addEventListener(ARC_EVENTS.afterHide, afterHideHandler);

      element.open = false;
      await waitUntil(() => hideHandler.calledOnce);
      await waitUntil(() => afterHideHandler.calledOnce);

      expect(hideHandler).to.have.been.calledOnce;
      expect(afterHideHandler).to.have.been.calledOnce;
      expect(panel.hidden).to.be.true;
    });

    it('should prevent emitting the arc-show and arc-after-show when the menu is already open', async () => {
      element.addEventListener(ARC_EVENTS.show, showHandler);
      element.addEventListener(ARC_EVENTS.afterShow, afterShowHandler);

      await element.show();
      await element.show();

      expect(showHandler).to.have.been.calledOnce;
      expect(afterShowHandler).to.have.been.calledOnce;
    });

    it('should prevent the menu to be displayed when the dropdown is disabled', async () => {
      element.disabled = true;
      await elementUpdated(element);

      element.addEventListener(ARC_EVENTS.show, showHandler);
      element.addEventListener(ARC_EVENTS.afterShow, afterShowHandler);

      element.open = true;

      expect(showHandler).to.not.have.been.calledOnce;
      expect(afterShowHandler).to.not.have.been.calledOnce;
      expect(isOpen()).to.be.false;
      expect(panel.hidden).to.be.true;
    });

    it('closes the menu when escape is pressed', async () => {
      element.addEventListener(ARC_EVENTS.hide, hideHandler);

      /* Open the menu */
      await element.show();
      expect(isOpen()).to.be.true;

      /* Close the menu with the Escape keypress on the document */
      element.handleDocumentKeyDown(escEvent);
      await waitUntil(() => hideHandler.calledOnce);

      /* Open the menu again */
      await element.show();
      expect(isOpen()).to.be.true;

      /* Close the menu with the Escape keypress on the menu */
      element.handleTriggerKeyDown(escEvent);
      await waitUntil(() => hideHandler.calledTwice);

      expect(hideHandler).to.have.been.calledTwice;
      expect(isOpen()).to.be.false;
      expect(document.activeElement === trigger).to.be.true;
    });

    it('closes the menu when tabbing inside an open menu', async () => {
      element.addEventListener(ARC_EVENTS.hide, hideHandler);

      /* Open the menu */
      await element.show();
      expect(isOpen()).to.be.true;

      /* Press tab to enter the menu */
      element.handleDocumentKeyDown(tabEvent);

      /* Navigate to the next menu-item */
      menu.handleKeyDown(downEvent);

      /* Press tab again to close the menu and focus the trigger */
      element.handleDocumentKeyDown(tabEvent);

      await waitUntil(() => hideHandler.calledOnce);

      expect(hideHandler).to.have.been.calledOnce;
      expect(isOpen()).to.be.false;
      expect(document.activeElement === trigger).to.be.true;
    });

    it('closes the menu when clicking on a menu item', async () => {
      element.addEventListener(ARC_EVENTS.hide, hideHandler);

      /* Open the menu */
      await element.show();
      expect(isOpen()).to.be.true;

      /* Click on a menu item */
      (menu.children[1] as ArcMenuItem).click();

      await waitUntil(() => hideHandler.calledOnce);

      expect(hideHandler).to.have.been.calledOnce;
      expect(isOpen()).to.be.false;
    });

    it('closes the menu when clicking outside of the element', async () => {
      element.addEventListener(ARC_EVENTS.hide, hideHandler);

      /* Open the menu */
      await element.show();
      expect(isOpen()).to.be.true;

      /* Click the body */
      element.handleDocumentMouseDown(mouseEvent);

      await waitUntil(() => hideHandler.calledOnce);

      expect(hideHandler).to.have.been.calledOnce;
      expect(isOpen()).to.be.false;
    });

    it('toggles the menu when the space bar or enter is pressed', async () => {
      element.addEventListener(ARC_EVENTS.show, showHandler);
      element.addEventListener(ARC_EVENTS.hide, hideHandler);

      /* Open / close the menu with space */
      element.handleTriggerKeyDown(spaceEvent);
      await waitUntil(() => showHandler.calledOnce);

      /*
      Fire only the KeyUp space bar event through the TriggerKeyUp,
      Firefox handles this as another 'click' and this should be prevented.
      */
      element.handleTriggerKeyUp(spaceEvent);

      element.handleTriggerKeyDown(spaceEvent);
      await waitUntil(() => hideHandler.calledOnce);
      expect(isOpen()).to.be.false;

      /* Open / close the menu with enter */
      element.handleTriggerKeyDown(enterEvent);
      await waitUntil(() => showHandler.calledOnce);

      element.handleTriggerKeyDown(enterEvent);
      await waitUntil(() => hideHandler.calledOnce);
      expect(isOpen()).to.be.false;
    });

    it('focuses the first menu item when ArrowDown is pressed', async () => {
      element.addEventListener(ARC_EVENTS.show, showHandler);

      /* Open the menu with ArrowDown */
      element.handleTriggerKeyDown(downEvent);
      await waitUntil(() => showHandler.calledOnce);
      expect(showHandler).to.have.been.calledOnce;

      /* Navigate to the first menu item */
      element.handleTriggerKeyDown(downEvent);
      expect(menu.children[0].getAttribute('tabindex')).to.equal('0');
    });

    it('focuses the last menu item when ArrowUp is pressed', async () => {
      element.addEventListener(ARC_EVENTS.show, showHandler);

      /* Open the menu with ArrowUp */
      element.handleTriggerKeyDown(upEvent);
      await waitUntil(() => showHandler.calledOnce);
      expect(showHandler).to.have.been.calledOnce;

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
      /* Open the menu */
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
