
import React from "react";
import AuthRegister from "../components/AuthRegister";
import { action } from "@storybook/addon-actions";
import { AuthRegisterProps as propsData } from "../samples/AuthRegister.sample";

export default {
  component: AuthRegister,
  title: "AuthRegister",
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default = () => <AuthRegister  {...propsData}  {...actionsData}/>;
    