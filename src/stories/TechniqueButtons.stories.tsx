import React from 'react';
import { action } from '@storybook/addon-actions';
import TechniqueButtons from '../components/TechniqueButtons';
import { TechniqueButtonsProps as propsData } from '../samples/TechniqueButtons.sample';

export default {
  component: TechniqueButtons,
  title: "TechniqueButtons",
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default = () => (
  <TechniqueButtons {...propsData} {...actionsData} />
);
