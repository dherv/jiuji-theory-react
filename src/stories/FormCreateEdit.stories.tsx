import React from "react";
import FormCreateEdit from "../components/FormCreateEdit";
import { action } from "@storybook/addon-actions";

export default {
  component: FormCreateEdit,
  title: "FormCreateEdit",
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default = () => <FormCreateEdit {...actionsData} />;
