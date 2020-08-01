
import React from "react";
import Auth from "../components/Auth";
import { action } from "@storybook/addon-actions";
import { AuthProps as propsData } from "../samples/Auth.sample";

export default {
  component: Auth,
  title: "Auth",
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default = () => <Auth  {...propsData}  {...actionsData}/>;
    