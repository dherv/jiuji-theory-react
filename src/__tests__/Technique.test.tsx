import 'jest-styled-components';
import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Technique from '../components/Technique';
import { TechniqueProps } from '../samples/Technique.sample';

const props = {
  ...TechniqueProps,
  onClick: jest.fn(),
};

test('should display the top component correctly', () => {
  render(<Technique {...props} />);
  expect(screen.getByText('test')).toBeInTheDocument();
  expect(screen.getByText('X')).toBeInTheDocument();
  expect(screen.getByText('offensive')).toBeInTheDocument();
  expect(screen.getByText('kimura')).toBeInTheDocument();
  expect(screen.getByText('open guard')).toBeInTheDocument();
});

test('should hide content when selected false', async () => {
  render(<Technique {...props} selected={false} />);
  expect(screen.queryByText('video title')).toBeNull();
  expect(screen.queryByText('video description')).toBeNull();
});

test('should call onClick prop', async () => {
  render(<Technique {...props} selected={false} />);
  expect(screen.queryByText('video title')).toBeNull();
  expect(screen.queryByText('video description')).toBeNull();
  fireEvent.click(screen.getByText('test'));
  expect(props.onClick).toHaveBeenCalledTimes(1);
});

test.skip('should show the content when top component gets clicked', async () => {
  render(<Technique {...props} selected={false} />);
  expect(screen.queryByText('video title')).toBeNull();
  expect(screen.queryByText('video description')).toBeNull();
  fireEvent.click(screen.getByText('triangle'));
  await waitFor(() => {
    expect(screen.getByText('video title')).toBeInTheDocument();
    expect(screen.getByText('video description')).toBeInTheDocument();
  });
});

test('should render multiple videos', async () => {
  render(<Technique {...props} />);
  expect(screen.queryAllByTitle('video title')).toHaveLength(3);
});

test('should render multiple videos with content', async () => {
  render(<Technique {...props} />);
  expect(screen.queryAllByText('video title')).toHaveLength(3);
});

test('should render TechniqueButtons', () => {
  render(<Technique {...props} />);
  expect(screen.getByTitle('technique-archive')).toBeInTheDocument();
  expect(screen.getByTitle('technique-edit')).toBeInTheDocument();
});
