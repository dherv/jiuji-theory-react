import React, { FC } from 'react';
import AuthLogin from '../components/AuthLogin';
import { AuthLoginProps as propsData } from '../samples/AuthLogin.sample';

export default {
  component: AuthLogin,
  title: 'AuthLogin',
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default: FC = () => <AuthLogin {...propsData} {...actionsData} />;
