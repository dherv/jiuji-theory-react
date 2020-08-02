import 'jest-styled-components';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import PageCreateEdit from '../pages/PageCreateEdit';
import { PageCreateEditProps as props } from '../samples/PageCreateEdit.sample';

jest.mock("../components/ErrorBoundary");

test("should render PageCreateEdit", () => {
  render(<PageCreateEdit {...props} />);
});

test("should render the layout header", () => {
  render(<PageCreateEdit {...props} />);
  expect(screen.getByRole("banner")).toBeInTheDocument();
});
