import 'jest-styled-components';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import AuthLogin from '../components/AuthLogin';
import { AuthLoginProps as props } from '../samples/AuthLogin.sample';

const server = setupServer(
  rest.post('http://localhost:3000/v1/auth/login', (req, res, ctx) => {
    return res(ctx.json({ token: 'mocked_user_token' }));
  })
);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
beforeEach(() => {
  render(<AuthLogin {...props} />);
});

test('should render AuthLogin with email and password', () => {
  const email = screen.getByLabelText('email') as HTMLInputElement;
  const password = screen.getByLabelText('password') as HTMLInputElement;
  expect(email).toBeInTheDocument();
  expect(password).toBeInTheDocument();
  expect(email.type).toBe('email');
  expect(password.type).toBe('password');
});

test('should display the fields correctly with no validation', () => {
  expect(screen.queryByText('required')).toBeNull();
  expect(screen.getByLabelText('email')).toHaveStyleRule(
    'border',
    '1px solid rgba(18,70,246,0.1)'
  );
  expect(screen.getByLabelText('password')).toHaveStyleRule(
    'border',
    '1px solid rgba(18,70,246,0.1)'
  );
});
test('should validate the fields correctly', async () => {
  fireEvent.click(screen.getByText('login'));
  await waitFor(() => {});

  await waitFor(() => {
    expect(screen.queryAllByText('required')).toHaveLength(1);
    expect(screen.queryAllByText('password is required')).toHaveLength(1);
    expect(screen.getByLabelText('email')).toHaveStyleRule(
      'border',
      '1px solid #ff867c'
    );
    expect(screen.getByLabelText('password')).toHaveStyleRule(
      'border',
      '1px solid #ff867c'
    );
  });
});
test('should validate the fields correctly after correcting them', async () => {
  fireEvent.click(screen.getByText('login'));
  // await waitFor(() => {});
  fireEvent.change(screen.getByLabelText('email'), {
    target: { value: 'username@email.com' },
  });
  fireEvent.change(screen.getByLabelText('password'), {
    target: { value: 'password' },
  });
  fireEvent.click(screen.getByText('login'));
  await waitFor(() => {});

  await waitFor(() => {
    expect(screen.getByLabelText('email')).toHaveStyleRule(
      'border',
      '1px solid #98ee99'
    );
    expect(screen.getByLabelText('password')).toHaveStyleRule(
      'border',
      '1px solid #98ee99'
    );
  });
});

test('should sbmit the form correctly', async () => {
  fireEvent.click(screen.getByText('login'));
  // await waitFor(() => {});
  fireEvent.change(screen.getByLabelText('email'), {
    target: { value: 'username@email.com' },
  });
  fireEvent.change(screen.getByLabelText('password'), {
    target: { value: 'password' },
  });
  fireEvent.click(screen.getByText('login'));

  await waitFor(() => {});
  await waitFor(() => {
    expect(screen.queryByLabelText('email')).toHaveValue('');
    expect(screen.queryByLabelText('password')).toHaveValue('');
    expect(window.localStorage.getItem('token')).toEqual('mocked_user_token');
  });
});
