import React from "react";
import Input from "../components/Input";
import { action } from "@storybook/addon-actions";

export default {
  component: Input,
  title: "Input",
  excludeStories: /.*Data$/,
};

const actionsData = {
  onChange: action("onChange"),
};

export const Default = () => <Input {...actionsData} />;
