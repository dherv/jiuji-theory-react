import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FormField from "../components/FormField";

const props = {
  onChange: jest.fn(),
  placeholder: "test",
};

test("should display an FormField with a placeholder", () => {
  render(<FormField {...props} />);
  expect(screen.getByPlaceholderText("test")).toBeInTheDocument();
});

test("should call onChange when user type in the FormField", () => {
  render(<FormField {...props} />);
  fireEvent.change(screen.getByPlaceholderText("test"), {
    target: { value: "23" },
  });
  expect(props.onChange).toHaveBeenCalled();
});

test("should render the FormField correctly", () => {
  const { asFragment } = render(<FormField {...props} />);
  expect(asFragment()).toMatchSnapshot();
});
