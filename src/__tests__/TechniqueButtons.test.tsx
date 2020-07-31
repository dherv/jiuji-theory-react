import 'jest-styled-components';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import TechniqueButtons from '../components/TechniqueButtons';
import { TechniqueButtonsProps as props } from '../samples/TechniqueButtons.sample';

test("should render TechniqueButtons", () => {
  render(<TechniqueButtons {...props} />);
  expect(screen.getByTitle("technique-archive")).toBeInTheDocument();
  expect(screen.getByTitle("technique-edit")).toBeInTheDocument();
});
