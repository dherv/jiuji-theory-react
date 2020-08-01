import 'jest-styled-components';
import React from 'react';
import { fireEvent, getByLabelText, render, screen } from '@testing-library/react';
import FormLabel from '../components/FormLabel';
import { FormLabelProps as props } from '../samples/FormLabel.sample';

test("should render FormLabel", () => {
  render(
    <>
      <FormLabel htmlFor="label">label</FormLabel>
      <input id="label"></input>
    </>
  );
  expect(screen.getByLabelText("label")).toBeInTheDocument();
});
