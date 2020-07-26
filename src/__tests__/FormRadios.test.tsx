import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import FormRadios from "../components/FormRadios";
import { FormRadiosProps as props } from "../samples/FormRadios.sample";
import { Formik, Form } from "formik";
import "jest-styled-components";

test("should call onChange when clicked", async () => {
  render(
    <Formik initialValues={{ name: "" }} onSubmit={jest.fn()}>
      {({ values }) => (
        <Form>
          <FormRadios {...props} selected={values.name} />
        </Form>
      )}
    </Formik>
  );
  expect(screen.getByText("unchecked").parentElement).toHaveStyleRule(
    "background-color",
    "#fff"
  );

  fireEvent.click(screen.getByText("unchecked"));

  await waitFor(() => {
    expect(screen.getByText("unchecked").parentElement).toHaveStyleRule(
      "background-color",
      "rgba(18,70,246,0.10)"
    );
  });
});

test("should render a checked radio button", () => {
  const { asFragment } = render(
    <Formik initialValues={{ name: "" }} onSubmit={jest.fn()}>
      <Form>
        <FormRadios {...props} selected="checked" />
      </Form>
    </Formik>
  );
  expect(asFragment()).toMatchSnapshot();
});

test("should render an unchecked radio button", () => {
  const { asFragment } = render(
    <Formik initialValues={{ name: "" }} onSubmit={jest.fn()}>
      <Form>
        <FormRadios {...props} selected="unchecked" />
      </Form>
    </Formik>
  );
  expect(asFragment()).toMatchSnapshot();
});
