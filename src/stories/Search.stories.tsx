import React from 'react';
import withFormik from 'storybook-formik';
import { action } from '@storybook/addon-actions';
import Search from '../components/Search';
import { SearchProps as propsData } from '../samples/Search.sample';

export default {
  component: Search,
  title: "Search",
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

export const Default = () => <Search {...propsData} {...actionsData} />;
