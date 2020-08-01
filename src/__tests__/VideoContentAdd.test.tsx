import 'jest-styled-components';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import VideoContentAdd from '../components/VideoContentAdd';
import { VideoContentAddProps } from '../samples/VideoContentAdd.sample';

const props = {
  ...VideoContentAddProps,
  onClick: jest.fn(),
};

test("should render VideoContentAdd", () => {
  render(<VideoContentAdd {...props} />);
});

test("should render VideoContentAdd title", () => {
  render(<VideoContentAdd {...props} />);
  expect(screen.getByText("video title")).toBeInTheDocument();
});

test("should render VideoContentAdd description", () => {
  render(<VideoContentAdd {...props} />);
  expect(screen.getByText("video description")).toBeInTheDocument();
});

test("should render an add icon", () => {
  render(<VideoContentAdd {...props} />);
  expect(screen.getByTitle("video-add-icon")).toBeInTheDocument();
});

test("should call onClick props when icon is clicked", () => {
  render(<VideoContentAdd {...props} />);
  fireEvent.click(screen.getByTitle("video-add-icon"));
  expect(props.onClick).toHaveBeenCalled();
});
