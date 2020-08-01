import React from 'react';
import { action } from '@storybook/addon-actions';
import PageAccount from '../pages/PageAccount';
import { PageAccountProps as propsData } from '../samples/PageAccount.sample';

export default {
  component: PageAccount,
  title: "PageAccount",
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default = () => <PageAccount {...propsData} {...actionsData} />;
