import 'jest-styled-components';
import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import AuthLogin from '../components/AuthLogin';
import { AuthLoginProps as props } from '../samples/AuthLogin.sample';

beforeEach(() => {
  render(<AuthLogin {...props} />);
});

test("should render AuthLogin with email and password", () => {
  const email = screen.getByLabelText("email") as HTMLInputElement;
  const password = screen.getByLabelText("password") as HTMLInputElement;
  expect(email).toBeInTheDocument();
  expect(password).toBeInTheDocument();
  expect(email.type).toBe("email");
  expect(password.type).toBe("password");
});
