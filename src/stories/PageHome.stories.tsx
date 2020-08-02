import React, { FC } from 'react';
import PageHome from '../pages/PageHome';
import { PageHomeProps as propsData } from '../samples/PageHome.sample';

export default {
  component: PageHome,
  title: 'PageHome',
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default: FC = () => <PageHome {...propsData} {...actionsData} />;
