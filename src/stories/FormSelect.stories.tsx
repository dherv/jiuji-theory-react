import React from 'react';
import withFormik from 'storybook-formik';
import { action } from '@storybook/addon-actions';
import FormSelect from '../components/FormSelect';
import { FormSelectProps as propsData } from '../samples/FormSelect.sample';

export default {
  component: FormSelect,
  title: "FormSelect",
  excludeStories: /.*Data$/,
  decorators: [withFormik],
  parameters: {
    formik: {
      initialValues: {
        query: "",
      },
    },
  },
};

const actionsData = {};

export const Default = () => <FormSelect {...propsData} {...actionsData} />;
