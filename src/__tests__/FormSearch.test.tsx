import 'jest-styled-components';
import { Form, Formik } from 'formik';
import React from 'react';
import { render, screen } from '@testing-library/react';
import FormSearch from '../components/FormSearch';
import { FormSearchProps as props } from '../samples/FormSearch.sample';

test('should render Search', () => {
  render(
    <Formik initialValues={{ query: '' }} onSubmit={jest.fn()}>
      <Form>
        <FormSearch {...props} />
      </Form>
    </Formik>
  );
  expect(screen.getByPlaceholderText('search')).toBeInTheDocument();
});
