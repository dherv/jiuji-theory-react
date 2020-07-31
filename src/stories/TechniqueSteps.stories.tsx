
import React from "react";
import TechniqueSteps from "../components/TechniqueSteps";
import { action } from "@storybook/addon-actions";
import { TechniqueStepsProps as propsData } from "../samples/TechniqueSteps.sample";

export default {
  component: TechniqueSteps,
  title: "TechniqueSteps",
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default = () => <TechniqueSteps  {...propsData}  {...actionsData}/>;
    