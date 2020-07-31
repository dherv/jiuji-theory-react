import 'jest-styled-components';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import PageHome from '../pages/PageHome';
import { PageHomeProps as props } from '../samples/PageHome.sample';

test("should render PageHome", () => {
  render(<PageHome {...props} />);
});

test("should render the layout header", () => {
  render(<PageHome {...props} />);
  expect(screen.getByRole("banner")).toBeInTheDocument();
});

test("should render techniques", () => {
  render(<PageHome {...props} />);
  expect(screen.queryAllByText("triangle")).toHaveLength(6);
});
