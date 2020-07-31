import 'jest-styled-components';
import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Video from '../components/Video';
import { VideoProps as props } from '../samples/Video.sample';

test("should render Video", () => {
  render(<Video {...props} />);
});

test("should render Video", async () => {
  render(<Video {...props} />);

  expect(screen.getByTitle("video title")).toBeInTheDocument();
});

test("should render Video title", () => {
  render(<Video {...props} />);
  expect(screen.getByText("video title")).toBeInTheDocument();
});

test("should render Video description", () => {
  render(<Video {...props} />);
  expect(screen.getByText("video description")).toBeInTheDocument();
});
