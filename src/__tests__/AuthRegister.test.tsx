import 'jest-styled-components';
import React from 'react';
import { render, screen } from '@testing-library/react';
import AuthRegister from '../components/AuthRegister';
import { AuthRegisterProps as props } from '../samples/AuthRegister.sample';

beforeEach(() => {
  render(<AuthRegister {...props} />);
});

test('should render AuthRegister inputs', () => {
  const name = screen.getByLabelText('name') as HTMLInputElement;
  const email = screen.getByLabelText('email') as HTMLInputElement;
  const password = screen.getByLabelText('password') as HTMLInputElement;
  const verifyPassword = screen.getByLabelText(
    'verify password'
  ) as HTMLInputElement;
  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(password).toBeInTheDocument();
  expect(verifyPassword).toBeInTheDocument();
  expect(name.type).toBe('text');
  expect(email.type).toBe('email');
  expect(password.type).toBe('password');
  expect(verifyPassword.type).toBe('password');
});

test('should render a register button', () => {
  expect(screen.getByRole('button')).toHaveTextContent('register');
});
