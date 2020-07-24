import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Label from "../components/Label";

test("should display a label with the text", () => {
  render(<Label>test</Label>);
  expect(screen.getByText("test")).toBeInTheDocument();
});

test("should render the label correctly", () => {
  const { asFragment } = render(<Label>test</Label>);
  expect(asFragment()).toMatchSnapshot();
});
