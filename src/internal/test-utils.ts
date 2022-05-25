import { LitElement } from 'lit';
import sinon, { SinonSpy } from 'sinon';
import { waitUntil } from '@open-wc/testing';
import { ARC_EVENTS } from './constants/eventConstants.js';

const showHandler: SinonSpy = sinon.spy();
const afterShowHandler: SinonSpy = sinon.spy();
const hideHandler: SinonSpy = sinon.spy();
const afterHideHandler: SinonSpy = sinon.spy();

function addShowListeners(element: LitElement) {
  element.addEventListener(ARC_EVENTS.show, showHandler);
  element.addEventListener(ARC_EVENTS.afterShow, afterShowHandler);
}

function addHideListeners(element: LitElement) {
  element.addEventListener(ARC_EVENTS.hide, hideHandler);
  element.addEventListener(ARC_EVENTS.afterHide, afterHideHandler);
}

function clearShowHideListeners(element: LitElement) {
  element.removeEventListener(ARC_EVENTS.show, showHandler);
  element.removeEventListener(ARC_EVENTS.afterShow, afterShowHandler);
  element.removeEventListener(ARC_EVENTS.hide, hideHandler);
  element.removeEventListener(ARC_EVENTS.afterHide, afterHideHandler);
  showHandler.resetHistory();
  afterShowHandler.resetHistory();
  hideHandler.resetHistory();
  afterHideHandler.resetHistory();
}

async function waitForShow() {
  await waitUntil(() => showHandler.calledOnce);
  await waitUntil(() => afterShowHandler.calledOnce);
}

async function waitForHide() {
  await waitUntil(() => hideHandler.calledOnce);
  await waitUntil(() => afterHideHandler.calledOnce);
}

function showCalledOnce() {
  return showHandler.callCount === 1 && afterShowHandler.callCount === 1;
}

function hideCalledOnce() {
  return hideHandler.callCount === 1 && afterHideHandler.callCount === 1;
}

function createKeyEvent(key: string) {
  return new KeyboardEvent('keypress', { key });
}

const escEvent = createKeyEvent('Escape');
const tabEvent = createKeyEvent('Tab');
const homeEvent = createKeyEvent('Home');
const endEvent = createKeyEvent('End');
const enterEvent = createKeyEvent('Enter');
const spaceEvent = createKeyEvent(' ');
const upEvent = createKeyEvent('ArrowUp');
const downEvent = createKeyEvent('ArrowDown');
const rightEvent = createKeyEvent('ArrowRight');
const leftEvent = createKeyEvent('ArrowLeft');
const mouseEvent = new MouseEvent('click', {
  bubbles: true,
  cancelable: true,
  view: window,
});

export {
  addShowListeners,
  addHideListeners,
  clearShowHideListeners,
  waitForShow,
  waitForHide,
  showCalledOnce,
  hideCalledOnce,
  createKeyEvent,
  escEvent,
  tabEvent,
  homeEvent,
  endEvent,
  enterEvent,
  spaceEvent,
  upEvent,
  downEvent,
  rightEvent,
  leftEvent,
  mouseEvent,
};
