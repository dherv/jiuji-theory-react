import React from "react";
import FormInput from "../components/FormInput";
import { action } from "@storybook/addon-actions";

export default {
  component: FormInput,
  title: "FormInput",
  excludeStories: /.*Data$/,
};

const propsData = {
  label: "label",
};
const actionsData = {};

export const Default = () => <FormInput {...propsData} {...actionsData} />;
