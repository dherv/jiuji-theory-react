import 'jest-styled-components';
import { Form, Formik } from 'formik';
import React from 'react';
import { render, screen } from '@testing-library/react';
import FormSelect from '../components/FormSelect';
import { FormSelectProps as props } from '../samples/FormSelect.sample';

test('should render FormSelect options', () => {
  render(
    <Formik initialValues={{ name: '' }} onSubmit={jest.fn()}>
      {() => (
        <Form>
          <FormSelect {...props} />
        </Form>
      )}
    </Formik>
  );
  expect(screen.getByText('open guard')).toBeInTheDocument();
  expect(screen.getByText('half guard')).toBeInTheDocument();
});
