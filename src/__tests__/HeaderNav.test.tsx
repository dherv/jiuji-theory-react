import 'jest-styled-components';
import React from 'react';
import { render, screen } from '@testing-library/react';
import HeaderNav from '../components/HeaderNav';
import { HeaderNavProps as props } from '../samples/HeaderNav.sample';

test('should display a HeaderNav', () => {
  render(<HeaderNav {...props} />);
  expect(screen.getByText('list')).toBeInTheDocument();
  expect(screen.getByText('videos')).toBeInTheDocument();
  expect(screen.getByText('create')).toBeInTheDocument();
  expect(screen.getByText('account')).toBeInTheDocument();
});
