import React, { FC } from 'react';
import PageCreateEdit from '../pages/PageCreateEdit';
import { PageCreateEditProps as propsData } from '../samples/PageCreateEdit.sample';

export default {
  component: PageCreateEdit,
  title: 'PageCreateEdit',
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default: FC = () => (
  <PageCreateEdit {...propsData} {...actionsData} />
);
