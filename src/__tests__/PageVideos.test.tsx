import 'jest-styled-components';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import PageVideos from '../pages/PageVideos';
import { PageVideosProps as props } from '../samples/PageVideos.sample';

test("should render PageVideos", () => {
  render(<PageVideos {...props} />);
});
