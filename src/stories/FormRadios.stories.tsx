import React from "react";
import FormRadios from "../components/FormRadios";
import { action } from "@storybook/addon-actions";
import withFormik from "storybook-formik";
import { FormRadiosProps as propsData } from "../samples/FormRadios.sample";

export default {
  component: FormRadios,
  title: "FormRadios",
  excludeStories: /.*Data$/,
  decorators: [withFormik],
  parameters: {
    formik: {
      initialValues: {
        radio: "checked",
      },
    },
  },
};

const actionsData = {};

export const Checked = () => <FormRadios {...propsData} selected="checked" />;
export const UnChecked = () => (
  <FormRadios {...propsData} selected="unchecked" />
);
