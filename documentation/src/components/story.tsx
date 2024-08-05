import React from 'react'

const FRAME_STYLE = { border: '1px solid #aaa' };

/* TODO:
  * 1. props for component & story
  * 2. iframe src should be dynamic
  * 3. make storybook iframe not render sidebar controls
  */
export default function Story ({ story = '' }): JSX.Element {
  return (<iframe
    title="Excalibur Storybook Example"
    src={`https://arc.arup.com/?path=/story/components-arc${story}--default&nav=0`}
    width="100%"
    height="600"
    style={FRAME_STYLE}
  ></iframe>
  )
}
