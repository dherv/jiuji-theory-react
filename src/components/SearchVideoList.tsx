import React, { FC } from 'react';
import styled from 'styled-components';
import { IVideo } from '../types/Video.interface';
import VideoAdd from './VideoAdd';

const SearchVideoList: FC<{
  videos: IVideo[];
  selected: boolean;
  onClick: (event: React.MouseEvent) => void;
}> = ({ videos, selected, onClick }) => {
  return (
    <ul>
      {videos.map((video: IVideo) => (
        <ListItem key={video.id}>
          <VideoAdd {...video} selected={selected} onClick={onClick} />
        </ListItem>
      ))}
    </ul>
  );
};

const ListItem = styled.li`
  margin-top: 1rem;
`;

export default SearchVideoList;
