
import React from "react";
import HeaderNav from "../components/HeaderNav";
import { action } from "@storybook/addon-actions";
import { HeaderNavProps as propsData } from "../samples/HeaderNav.sample";

export default {
  component: HeaderNav,
  title: "HeaderNav",
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default = () => <HeaderNav  {...propsData}  {...actionsData}/>;
    