import React from "react";
import FormCreateEdit from "../components/FormCreateEdit";
import { FormCreateEditProps as propsData } from "../samples/FormCreateEdit.sample";

export default {
  component: FormCreateEdit,
  title: "FormCreateEdit",
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default = () => <FormCreateEdit {...actionsData} {...propsData} />;
