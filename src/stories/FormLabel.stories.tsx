import React from 'react';
import FormLabel from '../components/FormLabel';

export default {
  component: FormLabel,
  title: "FormLabel",
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default = () => (
  <>
    <FormLabel htmlFor="label">label</FormLabel>
    <input id="label"></input>
  </>
);
