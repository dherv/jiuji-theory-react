import React from 'react';
import { action } from '@storybook/addon-actions';
import PageAuth from '../pages/PageAuth';
import { PageAuthProps as propsData } from '../samples/PageAuth.sample';

export default {
  component: PageAuth,
  title: "PageAuth",
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default = () => <PageAuth {...propsData} {...actionsData} />;
