import 'jest-styled-components';
import React from 'react';
import { render, screen } from '@testing-library/react';
import FormLabel from '../components/FormLabel';

test('should render FormLabel', () => {
  render(
    <>
      <FormLabel htmlFor="label">label</FormLabel>
      <input id="label" />
    </>
  );
  expect(screen.getByLabelText('label')).toBeInTheDocument();
});
