import 'jest-styled-components';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import HeaderTitle from '../components/HeaderTitle';
import { HeaderTitleProps as props } from '../samples/HeaderTitle.sample';

test("should display the title", () => {
  render(<HeaderTitle {...props} />);
  expect(screen.getByText("jiuji theory")).toBeInTheDocument();
});
