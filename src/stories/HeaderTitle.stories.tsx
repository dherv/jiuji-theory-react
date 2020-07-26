
import React from "react";
import HeaderTitle from "../components/HeaderTitle";
import { action } from "@storybook/addon-actions";
import { HeaderTitleProps as propsData } from "../samples/HeaderTitle.sample";

export default {
  component: HeaderTitle,
  title: "HeaderTitle",
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default = () => <HeaderTitle  {...propsData}  {...actionsData}/>;
    