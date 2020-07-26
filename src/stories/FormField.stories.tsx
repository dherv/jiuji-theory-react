import React from 'react';
import withFormik from 'storybook-formik';
import { action } from '@storybook/addon-actions';
import FormField from '../components/FormField';

export default {
  component: FormField,
  title: "FormField",
  excludeStories: /.*Data$/,
  decorators: [withFormik],
  parameters: {
    formik: {
      initialValues: {
        name: "",
      },
    },
  },
};

const propsData = {
  id: "name",
  name: "name",
  placeholder: "name",
};

export const Default = () => <FormField {...propsData} />;
