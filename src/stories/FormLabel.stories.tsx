import React, { FC } from 'react';
import FormLabel from '../components/FormLabel';

export default {
  component: FormLabel,
  title: 'FormLabel',
  excludeStories: /.*Data$/,
};

export const Default: FC = () => (
  <>
    <FormLabel htmlFor="label">label</FormLabel>
    <input id="label" />
  </>
);
