import React, { FC } from 'react';
import withFormik from 'storybook-formik';
import FormSelect from '../components/FormSelect';
import { FormSelectProps as propsData } from '../samples/FormSelect.sample';

export default {
  component: FormSelect,
  title: 'FormSelect',
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

export const Default: FC = () => <FormSelect {...propsData} {...actionsData} />;
