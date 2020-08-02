import React, { FC } from 'react';
import withFormik from 'storybook-formik';
import FormRadios from '../components/FormRadios';
import { FormRadiosProps as propsData } from '../samples/FormRadios.sample';

export default {
  component: FormRadios,
  title: 'FormRadios',
  excludeStories: /.*Data$/,
  decorators: [withFormik],
  parameters: {
    formik: {
      initialValues: {
        radio: 'checked',
      },
    },
  },
};

export const Checked: FC = () => (
  <FormRadios {...propsData} selected="checked" />
);
export const UnChecked: FC = () => (
  <FormRadios {...propsData} selected="unchecked" />
);
