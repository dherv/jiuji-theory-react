import 'jest-styled-components';
import React from 'react';
import { render, screen } from '@testing-library/react';
import TechniqueSteps from '../components/TechniqueSteps';
import { TechniqueStepsProps as props } from '../samples/TechniqueSteps.sample';

test('should render TechniqueSteps', () => {
  render(<TechniqueSteps {...props} />);
  expect(screen.getByText('step 1')).toBeInTheDocument();
  expect(screen.getByText('step 2')).toBeInTheDocument();
  expect(screen.getByText('step 3')).toBeInTheDocument();
});
