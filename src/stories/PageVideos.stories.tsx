import React from 'react';
import { action } from '@storybook/addon-actions';
import PageVideos from '../pages/PageVideos';
import { PageVideosProps as propsData } from '../samples/PageVideos.sample';

export default {
  component: PageVideos,
  title: "PageVideos",
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default = () => <PageVideos {...propsData} {...actionsData} />;
