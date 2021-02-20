import React, { FC } from 'react';
import { action } from '@storybook/addon-actions';
import TechniqueButtons from '../components/TechniqueButtons';
import {
  TechniqueButtonsProps as propsData,
} from '../samples/TechniqueButtons.sample';

export default {
  component: TechniqueButtons,
  title: 'TechniqueButtons',
  excludeStories: /.*Data$/,
};

const actionsData = {
  onClick: action('onClick'),
};

export const Default: FC = () => (
  <TechniqueButtons {...propsData} {...actionsData} />
);
