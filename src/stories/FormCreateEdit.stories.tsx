import React from "react";
import FormCreateEdit from "../components/FormCreateEdit";

export default {
  component: FormCreateEdit,
  title: "FormCreateEdit",
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default = () => <FormCreateEdit {...actionsData} />;
