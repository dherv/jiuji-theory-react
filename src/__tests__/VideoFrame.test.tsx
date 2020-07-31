import 'jest-styled-components';
import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import VideoFrame from '../components/VideoFrame';
import { VideoFrameProps as props } from '../samples/VideoFrame.sample';

test("should render Video", async () => {
  render(<VideoFrame {...props} />);

  await waitFor(() => {
    expect(screen.getByTitle("video title")).toBeInTheDocument();
  });
});
