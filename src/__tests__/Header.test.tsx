import 'jest-styled-components';
import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Header from '../components/Header';
import { HeaderProps as props } from '../samples/Header.sample';

beforeEach(() => {
  render(<Header {...props} />);
});

test("should render the header title", () => {
  expect(screen.getByText("jiuji theory")).toBeInTheDocument();
});

test("should display the theme background", () => {
  expect(screen.getByRole("banner")).toHaveStyleRule(
    "background-color",
    "rgba(18,70,246,0.65)"
  );
});

test("should display the menu icon", () => {
  expect(screen.getByTitle("menu-icon")).toBeInTheDocument();
});

test("should toggle the menu nav when click menu icon", async () => {
  fireEvent.click(screen.getByTitle("menu-icon"));
  await waitFor(() => {
    expect(screen.getByText("list")).toBeInTheDocument();
    expect(screen.getByText("videos")).toBeInTheDocument();
    expect(screen.getByText("create")).toBeInTheDocument();
    expect(screen.getByText("account")).toBeInTheDocument();
  });
  fireEvent.click(screen.getByTitle("menu-icon"));
  await waitFor(() => {
    expect(screen.queryByText("list")).toBeNull();
    expect(screen.queryByText("videos")).toBeNull();
    expect(screen.queryByText("create")).toBeNull();
    expect(screen.queryByText("account")).toBeNull();
  });
});
