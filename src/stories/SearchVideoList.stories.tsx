import React from 'react';
import { action } from '@storybook/addon-actions';
import SearchVideoList from '../components/SearchVideoList';
import { SearchVideoListProps as propsData } from '../samples/SearchVideoList.sample';

export default {
  component: SearchVideoList,
  title: "SearchVideoList",
  excludeStories: /.*Data$/,
};

const actionsData = {
  onClick: action("onClick"),
};

export const Default = () => (
  <SearchVideoList {...propsData} {...actionsData} />
);
