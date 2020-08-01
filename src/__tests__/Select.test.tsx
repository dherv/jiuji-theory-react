import 'jest-styled-components';
import { Formik } from 'formik';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Select from '../components/Select';
import { SelectProps as props } from '../samples/Select.sample';

test("should render Select", () => {
  render(
    <Formik
      initialValues={{
        technique: "",
      }}
      onSubmit={() => {}}
    >
      <Select {...props} />
    </Formik>
  );

  expect(screen.getByText("open guard")).toBeInTheDocument();
  expect(screen.getByText("half guard")).toBeInTheDocument();
});
