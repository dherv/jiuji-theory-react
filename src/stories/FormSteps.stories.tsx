import { Form, Formik } from 'formik';
import React, { FC } from 'react';
import withFormik from 'storybook-formik';
import { action } from '@storybook/addon-actions';
import FormSteps from '../components/FormSteps';

export default {
  component: FormSteps,
  title: 'FormSteps',
  excludeStories: /.*Data$/,
  decorators: [withFormik],
  parameters: {
    formik: {
      initialValues: {
        steps: [{ name: 'step 1' }],
      },
    },
  },
};

const actionsData = {
  onSubmit: action('onSubmit'),
};

export const Default: FC = () => (
  <Formik initialValues={{ steps: [{ name: 'step 1' }] }} {...actionsData}>
    {({ values }) => (
      <Form>
        <FormSteps values={values} />
      </Form>
    )}
  </Formik>
);
