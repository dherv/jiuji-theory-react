import 'jest-styled-components';
import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Auth from '../components/Auth';
import { AuthProps as props } from '../samples/Auth.sample';

beforeEach(() => {
  render(<Auth {...props} />);
});

test('should render a Auth with a title login', () => {
  expect(screen.getByRole('heading')).toHaveTextContent('login');
  expect(screen.queryAllByRole('button')).toHaveLength(2);
  expect(screen.queryAllByRole('button')[0]).toHaveTextContent('login');
  expect(screen.queryAllByRole('button')[1]).toHaveTextContent('register');
});

test('should render AuthLogin with a login form', () => {
  const email = screen.getByLabelText('email') as HTMLInputElement;
  const password = screen.getByLabelText('password') as HTMLInputElement;
  expect(email).toBeInTheDocument();
  expect(password).toBeInTheDocument();
  expect(email.type).toBe('email');
  expect(password.type).toBe('password');
});

test('should switch AuthLogin to AuthRegister when clicking register button', async () => {
  fireEvent.click(screen.getByText('register'));
  await waitFor(() => {
    expect(screen.getByRole('heading')).toHaveTextContent('register');
    expect(screen.queryAllByRole('button')).toHaveLength(2);
    expect(screen.queryAllByRole('button')[0]).toHaveTextContent('register');
    expect(screen.queryAllByRole('button')[1]).toHaveTextContent('login');
  });
});
