/* rem breakpoint for mobile devices. */
const mobileBreakpoint: number = 49;

/* Determines whether the user is on a mobile-like device. */
function isMobile() {
  return window.matchMedia(`(max-width: ${mobileBreakpoint}rem)`).matches;
}

/* Tells if the user has enabled the "reduced motion" setting in their browser or OS. */
function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/* Tells if the user has enabled the "color-scheme" setting in their browser or OS. */
function prefersDark() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export { mobileBreakpoint, isMobile, prefersReducedMotion, prefersDark };
