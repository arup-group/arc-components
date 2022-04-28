import { prefersReducedMotion } from './preferences.js';

export interface ElementAnimation {
  keyframes: Keyframe[];
  options?: KeyframeAnimationOptions;
}

interface ElementAnimationMap {
  [animationName: string]: ElementAnimation;
}

const defaultAnimationRegistry = new Map<String, ElementAnimation>();
const customAnimationRegistry = new WeakMap<Element, ElementAnimationMap>();

function ensureAnimation(animation: ElementAnimation | null) {
  if (!animation) {
    return { keyframes: [], options: { duration: 0 } };
  }
  return animation;
}

/*
Sets a default animation. Components should use the `name.animation` for primary animations and `name.part.animation`
for secondary animations, e.g. `dialog.show` and `dialog.overlay.show`. For modifiers, use `drawer.showTop`.
*/
function setDefaultAnimation(animationName: string, animation: ElementAnimation | null) {
  defaultAnimationRegistry.set(animationName, ensureAnimation(animation));
}

/* Sets a custom animation for the specified element. */
function setAnimation(el: Element, animationName: string, animation: ElementAnimation | null) {
  customAnimationRegistry.set(el, { ...customAnimationRegistry.get(el), [animationName]: ensureAnimation(animation) });
}

/* Retrieves an element's animation. Falls back to the default if no animation is found. */
function getAnimation(el: Element, animationName: string) {
  const customAnimation = customAnimationRegistry.get(el);

  /* Check for a custom animation. */
  if (customAnimation && customAnimation[animationName]) {
    return customAnimation[animationName];
  }

  /* Check for a default animation. */
  const defaultAnimation = defaultAnimationRegistry.get(animationName);
  if (defaultAnimation) {
    return defaultAnimation;
  }

  /* Fall back to an empty animation. */
  return { keyframes: [], options: { duration: 0 } };
}

/* Animates an element using keyframes. Returns a promise that resolves after the animation completes or gets canceled. */
function startAnimations(el: HTMLElement, keyframes: Keyframe[], options?: KeyframeAnimationOptions) {
  return new Promise(resolve => {
    if (options?.duration === Infinity) {
      throw new Error('Promise-based animations must be finite.');
    }

    const animation = el.animate(keyframes, {
      ...options,
      /* c8 ignore next */
      duration: prefersReducedMotion() ? 0 : options!.duration,
    });

    animation.addEventListener('cancel', resolve, { once: true });
    animation.addEventListener('finish', resolve, { once: true });
  });
}

/* Stops all active animations on the target element. Returns a promise that resolves after all animations are canceled. */
function stopAnimations(el: HTMLElement) {
  return Promise.all(
    el.getAnimations().map(
      animation =>
        new Promise(resolve => {
          const handleAnimationEvent = requestAnimationFrame(resolve);

          animation.addEventListener('cancel', () => handleAnimationEvent, { once: true });
          animation.cancel();
        })
    )
  );
}

/*
We can't animate `height: auto`, but we can calculate the height and shim keyframes by replacing it with the
element's scrollHeight before the animation.
 */
function shimKeyframesHeightAuto(keyframes: Keyframe[], calculatedHeight: number) {
  return keyframes.map(keyframe => ({
    ...keyframe,
    height: keyframe.height === 'auto' ? `${calculatedHeight}px` : keyframe.height,
  }));
}

export { setDefaultAnimation, setAnimation, getAnimation, startAnimations, stopAnimations, shimKeyframesHeightAuto };
