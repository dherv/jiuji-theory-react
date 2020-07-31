import React from 'react';
import { action } from '@storybook/addon-actions';
import VideoFrame from '../components/VideoFrame';
import { VideoFrameProps as propsData } from '../samples/VideoFrame.sample';

export default {
  component: VideoFrame,
  title: "VideoFrame",
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default = () => <VideoFrame {...propsData} {...actionsData} />;
