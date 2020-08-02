import 'jest-styled-components';
import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchVideoList from '../components/SearchVideoList';
import { SearchVideoListProps } from '../samples/SearchVideoList.sample';

const props = {
  ...SearchVideoListProps,
  selected: false,
  onClick: jest.fn(),
};
test('should render SearchVideoList', () => {
  render(<SearchVideoList {...props} />);
  expect(screen.queryAllByTitle('video title')).toHaveLength(3);
});
