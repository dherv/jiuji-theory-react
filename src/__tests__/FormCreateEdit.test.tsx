import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import FormCreateEdit from "../components/FormCreateEdit";
import { FormCreateEditProps as props } from "../samples/FormCreateEdit.sample";
import "jest-styled-components";

test("should render FormCreateEdit", () => {
  render(<FormCreateEdit {...props} />);
});

test("should render a text input for name", () => {
  render(<FormCreateEdit {...props} />);
  expect(screen.getByLabelText("name")).toBeInTheDocument();
});
test("should render a radio input for teacher", () => {
  render(<FormCreateEdit {...props} />);
  expect(screen.getByLabelText("teacher"));

  // radio inputs are displayed correctly
  expect(screen.getByLabelText("X")).toBeInTheDocument();
  expect(screen.getByLabelText("Y")).toBeInTheDocument();
});

test("should render a radio input for position", () => {
  render(<FormCreateEdit {...props} />);
  expect(screen.getByLabelText("type"));
  // radio inputs are displayed correctly
  expect(screen.getByLabelText("offensive")).toBeInTheDocument();
  expect(screen.getByLabelText("defensive")).toBeInTheDocument();
});
test("should render a select input for position", () => {
  render(<FormCreateEdit {...props} />);
  expect(screen.getByLabelText("position")).toBeInTheDocument();
  // check options are displayed
  expect(screen.getByText("open guard")).toBeInTheDocument();
  expect(screen.getByText("half guard")).toBeInTheDocument();
});
test("should render a select input for technique", () => {
  render(<FormCreateEdit {...props} />);
  expect(screen.getByLabelText("technique")).toBeInTheDocument();
  // check options are displayed
  expect(screen.getByText("triangle")).toBeInTheDocument();
  expect(screen.getByText("kimura")).toBeInTheDocument();
});
test("should display a step on click +, enter the input correctly and delete it on click x", async () => {
  render(<FormCreateEdit {...props} />);

  fireEvent.click(screen.getByText("+"));
  await waitFor(() => {
    expect(screen.getAllByPlaceholderText("enter a step")).toHaveLength(1);
  });

  fireEvent.input(screen.getByPlaceholderText("enter a step"), {
    target: { value: "step 1" },
  });
  await waitFor(() => {
    expect(screen.queryAllByDisplayValue("step 1")).toHaveLength(1);
  });

  fireEvent.click(screen.getByText("x"));
  await waitFor(() => {
    expect(screen.queryByPlaceholderText("enter a step")).toBeNull();
  });
});

test("should clear the form on click cancel", async () => {
  render(<FormCreateEdit {...props} />);
  fireEvent.click(screen.getByText("+"));
  fireEvent.input(screen.getByPlaceholderText("enter a step"), {
    target: { value: "step 1" },
  });
  fireEvent.input(screen.getByPlaceholderText("name"), {
    target: { value: "name" },
  });
  fireEvent.click(screen.getByText("defensive"));
  fireEvent.click(screen.getByText("Y"));
  fireEvent.click(screen.getByText("cancel"));
  await waitFor(() => {
    expect(screen.queryByDisplayValue("name")).toBeNull();
    expect(screen.queryByDisplayValue("step 1")).toBeNull();
    expect(screen.getByText("Y").parentNode).toHaveStyleRule(
      "background-color",
      "#fff"
    );
    expect(screen.getByText("defensive").parentNode).toHaveStyleRule(
      "background-color",
      "#fff"
    );
  });
});
