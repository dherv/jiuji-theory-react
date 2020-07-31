import React, { FC } from 'react';
import styled from 'styled-components';
import Video from './Video';

const VideoList: FC<{ videos: any[] }> = ({ videos }) => {
  return (
    <StyledList>
      {videos.map((video) => (
        <li key={video.id}>
          <Video {...video} />
        </li>
      ))}
    </StyledList>
  );
};

const StyledList = styled.ul`
  li {
    margin: 1rem 0;
  }
`;

export default VideoList;
