import React from 'react';
import { action } from '@storybook/addon-actions';
import { TemplatePageProps as propsData } from '../samples/TemplatePage.sample';
import TemplatePage from '../templates/TemplatePage';

export default {
  component: TemplatePage,
  title: "TemplatePage",
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default = () => <TemplatePage {...propsData} {...actionsData} />;
