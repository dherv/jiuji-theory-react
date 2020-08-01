import 'jest-styled-components';
import { Form, Formik } from 'formik';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Search from '../components/Search';
import { SearchProps as props } from '../samples/Search.sample';

test("should render Search", () => {
  render(
    <Formik initialValues={{ query: "" }} onSubmit={jest.fn()}>
      <Form>
        <Search {...props} />
      </Form>
    </Formik>
  );
  expect(screen.getByPlaceholderText("search")).toBeInTheDocument();
});
