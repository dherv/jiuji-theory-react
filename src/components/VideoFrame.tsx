import React, { FC } from 'react';

const VideoFrame: FC<{ id: string; title: string }> = ({ id, title }) => {
  return (
    <iframe
      title={title}
      width="150"
      height="67"
      src={`https://www.youtube.com/embed/${id}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default VideoFrame;
