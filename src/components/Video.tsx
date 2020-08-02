import React, { FC } from 'react';
import styled from 'styled-components';
import VideoContent from './VideoContent';
import VideoFrame from './VideoFrame';

const Video: FC<{ id: string; title: string; description: string }> = ({
  id,
  title,
  description,
  children,
}) => {
  return (
    <StyledVideo>
      <VideoFrame id={id} title={title} />
      <StyledContent>
        {children || <VideoContent description={description} title={title} />}
      </StyledContent>
    </StyledVideo>
  );
};

const StyledVideo = styled.div`
  display: flex;
`;

const StyledContent = styled.div`
  margin-left: 1rem;
`;

export default Video;
