import React, { FC } from 'react';
import PageAccount from '../pages/PageAccount';
import { PageAccountProps as propsData } from '../samples/PageAccount.sample';

export default {
  component: PageAccount,
  title: 'PageAccount',
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default: FC = () => (
  <PageAccount {...propsData} {...actionsData} />
);
