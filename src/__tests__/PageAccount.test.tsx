import 'jest-styled-components';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import PageAccount from '../pages/PageAccount';
import { PageAccountProps as props } from '../samples/PageAccount.sample';

test("should render PageAccount", () => {
  render(<PageAccount {...props} />);
});

test("should render the layout header", () => {
  render(<PageAccount {...props} />);
  expect(screen.getByRole("banner")).toBeInTheDocument();
});
