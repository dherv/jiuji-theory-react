import React, { FC } from 'react';
import styled from 'styled-components';
import { IVideo } from '../types/Video.interface';
import Video from './Video';

const TechniqueVideoList: FC<{ videos: IVideo[] }> = ({ videos }) => {
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

export default TechniqueVideoList;
