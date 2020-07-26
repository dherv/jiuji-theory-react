import React from 'react';
import { action } from '@storybook/addon-actions';
import { PageTemplateProps as propsData } from '../samples/PageTemplate.sample';
import PageTemplate from '../templates/PageTemplate';

export default {
  component: PageTemplate,
  title: "PageTemplate",
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default = () => <PageTemplate {...propsData} {...actionsData} />;
