const locks = new Set();

/* Prevents body scrolling. Keeps track of which elements requested a lock so multiple levels of locking are possible without premature unlocking. */
export function lockBodyScrolling(lockingEl: HTMLElement) {
  locks.add(lockingEl);
  document.body.classList.add('sl-scroll-lock');
}

/* Unlocks body scrolling. Scrolling will only be unlocked once all elements that requested a lock call this method. */
export function unlockBodyScrolling(lockingEl: HTMLElement) {
  locks.delete(lockingEl);

  if (locks.size === 0) {
    document.body.classList.remove('sl-scroll-lock');
  }
}
