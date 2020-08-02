import 'jest-styled-components';
import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoContent from '../components/VideoContent';
import { VideoContentProps as props } from '../samples/VideoContent.sample';

test('should render VideoContent title', () => {
  render(<VideoContent {...props} />);
  expect(screen.getByText('video title')).toBeInTheDocument();
});

test('should render VideoContent description', () => {
  render(<VideoContent {...props} />);
  expect(screen.getByText('video description')).toBeInTheDocument();
});
