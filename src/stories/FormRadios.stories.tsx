import React from 'react';
import withFormik from 'storybook-formik';
import { action } from '@storybook/addon-actions';
import FormRadios from '../components/FormRadios';
import { FormRadiosProps as propsData } from '../samples/FormRadios.sample';

export default {
  component: FormRadios,
  title: "FormRadios",
  excludeStories: /.*Data$/,
  decorators: [withFormik],
  parameters: {
    formik: {
      initialValues: {
        radio: "checked",
      },
    },
  },
};

const actionsData = {};

export const Checked = () => <FormRadios {...propsData} selected="checked" />;
export const UnChecked = () => (
  <FormRadios {...propsData} selected="unchecked" />
);
