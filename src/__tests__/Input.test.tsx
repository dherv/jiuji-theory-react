import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "../components/Input";

const props = {
  onChange: jest.fn(),
  placeholder: "test",
};

test("should display an Input with a placeholder", () => {
  render(<Input {...props} />);
  expect(screen.getByPlaceholderText("test")).toBeInTheDocument();
});

test("should call onChange when user type in the input", () => {
  render(<Input {...props} />);
  fireEvent.change(screen.getByPlaceholderText("test"), {
    target: { value: "23" },
  });
  expect(props.onChange).toHaveBeenCalled();
});

test("should render the Input correctly", () => {
  const { asFragment } = render(<Input {...props} />);
  expect(asFragment()).toMatchSnapshot();
});
