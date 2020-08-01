
import React from "react";
import SearchVideoList from "../components/SearchVideoList";
import { action } from "@storybook/addon-actions";
import { SearchVideoListProps as propsData } from "../samples/SearchVideoList.sample";

export default {
  component: SearchVideoList,
  title: "SearchVideoList",
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default = () => <SearchVideoList  {...propsData}  {...actionsData}/>;
    