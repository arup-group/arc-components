/* Determines whether the user is on a mobile-like device */
function isMobile() {
  return window.matchMedia('(max-width: 48rem)').matches;
}

export { isMobile };
