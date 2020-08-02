import React, { FC } from 'react';
import SearchVideos from '../components/SearchVideos';
import { SearchVideosProps as propsData } from '../samples/SearchVideos.sample';

export default {
  component: SearchVideos,
  title: 'SearchVideos',
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default: FC = () => (
  <SearchVideos {...propsData} {...actionsData} />
);
