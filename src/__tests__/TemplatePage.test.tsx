import 'jest-styled-components';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { TemplatePageProps as props } from '../samples/TemplatePage.sample';
import TemplatePage from '../templates/TemplatePage';

test("should render TemplatePage", () => {
  render(<TemplatePage {...props} />);
});

test("should render a Header", () => {
  render(<TemplatePage {...props} />);
  expect(screen.getByRole("banner")).toBeInTheDocument();
});

test("should render a HeaderNav", () => {
  render(<TemplatePage {...props} />);
  expect(screen.getByRole("navigation")).toBeInTheDocument();
});

test("should render a main tag", () => {
  render(<TemplatePage {...props} />);
  expect(screen.getByRole("main")).toBeInTheDocument();
});

test("should render a footer tag", () => {
  render(<TemplatePage {...props} />);
  expect(screen.getByRole("contentinfo")).toBeInTheDocument();
});
