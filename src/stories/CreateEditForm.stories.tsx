import React from 'react';
import CreateEditForm from '../components/CreateEditForm';
import {
CreateFormProps as createPropsData, EditFormProps as editPropsData
} from '../samples/CreateEditForm.sample';

export default {
  component: CreateEditForm,
  title: "CreateEditForm",
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Edit = () => (
  <CreateEditForm {...actionsData} {...editPropsData} />
);
export const Create = () => (
  <CreateEditForm {...actionsData} {...createPropsData} />
);
