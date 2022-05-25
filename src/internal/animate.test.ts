import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { expect, fixture } from '@open-wc/testing';
import {
  setDefaultAnimation,
  setAnimation,
  getAnimation,
  startAnimations,
  stopAnimations,
  parseDuration,
  shimKeyframesHeightAuto,
  ElementAnimation,
} from './animate.js';
import { ARC_ANIMATION_OPTIONS } from './constants/animationConstants.js';

@customElement('animation-test')
class AnimateTest extends LitElement {
  protected render() {
    return html`<div>Animation Registry Test</div>`;
  }
}

describe('AnimationRegistry', () => {
  let element: AnimateTest;
  let elementTwo: AnimateTest;
  const defaultAnimation = {
    keyframes: [
      { opacity: 0, transform: 'scale(0.9)' },
      { opacity: 1, transform: 'scale(1)' },
    ],
    options: ARC_ANIMATION_OPTIONS.fast,
  };
  const customAnimation = {
    keyframes: [
      { opacity: 1, transform: 'scale(1)' },
      { opacity: 0, transform: 'scale(0.9)' },
    ],
    options: ARC_ANIMATION_OPTIONS.fast,
  };

  beforeEach(async () => {
    setDefaultAnimation('animation.show', defaultAnimation);
    element = await fixture('<animation-test></animation-test>');
    elementTwo = await fixture('<animation-test></animation-test>');
  });

  afterEach(() => {
    setDefaultAnimation('animation.show', null);
  });

  it('registered a default animation for all components', () => {
    expect(getAnimation(element, 'animation.show')).to.equal(defaultAnimation);
    expect(getAnimation(elementTwo, 'animation.show')).to.equal(defaultAnimation);
  });

  it('registers a custom animation for a single component', () => {
    setAnimation(element, 'animation.show', customAnimation);

    expect(getAnimation(element, 'animation.show')).to.equal(customAnimation);
    expect(getAnimation(elementTwo, 'animation.show')).to.equal(defaultAnimation);
  });

  it('returns a fallback animation when a non-existing animation is requested', () => {
    const emptyAnimation: ElementAnimation = getAnimation(element, '');
    const { keyframes, options } = emptyAnimation;
    const { duration } = options!;

    expect(keyframes.length).to.equal(0);
    expect(duration).to.exist;
    expect(duration).to.equal(0);
  });

  it('returns a fallback animation when a faulty animation is requested', () => {
    setDefaultAnimation('faulty.animation', null);
    const faultyAnimation: ElementAnimation = getAnimation(element, 'faulty.animation');
    const { keyframes, options } = faultyAnimation;
    const { duration } = options!;

    expect(keyframes.length).to.equal(0);
    expect(duration).to.exist;
    expect(duration).to.equal(0);
  });
});

describe('Animations', () => {
  let element: AnimateTest;

  beforeEach(async () => {
    setDefaultAnimation('animation.expand', {
      keyframes: [
        { height: '100px', opacity: '0' },
        { height: '200px', opacity: '1' },
      ],
      options: ARC_ANIMATION_OPTIONS['x-fast'],
    });
    element = await fixture('<animation-test></animation-test>');

    /* Stop any ongoing animations */
    await stopAnimations(element);
  });

  afterEach(async () => {
    setDefaultAnimation('animation.expand', null);

    /* Stop any ongoing animations */
    await stopAnimations(element);
  });

  it('starts the animation', async () => {
    const { keyframes, options } = getAnimation(element, 'animation.expand');
    let animationFinished = false;

    await startAnimations(element, keyframes, options).then(() => {
      animationFinished = true;
    });

    expect(animationFinished).to.be.true;
  });

  it('stops the animation before finishing', async () => {
    const { keyframes, options } = getAnimation(element, 'animation.expand');
    let animationFinished = false;
    options!.duration = 10000;

    startAnimations(element, keyframes, options).then(() => {
      animationFinished = true;
    });

    await stopAnimations(element);
    expect(animationFinished).to.be.true;
  });

  it('throws an error when the animation is set to Infinity', async () => {
    const { keyframes, options } = getAnimation(element, 'animation.expand');
    options!.duration = Infinity;

    startAnimations(element, keyframes, options).catch(err => {
      expect(err.message).to.equal('Promise-based animations must be finite.');
    });
  });
});

describe('parseDuration', () => {
  it('parses an millisecond string duration and returns the number in milliseconds', () => {
    expect(parseDuration('50ms')).to.equal(50);
    expect(parseDuration('50MS')).to.equal(50);
  });

  it('parses a second string duration and returns the number in milliseconds', () => {
    expect(parseDuration('5s')).to.equal(5000);
    expect(parseDuration('5S')).to.equal(5000);
  });

  it('parses a duration in milliseconds', () => {
    expect(parseDuration(5)).to.equal(5);
  });
});

describe('shimKeyframesHeightAuto', () => {
  it('shims/changes the `auto` height property into a calculated height', async () => {
    const element: AnimateTest = await fixture('<animation-test></animation-test>');
    const keyFrames: Keyframe[] = [{ height: 'auto' }, { height: '100px' }];
    const updatedKeyFrames = shimKeyframesHeightAuto(keyFrames, element.scrollHeight);

    const oldKeys = Object.keys(keyFrames);
    const shimmedKeys = Object.keys(updatedKeyFrames);

    expect(oldKeys.length).to.equal(shimmedKeys.length);
    expect(keyFrames[0].height).to.not.equal(updatedKeyFrames[0].height);
    expect(keyFrames[1].height).to.equal(updatedKeyFrames[1].height);
  });
});
