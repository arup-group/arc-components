import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { expect, fixture } from '@open-wc/testing';
import { setDefaultAnimation, setAnimation, getAnimation } from './animation-registry.js';

@customElement('animation-test')
class AnimationRegistryTest extends LitElement {
  render() {
    return html`<div>Animation Registry Test</div>`;
  }
}

describe('AnimationRegistry', () => {
  let element: AnimationRegistryTest;
  let elementTwo: AnimationRegistryTest;
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

  it('returns an empty animation when a non-existing or faulty animation is given', () => {
    // Faulty animation as null does not match the type `ElementAnimation`
    setDefaultAnimation('faulty.animation', null);

    const emptyAnimation = getAnimation(element, '');
    const faultyAnimation = getAnimation(element, 'faulty.animation');

    expect(emptyAnimation.keyframes.length).to.equal(0);
    expect(faultyAnimation.keyframes.length).to.equal(0);

    expect(Object.keys(emptyAnimation.options as Object)[0]).to.equal('duration');
    expect(Object.keys(faultyAnimation.options as Object)[0]).to.equal('duration');
    expect(Object.values(emptyAnimation.options as Object)[0]).to.equal(0);
    expect(Object.values(faultyAnimation.options as Object)[0]).to.equal(0);
  });
});
