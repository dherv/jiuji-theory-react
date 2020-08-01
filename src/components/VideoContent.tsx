import React, { FC } from 'react';
import styled from 'styled-components';

const VideoContent: FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <>
      <Title>{title}</Title>
      <Paragraph>{description}</Paragraph>
    </>
  );
};

const Title = styled.h5`
  font-size: 0.75rem;
  font-weight: 600;
`;

const Paragraph = styled.p`
  margin: 0.25rem 0;
  font-size: 0.75rem;
  font-weight: 300;
`;
export default VideoContent;
