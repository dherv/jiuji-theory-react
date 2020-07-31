import React, { FC } from 'react';
import styled from 'styled-components';
import VideoContent from './VideoContent';
import VideoFrame from './VideoFrame';

const Video: FC<{ id: string; title: string; description: string }> = ({
  id,
  title,
  description,
}) => {
  return (
    <Container>
      <VideoFrame id={id} title={title}></VideoFrame>
      <ContentWrapper>
        <VideoContent description={description} title={title}></VideoContent>
      </ContentWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const ContentWrapper = styled.div`
  margin-left: 1rem;
`;

export default Video;
