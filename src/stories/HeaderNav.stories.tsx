import React, { FC } from 'react';
import HeaderNav from '../components/HeaderNav';
import { HeaderNavProps as propsData } from '../samples/HeaderNav.sample';

export default {
  component: HeaderNav,
  title: 'HeaderNav',
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default: FC = () => <HeaderNav {...propsData} {...actionsData} />;
