import React from 'react';
import withFormik from 'storybook-formik';
import { action } from '@storybook/addon-actions';
import Select from '../components/Select';
import { SelectProps as propsData } from '../samples/Select.sample';

export default {
  component: Select,
  title: "Select",
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

export const Default = () => <Select {...propsData} {...actionsData} />;
