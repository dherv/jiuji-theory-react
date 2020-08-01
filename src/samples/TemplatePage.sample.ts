import React from 'react';
import FormCreateEdit from '../components/CreateEditForm';
import { CreateEditFormProps as props } from './CreateEditForm.sample';

export const TemplatePageProps = {
  children: React.createElement(FormCreateEdit, props),
};
