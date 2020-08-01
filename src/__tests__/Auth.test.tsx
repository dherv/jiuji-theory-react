import 'jest-styled-components';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Auth from '../components/Auth';
import { AuthProps as props } from '../samples/Auth.sample';

test("should render Auth", () => {
  render(<Auth {...props} />);
});

test("should render a Auth with a title login", () => {
  render(<Auth {...props} />);
  expect(screen.getByRole("heading")).toHaveTextContent("login");
  expect(screen.queryAllByRole("button")).toHaveLength(2);
  expect(screen.queryAllByRole("button")[0]).toHaveTextContent("login");
  expect(screen.queryAllByRole("button")[1]).toHaveTextContent("register");
});
test("should render AuthLogin with a login form", () => {
  render(<Auth {...props} />);
  const email = screen.getByLabelText("email") as HTMLInputElement;
  const password = screen.getByLabelText("password") as HTMLInputElement;
  expect(email).toBeInTheDocument();
  expect(password).toBeInTheDocument();
  expect(email.type).toBe("email");
  expect(password.type).toBe("password");
});
