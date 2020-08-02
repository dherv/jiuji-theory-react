import React, { FC } from 'react';
import TechniqueSteps from '../components/TechniqueSteps';
import { TechniqueStepsProps as propsData } from '../samples/TechniqueSteps.sample';

export default {
  component: TechniqueSteps,
  title: 'TechniqueSteps',
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default: FC = () => (
  <TechniqueSteps {...propsData} {...actionsData} />
);
