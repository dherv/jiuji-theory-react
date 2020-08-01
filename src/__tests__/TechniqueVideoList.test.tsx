import 'jest-styled-components';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import TechniqueVideoList from '../components/TechniqueVideoList';
import { TechniqueVideoListProps as props } from '../samples/TechniqueVideoList.sample';

test("should render multiple videos", () => {
  render(<TechniqueVideoList {...props} />);
  expect(screen.queryAllByTitle("video title")).toHaveLength(3);
});
