import React, { FC } from 'react';
import Header from '../components/Header';
import { HeaderProps as propsData } from '../samples/Header.sample';

export default {
  component: Header,
  title: 'Header',
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default: FC = () => <Header {...propsData} {...actionsData} />;
