export class UiUtils {
  static isMobile() {
    return window.matchMedia('(max-width: 40em)').matches;
  }
}
