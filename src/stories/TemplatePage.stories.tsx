import React, { FC } from 'react';
import { TemplatePageProps as propsData } from '../samples/TemplatePage.sample';
import TemplatePage from '../templates/TemplatePage';

export default {
  component: TemplatePage,
  title: 'TemplatePage',
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default: FC = () => (
  <TemplatePage {...propsData} {...actionsData} />
);
