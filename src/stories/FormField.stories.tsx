import React from "react";
import FormField from "../components/FormField";
import { action } from "@storybook/addon-actions";
import withFormik from "storybook-formik";

export default {
  component: FormField,
  title: "FormField",
  excludeStories: /.*Data$/,
  decorators: [withFormik],
  parameters: {
    formik: {
      initialValues: {
        name: "",
      },
    },
  },
};

const propsData = {
  id: "name",
  name: "name",
  placeholder: "name",
};

export const Default = () => <FormField {...propsData} />;
