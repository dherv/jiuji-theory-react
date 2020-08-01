
import React from "react";
import FormBlock from "../components/FormBlock";
import { action } from "@storybook/addon-actions";
import { FormBlockProps as propsData } from "../samples/FormBlock.sample";

export default {
  component: FormBlock,
  title: "FormBlock",
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default = () => <FormBlock  {...propsData}  {...actionsData}/>;
    