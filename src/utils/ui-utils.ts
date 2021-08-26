export class UiUtils {
  static isMobile() {
    return window.matchMedia('(max-width: 48em)').matches;
  }
}
