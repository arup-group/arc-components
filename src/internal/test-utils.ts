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