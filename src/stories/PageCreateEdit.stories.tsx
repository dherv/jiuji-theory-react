import React from 'react';
import { action } from '@storybook/addon-actions';
import PageCreateEdit from '../pages/PageCreateEdit';
import { PageCreateEditProps as propsData } from '../samples/PageCreateEdit.sample';

export default {
  component: PageCreateEdit,
  title: "PageCreateEdit",
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default = () => <PageCreateEdit {...propsData} {...actionsData} />;
