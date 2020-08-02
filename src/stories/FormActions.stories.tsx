import React, { FC } from 'react';
import FormActions from '../components/FormActions';
import { FormActionsProps as propsData } from '../samples/FormActions.sample';

export default {
  component: FormActions,
  title: 'FormActions',
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default: FC = () => (
  <FormActions {...propsData} {...actionsData} />
);
