import 'jest-styled-components';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { PageTemplateProps as props } from '../samples/PageTemplate.sample';
import PageTemplate from '../templates/PageTemplate';

test("should render PageTemplate", () => {
  render(<PageTemplate {...props} />);
});

test("should render a Header", () => {
  render(<PageTemplate {...props} />);
  expect(screen.getByRole("banner")).toBeInTheDocument();
});

test("should render a HeaderNav", () => {
  render(<PageTemplate {...props} />);
  expect(screen.getByRole("navigation")).toBeInTheDocument();
});

test("should render a main tag", () => {
  render(<PageTemplate {...props} />);
  expect(screen.getByRole("main")).toBeInTheDocument();
});

test("should render a footer tag", () => {
  render(<PageTemplate {...props} />);
  expect(screen.getByRole("contentinfo")).toBeInTheDocument();
});
