
import React from "react";
import VideoContent from "../components/VideoContent";
import { action } from "@storybook/addon-actions";
import { VideoContentProps as propsData } from "../samples/VideoContent.sample";

export default {
  component: VideoContent,
  title: "VideoContent",
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default = () => <VideoContent  {...propsData}  {...actionsData}/>;
    