import React from 'react';
import { action } from '@storybook/addon-actions';
import TechniqueVideoList from '../components/TechniqueVideoList';
import { TechniqueVideoListProps as propsData } from '../samples/TechniqueVideoList.sample';

export default {
  component: TechniqueVideoList,
  title: "TechniqueVideoList",
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default = () => (
  <TechniqueVideoList {...propsData} {...actionsData} />
);
