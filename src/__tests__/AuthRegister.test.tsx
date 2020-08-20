import 'jest-styled-components';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import AuthRegister from '../components/AuthRegister';
import { AuthRegisterProps as props } from '../samples/AuthRegister.sample';

const server = setupServer(
  rest.post('http://localhost:3000/v1/auth/register', (req, res, ctx) => {
    return res(ctx.json({ token: 'mocked_user_token' }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

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

test('should display the fields correctly with no validation', () => {
  expect(screen.queryByText('required')).toBeNull();
  expect(screen.getByLabelText('name')).toHaveStyleRule(
    'border',
    '1px solid rgba(18,70,246,0.1)'
  );
});
test('should validate the fields correctly', async () => {
  fireEvent.click(screen.getByText('register'));
  await waitFor(() => {});
  await waitFor(() => {
    expect(screen.queryAllByText('required')).toHaveLength(2);
    expect(screen.queryAllByText('password is required')).toHaveLength(1);
    expect(
      screen.queryAllByText('password verification is required')
    ).toHaveLength(1);
    expect(screen.getByLabelText('name')).toHaveStyleRule(
      'border',
      '1px solid #ff867c'
    );
    expect(screen.getByLabelText('email')).toHaveStyleRule(
      'border',
      '1px solid #ff867c'
    );
    expect(screen.getByLabelText('password')).toHaveStyleRule(
      'border',
      '1px solid #ff867c'
    );
    expect(screen.getByLabelText('verify password')).toHaveStyleRule(
      'border',
      '1px solid #ff867c'
    );
  });
});
test('should validate the fields correctly after correcting them', async () => {
  fireEvent.click(screen.getByText('register'));
  await waitFor(() => {});
  fireEvent.change(screen.getByLabelText('name'), {
    target: { value: 'username' },
  });
  fireEvent.change(screen.getByLabelText('email'), {
    target: { value: 'username@email.com' },
  });
  fireEvent.change(screen.getByLabelText('password'), {
    target: { value: 'password' },
  });
  fireEvent.change(screen.getByLabelText('verify password'), {
    target: { value: 'password' },
  });
  fireEvent.click(screen.getByText('register'));
  await waitFor(() => {});
  await waitFor(() => {
    expect(screen.getByLabelText('name')).toHaveStyleRule(
      'border',
      '1px solid #98ee99'
    );
    expect(screen.getByLabelText('email')).toHaveStyleRule(
      'border',
      '1px solid #98ee99'
    );
    expect(screen.getByLabelText('password')).toHaveStyleRule(
      'border',
      '1px solid #98ee99'
    );
    expect(screen.getByLabelText('verify password')).toHaveStyleRule(
      'border',
      '1px solid #98ee99'
    );
  });
});

test('should submit the form correctly', async () => {
  // no validation errors
  fireEvent.change(screen.getByLabelText('name'), {
    target: { value: 'username' },
  });
  fireEvent.change(screen.getByLabelText('email'), {
    target: { value: 'username@email.com' },
  });
  fireEvent.change(screen.getByLabelText('password'), {
    target: { value: 'password' },
  });
  fireEvent.change(screen.getByLabelText('verify password'), {
    target: { value: 'password' },
  });
  await waitFor(() => {
    expect(screen.queryByLabelText('name')).toHaveValue('username');
  });
  fireEvent.click(screen.getByText('register'));

  await waitFor(() => {});
  await waitFor(() => {
    expect(screen.queryByLabelText('name')).toHaveValue('');
    expect(screen.queryByLabelText('email')).toHaveValue('');
    expect(screen.queryByLabelText('password')).toHaveValue('');
    expect(screen.queryByLabelText('verify password')).toHaveValue('');
    expect(window.localStorage.getItem('token')).toEqual('mocked_user_token');
  });
});
