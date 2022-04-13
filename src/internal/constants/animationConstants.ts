export declare type TransitionSpeed = 'x-slow' | 'slow' | 'medium' | 'fast' | 'x-fast';

export const ARC_ANIMATION_OPTIONS: { [key in TransitionSpeed]: KeyframeAnimationOptions } = {
  'x-slow': {
    duration: 1000,
    easing: 'ease',
  },
  slow: {
    duration: 500,
    easing: 'ease',
  },
  medium: {
    duration: 250,
    easing: 'ease',
  },
  fast: {
    duration: 150,
    easing: 'ease',
  },
  'x-fast': {
    duration: 5,
    easing: 'ease',
  },
};
