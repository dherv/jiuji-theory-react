import React, { FC } from 'react';
import PageAuth from '../pages/PageAuth';
import { PageAuthProps as propsData } from '../samples/PageAuth.sample';

export default {
  component: PageAuth,
  title: 'PageAuth',
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default: FC = () => <PageAuth {...propsData} {...actionsData} />;
