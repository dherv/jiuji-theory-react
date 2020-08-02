import React, { FC } from 'react';
import AccountForm from '../components/AccountForm';
import { AccountFormProps as propsData } from '../samples/AccountForm.sample';

export default {
  component: AccountForm,
  title: 'AccountForm',
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default: FC = () => (
  <AccountForm {...propsData} {...actionsData} />
);
