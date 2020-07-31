
import React from "react";
import VideoList from "../components/VideoList";
import { action } from "@storybook/addon-actions";
import { VideoListProps as propsData } from "../samples/VideoList.sample";

export default {
  component: VideoList,
  title: "VideoList",
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default = () => <VideoList  {...propsData}  {...actionsData}/>;
    