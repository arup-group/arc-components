import React from 'react';

interface StoryProps {
  componentName: string;
  storyName: string;
}

const FRAME_STYLE = {
  border: '1px solid #aaa',
  width: '100%',
  height: '550px',
};

const Story: React.FC<StoryProps> = ({
  componentName = 'avatar',
  storyName = 'default',
}): JSX.Element => {
  const storySrc = `https://arc.arup.com/iframe.html?instrument=false&viewMode=story&id=components-arc${componentName}--${storyName}`;
  return <iframe style={FRAME_STYLE} src={storySrc} />;
};

export default Story;
