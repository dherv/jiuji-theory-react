import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../components/Button';
import { themeBlueLight } from '../styled/themes';

const props = {
  onClick: jest.fn(),
};

test("should display a button with the text", () => {
  render(<Button>test</Button>);
  expect(screen.getByText("test")).toBeInTheDocument();
});

test("should render with the default them", () => {
  const { asFragment } = render(<Button>test</Button>);
  expect(asFragment()).toMatchSnapshot();
});

test("should render the theme light", () => {
  const { asFragment } = render(<Button theme={themeBlueLight}>test</Button>);
  expect(asFragment()).toMatchSnapshot();
});

test("should render the theme light hover on mouseOver", () => {
  const { asFragment } = render(<Button theme={themeBlueLight}>test</Button>);
  fireEvent.mouseOver(screen.getByText("test"));
  expect(asFragment()).toMatchSnapshot();
});

test("should call onClick", () => {
  render(<Button {...props}>test</Button>);
  fireEvent.click(screen.getByText("test"));
  expect(props.onClick).toHaveBeenCalled();
});
