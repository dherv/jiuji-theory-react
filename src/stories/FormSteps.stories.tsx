import React from "react";
import FormSteps from "../components/FormSteps";
import { action } from "@storybook/addon-actions";
import withFormik from "storybook-formik";
import { Formik, Form } from "formik";

export default {
  component: FormSteps,
  title: "FormSteps",
  excludeStories: /.*Data$/,
  decorators: [withFormik],
  parameters: {
    formik: {
      initialValues: {
        steps: [{ name: "step 1" }],
      },
    },
  },
};

const actionsData = {
  onSubmit: action("onSubmit"),
};

export const Default = () => (
  <Formik initialValues={{ steps: [{ name: "step 1" }] }} {...actionsData}>
    {({ values }) => (
      <Form>
        <FormSteps values={values} />
      </Form>
    )}
  </Formik>
);
