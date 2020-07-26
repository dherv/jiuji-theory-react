import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FormField from "../components/FormField";
import { Formik, Form } from "formik";

const props = {
  onChange: jest.fn(),
  placeholder: "test",
};

test("should display an FormField with a placeholder", () => {
  render(
    <Formik initialValues={{ name: "" }} onSubmit={jest.fn()}>
      <Form>
        <FormField {...props} />
      </Form>
    </Formik>
  );
  expect(screen.getByPlaceholderText("test")).toBeInTheDocument();
});

test("should call onChange when user type in the FormField", () => {
  render(
    <Formik initialValues={{ name: "" }} onSubmit={jest.fn()}>
      <Form>
        <FormField {...props} />
      </Form>
    </Formik>
  );
  fireEvent.change(screen.getByPlaceholderText("test"), {
    target: { value: "23" },
  });
  expect(props.onChange).toHaveBeenCalled();
});

test("should render the FormField correctly", () => {
  const { asFragment } = render(
    <Formik initialValues={{ name: "" }} onSubmit={jest.fn()}>
      <Form>
        <FormField {...props} />
      </Form>
    </Formik>
  );
  expect(asFragment()).toMatchSnapshot();
});
