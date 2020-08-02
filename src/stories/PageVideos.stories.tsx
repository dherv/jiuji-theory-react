import React, { FC } from 'react';
import PageVideos from '../pages/PageVideos';
import { PageVideosProps as propsData } from '../samples/PageVideos.sample';

export default {
  component: PageVideos,
  title: 'PageVideos',
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default: FC = () => <PageVideos {...propsData} {...actionsData} />;
