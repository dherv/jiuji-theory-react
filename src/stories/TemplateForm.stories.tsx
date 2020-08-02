import React, { FC } from 'react';
import { TemplateFormProps as propsData } from '../samples/TemplateForm.sample';
import TemplateForm from '../templates/TemplateForm';

export default {
  component: TemplateForm,
  title: 'TemplateForm',
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default: FC = () => (
  <TemplateForm {...propsData} {...actionsData} />
);
