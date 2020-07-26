import React from "react";
import FormSelect from "../components/FormSelect";
import { action } from "@storybook/addon-actions";
import { FormSelectProps as propsData } from "../samples/FormSelect.sample";
import withFormik from "storybook-formik";

export default {
  component: FormSelect,
  title: "FormSelect",
  excludeStories: /.*Data$/,
  decorators: [withFormik],
  parameters: {
    formik: {
      initialValues: {
        name: "open guard",
      },
    },
  },
};

const actionsData = {};

export const Default = () => <FormSelect {...propsData} {...actionsData} />;
