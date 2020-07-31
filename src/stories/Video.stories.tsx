
import React from "react";
import Video from "../components/Video";
import { action } from "@storybook/addon-actions";
import { VideoProps as propsData } from "../samples/Video.sample";

export default {
  component: Video,
  title: "Video",
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default = () => <Video  {...propsData}  {...actionsData}/>;
    