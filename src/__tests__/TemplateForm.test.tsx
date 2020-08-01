import 'jest-styled-components';
import { Form, Formik } from 'formik';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { TemplateFormProps as props } from '../samples/TemplateForm.sample';
import TemplateForm from '../templates/TemplateForm';

test("should render TemplateForm children", () => {
  render(
    <Formik initialValues={{ name: "" }} onSubmit={jest.fn()}>
      {({ values }) => <TemplateForm {...props} />}
    </Formik>
  );
  expect(screen.getByRole("textbox")).toBeInTheDocument();
});
