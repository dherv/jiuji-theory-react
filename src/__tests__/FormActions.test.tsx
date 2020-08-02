import 'jest-styled-components';
import React from 'react';
import { render, screen } from '@testing-library/react';
import FormActions from '../components/FormActions';
import { FormActionsProps as props } from '../samples/FormActions.sample';

test('should render FormActions', () => {
  render(<FormActions {...props} />);
  expect(screen.getByText('ok')).toBeInTheDocument();
  expect(screen.getByText('cancel')).toBeInTheDocument();
});
