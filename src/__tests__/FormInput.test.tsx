import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FormInput from "../components/FormInput";

const props = {
  label: "test",
};

test("should render FormInput label", () => {
  render(<FormInput {...props} />);
  expect(screen.getByText("test")).toBeInTheDocument();
});

test("should render FormInput input", () => {
  render(<FormInput {...props} />);
  expect(screen.getByLabelText("test")).toBeInTheDocument();
});
