import 'jest-styled-components';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import VideoAdd from '../components/VideoAdd';
import { VideoAddProps as props } from '../samples/VideoAdd.sample';

test("should render a Video with add icon", () => {
  render(<VideoAdd {...props} />);
  expect(screen.getByTitle("video title")).toBeInTheDocument();
  expect(screen.getByText("video title")).toBeInTheDocument();
  expect(screen.getByTitle("video-add-icon")).toBeInTheDocument();
});
