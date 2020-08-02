import 'jest-styled-components';
import React from 'react';
import { render, screen } from '@testing-library/react';
import PageAuth from '../pages/PageAuth';
import { PageAuthProps as props } from '../samples/PageAuth.sample';

jest.mock('../components/ErrorBoundary');

test('should render the layout header', () => {
  render(<PageAuth {...props} />);
  expect(screen.getByRole('banner')).toBeInTheDocument();
});

test('should render the auth component', () => {
  render(<PageAuth {...props} />);
  expect(screen.queryAllByText('login')).toBeDefined();
  expect(screen.queryAllByText('register')).toBeDefined();
});
