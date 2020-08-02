import React, { FC } from 'react';
import TechniqueButtons from '../components/TechniqueButtons';
import { TechniqueButtonsProps as propsData } from '../samples/TechniqueButtons.sample';

export default {
  component: TechniqueButtons,
  title: 'TechniqueButtons',
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default: FC = () => (
  <TechniqueButtons {...propsData} {...actionsData} />
);
