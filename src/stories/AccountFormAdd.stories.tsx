import React, { FC } from 'react';
import AccountFormAdd from '../components/AccountFormAdd';
import { AccountFormAddProps as propsData } from '../samples/AccountFormAdd.sample';

export default {
  component: AccountFormAdd,
  title: 'AccountFormAdd',
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default: FC = () => (
  <AccountFormAdd {...actionsData} />
);
