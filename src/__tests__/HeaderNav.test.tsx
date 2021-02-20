import 'jest-styled-components';
import React from 'react';
import { render, screen } from '@testing-library/react';
import HeaderNav from '../components/HeaderNav';
import { HeaderNavProps as props } from '../samples/HeaderNav.sample';
import { MemoryRouter } from 'react-router-dom';

test('should display a HeaderNav', () => {
  render(<MemoryRouter><HeaderNav {...props} /></MemoryRouter>);
  expect(screen.getByText('list')).toBeInTheDocument();
  expect(screen.getByText('videos')).toBeInTheDocument();
  expect(screen.getByText('create')).toBeInTheDocument();
  expect(screen.getByText('account')).toBeInTheDocument();
});
