import React from 'react';
import { action } from '@storybook/addon-actions';
import PageHome from '../pages/PageHome';
import { PageHomeProps as propsData } from '../samples/PageHome.sample';

export default {
  component: PageHome,
  title: "PageHome",
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default = () => <PageHome {...propsData} {...actionsData} />;
