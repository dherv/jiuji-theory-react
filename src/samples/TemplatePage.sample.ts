import React from 'react';
import FormCreateEdit from '../components/FormCreateEdit';
import { FormCreateEditProps as props } from './FormCreateEdit.sample';

export const TemplatePageProps = {
  children: React.createElement(FormCreateEdit, props),
};
