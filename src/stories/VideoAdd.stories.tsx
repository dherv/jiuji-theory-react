import React, { FC } from 'react';
import { action } from '@storybook/addon-actions';
import VideoAdd from '../components/VideoAdd';
import { VideoAddProps as propsData } from '../samples/VideoAdd.sample';

export default {
  component: VideoAdd,
  title: 'VideoAdd',
  excludeStories: /.*Data$/,
};

const actionsData = {
  onClick: action('onClick'),
};

export const Default: FC = () => (
  <VideoAdd {...propsData} {...actionsData} selected={false} />
);
export const AddClicked: FC = () => (
  <VideoAdd {...propsData} {...actionsData} selected />
);
