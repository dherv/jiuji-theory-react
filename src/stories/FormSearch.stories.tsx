import React, { FC } from 'react';
import withFormik from 'storybook-formik';
import FormSearch from '../components/FormSearch';
import { FormSearchProps as propsData } from '../samples/FormSearch.sample';

export default {
  component: FormSearch,
  title: 'FormSearch',
  excludeStories: /.*Data$/,
  decorators: [withFormik],
  parameters: {
    formik: {
      initialValues: {
        query: '',
      },
    },
  },
};

const actionsData = {};

export const Default: FC = () => <FormSearch {...propsData} {...actionsData} />;
