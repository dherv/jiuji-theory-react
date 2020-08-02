import React, { FC } from 'react';
import styled from 'styled-components';
import VideoAdd from './VideoAdd';

const SearchVideoList: FC<{
  videos: any;
  selected: boolean;
  onClick: (event: React.MouseEvent) => void;
}> = ({ videos, selected, onClick }) => {
  return (
    <ul>
      {videos.map((video: any) => (
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
