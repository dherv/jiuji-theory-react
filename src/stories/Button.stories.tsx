import React from "react";
import Button from "../components/Button";
import { themeBlueLight } from "../styled/themes";
import { action } from "@storybook/addon-actions";

export default {
  component: Button,
  title: "Button",
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onClick: action("onClick"),
};

export const Default = () => <Button {...actionsData}>Theme</Button>;
export const Light = () => (
  <Button theme={themeBlueLight} {...actionsData}>
    Theme
  </Button>
);
