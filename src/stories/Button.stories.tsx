import React, { FC } from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';
import { themeBlueLight } from '../styled/themes';

export default {
  component: Button,
  title: 'Button',
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onClick: action('onClick'),
};

export const Default: FC = () => <Button {...actionsData}>Theme</Button>;
export const Light: FC = () => (
  <Button theme={themeBlueLight} {...actionsData}>
    Theme
  </Button>
);
