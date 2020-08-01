
import React from "react";
import FormActions from "../components/FormActions";
import { action } from "@storybook/addon-actions";
import { FormActionsProps as propsData } from "../samples/FormActions.sample";

export default {
  component: FormActions,
  title: "FormActions",
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default = () => <FormActions  {...propsData}  {...actionsData}/>;
    