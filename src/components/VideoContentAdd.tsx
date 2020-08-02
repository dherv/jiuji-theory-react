import React, { FC } from 'react';
import { MdAddBox } from 'react-icons/md';
import styled from 'styled-components';
import VideoContent from './VideoContent';

const VideoContentAdd: FC<{
  title: string;
  description: string;
  onClick: (event: React.MouseEvent<SVGAElement>) => void;
}> = ({ title, description, onClick }) => {
  return (
    <>
      <VideoContent title={title} description={description} />
      <StyledIcon title="video-add-icon" onClick={onClick} />
    </>
  );
};

const StyledIcon = styled(MdAddBox)`
  cursor: pointer;
`;

export default VideoContentAdd;
