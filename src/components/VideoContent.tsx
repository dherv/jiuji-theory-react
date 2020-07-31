import React, { FC } from 'react';
import styled from 'styled-components';

const VideoContent: FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <div>
      <Title>{title}</Title>
      <Paragraph>{description}</Paragraph>
    </div>
  );
};

const Title = styled.h5`
  font-weight: 600;
  font-size: 0.75rem;
`;

const Paragraph = styled.p`
  font-size: 0.75rem;
`;

export default VideoContent;
