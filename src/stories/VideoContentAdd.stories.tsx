import React, { FC } from 'react';
import { action } from '@storybook/addon-actions';
import VideoContentAdd from '../components/VideoContentAdd';
import { VideoContentAddProps as propsData } from '../samples/VideoContentAdd.sample';

export default {
  component: VideoContentAdd,
  title: 'VideoContentAdd',
  excludeStories: /.*Data$/,
};

const actionsData = {
  onClick: action('onClick'),
};

export const Default: FC = () => (
  <VideoContentAdd {...propsData} {...actionsData} />
);
