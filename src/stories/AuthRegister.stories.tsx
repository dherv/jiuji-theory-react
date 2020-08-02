import React, { FC } from 'react';
import AuthRegister from '../components/AuthRegister';
import { AuthRegisterProps as propsData } from '../samples/AuthRegister.sample';

export default {
  component: AuthRegister,
  title: 'AuthRegister',
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default: FC = () => (
  <AuthRegister {...propsData} {...actionsData} />
);
