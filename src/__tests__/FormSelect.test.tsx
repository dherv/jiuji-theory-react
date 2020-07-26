import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FormSelect from "../components/FormSelect";
import { FormSelectProps as props } from "../samples/FormSelect.sample";
import { Formik, Form } from "formik";
import "jest-styled-components";

test("should render FormSelect", () => {
  render(
    <Formik initialValues={{ name: "" }} onSubmit={jest.fn()}>
      {({ values }) => (
        <Form>
          <FormSelect {...props} />
        </Form>
      )}
    </Formik>
  );
  expect(screen.getByLabelText("name")).toBeInTheDocument();
});

test("should render FormSelect options", () => {
  render(
    <Formik initialValues={{ name: "" }} onSubmit={jest.fn()}>
      {({ values }) => (
        <Form>
          <FormSelect {...props} />
        </Form>
      )}
    </Formik>
  );
  expect(screen.getByText("open guard")).toBeInTheDocument();
  expect(screen.getByText("half guard")).toBeInTheDocument();
});
