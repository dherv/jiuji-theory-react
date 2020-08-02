import React, { FC } from 'react';
import Video from '../components/Video';
import { VideoProps as propsData } from '../samples/Video.sample';

export default {
  component: Video,
  title: 'Video',
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default: FC = () => <Video {...propsData} {...actionsData} />;
