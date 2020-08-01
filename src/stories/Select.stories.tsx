
import React from "react";
import Select from "../components/Select";
import { action } from "@storybook/addon-actions";
import { SelectProps as propsData } from "../samples/Select.sample";

export default {
  component: Select,
  title: "Select",
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default = () => <Select  {...propsData}  {...actionsData}/>;
    