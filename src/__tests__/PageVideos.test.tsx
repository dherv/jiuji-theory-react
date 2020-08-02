import 'jest-styled-components';
import React from 'react';
import { render, screen } from '@testing-library/react';
import PageVideos from '../pages/PageVideos';
import { PageVideosProps as props } from '../samples/PageVideos.sample';

jest.mock('../components/ErrorBoundary');

test('should render the layout header', () => {
  render(<PageVideos {...props} />);
  expect(screen.getByRole('banner')).toBeInTheDocument();
});
