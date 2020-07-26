import 'jest-styled-components';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Header from '../components/Header';
import { HeaderProps as props } from '../samples/Header.sample';

test("should render the header title", () => {
  render(<Header {...props} />);
  expect(screen.getByText("jiuji theory")).toBeInTheDocument();
});

test("should display the theme background", () => {
  render(<Header {...props} />);
  expect(screen.getByRole("banner")).toHaveStyleRule(
    "background-color",
    "rgba(18,70,246,0.65)"
  );
});
