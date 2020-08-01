
import React from "react";
import AccountForm from "../components/AccountForm";
import { action } from "@storybook/addon-actions";
import { AccountFormProps as propsData } from "../samples/AccountForm.sample";

export default {
  component: AccountForm,
  title: "AccountForm",
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default = () => <AccountForm  {...propsData}  {...actionsData}/>;
    