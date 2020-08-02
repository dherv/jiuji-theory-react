import React, { FC } from 'react';
import VideoFrame from '../components/VideoFrame';
import { VideoFrameProps as propsData } from '../samples/VideoFrame.sample';

export default {
  component: VideoFrame,
  title: 'VideoFrame',
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default: FC = () => <VideoFrame {...propsData} {...actionsData} />;
