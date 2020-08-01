
import React from "react";
import SearchVideos from "../components/SearchVideos";
import { action } from "@storybook/addon-actions";
import { SearchVideosProps as propsData } from "../samples/SearchVideos.sample";

export default {
  component: SearchVideos,
  title: "SearchVideos",
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default = () => <SearchVideos  {...propsData}  {...actionsData}/>;
    