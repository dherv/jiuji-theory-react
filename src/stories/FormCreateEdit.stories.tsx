import React from 'react';
import FormCreateEdit from '../components/FormCreateEdit';
import {
FormCreateProps as createPropsData, FormEditProps as editPropsData
} from '../samples/FormCreateEdit.sample';

export default {
  component: FormCreateEdit,
  title: "FormCreateEdit",
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Edit = () => (
  <FormCreateEdit {...actionsData} {...editPropsData} />
);
export const Create = () => (
  <FormCreateEdit {...actionsData} {...createPropsData} />
);
