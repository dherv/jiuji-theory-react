import React, { FC } from 'react';
import HeaderTitle from '../components/HeaderTitle';
import { HeaderTitleProps as propsData } from '../samples/HeaderTitle.sample';

export default {
  component: HeaderTitle,
  title: 'HeaderTitle',
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default: FC = () => (
  <HeaderTitle {...propsData} {...actionsData} />
);
