
import React from "react";
import AuthLogin from "../components/AuthLogin";
import { action } from "@storybook/addon-actions";
import { AuthLoginProps as propsData } from "../samples/AuthLogin.sample";

export default {
  component: AuthLogin,
  title: "AuthLogin",
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default = () => <AuthLogin  {...propsData}  {...actionsData}/>;
    