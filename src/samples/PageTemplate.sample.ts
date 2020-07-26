import React from 'react';
import FormCreateEdit from '../components/FormCreateEdit';
import { FormCreateEditProps as props } from '../samples/FormCreateEdit.sample';

export const PageTemplateProps = {
  children: React.createElement(FormCreateEdit, props),
};
