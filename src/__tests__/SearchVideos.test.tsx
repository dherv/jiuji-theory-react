import 'jest-styled-components';
import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchVideos from '../components/SearchVideos';
import { SearchVideosProps as props } from '../samples/SearchVideos.sample';

test('should render Search', () => {
  render(<SearchVideos {...props} />);
  expect(screen.getByPlaceholderText('search')).toBeInTheDocument();
});

test('should render SearchVideoList', () => {
  render(<SearchVideos {...props} />);
  expect(screen.queryAllByTitle('video title')).toHaveLength(3);
});
