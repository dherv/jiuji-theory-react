import React from 'react';
import { action } from '@storybook/addon-actions';
import Technique from '../components/Technique';
import { TechniqueProps as propsData } from '../samples/Technique.sample';

export default {
  component: Technique,
  title: "Technique",
  excludeStories: /.*Data$/,
};

const actionsData = {
  onClick: action("onClick"),
};

export const Default = () => (
  <Technique {...propsData} {...actionsData} selected={false} />
);
export const Selected = () => <Technique {...propsData} {...actionsData} />;
