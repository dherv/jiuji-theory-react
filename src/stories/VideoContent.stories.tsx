import React, { FC } from 'react';
import VideoContent from '../components/VideoContent';
import { VideoContentProps as propsData } from '../samples/VideoContent.sample';

export default {
  component: VideoContent,
  title: 'VideoContent',
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default: FC = () => (
  <VideoContent {...propsData} {...actionsData} />
);
