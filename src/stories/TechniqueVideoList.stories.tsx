import React, { FC } from 'react';
import TechniqueVideoList from '../components/TechniqueVideoList';
import { TechniqueVideoListProps as propsData } from '../samples/TechniqueVideoList.sample';

export default {
  component: TechniqueVideoList,
  title: 'TechniqueVideoList',
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default: FC = () => (
  <TechniqueVideoList {...propsData} {...actionsData} />
);
