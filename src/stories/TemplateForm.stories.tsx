import React from 'react';
import { action } from '@storybook/addon-actions';
import { TemplateFormProps as propsData } from '../samples/TemplateForm.sample';
import TemplateForm from '../templates/TemplateForm';

export default {
  component: TemplateForm,
  title: "TemplateForm",
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default = () => <TemplateForm {...propsData} {...actionsData} />;
