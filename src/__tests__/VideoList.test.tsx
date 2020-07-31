import 'jest-styled-components';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import VideoList from '../components/VideoList';
import { VideoListProps as props } from '../samples/VideoList.sample';

test("should render multiple videos", () => {
  render(<VideoList {...props} />);
  expect(screen.queryAllByTitle("video title")).toHaveLength(3);
});
