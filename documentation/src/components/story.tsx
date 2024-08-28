import React from 'react'

const FRAME_STYLE = { border: '1px solid #aaa' };

export default function Story ({ component = 'avatar' }): JSX.Element {
  return (<iframe
    src={`https://arc.arup.com/iframe.html?instrument=false&viewMode=story&id=components-arc${component}--default`}
    width="100%"
    style={FRAME_STYLE}
  ></iframe>
  )
}
