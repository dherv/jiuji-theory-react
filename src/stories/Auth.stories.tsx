import React, { FC } from 'react';
import Auth from '../components/Auth';
import { AuthProps as propsData } from '../samples/Auth.sample';

export default {
  component: Auth,
  title: 'Auth',
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default: FC = () => <Auth {...propsData} {...actionsData} />;
