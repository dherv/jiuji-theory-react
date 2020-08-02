import React, { FC } from 'react';
import FormBlock from '../components/FormBlock';
import { FormBlockProps as propsData } from '../samples/FormBlock.sample';

export default {
  component: FormBlock,
  title: 'FormBlock',
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default: FC = () => <FormBlock {...propsData} {...actionsData} />;
