import React from "react";
import Label from "../components/Label";

export default {
  component: Label,
  title: "Label",
  excludeStories: /.*Data$/,
};

export const Default = () => <Label>Label</Label>;
