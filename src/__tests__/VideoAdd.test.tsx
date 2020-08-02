import 'jest-styled-components';
import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoAdd from '../components/VideoAdd';
import { VideoAddProps } from '../samples/VideoAdd.sample';

const props = {
  ...VideoAddProps,
  onClick: jest.fn(),
};
test('should render a Video with add icon', () => {
  render(<VideoAdd {...props} selected={false} />);
  expect(screen.getByTitle('video title')).toBeInTheDocument();
  expect(screen.getByText('video title')).toBeInTheDocument();
  expect(screen.getByTitle('video-add-icon')).toBeInTheDocument();
});
test('should render a form with a select if selected', () => {
  render(<VideoAdd {...props} selected />);
  expect(screen.getByRole('combobox')).toBeInTheDocument();
  expect(screen.getByText('ok')).toBeInTheDocument();
  expect(screen.getByText('cancel')).toBeInTheDocument();
});
