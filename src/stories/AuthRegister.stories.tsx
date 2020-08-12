import React, { FC } from 'react';
import withFormik from 'storybook-formik';
import AuthRegister from '../components/AuthRegister';
import { AuthRegisterProps as propsData } from '../samples/AuthRegister.sample';

export default {
  component: AuthRegister,
  title: 'AuthRegister',
  excludeStories: /.*Data$/,
  decorators: [withFormik],
  parameters: {
    formik: {
      initialValues: {
        name: '',
        email: '',
        password: '',
        verifyPassword: '',
      },
    },
  },
};

const actionsData = {};

export const Default: FC = () => (
  <AuthRegister {...propsData} {...actionsData} />
);
