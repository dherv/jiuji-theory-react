import React from 'react';
import { action } from '@storybook/addon-actions';
import Header from '../components/Header';
import { HeaderProps as propsData } from '../samples/Header.sample';

export default {
  component: Header,
  title: "Header",
  excludeStories: /.*Data$/,
};

const actionsData = {};

export const Default = () => <Header  {...propsData}  {...actionsData} />;
