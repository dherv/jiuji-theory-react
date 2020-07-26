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

test("should display the menu icon", () => {
  render(<Header {...props} />);
  expect(screen.getByTitle("menu-icon")).toBeInTheDocument();
});

test("should display a HeaderNav", () => {
  render(<Header {...props} />);
  expect(screen.getByText("list")).toBeInTheDocument();
  expect(screen.getByText("videos")).toBeInTheDocument();
  expect(screen.getByText("create")).toBeInTheDocument();
  expect(screen.getByText("account")).toBeInTheDocument();
});
