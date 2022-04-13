import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { expect, fixture } from '@open-wc/testing';
import { setDefaultAnimation, setAnimation, getAnimation, ElementAnimation } from './animate.js';

@customElement('animation-test')
class AnimateTest extends LitElement {
  render() {
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
    options: { duration: 150, easing: 'ease' },
  };
  const customAnimation = {
    keyframes: [
      { opacity: 1, transform: 'scale(1)' },
      { opacity: 0, transform: 'scale(0.9)' },
    ],
    options: { duration: 150, easing: 'ease' },
  };

  beforeEach(async () => {
    element = await fixture('<animation-test></animation-test>');
    elementTwo = await fixture('<animation-test></animation-test>');
  });

  it('registers a default animation for all components', () => {
    setDefaultAnimation('animation.show', defaultAnimation);

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
  //  TODO: Write tests for the startAnimations, stopAnimations and shimKeyframesHeightAuto methods.
});
