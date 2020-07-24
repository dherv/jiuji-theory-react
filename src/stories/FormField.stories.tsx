import React from "react";
import FormField from "../components/FormField";
import { action } from "@storybook/addon-actions";

export default {
  component: FormField,
  title: "FormField",
  excludeStories: /.*Data$/,
};

const actionsData = {
  onChange: action("onChange"),
};

export const Default = () => <FormField {...actionsData} />;
