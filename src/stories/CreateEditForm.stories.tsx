import React, { FC } from 'react';
import CreateEditForm from '../components/CreateEditForm';
import {
  CreateFormProps as createPropsData,
  EditFormProps as editPropsData,
} from '../samples/CreateEditForm.sample';

export default {
  component: CreateEditForm,
  title: 'CreateEditForm',
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Edit: FC = () => (
  <CreateEditForm {...actionsData} {...editPropsData} />
);
export const Create: FC = () => (
  <CreateEditForm {...actionsData} {...createPropsData} />
);
